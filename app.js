// Pi Radio v2.0 - Moteur Applicatif & Audio Haute Fiabilité
// Gère 5 Onglets, 8 Langues, Double Flux de Secours, Reconnexion Watchdog, Sleep Timer & Pi SDK

document.addEventListener("DOMContentLoaded", () => {
  // --- ÉTAT GLOBAL DE L'APPLICATION ---
  const state = {
    lang: localStorage.getItem("piradio_lang") || "fr",
    activeTab: "home", // home, explore, culture, sports, settings
    activeContinent: "all",
    searchQuery: "",
    stations: [...CURATED_STATIONS],
    apiStations: [],
    currentStation: null,
    isFallback: false,
    isPlaying: false,
    retryCount: 0,
    retryTimeout: null,
    watchdogInterval: null,
    sleepTimerSeconds: 0,
    sleepTimerInterval: null,
    dataSaver: localStorage.getItem("piradio_datasaver") === "true",
    favorites: JSON.parse(localStorage.getItem("piradio_favs") || "[]"),
    pioneerUser: JSON.parse(localStorage.getItem("piradio_user") || "null"),
    audio: new Audio(),
    hls: null
  };

  // --- SÉLECTIONS DU DOM ---
  const navTabs = document.querySelectorAll(".nav-tab-item");
  const mainContentArea = document.getElementById("mainContentArea");
  const settingsPanel = document.getElementById("settingsPanel");
  const stationsGrid = document.getElementById("stationsGrid");
  const sectionTitleText = document.getElementById("sectionTitleText");
  const totalCountEl = document.getElementById("totalCount");
  const searchInput = document.getElementById("searchInput");
  const continentPills = document.getElementById("continentPills");
  const heroSection = document.getElementById("heroSection");
  const searchSection = document.getElementById("searchSection");
  const loadMoreBtn = document.getElementById("loadMoreBtn");
  
  // Lecteur
  const playerThumb = document.getElementById("playerThumb");
  const playerStationTitle = document.getElementById("playerStationTitle");
  const playerStatusText = document.getElementById("playerStatusText");
  const playerStatusIndicator = document.getElementById("playerStatusIndicator");
  const masterPlayBtn = document.getElementById("masterPlayBtn");
  const masterPlayIcon = document.getElementById("masterPlayIcon");
  const volumeSlider = document.getElementById("volumeSlider");
  
  // Auth & Pourboire
  const authBtn = document.getElementById("authBtn");
  const authBtnText = document.getElementById("authBtnText");
  const disconnectBtn = document.getElementById("disconnectBtn");
  const openTipBtn = document.getElementById("openTipBtn");
  const tipModal = document.getElementById("tipModal");
  const closeTipBtn = document.getElementById("closeTipBtn");
  const confirmTipBtn = document.getElementById("confirmTipBtn");

  // Paramètres
  const langSelectSetting = document.getElementById("langSelectSetting");
  const timerButtons = document.querySelectorAll(".timer-btn");
  const timerCountdownBadge = document.getElementById("timerCountdownBadge");
  const dataSaverToggle = document.getElementById("dataSaverToggle");
  const clearCacheBtn = document.getElementById("clearCacheBtn");

  // ============================================================
  // 1. TRADUCTION & GESTION DES 8 LANGUES (i18n)
  // ============================================================
  function applyLanguage(langCode) {
    if (!TRANSLATIONS[langCode]) langCode = "fr";
    state.lang = langCode;
    localStorage.setItem("piradio_lang", langCode);
    
    if (langSelectSetting) langSelectSetting.value = langCode;

    // Support RTL pour l'Arabe
    const isRtl = langCode === "ar";
    document.documentElement.setAttribute("dir", isRtl ? "rtl" : "ltr");
    document.documentElement.lang = langCode;

    const t = TRANSLATIONS[langCode];

    // Traduction de tous les éléments balisés data-i18n
    document.querySelectorAll("[data-i18n]").forEach(el => {
      const key = el.getAttribute("data-i18n");
      if (t[key]) el.textContent = t[key];
    });

    if (searchInput) searchInput.placeholder = t.searchPlaceholder;

    updatePlayerStatusUI();
    updateAuthUI();
    renderView();
  }

  // ============================================================
  // 2. GESTION DES VUES & MENUS DE NAVIGATION
  // ============================================================
  navTabs.forEach(tab => {
    tab.addEventListener("click", () => {
      navTabs.forEach(t => t.classList.remove("active"));
      tab.classList.add("active");
      state.activeTab = tab.getAttribute("data-tab");
      state.searchQuery = "";
      if (searchInput) searchInput.value = "";
      renderView();
    });
  });

  function renderView() {
    const t = TRANSLATIONS[state.lang];

    if (state.activeTab === "settings") {
      heroSection.style.display = "none";
      searchSection.style.display = "none";
      mainContentArea.style.display = "none";
      settingsPanel.classList.add("active");
      return;
    }

    settingsPanel.classList.remove("active");
    mainContentArea.style.display = "block";
    heroSection.style.display = "block";
    searchSection.style.display = "block";

    // Gestion de l'affichage des filtres par continent (uniquement dans Explorer)
    if (state.activeTab === "explore") {
      continentPills.style.display = "flex";
      sectionTitleText.textContent = t.navExplore;
    } else {
      continentPills.style.display = "none";
      if (state.activeTab === "home") sectionTitleText.textContent = t.featuredNews;
      if (state.activeTab === "culture") sectionTitleText.textContent = `${t.catQuran} • ${t.catCulture}`;
      if (state.activeTab === "sports") sectionTitleText.textContent = `${t.catSports} • ${t.catComedy}`;
    }

    renderStations();
  }

  // ============================================================
  // 3. FILTRAGE ET RENDU DES STATIONS
  // ============================================================
  function getFilteredList() {
    let list = [...state.stations, ...state.apiStations];

    if (state.activeTab === "home") {
      list = list.filter(st => st.featured || state.favorites.includes(st.id));
    } else if (state.activeTab === "culture") {
      list = list.filter(st => st.category === "quran" || st.category === "culture");
    } else if (state.activeTab === "sports") {
      list = list.filter(st => st.category === "sports" || st.category === "comedy");
    } else if (state.activeTab === "explore") {
      if (state.activeContinent !== "all") {
        list = list.filter(st => st.continent === state.activeContinent);
      }
    }

    if (state.searchQuery.trim() !== "") {
      const q = state.searchQuery.toLowerCase();
      list = list.filter(st =>
        st.name.toLowerCase().includes(q) ||
        st.country.toLowerCase().includes(q) ||
        st.language.toLowerCase().includes(q) ||
        st.genre.toLowerCase().includes(q)
      );
    }

    return list;
  }

  function renderStations() {
    const list = getFilteredList();
    stationsGrid.innerHTML = "";
    const t = TRANSLATIONS[state.lang];

    totalCountEl.textContent = `${list.length} ${t.onlineCount}`;

    if (list.length === 0) {
      stationsGrid.innerHTML = `
        <div style="grid-column: 1/-1; text-align: center; padding: 50px 20px; color: var(--text-muted);">
          <div style="font-size: 48px; margin-bottom: 12px;">📻</div>
          <p style="font-size: 1.1rem;">${t.noResults}</p>
        </div>
      `;
      return;
    }

    list.forEach(st => {
      const isCurrent = state.currentStation && state.currentStation.id === st.id;
      const isCardPlaying = isCurrent && state.isPlaying;

      const card = document.createElement("div");
      card.className = `station-card ${isCardPlaying ? "playing" : ""}`;
      card.innerHTML = `
        <img class="station-logo" src="${st.logo}" alt="${st.name}" onerror="this.src='https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=100'"/>
        <div class="station-info">
          <div class="station-name">${st.name}</div>
          <div class="station-origin">
            <span>${st.code}</span>
            <span>${st.country}</span>
          </div>
          <div class="station-tag">${st.genre} • ${st.language}</div>
        </div>
        <div class="sound-wave">
          <div class="sound-wave-bar"></div>
          <div class="sound-wave-bar"></div>
          <div class="sound-wave-bar"></div>
          <div class="sound-wave-bar"></div>
        </div>
        <button class="card-play-action" aria-label="Play">
          ${isCardPlaying ? "⏸" : "▶"}
        </button>
      `;

      card.addEventListener("click", () => {
        if (isCurrent) {
          togglePlayback();
        } else {
          startPlayback(st, false);
        }
      });

      stationsGrid.appendChild(card);
    });
  }

  // ============================================================
  // 4. MOTEUR AUDIO DOUBLE-FLUX & WATCHDOG ANTI-COUPURE
  // ============================================================
  function startPlayback(station, useFallback = false) {
    state.currentStation = station;
    state.isFallback = useFallback;
    state.isPlaying = true;
    state.retryCount = 0;

    const streamToLoad = useFallback && station.fallbackUrl ? station.fallbackUrl : station.streamUrl;

    playerStationTitle.textContent = station.name;
    playerThumb.src = station.logo;
    playerThumb.onerror = () => { playerThumb.src = "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=100"; };
    playerStatusText.textContent = TRANSLATIONS[state.lang].buffering;
    playerStatusIndicator.className = "player-status-indicator buffering";
    masterPlayIcon.textContent = "⏸";

    if (state.hls) {
      state.hls.destroy();
      state.hls = null;
    }

    const isHls = streamToLoad.includes(".m3u8");

    if (isHls && window.Hls && Hls.isSupported()) {
      state.hls = new Hls({ enableWorker: true, lowLatencyMode: true });
      state.hls.loadSource(streamToLoad);
      state.hls.attachMedia(state.audio);
      state.hls.on(Hls.Events.MANIFEST_PARSED, () => {
        state.audio.play().catch(triggerFallbackOrRetry);
      });
      state.hls.on(Hls.Events.ERROR, (event, data) => {
        if (data.fatal) triggerFallbackOrRetry();
      });
    } else {
      state.audio.src = streamToLoad;
      state.audio.load();
      state.audio.play().catch(triggerFallbackOrRetry);
    }

    startWatchdog();
    renderStations();
  }

  function togglePlayback() {
    if (!state.currentStation) {
      const list = getFilteredList();
      if (list.length > 0) startPlayback(list[0], false);
      return;
    }

    if (state.isPlaying) {
      state.audio.pause();
      state.isPlaying = false;
      masterPlayIcon.textContent = "▶";
      updatePlayerStatusUI();
    } else {
      state.audio.play().then(() => {
        state.isPlaying = true;
        masterPlayIcon.textContent = "⏸";
        updatePlayerStatusUI();
      }).catch(triggerFallbackOrRetry);
    }
    renderStations();
  }

  function triggerFallbackOrRetry() {
    console.warn("Échec du flux actuel:", state.currentStation.name);

    // Si nous n'étions pas encore sur le miroir et qu'un miroir existe, basculer immédiatement
    if (!state.isFallback && state.currentStation && state.currentStation.fallbackUrl) {
      console.log("Basculement automatique sur le flux miroir de secours...");
      playerStatusText.textContent = TRANSLATIONS[state.lang].streamError;
      startPlayback(state.currentStation, true);
      return;
    }

    // Sinon, tentative de reconnexion automatique avec backoff
    if (state.retryCount < 3) {
      state.retryCount++;
      playerStatusText.textContent = `${TRANSLATIONS[state.lang].reconnecting} (${state.retryCount}/3)`;
      playerStatusIndicator.className = "player-status-indicator buffering";
      
      clearTimeout(state.retryTimeout);
      state.retryTimeout = setTimeout(() => {
        startPlayback(state.currentStation, state.isFallback);
      }, 1500 * state.retryCount);
    } else {
      state.isPlaying = false;
      masterPlayIcon.textContent = "▶";
      playerStatusText.textContent = "⚠️ " + TRANSLATIONS[state.lang].streamError;
      playerStatusIndicator.className = "player-status-indicator stopped";
      renderStations();
    }
  }

  function startWatchdog() {
    clearInterval(state.watchdogInterval);
    state.watchdogInterval = setInterval(() => {
      if (state.isPlaying && state.audio.paused && !state.audio.ended && state.audio.readyState > 0) {
        console.log("Watchdog: Flux interrompu sans action utilisateur, reprise...");
        state.audio.play().catch(() => {});
      }
    }, 4000);
  }

  state.audio.addEventListener("playing", () => {
    state.isPlaying = true;
    state.retryCount = 0;
    masterPlayIcon.textContent = "⏸";
    updatePlayerStatusUI();
    renderStations();
  });

  state.audio.addEventListener("pause", () => {
    if (!state.isPlaying) {
      masterPlayIcon.textContent = "▶";
      updatePlayerStatusUI();
      renderStations();
    }
  });

  state.audio.addEventListener("waiting", () => {
    playerStatusText.textContent = TRANSLATIONS[state.lang].buffering;
    playerStatusIndicator.className = "player-status-indicator buffering";
  });

  function updatePlayerStatusUI() {
    const t = TRANSLATIONS[state.lang];
    if (!state.currentStation) {
      playerStatusText.textContent = t.selectStation;
      playerStatusIndicator.className = "player-status-indicator stopped";
    } else if (state.isPlaying) {
      playerStatusText.textContent = `${t.nowPlaying} • ${state.currentStation.country}`;
      playerStatusIndicator.className = "player-status-indicator";
    } else {
      playerStatusText.textContent = t.stopped;
      playerStatusIndicator.className = "player-status-indicator stopped";
    }
  }

  // ============================================================
  // 5. MINUTEUR DE SOMMEIL (SLEEP TIMER)
  // ============================================================
  timerButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      timerButtons.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      const minutes = parseInt(btn.getAttribute("data-minutes"), 10);
      setSleepTimer(minutes);
    });
  });

  function setSleepTimer(minutes) {
    clearInterval(state.sleepTimerInterval);
    if (minutes === 0) {
      state.sleepTimerSeconds = 0;
      timerCountdownBadge.textContent = "";
      return;
    }

    state.sleepTimerSeconds = minutes * 60;
    updateTimerBadge();

    state.sleepTimerInterval = setInterval(() => {
      state.sleepTimerSeconds--;
      if (state.sleepTimerSeconds <= 0) {
        clearInterval(state.sleepTimerInterval);
        if (state.isPlaying) togglePlayback();
        timerCountdownBadge.textContent = "";
        timerButtons.forEach(b => b.classList.remove("active"));
        document.querySelector('.timer-btn[data-minutes="0"]').classList.add("active");
      } else {
        updateTimerBadge();
      }
    }, 1000);
  }

  function updateTimerBadge() {
    const mins = Math.floor(state.sleepTimerSeconds / 60);
    const secs = state.sleepTimerSeconds % 60;
    timerCountdownBadge.textContent = `⏱️ ${mins}m ${secs < 10 ? "0" : ""}${secs}s`;
  }

  // ============================================================
  // 6. AUTHENTIFICATION & SESSION PI NETWORK
  // ============================================================
  function updateAuthUI() {
    const t = TRANSLATIONS[state.lang];
    if (state.pioneerUser) {
      authBtn.className = "auth-btn connected";
      authBtnText.textContent = `@${state.pioneerUser.username || "Pioneer"}`;
      disconnectBtn.style.display = "inline-flex";
    } else {
      authBtn.className = "auth-btn disconnected";
      authBtnText.textContent = t.connectPi;
      disconnectBtn.style.display = "none";
    }
  }

  authBtn.addEventListener("click", () => {
    if (state.pioneerUser) return;

    if (window.Pi && window.Pi.authenticate) {
      try {
        window.Pi.init({ version: "2.0", sandbox: false });
        window.Pi.authenticate(["username", "payments"], () => {})
          .then(auth => {
            state.pioneerUser = auth.user;
            localStorage.setItem("piradio_user", JSON.stringify(auth.user));
            updateAuthUI();
          })
          .catch(err => {
            console.log("Connexion simulation :", err);
            simulatePiLogin();
          });
      } catch (e) {
        simulatePiLogin();
      }
    } else {
      simulatePiLogin();
    }
  });

  function simulatePiLogin() {
    const simulatedUser = { username: "PioneerGlobal", uid: "pi_" + Date.now() };
    state.pioneerUser = simulatedUser;
    localStorage.setItem("piradio_user", JSON.stringify(simulatedUser));
    updateAuthUI();
  }

  disconnectBtn.addEventListener("click", () => {
    state.pioneerUser = null;
    localStorage.removeItem("piradio_user");
    updateAuthUI();
  });

  // Pourboire Pi
  openTipBtn.addEventListener("click", () => tipModal.classList.add("active"));
  closeTipBtn.addEventListener("click", () => tipModal.classList.remove("active"));
  tipModal.addEventListener("click", (e) => {
    if (e.target === tipModal) tipModal.classList.remove("active");
  });

  confirmTipBtn.addEventListener("click", () => {
    if (window.Pi && window.Pi.createPayment) {
      window.Pi.createPayment({
        amount: 0.1,
        memo: "Tip for Pi Radio v2.0",
        metadata: { purpose: "tip" }
      }, {
        onReadyForServerApproval: (pid) => console.log("Approval", pid),
        onReadyForServerCompletion: (pid, txid) => {
          alert(`Merci cher Pionnier ! Pourboire de 0.1 π validé (Tx: ${txid})`);
          tipModal.classList.remove("active");
        },
        onCancel: () => {},
        onError: () => alert("Erreur paiement Pi")
      });
    } else {
      alert("Simulation Pi Payment : 0.1 π envoyé avec succès ! Merci pour votre soutien 💜🟢");
      tipModal.classList.remove("active");
    }
  });

  // ============================================================
  // 7. ÉCOUTEURS DIVERS (RECHERCHE, CONTINENTS, VOLUME, CACHE)
  // ============================================================
  masterPlayBtn.addEventListener("click", togglePlayback);

  if (volumeSlider) {
    volumeSlider.addEventListener("input", (e) => {
      state.audio.volume = parseFloat(e.target.value);
    });
  }

  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      state.searchQuery = e.target.value;
      renderStations();
    });
  }

  if (continentPills) {
    continentPills.addEventListener("click", (e) => {
      const btn = e.target.closest(".pill-btn");
      if (!btn) return;
      document.querySelectorAll(".pill-btn").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      state.activeContinent = btn.getAttribute("data-continent");
      renderStations();
    });
  }

  if (langSelectSetting) {
    langSelectSetting.addEventListener("change", (e) => {
      applyLanguage(e.target.value);
    });
  }

  if (dataSaverToggle) {
    dataSaverToggle.checked = state.dataSaver;
    dataSaverToggle.addEventListener("change", (e) => {
      state.dataSaver = e.target.checked;
      localStorage.setItem("piradio_datasaver", state.dataSaver);
    });
  }

  if (clearCacheBtn) {
    clearCacheBtn.addEventListener("click", () => {
      localStorage.clear();
      alert(TRANSLATIONS[state.lang].cacheCleared);
      location.reload();
    });
  }

  if (loadMoreBtn) {
    loadMoreBtn.addEventListener("click", async () => {
      loadMoreBtn.disabled = true;
      loadMoreBtn.textContent = "Recherche en direct...";
      try {
        const results = await searchRadioBrowserAPI(state.searchQuery || "news", "", 24);
        if (results && results.length > 0) {
          const ids = new Set(state.stations.map(s => s.id));
          const fresh = results.filter(s => !ids.has(s.id));
          state.apiStations = [...state.apiStations, ...fresh];
        }
      } catch (err) {
        console.warn("Erreur API:", err);
      } finally {
        loadMoreBtn.disabled = false;
        loadMoreBtn.textContent = TRANSLATIONS[state.lang].loadMore;
        renderStations();
      }
    });
  }

  // --- INITIALISATION AU DÉMARRAGE ---
  applyLanguage(state.lang);
});
