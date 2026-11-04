// Pi Radio v2.1 - Moteur Applicatif & Audio Haute Fiabilité
// 6 Menus (Accueil, Explorer, Actualités, Cultures, Sports & Humour, Paramètres)
// Axe 2 : Recherche Avancée (Fréquences FM, Sélecteur de Pays & Puces directes)

document.addEventListener("DOMContentLoaded", () => {
  // Initialisation propre du SDK Pi Network (Prêt pour Developer Portal, sans connexion automatique en temps réel)
  if (window.Pi) {
    try {
      window.Pi.init({ version: "2.0", sandbox: false });
      console.log("[Pi Radio] Pi SDK v2.0 initialisé avec succès.");
    } catch (err) {
      console.warn("[Pi Radio] Pi.init notification :", err);
    }
  }

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
    pendingStationToPlay: null,
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
    isBoosted: false,
    isNormalizerOn: localStorage.getItem("piradio_normalizer") !== "false",
    isReceiverActivated: localStorage.getItem("piradio_receiver_activated") === "true",
    stationTrials: JSON.parse(localStorage.getItem("piradio_station_trials") || "{}"),
    trialTimerInterval: null,
    audio: new Audio(),
    hls: null
  };

  // --- SÉLECTIONS DU DOM ---
  const navTabs = document.querySelectorAll(".nav-tab-item");
  const mainContentArea = document.getElementById("mainContentArea");
  const settingsPanel = document.getElementById("settingsPanel");
  const stationsGrid = document.getElementById("stationsGrid");
  const favoritesSection = document.getElementById("favoritesSection");
  const favoritesGrid = document.getElementById("favoritesGrid");
  const favoritesCountBadge = document.getElementById("favoritesCountBadge");
  const sectionTitleText = document.getElementById("sectionTitleText");
  const sectionBackBtn = document.getElementById("sectionBackBtn");
  const sectionBackBtnText = document.getElementById("sectionBackBtnText");
  const backFromSettingsBtn = document.getElementById("backFromSettingsBtn");
  const totalCountEl = document.getElementById("totalCount");
  const searchInput = document.getElementById("searchInput");
  const clearSearchBtn = document.getElementById("clearSearchBtn");
  const bandSelect = document.getElementById("bandSelect");
  const countrySelect = document.getElementById("countrySelect");
  const searchApiStatus = document.getElementById("searchApiStatus");
  const searchApiStatusText = document.getElementById("searchApiStatusText");
  const frequencyChips = document.getElementById("frequencyChips");
  const freqChipLabel = document.getElementById("freqChipLabel");
  const chipsContainer = document.getElementById("chipsContainer");
  const continentPills = document.getElementById("continentPills");
  const heroSection = document.getElementById("heroSection");
  const searchSection = document.getElementById("searchSection");
  const loadMoreBtn = document.getElementById("loadMoreBtn");
  
  // Lecteur (Axe 3 : Navigation, Boost & Partage)
  const playerThumb = document.getElementById("playerThumb");
  const playerStationTitle = document.getElementById("playerStationTitle");
  const playerStatusText = document.getElementById("playerStatusText");
  const playerStatusIndicator = document.getElementById("playerStatusIndicator");
  const masterPlayBtn = document.getElementById("masterPlayBtn");
  const masterPlayIcon = document.getElementById("masterPlayIcon");
  const prevStationBtn = document.getElementById("prevStationBtn");
  const nextStationBtn = document.getElementById("nextStationBtn");
  const volumeBoostBtn = document.getElementById("volumeBoostBtn");
  const volumeSlider = document.getElementById("volumeSlider");
  const normalizerToggle = document.getElementById("normalizerToggle");
  const toastNotification = document.getElementById("toastNotification");
  const trialCountdownBadge = document.getElementById("trialCountdownBadge");
  
  // Auth Pi Network & Modale Connexion Obligatoire
  const authBtn = document.getElementById("authBtn");
  const authBtnText = document.getElementById("authBtnText");
  const disconnectBtn = document.getElementById("disconnectBtn");
  const authGateModal = document.getElementById("authGateModal");
  const authGateConnectBtn = document.getElementById("authGateConnectBtn");
  const closeAuthGateBtn = document.getElementById("closeAuthGateBtn");

  // Paramètres & PWA (Axe 4)
  const langSelectSetting = document.getElementById("langSelectSetting");
  const timerButtons = document.querySelectorAll(".timer-btn");
  const timerCountdownBadge = document.getElementById("timerCountdownBadge");
  const dataSaverToggle = document.getElementById("dataSaverToggle");
  const clearCacheBtn = document.getElementById("clearCacheBtn");
  const pwaInstallBtn = null;
  const pwaInstalledNotice = null;

  // Modale Licence Poste Pi Radio (Étape 2 & 3)
  const receiverModal = document.getElementById("receiverModal");
  const activateReceiverBtn = document.getElementById("activateReceiverBtn");
  const closeReceiverBtn = document.getElementById("closeReceiverBtn");
  const openReceiverModalFromSettingsBtn = document.getElementById("openReceiverModalFromSettingsBtn");
  const receiverSettingStatusText = document.getElementById("receiverSettingStatusText");
  const headerReceiverBadge = document.getElementById("headerReceiverBadge");
  const RECEIVER_LICENSE_PRICE_PI = 0.00005;

  // Badge officiel avec drapeau national (anti-photos génériques et safe SVG)
  function getFlagFallback(code) {
    const safeCode = encodeURIComponent(code || '📻');
    return `data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Crect width='100' height='100' rx='16' fill='%23140b27' stroke='%23f3b43f' stroke-width='2'/%3E%3Ctext x='50%25' y='64%25' font-size='44' text-anchor='middle'%3E${safeCode}%3C/text%3E%3C/svg%3E`;
  }

  // Résolution intelligente du logo : Logo direct local assets/, logos régionaux (Canada, etc.), Favicon Google 128px ou Badge SVG
  function resolveStationLogo(st) {
    if (st.logo && !st.logo.includes("Flag_of_") && !st.logo.includes("Globe_icon")) {
      return st.logo;
    }
    const nameLow = (st.name || "").toLowerCase();
    const isCanada = (st.code === "🇨🇦") || (st.country && st.country.toLowerCase().includes("canada"));

    if (isCanada || nameLow.includes("canada") || nameLow.includes("toronto") || nameLow.includes("montreal")) {
      if (nameLow.includes("reggae chill")) return "assets/logos/reggae-chill-cafe.svg";
      if (nameLow.includes("labgate")) return "assets/logos/labgate-radio.svg";
      if (nameLow.includes("100 greatest") || nameLow.includes("greatest of the 80")) return "assets/logos/100-greatest-80s.svg";
      if (nameLow.includes("nature radio") || nameLow.includes("rain")) return "assets/logos/nature-radio-rain.svg";
      if (nameLow.includes("ctv news") || nameLow.includes("ctv")) return "assets/logos/ctv-news-audio.svg";
      if (nameLow.includes("bluesflac")) return "assets/logos/radio-bluesflac.svg";
      if (nameLow.includes("vibrazioni") || nameLow.includes("rdmix")) return "assets/logos/vibrazioni-rock.svg";
      if (nameLow.includes("cbc radio") || nameLow.includes("cbc one") || nameLow.includes("cbc 1")) return "assets/logos/cbc-radio-one.png";
      if (nameLow.includes("radio-canada") || nameLow.includes("première") || nameLow.includes("premiere")) return "assets/logos/radio-canada-premiere.png";
      if (nameLow.includes("680 news") || nameLow.includes("citynews")) return "assets/logos/680-news-toronto.png";
      if (nameLow.includes("newstalk 1010") || nameLow.includes("cfrb")) return "assets/logos/newstalk-1010.png";
      if (nameLow.includes("chronix")) return "assets/logos/chronix-radio.png";
      if (nameLow.includes("calm radio")) return "assets/logos/calm-radio.png";
      if (nameLow.includes("ancient fm")) return "assets/logos/ancient-fm.png";
      if (isCanada) return "assets/logos/canada-radio-badge.svg";
    }

    const stState = (st.state || "").toLowerCase();
    const isMichigan = stState.includes("michigan") || nameLow.includes("michigan") || nameLow.includes("ann arbor") || nameLow.includes("east lansing") || nameLow.includes("detroit");
    if (isMichigan) {
      if (nameLow.includes("wuom") || nameLow.includes("michigan radio") || nameLow.includes("michigan public")) return "assets/logos/wuom-michigan-radio.png";
      if (nameLow.includes("wkar")) return "assets/logos/wkar-east-lansing.png";
      if (nameLow.includes("wemu")) return "assets/logos/wemu-89-1-michigan.svg";
      if (nameLow.includes("muskegon")) return "assets/logos/muskegon-channel-radio.svg";
      if (nameLow.includes("drumbase")) return "assets/logos/drumbase-radio.svg";
      return "assets/logos/michigan-radio-badge.svg";
    }

    const isTexas = stState.includes("texas") || nameLow.includes("texas") || nameLow.includes("houston") || nameLow.includes("austin") || nameLow.includes("dallas") || nameLow.includes("san antonio") || nameLow.includes("fort worth");
    if (isTexas) {
      if (nameLow.includes("houston public") || nameLow.includes("kuhf")) return "assets/logos/houston-public-media-88-7.png";
      if (nameLow.includes("kut ") || nameLow.includes("kut 90") || nameLow.includes("austin music")) return "assets/logos/kut-90-5-austin.png";
      if (nameLow.includes("kera")) return "assets/logos/kera-90-1-dallas.png";
      if (nameLow.includes("radio free texas")) return "assets/logos/radio-free-texas.png";
      if (nameLow.includes("kora")) return "assets/logos/kora-98-3-texas.png";
      if (nameLow.includes("rebel")) return "assets/logos/texas-rebel-radio.svg";
      if (nameLow.includes("koke")) return "assets/logos/koke-fm-austin.svg";
      return "assets/logos/texas-radio-badge.svg";
    }

    const isHawaii = stState.includes("hawaii") || stState.includes("hawai") || nameLow.includes("hawaii") || nameLow.includes("hawai") || nameLow.includes("honolulu") || nameLow.includes("maui") || nameLow.includes("oahu") || nameLow.includes("kauai");
    if (isHawaii) {
      if (nameLow.includes("hpr") || nameLow.includes("hawaii public")) return "assets/logos/hawaii-public-radio.svg";
      if (nameLow.includes("kumu")) return "assets/logos/94-7-kumu-honolulu.svg";
      if (nameLow.includes("mana")) return "assets/logos/mana-o-radio-maui.svg";
      if (nameLow.includes("ukulele")) return "assets/logos/ukulele-island-radio.svg";
      if (nameLow.includes("ktuh")) return "assets/logos/ktuh-honolulu.svg";
      return "assets/logos/hawaii-radio-badge.svg";
    }

    const isFlorida = stState.includes("florida") || stState.includes("floride") || nameLow.includes("florida") || nameLow.includes("floride") || nameLow.includes("miami") || nameLow.includes("orlando") || nameLow.includes("tampa") || nameLow.includes("jacksonville");
    if (isFlorida) {
      if (nameLow.includes("wlrn")) return "assets/logos/wlrn-91-3-miami.png";
      if (nameLow.includes("wjct")) return "assets/logos/wjct-jacksonville.png";
      if (nameLow.includes("motown")) return "assets/logos/radio-motown-miami.svg";
      if (nameLow.includes("disco planet")) return "assets/logos/the-disco-planet.svg";
      if (nameLow.includes("italo disco") || nameLow.includes("italodisco")) return "assets/logos/radio-italo-disco.svg";
      if (nameLow.includes("miami beach")) return "assets/logos/miami-beach-radio.svg";
      return "assets/logos/florida-radio-badge.svg";
    }

    const domain = st.homepage ? getDomainFromUrl(st.homepage) : "";
    if (domain && !domain.includes("torontocast") && !domain.includes("radioking")) {
      return `https://t0.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=http://${domain}&size=128`;
    }
    if (isCanada) return "assets/logos/canada-radio-badge.svg";
    if (isMichigan) return "assets/logos/michigan-radio-badge.svg";
    if (isTexas) return "assets/logos/texas-radio-badge.svg";
    if (isHawaii) return "assets/logos/hawaii-radio-badge.svg";
    if (isFlorida) return "assets/logos/florida-radio-badge.svg";
    return getFlagFallback(st.code);
  }

  // Chargement et fusion des stations favorites enregistrées par le Pionnier
  function loadSavedStations() {
    try {
      const saved = JSON.parse(localStorage.getItem("piradio_saved_stations") || "[]");
      const existingIds = new Set(CURATED_STATIONS.map(s => s.id));
      const extra = saved.filter(s => !existingIds.has(s.id));
      state.stations = [...CURATED_STATIONS, ...extra];
    } catch (e) {
      state.stations = [...CURATED_STATIONS];
    }
  }

  // Enregistrer ou retirer une station des favoris (persistance locale intégrale)
  function toggleFavorite(st) {
    const idx = state.favorites.indexOf(st.id);
    let saved = JSON.parse(localStorage.getItem("piradio_saved_stations") || "[]");

    if (idx >= 0) {
      state.favorites.splice(idx, 1);
      saved = saved.filter(s => s.id !== st.id);
    } else {
      state.favorites.push(st.id);
      const isCurated = CURATED_STATIONS.some(s => s.id === st.id);
      if (!isCurated && !saved.some(s => s.id === st.id)) {
        saved.push(st);
      }
    }

    localStorage.setItem("piradio_favs", JSON.stringify(state.favorites));
    localStorage.setItem("piradio_saved_stations", JSON.stringify(saved));
    loadSavedStations();
    populateCountryDropdown();
    renderStations();

    const t = TRANSLATIONS[state.lang] || TRANSLATIONS.fr;
    showToast(idx >= 0 ? (t.favorites + " : retirée") : "⭐ Station enregistrée dans l'app !");
  }

  // ============================================================
  // AXE 3 : EXPÉRIENCE AUDIO, MEDIASESSION, BOOST & PARTAGE
  // ============================================================
  let toastTimer = null;
  function showToast(msg) {
    if (!toastNotification) return;
    toastNotification.textContent = msg;
    toastNotification.classList.add("show");
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => {
      toastNotification.classList.remove("show");
    }, 2800);
  }

  // Contrôles Écran de verrouillage / Bluetooth (MediaSession API)
  function updateMediaSession(station) {
    if (!('mediaSession' in navigator) || !station) return;
    try {
      const logo = resolveStationLogo(station);
      const artwork = [
        { src: logo, sizes: '96x96', type: 'image/png' },
        { src: logo, sizes: '128x128', type: 'image/png' },
        { src: logo, sizes: '256x256', type: 'image/png' },
        { src: logo, sizes: '512x512', type: 'image/png' }
      ];

      navigator.mediaSession.metadata = new MediaMetadata({
        title: station.name,
        artist: `${station.country} • ${station.frequency ? station.frequency + ' FM' : station.band}`,
        album: "Pi Radio • Inform Me",
        artwork: artwork
      });

      navigator.mediaSession.playbackState = state.isPlaying ? "playing" : "paused";

      navigator.mediaSession.setActionHandler('play', () => togglePlayback());
      navigator.mediaSession.setActionHandler('pause', () => togglePlayback());
      navigator.mediaSession.setActionHandler('stop', () => togglePlayback());
      navigator.mediaSession.setActionHandler('previoustrack', () => playAdjacentStation(-1));
      navigator.mediaSession.setActionHandler('nexttrack', () => playAdjacentStation(1));
    } catch (e) {
      console.warn("MediaSession non supporté:", e);
    }
  }

  // Passer à la station précédente / suivante
  function playAdjacentStation(direction) {
    const list = getFilteredList();
    if (!list || list.length === 0) return;
    if (!state.currentStation) {
      startPlayback(list[0], false);
      return;
    }
    const currentIndex = list.findIndex(s => s.id === state.currentStation.id);
    let nextIndex = 0;
    if (currentIndex !== -1) {
      nextIndex = (currentIndex + direction + list.length) % list.length;
    }
    startPlayback(list[nextIndex], false);
  }

  // Application intelligente du volume (Normalisation & Boost)
  function applyVolumeSettings() {
    let baseVol = volumeSlider ? parseFloat(volumeSlider.value) : 0.8;
    
    // Si Boost sonore actif : amplifie au maximum sans saturation
    if (state.isBoosted) {
      state.audio.volume = 1.0;
      if (volumeBoostBtn) volumeBoostBtn.classList.add("active");
    } else {
      // Normalisation active : égalisation automatique
      if (state.isNormalizerOn && baseVol < 0.9) {
        state.audio.volume = Math.min(1.0, baseVol * 1.15);
      } else {
        state.audio.volume = baseVol;
      }
      if (volumeBoostBtn) volumeBoostBtn.classList.remove("active");
    }
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
  // AXE 2 : PUCE DE FRÉQUENCES DYNAMIQUES SELON LA BANDE CHOISIE
  // ============================================================
  function updateFrequencyChips() {
    if (!freqChipLabel || !chipsContainer) return;
    const t = TRANSLATIONS[state.lang] || TRANSLATIONS.fr;
    let chips = [];

    if (state.selectedBand === "AM") {
      freqChipLabel.textContent = t.freqLabelAM || "Fréquences AM :";
      chips = [
        { label: "540 AM", val: "540" },
        { label: "640 AM", val: "640" },
        { label: "740 AM", val: "740" },
        { label: "820 AM", val: "820" },
        { label: "1010 AM", val: "1010" },
        { label: "1130 AM", val: "1130" },
        { label: "1530 AM", val: "1530" }
      ];
    } else if (state.selectedBand === "FM") {
      freqChipLabel.textContent = t.freqLabelFM || "Fréquences FM :";
      chips = [
        { label: "89.5 FM", val: "89.5" },
        { label: "92.9 FM", val: "92.9" },
        { label: "93.9 FM", val: "93.9" },
        { label: "94.3 FM", val: "94.3" },
        { label: "97.7 FM", val: "97.7" },
        { label: "98.4 FM", val: "98.4" },
        { label: "104.3 FM", val: "104.3" },
        { label: "105.5 FM", val: "105.5" }
      ];
    } else if (state.selectedBand === "WEB") {
      freqChipLabel.textContent = t.freqLabelWEB || "Stations Web :";
      chips = [
        { label: "News 24", val: "News" },
        { label: "Jazz", val: "Jazz" },
        { label: "Chillout", val: "Chill" },
        { label: "Sport", val: "Sport" },
        { label: "Culture", val: "Culture" }
      ];
    } else {
      freqChipLabel.textContent = t.freqLabelAll || "Fréquences & Ondes :";
      chips = [
        { label: "89.5 FM", val: "89.5" },
        { label: "93.9 FM", val: "93.9" },
        { label: "94.3 FM", val: "94.3" },
        { label: "97.7 FM", val: "97.7" },
        { label: "105.5 FM", val: "105.5" },
        { label: "640 AM", val: "640" },
        { label: "1010 AM", val: "1010" }
      ];
    }

    chipsContainer.innerHTML = chips.map(c => 
      `<button class="freq-chip ${state.searchQuery.trim() === c.val ? 'active' : ''}" data-freq="${c.val}">${c.label}</button>`
    ).join("");
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

    updateFrequencyChips();
    updatePlayerStatusUI();
    updateAuthUI();
    updateReceiverLicenseUI();
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

  function updateSectionTitle() {
    const t = TRANSLATIONS[state.lang] || TRANSLATIONS.fr;
    const isSearching = state.searchQuery.trim() !== "";
    const isFiltered = (state.selectedBand && state.selectedBand !== "all") || (state.selectedCountry && state.selectedCountry !== "all");

    if (sectionBackBtn) {
      if (isSearching || isFiltered || state.activeTab !== "home") {
        sectionBackBtn.style.display = "inline-flex";
        if (sectionBackBtnText) {
          sectionBackBtnText.textContent = t.backToHome || "Retour";
        }
      } else {
        sectionBackBtn.style.display = "none";
      }
    }

    if (isSearching) {
      sectionTitleText.textContent = `${t.searchResultsFor || "Résultats pour"} "${state.searchQuery}"`;
    } else if (state.selectedBand === "FAV") {
      sectionTitleText.textContent = `⭐ ${t.myFavorites || "Mes Radios Favorites"}`;
    } else if (state.activeTab === "explore") {
      sectionTitleText.textContent = t.navExplore;
    } else if (state.activeTab === "home") {
      if (state.favorites.length > 0 && !isFiltered) {
        sectionTitleText.textContent = "📻 Toutes les Radios Mondiales";
      } else {
        sectionTitleText.textContent = t.featuredNews;
      }
    } else if (state.activeTab === "news") {
      sectionTitleText.textContent = t.catNews;
    } else if (state.activeTab === "culture") {
      sectionTitleText.textContent = t.catCulture;
    } else if (state.activeTab === "sports") {
      sectionTitleText.textContent = `${t.catSports} • ${t.catComedy}`;
    }
  }

  function renderView() {
    if (state.activeTab === "settings") {
      heroSection.style.display = "none";
      searchSection.style.display = "none";
      mainContentArea.style.display = "none";
      if (favoritesSection) favoritesSection.style.display = "none";
      settingsPanel.classList.add("active");
      return;
    }

    settingsPanel.classList.remove("active");
    mainContentArea.style.display = "block";
    heroSection.style.display = "block";
    searchSection.style.display = "block";

    if (state.searchQuery.trim() !== "") {
      continentPills.style.display = "none";
    } else if (state.activeTab === "explore") {
      continentPills.style.display = "flex";
    } else {
      continentPills.style.display = "none";
    }

    updateSectionTitle();
    renderStations();
  }

  // ============================================================
  // 3. FILTRAGE ET RECHERCHE AVANCÉE (AXE 2 : FM, AM, PAYS, MOT-CLÉ)
  // ============================================================
  function getFilteredList() {
    let list = [...state.stations, ...state.apiStations];
    const isSearching = state.searchQuery.trim() !== "";

    // 1. Filtrage par onglet actif (UNIQUEMENT quand aucune recherche n'est en cours)
    if (!isSearching) {
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
    }

    // 2. Filtrage par Bande d'ondes (FM, AM, WEB, Favoris)
    if (state.selectedBand !== "all") {
      list = list.filter(st => {
        if (state.selectedBand === "FAV") {
          return state.favorites.includes(st.id);
        }
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
      const countryFiltered = list.filter(st => (st.country || "").toLowerCase() === state.selectedCountry.toLowerCase());
      // Si une recherche textuelle/fréquence est en cours et que ce pays n'a pas cette station, afficher les résultats mondiaux
      if (isSearching && countryFiltered.length === 0) {
        // conserver list globale
      } else {
        list = countryFiltered;
      }
    }

    // 4. Recherche textuelle, par ville/état/pays/continent et par fréquence FM/AM
    if (isSearching) {
      const q = state.searchQuery.toLowerCase().trim();
      const qClean = q.replace(/['"`]/g, "");
      const loc = (typeof GLOBAL_LOCATION_SYNONYMS !== "undefined" && GLOBAL_LOCATION_SYNONYMS[qClean]) 
        ? GLOBAL_LOCATION_SYNONYMS[qClean] 
        : null;
      const qCorrected = q.replace(/aeokuta/g, "abeokuta").replace(/ketou/g, "kétou").replace(/alaketu/g, "alakétu");
      const qNum = q.replace(',', '.');

      list = list.filter(st => {
        const nameMatch = (st.name || "").toLowerCase().includes(q) || 
                          (st.name || "").toLowerCase().includes(qCorrected) || 
                          (loc && loc.en && (st.name || "").toLowerCase().includes(loc.en.toLowerCase())) ||
                          (loc && loc.fr && (st.name || "").toLowerCase().includes(loc.fr.toLowerCase())) ||
                          (st.name || "").toLowerCase().includes(qNum);
        const cityMatch = (st.city || "").toLowerCase().includes(q) || 
                          (st.city || "").toLowerCase().includes(qCorrected) ||
                          (loc && loc.state && (st.city || "").toLowerCase().includes(loc.state.toLowerCase()));
        const stateMatch = (st.state || "").toLowerCase().includes(q) || 
                           (st.state || "").toLowerCase().includes(qCorrected) ||
                           (loc && loc.state && (st.state || "").toLowerCase().includes(loc.state.toLowerCase()));
        const countryMatch = (st.country || "").toLowerCase().includes(q) || 
                             (st.country || "").toLowerCase().includes(qCorrected) ||
                             (loc && loc.en && (st.country || "").toLowerCase().includes(loc.en.toLowerCase())) ||
                             (loc && loc.fr && (st.country || "").toLowerCase().includes(loc.fr.toLowerCase())) ||
                             (loc && loc.code && (st.code === loc.code || (st.code && st.code.includes(loc.code))));
        const continentMatch = (loc && loc.type === "continent" && loc.continent && st.continent === loc.continent) ||
                               ((qClean === "afrique" || qClean === "africa") && st.continent === "africa") ||
                               ((qClean === "europe") && st.continent === "europe") ||
                               ((qClean === "asie" || qClean === "azie" || qClean === "asia") && st.continent === "asia") ||
                               ((qClean === "amerique" || qClean === "ameriques" || qClean === "america") && st.continent === "americas") ||
                               ((qClean === "oceanie" || qClean === "océanie" || qClean === "oceania") && st.continent === "oceania");
        const genreMatch = (st.genre || "").toLowerCase().includes(q) || 
                           (st.genre || "").toLowerCase().includes(qCorrected);
        const langMatch = (st.language || "").toLowerCase().includes(q);
        // Correspondance numérique directe sur le champ frequency (ex: 95.8, 89.5, 93.9, 94.3, 105.5)
        const freqDirectMatch = st.frequency && (st.frequency.includes(qNum) || qNum.includes(st.frequency));
        // Correspondance sur les chiffres du nom
        const numbersInName = (st.name || "").match(/\d+([.,]\d+)?/g);
        const freqNameMatch = numbersInName && numbersInName.some(num => num.replace(',', '.').includes(qNum));

        return nameMatch || cityMatch || stateMatch || countryMatch || continentMatch || genreMatch || langMatch || freqDirectMatch || freqNameMatch;
      });
    }

    return list;
  }

  function createStationCard(st) {
    const isCurrent = state.currentStation && state.currentStation.id === st.id;
    const isCardPlaying = isCurrent && state.isPlaying;
    const isFav = state.favorites.includes(st.id);
    const isCanada = (st.code === "🇨🇦") || (st.country && st.country.toLowerCase().includes("canada"));
    const isMichigan = (st.state && st.state.toLowerCase().includes("michigan")) || (st.name && st.name.toLowerCase().includes("michigan"));
    const isTexas = (st.state && st.state.toLowerCase().includes("texas")) || (st.name && st.name.toLowerCase().includes("texas"));
    const isHawaii = (st.state && (st.state.toLowerCase().includes("hawaii") || st.state.toLowerCase().includes("hawai"))) || (st.name && (st.name.toLowerCase().includes("hawaii") || st.name.toLowerCase().includes("hawai")));
    const isFlorida = (st.state && (st.state.toLowerCase().includes("florida") || st.state.toLowerCase().includes("floride"))) || (st.name && (st.name.toLowerCase().includes("florida") || st.name.toLowerCase().includes("floride")));
    const fallbackLogo = isCanada ? "assets/logos/canada-radio-badge.svg" : (isMichigan ? "assets/logos/michigan-radio-badge.svg" : (isTexas ? "assets/logos/texas-radio-badge.svg" : (isHawaii ? "assets/logos/hawaii-radio-badge.svg" : (isFlorida ? "assets/logos/florida-radio-badge.svg" : getFlagFallback(st.code)))));
    const resolvedLogo = resolveStationLogo(st);
    
    const badgeHtml = st.frequency 
      ? `<span class="card-freq-badge">${st.frequency} ${st.band || 'FM'}</span>` 
      : (st.band ? `<span class="card-band-badge">${st.band}</span>` : '');

    const lockedForUser = isStationLocked(st);
    let trialTagHtml = "";
    const t = TRANSLATIONS[state.lang] || TRANSLATIONS.fr;
    if (lockedForUser) {
      const remaining = getStationRemainingSeconds(st.id);
      if (remaining <= 0) {
        trialTagHtml = `<span class="card-trial-badge" style="border-color: #ff5252; color: #ff5252; background: rgba(255, 82, 82, 0.15);">${t.trialCardExpired || '🔒 Essai terminé'}</span>`;
      } else {
        trialTagHtml = `<span class="card-trial-badge">${t.trialCardBadge || '🔒 Essai 3min'}</span>`;
      }
    } else if (state.isReceiverActivated && (st.locked || st.id.startsWith("rb_"))) {
      trialTagHtml = `<span class="card-unlocked-badge">${t.trialUnlocked || '📻 Débloqué'}</span>`;
    }

    const card = document.createElement("div");
    card.className = `station-card ${isCardPlaying ? "playing" : ""}`;
    card.innerHTML = `
      <img class="station-logo" src="${resolvedLogo}" alt="${st.name}" loading="lazy"/>
      <div class="station-info">
        <div class="station-name">${st.name}</div>
        <div class="station-origin">
          <span>${st.code}</span>
          <span>${st.country}</span>
        </div>
        <div class="station-tag">${badgeHtml ? badgeHtml + ' • ' : ''}${trialTagHtml ? trialTagHtml + ' • ' : ''}${st.genre} • ${st.language}</div>
      </div>
      <div class="sound-wave">
        <div class="sound-wave-bar"></div>
        <div class="sound-wave-bar"></div>
        <div class="sound-wave-bar"></div>
        <div class="sound-wave-bar"></div>
      </div>
      <div class="card-actions">
        <button class="card-fav-btn ${isFav ? 'active' : ''}" data-id="${st.id}" title="${isFav ? 'Retirer des favoris' : 'Enregistrer dans l\'App'}" aria-label="Favoris">
          ${isFav ? '★' : '☆'}
        </button>
        <button class="card-play-action" aria-label="Play">
          ${isCardPlaying ? "⏸" : "▶"}
        </button>
      </div>
    `;

    const logoImg = card.querySelector(".station-logo");
    if (logoImg) {
      logoImg.addEventListener("error", function() {
        this.src = fallbackLogo;
      }, { once: true });
    }

    const favBtn = card.querySelector(".card-fav-btn");
    if (favBtn) {
      favBtn.addEventListener("click", (e) => {
        e.stopPropagation();
        toggleFavorite(st);
      });
    }

    card.addEventListener("click", () => {
      if (isCurrent) {
        togglePlayback();
      } else {
        startPlayback(st, false);
      }
    });

    return card;
  }

  function renderFavoritesSection() {
    if (!favoritesSection || !favoritesGrid) return;
    const isHome = state.activeTab === "home";
    const noSearch = state.searchQuery.trim() === "";
    const noBand = state.selectedBand === "all";
    const noCountry = state.selectedCountry === "all";

    // Affichage dédié et proéminent en haut de l'accueil dès que le Pionnier a des favoris
    if (isHome && noSearch && noBand && noCountry && state.favorites.length > 0) {
      favoritesSection.style.display = "block";
      favoritesGrid.innerHTML = "";

      const allStations = [...state.stations, ...state.apiStations];
      const favList = [];
      state.favorites.forEach(favId => {
        const found = allStations.find(s => s.id === favId);
        if (found && !favList.some(x => x.id === found.id)) {
          favList.push(found);
        }
      });

      if (favoritesCountBadge) {
        favoritesCountBadge.textContent = `${favList.length} radio${favList.length > 1 ? "s" : ""}`;
      }

      favList.forEach(st => {
        favoritesGrid.appendChild(createStationCard(st));
      });
    } else {
      favoritesSection.style.display = "none";
    }
  }

  function renderStations() {
    updateSectionTitle();
    renderFavoritesSection();
    const list = getFilteredList();
    stationsGrid.innerHTML = "";
    const t = TRANSLATIONS[state.lang] || TRANSLATIONS.fr;

    totalCountEl.textContent = `${list.length} ${t.onlineCount}`;

    if (list.length === 0) {
      const isFavMode = state.selectedBand === "FAV";
      stationsGrid.innerHTML = `
        <div style="grid-column: 1/-1; text-align: center; padding: 50px 20px; color: var(--text-muted);">
          <div style="font-size: 48px; margin-bottom: 12px;">${isFavMode ? "⭐" : "📻"}</div>
          <p style="font-size: 1.1rem;">${isFavMode ? (t.noFavoritesYet || "Aucune radio favorite pour le moment.") : t.noResults}</p>
        </div>
      `;
      return;
    }

    list.forEach(st => {
      stationsGrid.appendChild(createStationCard(st));
    });
  }

  // ============================================================
  // GESTION DU POSTE PI RADIO & ESSAI 3 MINUTES PAR STATION (ÉTAPE 1 & 2)
  // ============================================================
  function isStationLocked(station) {
    if (!station) return false;
    if (state.isReceiverActivated) return false;
    // Une station est verrouillée si station.locked === true ou si issue d'une recherche (rb_...)
    return station.locked === true || station.id.startsWith("rb_");
  }

  function getStationRemainingSeconds(stId) {
    if (state.isReceiverActivated) return 999999;
    if (!stId) return 180;
    if (state.stationTrials[stId] === undefined) {
      return 180; // 3 minutes complètes garanties
    }
    return Math.max(0, state.stationTrials[stId]);
  }

  function formatTrialTime(sec) {
    const m = Math.floor(sec / 60).toString().padStart(2, "0");
    const s = (sec % 60).toString().padStart(2, "0");
    return `${m}:${s}`;
  }

  function startTrialCountdown(station) {
    stopTrialCountdown();
    if (state.isReceiverActivated) {
      if (trialCountdownBadge) {
        trialCountdownBadge.style.display = "inline-flex";
        trialCountdownBadge.style.color = "var(--live-green)";
        trialCountdownBadge.style.borderColor = "var(--live-green)";
        trialCountdownBadge.style.background = "rgba(0, 230, 118, 0.15)";
        const t = TRANSLATIONS[state.lang] || TRANSLATIONS.fr;
        trialCountdownBadge.textContent = t.trialUnlocked || "📻 Débloqué";
      }
      return;
    }

    if (!isStationLocked(station)) {
      if (trialCountdownBadge) trialCountdownBadge.style.display = "none";
      return;
    }

    const stId = station.id;
    let remaining = getStationRemainingSeconds(stId);

    if (trialCountdownBadge) {
      trialCountdownBadge.style.display = "inline-flex";
      trialCountdownBadge.style.color = "var(--pi-gold)";
      trialCountdownBadge.style.borderColor = "var(--pi-gold)";
      trialCountdownBadge.style.background = "rgba(243, 180, 63, 0.18)";
      const t = TRANSLATIONS[state.lang] || TRANSLATIONS.fr;
      const label = t.trialBadge || "⏳ Essai";
      trialCountdownBadge.textContent = `${label} : ${formatTrialTime(remaining)}`;
    }

    state.trialTimerInterval = setInterval(() => {
      // Décompte UNIQUEMENT quand le son est réellement en cours de lecture
      if (!state.isPlaying || state.audio.paused || state.audio.ended) return;

      remaining--;
      state.stationTrials[stId] = remaining;
      localStorage.setItem("piradio_station_trials", JSON.stringify(state.stationTrials));

      if (trialCountdownBadge) {
        const t = TRANSLATIONS[state.lang] || TRANSLATIONS.fr;
        const label = t.trialBadge || "⏳ Essai";
        trialCountdownBadge.textContent = `${label} : ${formatTrialTime(remaining)}`;
      }

      if (remaining <= 0) {
        stopTrialCountdown();
        handleTrialExpiration(station);
      }
    }, 1000);
  }

  function stopTrialCountdown() {
    if (state.trialTimerInterval) {
      clearInterval(state.trialTimerInterval);
      state.trialTimerInterval = null;
    }
  }

  function handleTrialExpiration(station) {
    state.audio.pause();
    state.isPlaying = false;
    masterPlayIcon.textContent = "▶";
    updatePlayerStatusUI();
    if (trialCountdownBadge) {
      const t = TRANSLATIONS[state.lang] || TRANSLATIONS.fr;
      trialCountdownBadge.textContent = t.trialExpired || "🔒 Essai 3min terminé";
    }
    const t = TRANSLATIONS[state.lang] || TRANSLATIONS.fr;
    showToast(t.trialExpired || "Période d'essai de 3 minutes terminée pour cette station !");
    openReceiverModal();
  }

  function openReceiverModal() {
    const t = TRANSLATIONS[state.lang] || TRANSLATIONS.fr;
    if (state.isReceiverActivated) {
      showToast(t.receiverAlreadyActive || "Votre Poste Pi Radio est déjà actif à vie !");
      return;
    }
    if (receiverModal) receiverModal.classList.add("active");
  }

  function closeReceiverModal() {
    if (receiverModal) receiverModal.classList.remove("active");
  }

  // Mettre à jour l'affichage de l'état de la licence
  function updateReceiverLicenseUI() {
    const t = TRANSLATIONS[state.lang] || TRANSLATIONS.fr;
    if (headerReceiverBadge) {
      headerReceiverBadge.style.display = state.isReceiverActivated ? "inline-flex" : "none";
    }
    if (receiverSettingStatusText) {
      if (state.isReceiverActivated) {
        receiverSettingStatusText.textContent = "✅ " + (t.receiverActivatedBadge || "Poste Activé à vie");
      } else {
        receiverSettingStatusText.textContent = t.receiverActivateBtn || "Activer mon Poste (0.00005 π)";
      }
    }
    if (state.isReceiverActivated && trialCountdownBadge) {
      trialCountdownBadge.style.display = "inline-flex";
      trialCountdownBadge.style.color = "var(--live-green)";
      trialCountdownBadge.style.borderColor = "var(--live-green)";
      trialCountdownBadge.style.background = "rgba(0, 230, 118, 0.15)";
      trialCountdownBadge.textContent = t.trialUnlocked || "📻 Débloqué";
    }
  }

  // Finalisation du déblocage permanent du Poste Pi Radio
  function completeReceiverActivation(txid) {
    state.isReceiverActivated = true;
    localStorage.setItem("piradio_receiver_activated", "true");
    if (txid) {
      localStorage.setItem("piradio_receiver_txid", txid);
    }
    stopTrialCountdown();
    closeReceiverModal();
    updateReceiverLicenseUI();
    renderStations();

    const t = TRANSLATIONS[state.lang] || TRANSLATIONS.fr;
    showToast(t.receiverActivatedSuccess || "Félicitations ! Votre Poste Pi Radio est activé à vie 📻");

    // Si une station était en attente de lecture, la relancer immédiatement
    if (state.currentStation && !state.isPlaying) {
      startPlayback(state.currentStation, false);
    }
  }

  // Traitement du paiement officiel Pi Network SDK (0.00005 Pi)
  function handleReceiverPayment() {
    const t = TRANSLATIONS[state.lang] || TRANSLATIONS.fr;
    if (state.isReceiverActivated) {
      showToast(t.receiverAlreadyActive || "Votre Poste Pi Radio est déjà actif à vie !");
      closeReceiverModal();
      return;
    }

    // Si on est dans le Pi Browser avec le SDK Pi officiel
    if (window.Pi && window.Pi.createPayment) {
      try {
        window.Pi.createPayment({
          amount: RECEIVER_LICENSE_PRICE_PI,
          memo: "Licence Poste Pi Radio à vie - 50 000 stations",
          metadata: {
            type: "lifetime_receiver_license",
            amount_pi: RECEIVER_LICENSE_PRICE_PI,
            app: "Pi Radio",
            user_uid: state.pioneerUser ? state.pioneerUser.uid : "guest"
          }
        }, {
          onReadyForServerApproval: function(paymentId) {
            console.log("[Pi Radio Payment] En attente d'approbation serveur :", paymentId);
          },
          onReadyForServerCompletion: function(paymentId, txid) {
            console.log("[Pi Radio Payment] Transaction blockchain Pi validée :", txid);
            completeReceiverActivation(txid);
          },
          onCancel: function(paymentId) {
            console.log("[Pi Radio Payment] Annulé par l'utilisateur :", paymentId);
            showToast("Paiement annulé.");
          },
          onError: function(error, payment) {
            console.error("[Pi Radio Payment] Erreur Pi SDK :", error);
            showToast("Erreur lors de la transaction Pi Network.");
          }
        });
      } catch (err) {
        console.warn("[Pi Radio Payment] Erreur SDK, bascule vers mode simulation :", err);
        simulateReceiverPayment();
      }
    } else {
      // Hors Pi Browser (navigateur classique / test)
      simulateReceiverPayment();
    }
  }

  function simulateReceiverPayment() {
    const isConfirmed = confirm(
      "🌐 Mode Démo / Hors Pi Browser :\n\n" +
      "Dans le Pi Browser, cet écran ouvre directement votre Pi Wallet pour valider les 0.00005 π.\n\n" +
      "Souhaitez-vous simuler l'activation immédiate de votre Poste Pi Radio à vie ?"
    );
    if (isConfirmed) {
      completeReceiverActivation("sim_tx_" + Date.now());
    }
  }

  // ============================================================
  // 4. MOTEUR AUDIO DOUBLE-FLUX & WATCHDOG ANTI-COUPURE
  // ============================================================
  function startPlayback(station, useFallback = false) {
    // Axe Pi Network : Accès aux radios réservé aux Pionniers connectés
    if (!state.pioneerUser) {
      state.pendingStationToPlay = station;
      openAuthGateModal();
      return;
    }

    if (isStationLocked(station)) {
      const remaining = getStationRemainingSeconds(station.id);
      if (!state.isReceiverActivated && remaining <= 0) {
        handleTrialExpiration(station);
        return;
      }
      startTrialCountdown(station);
    } else {
      stopTrialCountdown();
      if (trialCountdownBadge) trialCountdownBadge.style.display = "none";
    }

    state.currentStation = station;
    state.isFallback = useFallback;
    state.isPlaying = true;
    state.retryCount = 0;

    const streamToLoad = useFallback && station.fallbackUrl ? station.fallbackUrl : station.streamUrl;
    const isCanada = (station.code === "🇨🇦") || (station.country && station.country.toLowerCase().includes("canada"));
    const isMichigan = (station.state && station.state.toLowerCase().includes("michigan")) || (station.name && station.name.toLowerCase().includes("michigan"));
    const isTexas = (station.state && station.state.toLowerCase().includes("texas")) || (station.name && station.name.toLowerCase().includes("texas"));
    const isHawaii = (station.state && (station.state.toLowerCase().includes("hawaii") || station.state.toLowerCase().includes("hawai"))) || (station.name && (station.name.toLowerCase().includes("hawaii") || station.name.toLowerCase().includes("hawai")));
    const isFlorida = (station.state && (station.state.toLowerCase().includes("florida") || station.state.toLowerCase().includes("floride"))) || (station.name && (station.name.toLowerCase().includes("florida") || station.name.toLowerCase().includes("floride")));
    const fallbackLogo = isCanada ? "assets/logos/canada-radio-badge.svg" : (isMichigan ? "assets/logos/michigan-radio-badge.svg" : (isTexas ? "assets/logos/texas-radio-badge.svg" : (isHawaii ? "assets/logos/hawaii-radio-badge.svg" : (isFlorida ? "assets/logos/florida-radio-badge.svg" : getFlagFallback(station.code)))));
    const resolvedLogo = resolveStationLogo(station);

    playerStationTitle.textContent = station.name;
    playerThumb.src = resolvedLogo;
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
    applyVolumeSettings();
    updateMediaSession(station);
    renderStations();
  }

  function togglePlayback() {
    if (!state.pioneerUser) {
      if (!state.currentStation) {
        const list = getFilteredList();
        if (list.length > 0) state.pendingStationToPlay = list[0];
      } else {
        state.pendingStationToPlay = state.currentStation;
      }
      openAuthGateModal();
      return;
    }

    if (!state.currentStation) {
      const list = getFilteredList();
      if (list.length > 0) startPlayback(list[0], false);
      return;
    }

    if (isStationLocked(state.currentStation)) {
      const remaining = getStationRemainingSeconds(state.currentStation.id);
      if (!state.isReceiverActivated && remaining <= 0) {
        handleTrialExpiration(state.currentStation);
        return;
      }
    }

    if (state.isPlaying) {
      state.audio.pause();
      state.isPlaying = false;
      masterPlayIcon.textContent = "▶";
      updatePlayerStatusUI();
      stopTrialCountdown();
    } else {
      state.audio.play().then(() => {
        state.isPlaying = true;
        masterPlayIcon.textContent = "⏸";
        updatePlayerStatusUI();
        if (isStationLocked(state.currentStation)) {
          startTrialCountdown(state.currentStation);
        }
      }).catch(triggerFallbackOrRetry);
    }
    if ('mediaSession' in navigator) {
      navigator.mediaSession.playbackState = state.isPlaying ? "playing" : "paused";
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
    const t = TRANSLATIONS[state.lang] || TRANSLATIONS.fr;
    if (state.pioneerUser) {
      authBtn.className = "auth-btn connected";
      authBtnText.textContent = `@${state.pioneerUser.username || "Pioneer"}`;
      disconnectBtn.style.display = "inline-flex";
    } else {
      authBtn.className = "auth-btn disconnected";
      authBtnText.textContent = t.connectPi || "Connexion Pi";
      disconnectBtn.style.display = "none";
    }
  }

  function openAuthGateModal() {
    if (authGateModal) authGateModal.style.display = "flex";
  }

  function closeAuthGateModal() {
    if (authGateModal) authGateModal.style.display = "none";
  }

  function handlePiLogin() {
    if (state.pioneerUser) {
      showToast(`Pionnier connecté : @${state.pioneerUser.username || "Pioneer"}`);
      return;
    }

    authBtn.classList.add("loading");
    authBtnText.textContent = "Connexion...";
    if (authGateConnectBtn) {
      authGateConnectBtn.classList.add("loading");
      authGateConnectBtn.innerHTML = `<span>⏳</span> <span>Connexion en cours...</span>`;
    }

    function resetAuthButtons() {
      authBtn.classList.remove("loading");
      if (authGateConnectBtn) {
        authGateConnectBtn.classList.remove("loading");
        const t = TRANSLATIONS[state.lang] || TRANSLATIONS.fr;
        authGateConnectBtn.innerHTML = `<span>⚡</span> <span data-i18n="authGateBtn">${t.authGateBtn || "Se connecter avec Pi Network"}</span>`;
      }
      updateAuthUI();
    }

    const isPiBrowser = /PiBrowser/i.test(navigator.userAgent);

    if (isPiBrowser && window.Pi && window.Pi.authenticate) {
      // Dans le Pi Browser : appel officiel du Pi SDK pour Developer Portal
      try {
        let authTimedOut = false;
        const timer = setTimeout(() => {
          authTimedOut = true;
          resetAuthButtons();
          showToast("Délai de connexion Pi dépassé. Veuillez réessayer.", "error");
        }, 12000);

        window.Pi.authenticate(["username", "payments"], function onIncompletePaymentFound(payment) {
          console.log("[Pi Radio] Paiement incomplet trouvé :", payment);
        })
          .then(auth => {
            if (authTimedOut) return;
            clearTimeout(timer);
            state.pioneerUser = auth.user;
            localStorage.setItem("piradio_user", JSON.stringify(auth.user));
            resetAuthButtons();
            closeAuthGateModal();
            showToast(`Bienvenue @${auth.user.username} !`);
            if (state.pendingStationToPlay) {
              const st = state.pendingStationToPlay;
              state.pendingStationToPlay = null;
              startPlayback(st, false);
            }
          })
          .catch(err => {
            if (authTimedOut) return;
            clearTimeout(timer);
            console.warn("[Pi Radio] Erreur Pi.authenticate :", err);
            showToast("Erreur de connexion Pi Network.");
            resetAuthButtons();
          });
      } catch (e) {
        console.warn("[Pi Radio] Exception authenticate :", e);
        resetAuthButtons();
      }
    } else {
      // Hors Pi Browser (ordinateur / Chrome / tests de développement)
      setTimeout(() => {
        resetAuthButtons();
        simulatePiLogin();
        closeAuthGateModal();
        showToast("Session Démo connectée (@PioneerGlobal). Dans le Pi Browser avec Developer Portal, votre compte réel sera connecté !");
        if (state.pendingStationToPlay) {
          const st = state.pendingStationToPlay;
          state.pendingStationToPlay = null;
          startPlayback(st, false);
        }
      }, 350);
    }
  }

  authBtn.addEventListener("click", handlePiLogin);

  if (authGateConnectBtn) {
    authGateConnectBtn.addEventListener("click", handlePiLogin);
  }
  if (closeAuthGateBtn) {
    closeAuthGateBtn.addEventListener("click", closeAuthGateModal);
  }
  if (authGateModal) {
    authGateModal.addEventListener("click", (e) => {
      if (e.target === authGateModal) closeAuthGateModal();
    });
  }

  function simulatePiLogin() {
    const simulatedUser = { username: "PioneerGlobal", uid: "pi_" + Date.now() };
    state.pioneerUser = simulatedUser;
    localStorage.setItem("piradio_user", JSON.stringify(simulatedUser));
    updateAuthUI();
  }

  disconnectBtn.addEventListener("click", () => {
    state.pioneerUser = null;
    localStorage.removeItem("piradio_user");
    if (state.isPlaying) {
      state.audio.pause();
      state.isPlaying = false;
      masterPlayIcon.textContent = "▶";
      updatePlayerStatusUI();
      stopTrialCountdown();
      renderStations();
    }
    updateAuthUI();
    showToast("Session déconnectée.");
  });

  // Modale Licence Poste Pi Radio (Étape 2 & 3)
  if (activateReceiverBtn) {
    activateReceiverBtn.addEventListener("click", handleReceiverPayment);
  }
  if (closeReceiverBtn) {
    closeReceiverBtn.addEventListener("click", closeReceiverModal);
  }
  if (receiverModal) {
    receiverModal.addEventListener("click", (e) => {
      if (e.target === receiverModal) closeReceiverModal();
    });
  }
  if (openReceiverModalFromSettingsBtn) {
    openReceiverModalFromSettingsBtn.addEventListener("click", openReceiverModal);
  }

  // ============================================================
  // 7. ÉCOUTEURS D'ÉVÉNEMENTS (AXE 2 & AXE 3 : AUDIO, BOOST, PARTAGE)
  // ============================================================
  masterPlayBtn.addEventListener("click", togglePlayback);

  // Navigation stations (Axe 3)
  if (prevStationBtn) {
    prevStationBtn.addEventListener("click", () => playAdjacentStation(-1));
  }
  if (nextStationBtn) {
    nextStationBtn.addEventListener("click", () => playAdjacentStation(1));
  }

  // Boost sonore (+50%) (Axe 3)
  if (volumeBoostBtn) {
    volumeBoostBtn.addEventListener("click", () => {
      state.isBoosted = !state.isBoosted;
      applyVolumeSettings();
      showToast(state.isBoosted ? "⚡ Boost sonore actif (+50%) !" : "Volume standard rétabli");
    });
  }

  // Normalisation du son dans les paramètres (Axe 3)
  if (normalizerToggle) {
    normalizerToggle.checked = state.isNormalizerOn;
    normalizerToggle.addEventListener("change", (e) => {
      state.isNormalizerOn = e.target.checked;
      localStorage.setItem("piradio_normalizer", state.isNormalizerOn);
      applyVolumeSettings();
      showToast(state.isNormalizerOn ? "🔊 Normalisation sonore activée" : "Normalisation désactivée");
    });
  }

  if (volumeSlider) {
    volumeSlider.addEventListener("input", (e) => {
      state.isBoosted = false;
      applyVolumeSettings();
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
      const qNormalized = q.replace(',', '.').replace(/aeokuta/gi, "abeokuta").replace(/ketou/gi, "kétou");
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
      updateFrequencyChips();
      renderStations();
      if (state.searchQuery.trim().length >= 2) {
        triggerLiveSearch(state.searchQuery);
      }
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
      if ('caches' in window) {
        caches.keys().then(keys => keys.forEach(k => caches.delete(k)));
      }
      alert(TRANSLATIONS[state.lang].cacheCleared);
      location.reload();
    });
  }

  // ============================================================
  // AXE 4 : INSTALLATION PWA & GESTION HORS-LIGNE (APPLICATION MOBILE)
  // ============================================================
  let deferredInstallPrompt = null;

  // Détection de l'événement PWA 'beforeinstallprompt'
  window.addEventListener("beforeinstallprompt", (e) => {
    e.preventDefault();
    deferredInstallPrompt = e;
    if (pwaInstallBtn) pwaInstallBtn.style.display = "inline-flex";
    console.log("[Pi Radio PWA] Invitation d'installation disponible.");
  });

  // Détection quand l'application a été installée avec succès
  window.addEventListener("appinstalled", () => {
    deferredInstallPrompt = null;
    if (pwaInstallBtn) pwaInstallBtn.style.display = "none";
    if (pwaInstalledNotice) pwaInstalledNotice.style.display = "block";
    const t = TRANSLATIONS[state.lang] || TRANSLATIONS.fr;
    showToast(t.pwaAlreadyInstalled || "Application installée avec succès !");
    console.log("[Pi Radio PWA] Application installée sur l'appareil !");
  });

  // Déclenchement de l'installation au clic
  function triggerPwaInstall() {
    if (deferredInstallPrompt) {
      deferredInstallPrompt.prompt();
      deferredInstallPrompt.userChoice.then((choiceResult) => {
        if (choiceResult.outcome === "accepted") {
          console.log("[Pi Radio PWA] Le Pionnier a validé l'installation.");
        } else {
          console.log("[Pi Radio PWA] Installation différée.");
        }
        deferredInstallPrompt = null;
      });
    } else {
      // Détection iOS (Safari)
      const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
      const t = TRANSLATIONS[state.lang] || TRANSLATIONS.fr;
      if (isIOS) {
        alert(t.pwaIosGuide || "Sur iPhone / iPad : Appuyez sur Partager dans Safari, puis 'Sur l'écran d'accueil' ➕.");
      } else {
        showToast(t.pwaAlreadyInstalled || "L'application est déjà prête ou installée sur votre écran d'accueil !");
      }
    }
  }

  if (pwaInstallBtn) {
    pwaInstallBtn.addEventListener("click", triggerPwaInstall);
  }

  // Enregistrement du Service Worker pour le cache et le mode hors-ligne
  if ("serviceWorker" in navigator) {
    window.addEventListener("load", () => {
      navigator.serviceWorker.register("./sw.js")
        .then((reg) => {
          console.log("[Pi Radio SW] Service Worker actif (Axe 4) :", reg.scope);
        })
        .catch((err) => {
          console.warn("[Pi Radio SW] Enregistrement SW non supporté ou erreur :", err);
        });
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

  // Flèche de retour depuis la page des Paramètres vers la radio
  if (backFromSettingsBtn) {
    backFromSettingsBtn.addEventListener("click", () => {
      state.activeTab = "home";
      navTabs.forEach(t => {
        t.classList.toggle("active", t.getAttribute("data-tab") === "home");
      });
      renderView();
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  // Flèche de retour depuis une recherche, un filtre ou une sous-section vers l'accueil
  if (sectionBackBtn) {
    sectionBackBtn.addEventListener("click", () => {
      state.activeTab = "home";
      state.searchQuery = "";
      state.selectedBand = "all";
      state.selectedCountry = "all";
      state.activeContinent = "all";
      if (searchInput) {
        searchInput.value = "";
        clearSearchBtn.style.display = "none";
      }
      if (bandSelect) bandSelect.value = "all";
      if (countrySelect) countrySelect.value = "all";
      navTabs.forEach(t => {
        t.classList.toggle("active", t.getAttribute("data-tab") === "home");
      });
      document.querySelectorAll(".freq-chip").forEach(c => c.classList.remove("active"));
      renderView();
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  // --- INITIALISATION AU DÉMARRAGE ---
  loadSavedStations();
  populateCountryDropdown();
  updateFrequencyChips();
  applyLanguage(state.lang);
});
