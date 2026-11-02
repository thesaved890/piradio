// Pi Radio v2.1 - Moteur Applicatif & Audio Haute Fiabilité
// 6 Menus (Accueil, Explorer, Actualités, Cultures, Sports & Humour, Paramètres)
// Axe 2 : Recherche Avancée (Fréquences FM, Sélecteur de Pays & Puces directes)

document.addEventListener("DOMContentLoaded", () => {
  // --- ÉTAT GLOBAL DE L'APPLICATION ---
  const state = {
    lang: localStorage.getItem("piradio_lang") || "fr",
    activeTab: "home", // home, explore, news, culture, sports, settings
    activeContinent: "all",
    selectedCountry: "all",
    selectedBand: "all",
    searchQuery: "",
    searchDebounceTimer: null,
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
  const clearSearchBtn = document.getElementById("clearSearchBtn");
  const bandSelect = document.getElementById("bandSelect");
  const countrySelect = document.getElementById("countrySelect");
  const searchApiStatus = document.getElementById("searchApiStatus");
  const searchApiStatusText = document.getElementById("searchApiStatusText");
  const frequencyChips = document.getElementById("frequencyChips");
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

  // Badge officiel avec drapeau national (anti-photos génériques)
  function getFlagFallback(code) {
    return `data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><rect width='100' height='100' rx='16' fill='%23140b27' stroke='%23f3b43f' stroke-width='2'/><text x='50%' y='64%' font-size='44' text-anchor='middle'>${encodeURIComponent(code || '📻')}</text></svg>`;
  }

  // ============================================================
  // AXE 2 : ALIMENTATION DYNAMIQUE DU MENU DÉROULANT DES PAYS
  // ============================================================
  function populateCountryDropdown() {
    if (!countrySelect) return;
    const countriesMap = new Map();
    state.stations.forEach(st => {
      if (st.country && !countriesMap.has(st.country)) {
        countriesMap.set(st.country, st.code || "🌐");
      }
    });

    const sortedCountries = Array.from(countriesMap.entries()).sort((a, b) => a[0].localeCompare(b[0]));
    
    // Garder la première option "Tous les pays"
    countrySelect.innerHTML = `<option value="all" data-i18n="allCountries">🌍 ${TRANSLATIONS[state.lang].allCountries || "Tous les pays"}</option>`;
    
    sortedCountries.forEach(([country, code]) => {
      const opt = document.createElement("option");
      opt.value = country;
      opt.textContent = `${code} ${country}`;
      countrySelect.appendChild(opt);
    });
  }

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

    document.querySelectorAll("[data-i18n]").forEach(el => {
      const key = el.getAttribute("data-i18n");
      if (t[key]) el.textContent = t[key];
    });

    if (searchInput) searchInput.placeholder = t.searchPlaceholder;
    if (countrySelect && countrySelect.options[0]) {
      countrySelect.options[0].textContent = `🌍 ${t.allCountries}`;
    }

    updatePlayerStatusUI();
    updateAuthUI();
    renderView();
  }

  // ============================================================
  // 2. GESTION DES 6 ONGLETS DE NAVIGATION
  // ============================================================
  navTabs.forEach(tab => {
    tab.addEventListener("click", () => {
      navTabs.forEach(t => t.classList.remove("active"));
      tab.classList.add("active");
      state.activeTab = tab.getAttribute("data-tab");
      state.searchQuery = "";
      if (searchInput) {
        searchInput.value = "";
        clearSearchBtn.style.display = "none";
      }
      document.querySelectorAll(".freq-chip").forEach(c => c.classList.remove("active"));
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

    if (state.activeTab === "explore") {
      continentPills.style.display = "flex";
      sectionTitleText.textContent = t.navExplore;
    } else {
      continentPills.style.display = "none";
      if (state.activeTab === "home") sectionTitleText.textContent = t.featuredNews;
      if (state.activeTab === "news") sectionTitleText.textContent = t.catNews;
      if (state.activeTab === "culture") sectionTitleText.textContent = t.catCulture;
      if (state.activeTab === "sports") sectionTitleText.textContent = `${t.catSports} • ${t.catComedy}`;
    }

    renderStations();
  }

  // ============================================================
  // 3. FILTRAGE ET RECHERCHE AVANCÉE (AXE 2 : FM, AM, PAYS, MOT-CLÉ)
  // ============================================================
  function getFilteredList() {
    let list = [...state.stations, ...state.apiStations];

    // 1. Filtrage par onglet actif
    if (state.activeTab === "home") {
      list = list.filter(st => st.featured || state.favorites.includes(st.id));
    } else if (state.activeTab === "news") {
      list = list.filter(st => st.category === "news");
    } else if (state.activeTab === "culture") {
      list = list.filter(st => st.category === "culture" || st.category === "quran");
    } else if (state.activeTab === "sports") {
      list = list.filter(st => st.category === "sports" || st.category === "comedy");
    } else if (state.activeTab === "explore") {
      if (state.activeContinent !== "all") {
        list = list.filter(st => st.continent === state.activeContinent);
      }
    }

    // 2. Filtrage par Bande d'ondes (FM, AM, WEB)
    if (state.selectedBand !== "all") {
      list = list.filter(st => {
        const band = (st.band || "").toUpperCase();
        const freqNum = st.frequency ? parseFloat(st.frequency) : null;
        if (state.selectedBand === "FM") {
          return band === "FM" || (freqNum !== null && freqNum >= 87 && freqNum <= 108);
        }
        if (state.selectedBand === "AM") {
          return band === "AM" || (freqNum !== null && (freqNum < 87 || freqNum > 108));
        }
        if (state.selectedBand === "WEB") {
          return band === "WEB" || (!st.frequency && band !== "FM" && band !== "AM");
        }
        return true;
      });
    }

    // 3. Filtrage par Pays sélectionné dans le menu déroulant
    if (state.selectedCountry !== "all") {
      list = list.filter(st => st.country.toLowerCase() === state.selectedCountry.toLowerCase());
    }

    // 4. Recherche textuelle et par fréquence FM/AM en chiffres
    if (state.searchQuery.trim() !== "") {
      const q = state.searchQuery.toLowerCase().trim();
      const qNum = q.replace(',', '.');
      list = list.filter(st => {
        const nameMatch = st.name.toLowerCase().includes(q) || st.name.toLowerCase().includes(qNum);
        const countryMatch = st.country.toLowerCase().includes(q);
        const genreMatch = st.genre.toLowerCase().includes(q);
        const langMatch = st.language.toLowerCase().includes(q);
        // Correspondance numérique directe sur le champ frequency (ex: 93.9, 94.3, 105.5)
        const freqDirectMatch = st.frequency && (st.frequency.includes(qNum) || qNum.includes(st.frequency));
        // Correspondance sur les chiffres du nom
        const numbersInName = st.name.match(/\d+([.,]\d+)?/g);
        const freqNameMatch = numbersInName && numbersInName.some(num => num.replace(',', '.').includes(qNum));

        return nameMatch || countryMatch || genreMatch || langMatch || freqDirectMatch || freqNameMatch;
      });
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
      const fallbackLogo = getFlagFallback(st.code);
      
      const badgeHtml = st.frequency 
        ? `<span class="card-freq-badge">${st.frequency} ${st.band || 'FM'}</span>` 
        : (st.band ? `<span class="card-band-badge">${st.band}</span>` : '');

      const card = document.createElement("div");
      card.className = `station-card ${isCardPlaying ? "playing" : ""}`;
      card.innerHTML = `
        <img class="station-logo" src="${st.logo}" alt="${st.name}" onerror="this.src='${fallbackLogo}'; this.onerror=null;"/>
        <div class="station-info">
          <div class="station-name">${st.name}</div>
          <div class="station-origin">
            <span>${st.code}</span>
            <span>${st.country}</span>
          </div>
          <div class="station-tag">${badgeHtml ? badgeHtml + ' • ' : ''}${st.genre} • ${st.language}</div>
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
    const fallbackLogo = getFlagFallback(station.code);

    playerStationTitle.textContent = station.name;
    playerThumb.src = station.logo;
    playerThumb.onerror = () => { playerThumb.src = fallbackLogo; playerThumb.onerror = null; };
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

    if (!state.isFallback && state.currentStation && state.currentStation.fallbackUrl && state.currentStation.fallbackUrl !== state.currentStation.streamUrl) {
      console.log("Basculement automatique sur le flux miroir de secours...");
      playerStatusText.textContent = TRANSLATIONS[state.lang].streamError;
      startPlayback(state.currentStation, true);
      return;
    }

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
        console.log("Watchdog: reprise automatique...");
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
        memo: "Tip for Pi Radio v2.1",
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
  // 7. ÉCOUTEURS D'ÉVÉNEMENTS (AXE 2 : PAYS, FM, AM, RECHERCHE DIRECTE)
  // ============================================================
  masterPlayBtn.addEventListener("click", togglePlayback);

  if (volumeSlider) {
    volumeSlider.addEventListener("input", (e) => {
      state.audio.volume = parseFloat(e.target.value);
    });
  }

  // Moteur de recherche mondiale Radio Browser en direct (avec debounce)
  async function triggerLiveSearch(rawQuery) {
    const q = (rawQuery || "").trim();
    if (q.length < 2) {
      if (searchApiStatus) searchApiStatus.style.display = "none";
      return;
    }

    if (searchApiStatus) {
      searchApiStatus.style.display = "flex";
      const t = TRANSLATIONS[state.lang];
      if (searchApiStatusText) searchApiStatusText.textContent = t.searchingGlobal || "🌐 Recherche mondiale en direct...";
    }

    try {
      const qNormalized = q.replace(',', '.');
      const countryParam = state.selectedCountry !== "all" ? state.selectedCountry : "";
      
      const results = await searchRadioBrowserAPI(qNormalized, countryParam, 25);
      if (results && results.length > 0) {
        const existingIds = new Set([...state.stations.map(s => s.id), ...state.apiStations.map(s => s.id)]);
        const fresh = results.filter(s => !existingIds.has(s.id));
        if (fresh.length > 0) {
          state.apiStations = [...state.apiStations, ...fresh];
          populateCountryDropdown();
        }
      }
    } catch (err) {
      console.warn("Live API Search error:", err);
    } finally {
      if (searchApiStatus) searchApiStatus.style.display = "none";
      renderStations();
    }
  }

  // Écouteur pour la saisie dans la barre de recherche (instantanée + API en arrière-plan)
  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      state.searchQuery = e.target.value;
      if (clearSearchBtn) {
        clearSearchBtn.style.display = state.searchQuery.trim() !== "" ? "inline-block" : "none";
      }
      // Désactiver/Activer la puce si l'utilisateur saisit une fréquence connue
      document.querySelectorAll(".freq-chip").forEach(chip => {
        chip.classList.toggle("active", chip.getAttribute("data-freq") === state.searchQuery.trim());
      });

      // Rendu immédiat des correspondances déjà en mémoire
      renderStations();

      // Déclenchement automatique de la recherche mondiale en arrière-plan (debounce 350ms)
      clearTimeout(state.searchDebounceTimer);
      state.searchDebounceTimer = setTimeout(() => {
        triggerLiveSearch(state.searchQuery);
      }, 350);
    });
  }

  // Écouteur pour effacer la recherche en 1 clic
  if (clearSearchBtn) {
    clearSearchBtn.addEventListener("click", () => {
      clearTimeout(state.searchDebounceTimer);
      if (searchApiStatus) searchApiStatus.style.display = "none";
      searchInput.value = "";
      state.searchQuery = "";
      clearSearchBtn.style.display = "none";
      document.querySelectorAll(".freq-chip").forEach(c => c.classList.remove("active"));
      renderStations();
    });
  }

  // Écouteur pour le filtre de bandes d'ondes (FM, AM, WEB, Toutes)
  if (bandSelect) {
    bandSelect.addEventListener("change", (e) => {
      state.selectedBand = e.target.value;
      renderStations();
    });
  }

  // Écouteur pour le sélecteur de pays avec drapeaux
  if (countrySelect) {
    countrySelect.addEventListener("change", (e) => {
      state.selectedCountry = e.target.value;
      renderStations();
      if (state.searchQuery.trim().length >= 2) {
        triggerLiveSearch(state.searchQuery);
      }
    });
  }

  // Écouteur pour les puces de Fréquences FM (94.3, 97.7, etc.)
  if (frequencyChips) {
    frequencyChips.addEventListener("click", (e) => {
      const chip = e.target.closest(".freq-chip");
      if (!chip) return;
      const freq = chip.getAttribute("data-freq");
      
      // Si déjà active, désactiver et réinitialiser
      if (chip.classList.contains("active")) {
        chip.classList.remove("active");
        searchInput.value = "";
        state.searchQuery = "";
        clearSearchBtn.style.display = "none";
        renderStations();
      } else {
        document.querySelectorAll(".freq-chip").forEach(c => c.classList.remove("active"));
        chip.classList.add("active");
        searchInput.value = freq;
        state.searchQuery = freq;
        clearSearchBtn.style.display = "inline-block";
        renderStations();
        triggerLiveSearch(freq);
      }
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
          populateCountryDropdown(); // Mettre à jour les pays avec les nouvelles stations
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
  populateCountryDropdown();
  applyLanguage(state.lang);
});
