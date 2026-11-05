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

  // Badge régional vectoriel de secours officiel (fallback universel garanti)
  function getRegionalFallbackBadge(st) {
    if (!st) return "assets/logos/algerie-radio-badge.svg";
    const cCode = (st.countrycode || "").toUpperCase();
    const c = (st.country || "").toLowerCase();
    const s = (st.state || "").toLowerCase();
    const city = (st.city || "").toLowerCase();
    const n = (st.name || "").toLowerCase();
    const code = st.code || "";

    if (code === "🇨🇦" || cCode === "CA" || c.includes("canada") || n.includes("canada") || city.includes("toronto") || city.includes("montreal")) return "assets/logos/canada-radio-badge.svg";
    if (s.includes("michigan") || n.includes("michigan")) return "assets/logos/michigan-radio-badge.svg";
    if (s.includes("texas") || n.includes("texas")) return "assets/logos/texas-radio-badge.svg";
    if (s.includes("hawaii") || s.includes("hawai") || n.includes("hawaii")) return "assets/logos/hawaii-radio-badge.svg";
    if (s.includes("florida") || s.includes("floride") || n.includes("florida")) return "assets/logos/florida-radio-badge.svg";
    if (city.includes("chicago") || n.includes("chicago")) return "assets/logos/chicago-radio-badge.svg";
    if (code === "🇳🇬" || cCode === "NG" || c.includes("nigeria") || n.includes("nigeria")) return "assets/logos/nigeria-radio-badge.svg";
    if (code === "🇨🇲" || cCode === "CM" || c.includes("cameroun") || c.includes("cameroon")) return "assets/logos/cameroon-radio-badge.svg";
    if (code === "🇸🇳" || cCode === "SN" || c.includes("senegal") || c.includes("sénégal")) return "assets/logos/senegal-radio-badge.svg";
    if (code === "🇧🇯" || cCode === "BJ" || c.includes("benin") || c.includes("bénin")) return "assets/logos/benin-radio-badge.svg";
    if (code === "🇨🇮" || cCode === "CI" || c.includes("cote d") || c.includes("côte d")) return "assets/logos/cote-divoire-radio-badge.svg";
    if (code === "🇬🇭" || cCode === "GH" || c.includes("ghana")) return "assets/logos/ghana-radio-badge.svg";
    if (code === "🇲🇱" || cCode === "ML" || c.includes("mali")) return "assets/logos/mali-radio-badge.svg";
    if (code === "🇳🇪" || cCode === "NE" || c === "niger" || c.includes("the niger")) return "assets/logos/niger-radio-badge.svg";
    if (code === "🇧🇫" || cCode === "BF" || c.includes("burkina")) return "assets/logos/burkina-faso-radio-badge.svg";
    if (code === "🇬🇳" || cCode === "GN" || (c.includes("guinee") && !c.includes("bissau") && !c.includes("equat"))) return "assets/logos/guinee-radio-badge.svg";
    if (code === "🇬🇼" || cCode === "GW" || c.includes("bissau")) return "assets/logos/guinee-bissau-radio-badge.svg";
    if (code === "🇬🇶" || cCode === "GQ" || c.includes("equat") || c.includes("équat")) return "assets/logos/guinee-equatoriale-badge.svg";
    if (code === "🇲🇦" || cCode === "MA" || c.includes("maroc") || c.includes("morocco")) return "assets/logos/maroc-radio-badge.svg";
    if (code === "🇹🇳" || cCode === "TN" || c.includes("tunis")) return "assets/logos/tunisie-radio-badge.svg";
    if (code === "🇩🇿" || cCode === "DZ" || c.includes("alg") || n.includes("alger") || n.includes("beur") || n.includes("maghreb")) return "assets/logos/algerie-radio-badge.svg";
    if (code === "🇿🇦" || cCode === "ZA" || c.includes("south africa") || c.includes("afrique du sud") || n.includes("jacaranda") || n.includes("kaya") || n.includes("metro fm") || n.includes("ukhozi") || n.includes("jozi") || n.includes("hot 102") || n.includes("amapiano") || n.includes("helderberg") || n.includes("bok radio")) return "assets/logos/south-africa-radio-badge.svg";
    if (code === "🇲🇼" || cCode === "MW" || c.includes("malawi") || n.includes("malawi") || city.includes("lilongwe") || city.includes("blantyre")) return "assets/logos/malawi-radio-badge.svg";
    if (code === "🇲🇷" || cCode === "MR" || c.includes("mauritani") || c.includes("mouritani") || n.includes("mauritani") || n.includes("mouritani") || city.includes("nouakchott") || city.includes("nouadhibou")) return "assets/logos/mauritanie-radio-badge.svg";
    if (code === "🇸🇱" || cCode === "SL" || c.includes("sierra leone") || c.includes("serra leone") || n.includes("sierra leone") || n.includes("serra leone") || city.includes("freetown")) return "assets/logos/sierra-leone-radio-badge.svg";

    return getFlagFallback(code);
  }

  // Résolution intelligente du logo : Logo direct local assets/, logos régionaux (Canada, etc.), Favicon Google 128px ou Badge SVG
  function resolveStationLogo(st) {
    const isSocialOrGenericLogo = (url) => {
      if (!url) return false;
      const u = url.toLowerCase();
      return u.includes("facebook.com") || u.includes("fb.com") || u.includes("fbcdn") ||
             u.includes("twitter.com") || u.includes("twimg.com") || u.includes("x.com") ||
             u.includes("instagram.com") || u.includes("youtube.com") || u.includes("ytimg") ||
             u.includes("tiktok.com") || u.includes("linkedin.com") ||
             u.includes("google.com/search") || u.includes("google.com") ||
             u.includes("webrad.io") ||
             u.includes("lwshosting.name") ||
             u.includes("radioking") || u.includes("torontocast") || u.includes("streamguys") ||
             u.includes("zeno.fm") || u.includes("zeno-fm");
    };

    if (st.logo && !st.logo.includes("Flag_of_") && !st.logo.includes("Globe_icon") && !isSocialOrGenericLogo(st.logo)) {
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

    const isChicago = nameLow.includes("chicago") || nameLow.includes("wbez") || nameLow.includes("wfmt") || (stState.includes("illinois") && nameLow.includes("chi"));
    if (isChicago) {
      if (nameLow.includes("wbez")) return "assets/logos/wbez-91-5-chicago.png";
      if (nameLow.includes("wfmt")) return "assets/logos/wfmt-98-7-chicago.png";
      if (nameLow.includes("wls") || nameLow.includes("94.7")) return "assets/logos/wls-94-7-chicago.svg";
      if (nameLow.includes("house")) return "assets/logos/chicago-house-radio.svg";
      if (nameLow.includes("wnua") || nameLow.includes("smooth jazz")) return "assets/logos/smooth-jazz-wnua-chicago.svg";
      return "assets/logos/chicago-radio-badge.svg";
    }

    const isNigeria = (st.code === "🇳🇬") || (st.country && (st.country.toLowerCase().includes("nigeria") || st.country.toLowerCase().includes("nigéria"))) || stState.includes("lagos") || stState.includes("ogun") || stState.includes("oyo") || stState.includes("enugu") || stState.includes("rivers") || stState.includes("abia") || stState.includes("abuja") || nameLow.includes("nigeria") || nameLow.includes("lagos") || nameLow.includes("abuja") || nameLow.includes("ibadan") || nameLow.includes("enugu") || nameLow.includes("abeokuta");
    if (isNigeria) {
      if (nameLow.includes("rfi") && (nameLow.includes("haoussa") || nameLow.includes("hausa"))) return "assets/logos/rfi-haoussa.svg";
      if (nameLow.includes("urban") && (nameLow.includes("enugu") || nameLow.includes("94.5"))) return "assets/logos/urban-radio-enugu.svg";
      if (nameLow.includes("radio east")) return "assets/logos/radio-east-nigeria.svg";
      if (nameLow.includes("inform me")) return "assets/logos/inform-me-radio.svg";
      if (nameLow.includes("lagosjump") || nameLow.includes("lagos jump")) return "assets/logos/lagosjump-radio.svg";
      if (nameLow.includes("crest")) return "assets/logos/crest-fm-ibadan.svg";
      if (nameLow.includes("yes fm") || nameLow.includes("yes 101.7")) return "assets/logos/yes-fm-ibadan.svg";
      if (nameLow.includes("gospotainment")) return "assets/logos/gospotainment-radio.svg";
      if (nameLow.includes("nagari")) return "assets/logos/nagari-radio.svg";
      if (nameLow.includes("radiotiwa") || nameLow.includes("radio tiwa")) return "assets/logos/radiotiwa-nigeria.svg";
      if (nameLow.includes("hod radio") || nameLow.includes("hod")) return "assets/logos/hod-radio-nigeria.svg";
      if (nameLow.includes("splash")) return "assets/logos/splash-fm-nigeria.svg";
      if (nameLow.includes("max fm") || nameLow.includes("102.3")) return "assets/logos/max-fm-lagos.svg";
      if (nameLow.includes("the beat") || nameLow.includes("beat fm") || nameLow.includes("99.9")) return "assets/logos/beat-fm-lagos.svg";
      if (nameLow.includes("classic fm") || nameLow.includes("97.3")) return "assets/logos/classic-fm-lagos.svg";
      if (nameLow.includes("fresh fm") || nameLow.includes("105.9")) return "assets/logos/fresh-fm-ibadan.svg";
      if (nameLow.includes("soundcity")) return "assets/logos/soundcity-fm-lagos.svg";
      if (nameLow.includes("raypower") || nameLow.includes("100.5")) return "assets/logos/raypower-fm-nigeria.svg";
      if (nameLow.includes("metro fm") || nameLow.includes("97.7")) return "assets/logos/metro-fm-lagos.svg";
      if (nameLow.includes("bond fm") || nameLow.includes("92.9")) return "assets/logos/bond-fm-lagos.svg";
      if (nameLow.includes("diamond fm") || nameLow.includes("101.1")) return "assets/logos/diamond-fm-ibadan.svg";
      if (nameLow.includes("cool fm") || nameLow.includes("96.9")) return "assets/logos/cool-fm-lagos.png";
      if (nameLow.includes("wazobia")) return "assets/logos/wazobia-fm-lagos.png";
      if (nameLow.includes("nigeria info") || nameLow.includes("99.3")) return "assets/logos/nigeria-info-lagos.png";
      if (nameLow.includes("rhythm") || nameLow.includes("93.7")) return "assets/logos/rhythm-fm-lagos.png";
      if (nameLow.includes("brila") || nameLow.includes("88.9")) return "assets/logos/brila-fm-lagos.png";
      if (nameLow.includes("vybz") || nameLow.includes("94.5")) return "assets/logos/vybz-fm-lagos.png";
      if (nameLow.includes("eagle 7") || nameLow.includes("103.7")) return "assets/logos/eagle-7-fm-abeokuta.png";
      if (nameLow.includes("ogbc") || nameLow.includes("90.5")) return "assets/logos/ogbc-fm-abeokuta.png";
      if (nameLow.includes("tatafo")) return "assets/logos/tatafo-radio-ogun.jpg";
      if (nameLow.includes("agidigbo") || nameLow.includes("88.7")) return "assets/logos/agidigbo-fm-ibadan.png";
      if (nameLow.includes("1radio") || nameLow.includes("ikwerre")) return "assets/logos/1radio-ikwerre-rivers.svg";
      if (nameLow.includes("bourdex") || nameLow.includes("abiriba")) return "assets/logos/bourdex-fm-abia.svg";
      if (nameLow.includes("kcity")) return "assets/logos/kcity-radio-abuja.svg";
      return "assets/logos/nigeria-radio-badge.svg";
    }

    const isCameroon = (st.code === "🇨🇲") || (st.country && (st.country.toLowerCase().includes("cameroun") || st.country.toLowerCase().includes("cameroon"))) || stState.includes("yaoundé") || stState.includes("yaounde") || stState.includes("douala") || stState.includes("bamenda") || stState.includes("buea") || stState.includes("limbe") || stState.includes("ebolowa") || nameLow.includes("cameroun") || nameLow.includes("cameroon") || nameLow.includes("yaounde") || nameLow.includes("douala") || nameLow.includes("crtv") || nameLow.includes("237");
    if (isCameroon) {
      if (nameLow.includes("crtv") || nameLow.includes("poste national")) return "assets/logos/crtv-poste-national.svg";
      if (nameLow.includes("jambo")) return "assets/logos/jambo-fm-douala.svg";
      if (nameLow.includes("237") || nameLow.includes("onair")) return "assets/logos/237onair-yaounde.svg";
      if (nameLow.includes("camerhits") || nameLow.includes("camer hits")) return "assets/logos/camerhits-radio.svg";
      if (nameLow.includes("bonne nouvelle")) return "assets/logos/radio-bonne-nouvelle.svg";
      if (nameLow.includes("rush fm") || nameLow.includes("104.5") || nameLow.includes("bamenda")) return "assets/logos/rush-fm-bamenda.svg";
      if (nameLow.includes("mmuock")) return "assets/logos/mmuock-community-radio.svg";
      if (nameLow.includes("eternity") || nameLow.includes("limbe")) return "assets/logos/eternity-gospel-radio.svg";
      if (nameLow.includes("voice of the cross") || nameLow.includes("rvc")) return "assets/logos/radio-voice-of-the-cross.svg";
      if (nameLow.includes("glory fm") || nameLow.includes("ebolowa")) return "assets/logos/glory-fm-cameroon.svg";
      if (nameLow.includes("protestant voice")) return "assets/logos/protestant-voice-radio.svg";
      if (nameLow.includes("god's love") || nameLow.includes("gl radio") || nameLow.includes("gospel jamburee") || nameLow.includes("koumé") || nameLow.includes("koume")) return "assets/logos/gl-radio-cameroon.svg";
      if (nameLow.includes("go music")) return "assets/logos/go-music-media.svg";
      if (nameLow.includes("for you")) return "assets/logos/for-you-radio-douala.svg";
      if (nameLow.includes("jesus vient") || nameLow.includes("jésus vient")) return "assets/logos/radio-jesus-vient.svg";
      if (nameLow.includes("ict university") || nameLow.includes("ictu")) return "assets/logos/ictu-radio-yaounde.svg";
      if (nameLow.includes("radio maria")) return "assets/logos/radio-maria-cameroun.png";
      return "assets/logos/cameroon-radio-badge.svg";
    }

    const isSenegal = ((st.code === "🇸🇳") || (st.country && (st.country.toLowerCase().includes("sénégal") || st.country.toLowerCase().includes("senegal"))) || stState.includes("dakar") || stState.includes("thiès") || stState.includes("thies") || stState.includes("kaolack") || stState.includes("ziguinchor") || stState.includes("saint-louis") || stState.includes("matam") || nameLow.includes("sénégal") || nameLow.includes("senegal") || nameLow.includes("dakar") || nameLow.includes("ziguinchor") || nameLow.includes("kaolack") || (nameLow.includes("touba") && !nameLow.includes("madjoura"))) && (st.code !== "🇲🇱") && !(st.country && st.country.toLowerCase().includes("mali"));
    if (isSenegal) {
      if (nameLow.includes("h24")) return "assets/logos/h24-senegal.svg";
      if (nameLow.includes("rfm") || nameLow.includes("futurs medias") || nameLow.includes("futurs médias") || nameLow.includes("94.0")) return "assets/logos/rfm-senegal.svg";
      if (nameLow.includes("zik fm") || nameLow.includes("d-media") || nameLow.includes("89.7")) return "assets/logos/zik-fm-senegal.svg";
      if (nameLow.includes("lamp fall") || nameLow.includes("lampfall") || (nameLow.includes("touba") && !nameLow.includes("madjoura"))) return "assets/logos/lamp-fall-fm.svg";
      if (nameLow.includes("walf") || nameLow.includes("walfadjri") || nameLow.includes("99.0")) return "assets/logos/walf-fm-senegal.svg";
      if (nameLow.includes("rts") || nameLow.includes("rsi") || (nameLow.includes("radio sénégal") && !nameLow.includes("h24"))) return "assets/logos/rts-radio-senegal.svg";
      if (nameLow.includes("sud fm") || nameLow.includes("sen radio")) return "assets/logos/sud-fm-senegal.svg";
      if (nameLow.includes("al fayda") || nameLow.includes("alfayda") || nameLow.includes("kaolack")) return "assets/logos/radio-al-fayda-kaolack.svg";
      if (nameLow.includes("thiossane")) return "assets/logos/radio-thiossane-dakar.svg";
      if (nameLow.includes("zig fm") || nameLow.includes("ziguinchor") || nameLow.includes("kolda")) return "assets/logos/zig-fm-ziguinchor.svg";
      if (nameLow.includes("rewmi") || nameLow.includes("97.5")) return "assets/logos/rewmi-fm-dakar.svg";
      if (nameLow.includes("fulbe") || nameLow.includes("102.6")) return "assets/logos/radio-fulbe-dakar.svg";
      if (nameLow.includes("timtimol") || nameLow.includes("91.9") || nameLow.includes("ourossogui")) return "assets/logos/timtimol-fm-ourossogui.svg";
      if (nameLow.includes("bamtaare") || nameLow.includes("103.4") || nameLow.includes("dodel")) return "assets/logos/bamtaare-fm-dodel.svg";
      if (nameLow.includes("manoore") || nameLow.includes("manooré") || nameLow.includes("89.4")) return "assets/logos/manoore-fm-dakar.svg";
      if (nameLow.includes("dakar musique")) return "assets/logos/dakar-musique.svg";
      if (nameLow.includes("vibe") || nameLow.includes("102.3")) return "assets/logos/vibe-radio-dakar.svg";
      if (nameLow.includes("iradio") || nameLow.includes("e-media") || nameLow.includes("90.3")) return "assets/logos/iradio-senegal.svg";
      return "assets/logos/senegal-radio-badge.svg";
    }

    const isBenin = (st.code === "🇧🇯") || (st.country && (st.country.toLowerCase().includes("bénin") || st.country.toLowerCase().includes("benin"))) || stState.includes("cotonou") || stState.includes("parakou") || stState.includes("littoral") || stState.includes("borgou") || stState.includes("ouémé") || stState.includes("oueme") || stState.includes("porto-novo") || nameLow.includes("bénin") || nameLow.includes("benin") || nameLow.includes("cotonou") || nameLow.includes("parakou") || nameLow.includes("ortb");
    if (isBenin) {
      if (nameLow.includes("cotonou") || nameLow.includes("94.3")) return "assets/logos/radio-cotonou-94-3.svg";
      if (nameLow.includes("parakou") || nameLow.includes("91.4")) return "assets/logos/ortb-radio-parakou.svg";
      if (nameLow.includes("ortb") || nameLow.includes("radio bénin") || nameLow.includes("radio benin") || nameLow.includes("98.2")) return "assets/logos/ortb-radio-benin.svg";
      if (nameLow.includes("tokpa") || nameLow.includes("104.3")) return "assets/logos/radio-tokpa.svg";
      if (nameLow.includes("capp") || nameLow.includes("99.6")) return "assets/logos/capp-fm.svg";
      if (nameLow.includes("immacul") || nameLow.includes("94.0")) return "assets/logos/radio-immaculee-conception.svg";
      if (nameLow.includes("soleil") || nameLow.includes("89.0")) return "assets/logos/soleil-fm-benin.svg";
      if (nameLow.includes("deeman") || nameLow.includes("90.2")) return "assets/logos/deeman-fm-parakou.svg";
      if (nameLow.includes("frisson")) return "assets/logos/frisson-radio-benin.svg";
      return "assets/logos/benin-radio-badge.svg";
    }

    const isCoteIvoire = (st.code === "🇨🇮") || (st.country && (st.country.toLowerCase().includes("ivoire") || st.country.toLowerCase().includes("ivory"))) || stState.includes("abidjan") || stState.includes("yamoussoukro") || stState.includes("bouaké") || stState.includes("bouake") || stState.includes("daloa") || stState.includes("san-pedro") || stState.includes("korhogo") || stState.includes("lagunes") || nameLow.includes("ivoire") || nameLow.includes("ivory") || nameLow.includes("abidjan") || nameLow.includes("yamoussoukro") || nameLow.includes("bouake");
    if (isCoteIvoire) {
      if (nameLow.includes("fréquence 2") || nameLow.includes("frequence 2") || (nameLow.includes("rti") && nameLow.includes("2"))) return "assets/logos/rti-frequence-2.svg";
      if (nameLow.includes("radio côte d'ivoire") || nameLow.includes("radio cote d'ivoire") || (nameLow.includes("rti") && !nameLow.includes("2"))) return "assets/logos/radio-cote-divoire.svg";
      if (nameLow.includes("jam")) return "assets/logos/radio-jam-abidjan.svg";
      if (nameLow.includes("alpha blondy") || nameLow.includes("blondy")) return "assets/logos/alpha-blondy-fm.svg";
      if (nameLow.includes("africa radio")) return "assets/logos/africa-radio-abidjan.svg";
      if (nameLow.includes("hit radio")) return "assets/logos/hit-radio-ci.svg";
      if (nameLow.includes("life radio") || nameLow.includes("life")) return "assets/logos/life-radio-ci.svg";
      if (nameLow.includes("bayane") || nameLow.includes("al bayane")) return "assets/logos/radio-al-bayane-ci.svg";
      if (nameLow.includes("nostalgie")) return "assets/logos/nostalgie-ci.svg";
      if (nameLow.includes("trace")) return "assets/logos/trace-fm-ci.svg";
      if (nameLow.includes("skyrock")) return "assets/logos/skyrock-abidjan.svg";
      if (nameLow.includes("paix")) return "assets/logos/radio-de-la-paix.svg";
      if (nameLow.includes("espoir")) return "assets/logos/radio-espoir-ci.svg";
      if (nameLow.includes("catholique") || nameLow.includes("rnc") || nameLow.includes("évangile") || nameLow.includes("evangile")) return "assets/logos/radio-nationale-catholique.svg";
      if (nameLow.includes("daloa")) return "assets/logos/radio-daloa-fm.svg";
      if (nameLow.includes("gbêkê") || nameLow.includes("gbeke")) return "assets/logos/gbeke-fm-bouake.svg";
      if (nameLow.includes("guémon") || nameLow.includes("guemon")) return "assets/logos/guemon-fm.svg";
      if (nameLow.includes("attécoubé") || nameLow.includes("attecoube")) return "assets/logos/attecoube-fm.svg";
      if (nameLow.includes("fer fm") || nameLow.includes("fer")) return "assets/logos/fer-fm-ci.svg";
      return "assets/logos/cote-divoire-radio-badge.svg";
    }

    const isGhana = (st.code === "🇬🇭") || (st.country && st.country.toLowerCase().includes("ghana")) || stState.includes("accra") || stState.includes("kumasi") || stState.includes("ashanti") || stState.includes("tema") || stState.includes("tamale") || stState.includes("takoradi") || stState.includes("cape coast") || nameLow.includes("ghana") || nameLow.includes("accra") || nameLow.includes("kumasi");
    if (isGhana) {
      if (nameLow.includes("joy fm") || nameLow.includes("joy 99.7") || (nameLow.includes("joy") && !nameLow.includes("enjoy"))) return "assets/logos/joy-fm-ghana.svg";
      if (nameLow.includes("citi") || nameLow.includes("97.3")) return "assets/logos/citi-fm-ghana.svg";
      if (nameLow.includes("peace fm") || nameLow.includes("peace 104.3") || nameLow.includes("peacefm")) return "assets/logos/peace-fm-ghana.svg";
      if (nameLow.includes("adom") || nameLow.includes("106.3")) return "assets/logos/adom-fm-ghana.svg";
      if (nameLow.includes("yfm") || nameLow.includes("y fm") || nameLow.includes("107.9")) return "assets/logos/yfm-ghana.svg";
      if (nameLow.includes("asempa") || nameLow.includes("94.7")) return "assets/logos/asempa-fm-ghana.svg";
      if (nameLow.includes("oman") || nameLow.includes("107.1")) return "assets/logos/oman-fm-ghana.svg";
      if (nameLow.includes("angel") || nameLow.includes("102.9")) return "assets/logos/angel-fm-ghana.svg";
      if (nameLow.includes("happy") || nameLow.includes("98.9")) return "assets/logos/happy-fm-ghana.svg";
      if (nameLow.includes("sunny") || nameLow.includes("88.7")) return "assets/logos/sunny-fm-ghana.svg";
      if (nameLow.includes("okay") || nameLow.includes("101.7")) return "assets/logos/okay-fm-ghana.svg";
      if (nameLow.includes("asaase") || nameLow.includes("99.5")) return "assets/logos/asaase-radio-ghana.svg";
      if (nameLow.includes("starr") || nameLow.includes("103.5")) return "assets/logos/starr-fm-ghana.svg";
      if (nameLow.includes("class fm") || nameLow.includes("class 91.3") || nameLow.includes("classfm")) return "assets/logos/class-fm-ghana.svg";
      if (nameLow.includes("ghana waves") || nameLow.includes("ghanawaves")) return "assets/logos/ghana-waves-radio.svg";
      if (nameLow.includes("agoo") || nameLow.includes("96.9")) return "assets/logos/agoo-fm-ghana.svg";
      if (nameLow.includes("ahotor") || nameLow.includes("92.3")) return "assets/logos/ahotor-fm-ghana.svg";
      if (nameLow.includes("atinka") || nameLow.includes("104.7")) return "assets/logos/atinka-fm-ghana.svg";
      return "assets/logos/ghana-radio-badge.svg";
    }

    const isMali = (st.code === "🇲🇱") || (st.country && st.country.toLowerCase().includes("mali")) || stState.includes("bamako") || stState.includes("sikasso") || stState.includes("kayes") || stState.includes("mopti") || stState.includes("segou") || stState.includes("ségou") || stState.includes("gao") || stState.includes("tombouctou") || stState.includes("koulikoro") || nameLow.includes("mali") || nameLow.includes("bamako") || nameLow.includes("bougouni");
    if (isMali) {
      if (nameLow.includes("kledu") || nameLow.includes("klédu")) return "assets/logos/radio-kledu.svg";
      if (nameLow.includes("noura")) return "assets/logos/noura-fm-bamako.svg";
      if (nameLow.includes("bougouni") || nameLow.includes("kunkan")) return "assets/logos/radio-bougouni-kunkan.svg";
      if (nameLow.includes("kassara") || nameLow.includes("barikama")) return "assets/logos/radio-kassara-kayes.svg";
      if (nameLow.includes("malijet")) return "assets/logos/radio-malijet.svg";
      if (nameLow.includes("neneba") || nameLow.includes("nénèba") || nameLow.includes("markala")) return "assets/logos/radio-neneba-fm.svg";
      if (nameLow.includes("tissa") || nameLow.includes("mamelon")) return "assets/logos/radio-tissa-mamelon.svg";
      if (nameLow.includes("kalux")) return "assets/logos/kalux-fm-bamako.svg";
      if (nameLow.includes("woyowayanko")) return "assets/logos/radio-woyowayanko.svg";
      if (nameLow.includes("yele") || nameLow.includes("yélé") || nameLow.includes("sagabali") || nameLow.includes("beledougou") || nameLow.includes("bélédougou")) return "assets/logos/radio-yele-sagabali.svg";
      if (nameLow.includes("madjoura") || nameLow.includes("touba")) return "assets/logos/radio-madjoura-touba.svg";
      if (nameLow.includes("joliba") || nameLow.includes("djoliba")) return "assets/logos/joliba-fm-mali.svg";
      if (nameLow.includes("bamakan")) return "assets/logos/radio-bamakan.svg";
      if (nameLow.includes("dambe") || nameLow.includes("dambé")) return "assets/logos/radio-dambe-mali.svg";
      if (nameLow.includes("ortm") || nameLow.includes("chaine 2") || nameLow.includes("chaîne 2")) return "assets/logos/ortm-chaine2-mali.svg";
      return "assets/logos/mali-radio-badge.svg";
    }

    const isNiger = (st.code === "🇳🇪") || (st.country && (st.country.toLowerCase() === "the niger" || st.country.toLowerCase() === "niger")) || stState.includes("niamey") || stState.includes("maradi") || stState.includes("zinder") || stState.includes("tahoua") || stState.includes("agadez") || stState.includes("dosso") || stState.includes("diffa") || stState.includes("tillaberi") || stState.includes("tillabéri") || nameLow.includes("niamey") || nameLow.includes("wadata") || nameLow.includes("gaskia") || nameLow.includes("garkuwa") || (nameLow.includes("dallol") && !nameLow.includes("texas"));
    if (isNiger) {
      if (nameLow.includes("wadata")) return "assets/logos/wadata-radio-niger.svg";
      if (nameLow.includes("gaskia")) return "assets/logos/radio-gaskia-niger.svg";
      if (nameLow.includes("garkuwa")) return "assets/logos/radio-garkuwa-niger.svg";
      if (nameLow.includes("dallol")) return "assets/logos/radio-dallol-niger.svg";
      if (nameLow.includes("mudubar")) return "assets/logos/mudubar-radio-niger.svg";
      if (nameLow.includes("sahel") || nameLow.includes("rtn") || nameLow.includes("voix du sahel")) return "assets/logos/voix-du-sahel-niger.svg";
      if (nameLow.includes("anfani")) return "assets/logos/radio-anfani-niger.svg";
      if (nameLow.includes("saraounia")) return "assets/logos/radio-saraounia-niger.svg";
      if (nameLow.includes("kalangou")) return "assets/logos/studio-kalangou-niger.svg";
      if (nameLow.includes("bonferey")) return "assets/logos/radio-bonferey-niger.svg";
      return "assets/logos/niger-radio-badge.svg";
    }

    const isBurkina = (st.code === "🇧🇫") || (st.country && st.country.toLowerCase().includes("burkina")) || stState.includes("ouaga") || stState.includes("bobo") || stState.includes("koudougou") || stState.includes("banfora") || stState.includes("ouahigouya") || nameLow.includes("burkina") || nameLow.includes("ouaga") || nameLow.includes("bobo") || nameLow.includes("koudougou") || nameLow.includes("balafon") || nameLow.includes("bizi") || nameLow.includes("biwi");
    if (isBurkina) {
      if (nameLow.includes("horizon") && nameLow.includes("koudougou")) return "assets/logos/horizon-fm-koudougou.svg";
      if (nameLow.includes("horizon")) return "assets/logos/horizon-fm-ouaga.svg";
      if (nameLow.includes("balafon")) return "assets/logos/radio-balafon-bobo.svg";
      if (nameLow.includes("bizi") || nameLow.includes("biwi")) return "assets/logos/radio-bizi-inter.svg";
      if (nameLow.includes("omega") || nameLow.includes("oméga")) return "assets/logos/radio-omega-burkina.svg";
      if (nameLow.includes("pulsar")) return "assets/logos/radio-pulsar-ouaga.svg";
      if (nameLow.includes("savane")) return "assets/logos/savane-fm-burkina.svg";
      if (nameLow.includes("rtb")) return "assets/logos/rtb-radio-burkina.svg";
      if (nameLow.includes("ouaga fm")) return "assets/logos/ouaga-fm-burkina.svg";
      if (nameLow.includes("maria")) return "assets/logos/radio-maria-burkina.svg";
      if (nameLow.includes("legende") || nameLow.includes("légende")) return "assets/logos/radio-legende-ouaga.svg";
      return "assets/logos/burkina-faso-radio-badge.svg";
    }

    const isGuinee = (st.code === "🇬🇳") || 
      ((st.country || "").toLowerCase().includes("guinea") && !(st.country || "").toLowerCase().includes("bissau") && !(st.country || "").toLowerCase().includes("equat")) ||
      ((st.country || "").toLowerCase().includes("guinée") && !(st.country || "").toLowerCase().includes("bissau") && !(st.country || "").toLowerCase().includes("équat")) ||
      stState.includes("conakry") || stState.includes("kindia") || stState.includes("kankan") || stState.includes("labé") || stState.includes("nzérékoré") ||
      nameLow.includes("conakry") || (nameLow.includes("guinée") && !nameLow.includes("bissau") && !nameLow.includes("équat")) || (nameLow.includes("guinee") && !nameLow.includes("bissau") && !nameLow.includes("equat"));
    if (isGuinee) {
      if (nameLow.includes("espace")) return "assets/logos/espace-fm-guinee.svg";
      if (nameLow.includes("bonheur")) return "assets/logos/bonheur-fm-guinee.svg";
      if (nameLow.includes("littoral")) return "assets/logos/littoral-fm-guinee.svg";
      if (nameLow.includes("lgf fun") || nameLow.includes("lgf-fun") || (nameLow.includes("lgf") && nameLow.includes("fun"))) return "assets/logos/lgf-fun-guinee.svg";
      if (nameLow.includes("lgf talk") || nameLow.includes("lgf-talk") || (nameLow.includes("lgf") && nameLow.includes("talk"))) return "assets/logos/lgf-talk-guinee.svg";
      if (nameLow.includes("afrionde")) return "assets/logos/afrionde-conakry.svg";
      if (nameLow.includes("rtg") || nameLow.includes("koloma")) return "assets/logos/rtg-radio-guinee.svg";
      return "assets/logos/guinee-radio-badge.svg";
    }

    const isGuineeBissau = (st.code === "🇬🇼") ||
      (st.country || "").toLowerCase().includes("bissau") ||
      stState.includes("bissau") || nameLow.includes("bissau") || nameLow.includes("voz da guiné") || nameLow.includes("voz da guine");
    if (isGuineeBissau) {
      if (nameLow.includes("esperança") || nameLow.includes("esperanca")) return "assets/logos/radio-esperanca-bissau.svg";
      if (nameLow.includes("voz da guin") || nameLow.includes("voz da guiné")) return "assets/logos/radio-voz-da-guine.svg";
      return "assets/logos/guinee-bissau-radio-badge.svg";
    }

    const isGuineeEquatoriale = (st.code === "🇬🇶") ||
      (st.country || "").toLowerCase().includes("equatorial") || (st.country || "").toLowerCase().includes("équatoriale") || (st.country || "").toLowerCase().includes("ecuatorial") ||
      stState.includes("malabo") || stState.includes("bioko") || stState.includes("bata") || nameLow.includes("malabo") || nameLow.includes("rnge");
    if (isGuineeEquatoriale) {
      if (nameLow.includes("rnge") || nameLow.includes("nacional")) return "assets/logos/rnge-radio-malabo.svg";
      return "assets/logos/guinee-equatoriale-badge.svg";
    }

    const isMaroc = (st.code === "🇲🇦") || (st.country && (st.country.toLowerCase().includes("maroc") || st.country.toLowerCase().includes("morocco"))) ||
      stState.includes("casablanca") || stState.includes("rabat") || stState.includes("marrakech") || stState.includes("fès") || stState.includes("fes") || stState.includes("tanger") || stState.includes("agadir") || stState.includes("oujda") ||
      nameLow.includes("maroc") || nameLow.includes("morocco") || nameLow.includes("casablanca") || nameLow.includes("rabat") || nameLow.includes("marrakech") || nameLow.includes("tanger") || nameLow.includes("agadir");
    if (isMaroc) {
      if (nameLow.includes("medi 1") || nameLow.includes("medi1")) return "assets/logos/medi1-radio-maroc.svg";
      if (nameLow.includes("hit radio")) return "assets/logos/hit-radio-maroc.svg";
      if (nameLow.includes("2m")) return "assets/logos/radio-2m-maroc.svg";
      if (nameLow.includes("mars")) return "assets/logos/radio-mars-maroc.svg";
      if (nameLow.includes("aswat")) return "assets/logos/radio-aswat-maroc.svg";
      if (nameLow.includes("mfm")) return "assets/logos/radio-mfm-maroc.svg";
      if (nameLow.includes("atlantic")) return "assets/logos/atlantic-radio-maroc.svg";
      if (nameLow.includes("chada")) return "assets/logos/chada-fm-maroc.svg";
      if (nameLow.includes("medina")) return "assets/logos/medina-fm-maroc.svg";
      if (nameLow.includes("cap")) return "assets/logos/cap-radio-maroc.svg";
      if (nameLow.includes("plus") && !nameLow.includes("yan")) return "assets/logos/radio-plus-maroc.svg";
      if (nameLow.includes("bldi") || nameLow.includes("beldi") || nameLow.includes("bladi")) return "assets/logos/bldi-radio-maroc.svg";
      if (nameLow.includes("rai") || nameLow.includes("raï")) return "assets/logos/only-rai-radio.svg";
      if (nameLow.includes("fayroz") || nameLow.includes("fairouz") || nameLow.includes("fayrouz")) return "assets/logos/radio-fayrouz-maroc.svg";
      if (nameLow.includes("manarat")) return "assets/logos/radio-manarat-maroc.svg";
      if (nameLow.includes("amal")) return "assets/logos/radio-sawt-alamal.svg";
      if (nameLow.includes("adwaa")) return "assets/logos/radio-adwaa-maroc.svg";
      if (nameLow.includes("achkid")) return "assets/logos/radio-achkid-fm.svg";
      if (nameLow.includes("yan plus")) return "assets/logos/radio-yan-plus.svg";
      if (nameLow.includes("hip hop") || nameLow.includes("soul")) return "assets/logos/hip-hop-soul-maroc.svg";
      return "assets/logos/maroc-radio-badge.svg";
    }

    const isTunisie = (st.code === "🇹🇳") || (st.country && st.country.toLowerCase().includes("tunis")) ||
      stState.includes("tunis") || stState.includes("sfax") || stState.includes("sousse") || stState.includes("kairouan") || stState.includes("bizerte") || stState.includes("monastir") || stState.includes("gafsa") || stState.includes("tataouine") || stState.includes("kef") ||
      nameLow.includes("tunis") || nameLow.includes("sfax") || nameLow.includes("sousse") || nameLow.includes("kairouan") || nameLow.includes("bizerte") || nameLow.includes("monastir");
    if (isTunisie) {
      if (nameLow.includes("mosaique") || nameLow.includes("mosaïque") || nameLow.includes("mosalive") || nameLow.includes("mosat")) return "assets/logos/mosaique-fm-tunisie.svg";
      if (nameLow.includes("jawhara")) return "assets/logos/jawhara-fm-tunisie.svg";
      if (nameLow.includes("diwan")) return "assets/logos/diwan-fm-tunisie.svg";
      if (nameLow.includes("express")) return "assets/logos/express-fm-tunisie.svg";
      if (nameLow.includes("nationale")) return "assets/logos/radio-nationale-tunisie.svg";
      if (nameLow.includes("jeunes") || nameLow.includes("jeune")) return "assets/logos/radio-jeunes-tunisie.svg";
      if (nameLow.includes("rtci")) return "assets/logos/rtci-radio-tunisie.svg";
      if (nameLow.includes("sabra")) return "assets/logos/sabra-fm-tunisie.svg";
      if (nameLow.includes("zitouna") || nameLow.includes("zaitouna")) return "assets/logos/zitouna-fm-tunisie.svg";
      if (nameLow.includes("knooz")) return "assets/logos/knooz-fm-tunisie.svg";
      if (nameLow.includes("oxygene") || nameLow.includes("oxygène")) return "assets/logos/oxygene-fm-tunisie.svg";
      if (nameLow.includes("misk")) return "assets/logos/radio-misk-tunisie.svg";
      if (nameLow.includes("sfax")) return "assets/logos/radio-sfax-tunisie.svg";
      if (nameLow.includes("monastir")) return "assets/logos/radio-monastir-tunisie.svg";
      if (nameLow.includes("hayet") || nameLow.includes("alhayet")) return "assets/logos/alhayet-fm-tunisie.svg";
      if (nameLow.includes("babnet")) return "assets/logos/babnet-tunisie.svg";
      return "assets/logos/tunisie-radio-badge.svg";
    }

    const isAlgerie = (cCode === "DZ") || (st.code === "🇩🇿") || (st.country && st.country.toLowerCase().includes("alg")) ||
      stState.includes("alger") || stState.includes("oran") || stState.includes("constantine") || stState.includes("tizi") || stState.includes("setif") || stState.includes("annaba") || stState.includes("tlemcen") || stState.includes("batna") || stState.includes("bejaia") || stState.includes("biskra") ||
      nameLow.includes("algerie") || nameLow.includes("algérie") || nameLow.includes("algeria") || nameLow.includes("alger") || (!nameLow.includes("coran") && (nameLow.includes(" oran") || nameLow.includes("oran ") || nameLow.includes("radio oran"))) || nameLow.includes("constantine") || nameLow.includes("tizi ouzou") || nameLow.includes("beur fm") || nameLow.includes("france maghreb") || nameLow.includes("hits 1");
    if (isAlgerie) {
      if (nameLow.includes("chaine 3") || nameLow.includes("chaîne 3") || nameLow.includes("ch-3") || nameLow.includes("ch3")) return "assets/logos/algerie-chaine-3.svg";
      if (nameLow.includes("chaine 1") || nameLow.includes("chaîne 1") || nameLow.includes("ch-1") || nameLow.includes("ch1") || nameLow.includes("الأولى")) return "assets/logos/algerie-chaine-1.svg";
      if (nameLow.includes("chaine 2") || nameLow.includes("chaîne 2") || nameLow.includes("ch-2") || nameLow.includes("ch2") || nameLow.includes("الثانية") || nameLow.includes("tamazi")) return "assets/logos/algerie-chaine-2.svg";
      if (nameLow.includes("internationale") || nameLow.includes("rai") || nameLow.includes("الدولية")) return "assets/logos/algerie-internationale.svg";
      if (nameLow.includes("coran") || nameLow.includes("القرآن") || nameLow.includes("quran") || nameLow.includes("sahabah") || nameLow.includes("siyra") || nameLow.includes("recitation")) return "assets/logos/algerie-coran.svg";
      if (nameLow.includes("culture") || nameLow.includes("الثقافة")) return "assets/logos/algerie-culture.svg";
      if (nameLow.includes("jil fm") || nameLow.includes("jil") || nameLow.includes("jeunesse")) return "assets/logos/jil-fm-algerie.svg";
      if (nameLow.includes("bahdja") || nameLow.includes("البهجة")) return "assets/logos/el-bahdja-alger.svg";
      if (nameLow.includes("zaman") || nameLow.includes("zmen") || nameLow.includes("زمان")) return "assets/logos/zaman-fm-algerie.svg";
      if (nameLow.includes("france maghreb") || nameLow.includes("maghreb 2")) return "assets/logos/france-maghreb-2.svg";
      if (nameLow.includes("beur fm") || nameLow.includes("beur")) return "assets/logos/beur-fm-algerie.svg";
      if (nameLow.includes("hits 1") || nameLow.includes("hits1")) return "assets/logos/hits1-algerie.svg";
      if (nameLow.includes("antinea")) return "assets/logos/antinea-radio.svg";
      if ((!nameLow.includes("coran") && (nameLow.includes("oran") || nameLow.includes("وهران")))) return "assets/logos/radio-oran-algerie.svg";
      if (nameLow.includes("constantine") || nameLow.includes("قسنطينة") || nameLow.includes("cirta")) return "assets/logos/radio-constantine.svg";
      if (nameLow.includes("tizi") || nameLow.includes("تيزي")) return "assets/logos/radio-tizi-ouzou.svg";
      if (nameLow.includes("annaba") || nameLow.includes("عنابة")) return "assets/logos/radio-annaba.svg";
      if (nameLow.includes("setif") || nameLow.includes("سطيف")) return "assets/logos/radio-setif.svg";
      return "assets/logos/algerie-radio-badge.svg";
    }

    const isSouthAfrica = (cCode === "ZA") || (st.code === "🇿🇦") || (st.country && (st.country.toLowerCase().includes("south africa") || st.country.toLowerCase().includes("afrique du sud"))) ||
      stState.includes("gauteng") || stState.includes("western cape") || stState.includes("kwazulu") || stState.includes("durban") || stState.includes("johannesburg") || stState.includes("cape") ||
      nameLow.includes("south africa") || nameLow.includes("afrique du sud") || nameLow.includes("jacaranda") || nameLow.includes("metro fm") || nameLow.includes("ukhozi") || nameLow.includes("5fm") || nameLow.includes("kaya") || nameLow.includes("east coast") || nameLow.includes("jozi") || nameLow.includes("hot 102") || nameLow.includes("amapiano") || nameLow.includes("helderberg") || nameLow.includes("bok radio");
    if (isSouthAfrica) {
      if (nameLow.includes("jacaranda") || nameLow.includes("jakaranda")) return "assets/logos/jacaranda-fm-sa.svg";
      if (nameLow.includes("metro fm") || nameLow.includes("metrofm") || nameLow.includes("metro")) return "assets/logos/metro-fm-sa.svg";
      if (nameLow.includes("ukhozi")) return "assets/logos/ukhozi-fm-sa.svg";
      if (nameLow.includes("5fm") || nameLow.includes("5 fm")) return "assets/logos/5fm-radio-sa.svg";
      if (nameLow.includes("kaya")) return "assets/logos/kaya-fm-sa.svg";
      if (nameLow.includes("east coast") || nameLow.includes("ecr")) return "assets/logos/east-coast-radio-sa.svg";
      if (nameLow.includes("kfm")) return "assets/logos/kfm-cape-town-sa.svg";
      if (nameLow.includes("jozi")) return "assets/logos/jozi-fm-sa.svg";
      if (nameLow.includes("hot 102") || nameLow.includes("hot102")) return "assets/logos/hot-1027-fm-sa.svg";
      if (nameLow.includes("joy gospel") || nameLow.includes("joy")) return "assets/logos/joy-gospel-radio-sa.svg";
      if (nameLow.includes("amapiano")) return "assets/logos/amapiano-fm-sa.svg";
      if (nameLow.includes("702")) return "assets/logos/radio-702-sa.svg";
      if (nameLow.includes("power") || nameLow.includes("98.7")) return "assets/logos/power-fm-sa.svg";
      if (nameLow.includes("capetalk") || nameLow.includes("cape talk")) return "assets/logos/capetalk-sa.svg";
      if (nameLow.includes("helderberg")) return "assets/logos/helderberg-fm-sa.svg";
      if (nameLow.includes("bok radio") || nameLow.includes("bok")) return "assets/logos/bok-radio-sa.svg";
      if (nameLow.includes("mix fm") || nameLow.includes("mix 93")) return "assets/logos/mix-fm-sa.svg";
      if (nameLow.includes("good hope") || nameLow.includes("goodhope")) return "assets/logos/good-hope-fm-sa.svg";
      return "assets/logos/south-africa-radio-badge.svg";
    }

    const isMalawi = (cCode === "MW") || (st.code === "🇲🇼") || (st.country && st.country.toLowerCase().includes("malawi")) ||
      stState.includes("lilongwe") || stState.includes("blantyre") || stState.includes("zomba") || stState.includes("mzuzu") ||
      nameLow.includes("malawi") || nameLow.includes("zodiak") || nameLow.includes("times radio") || nameLow.includes("radio islam") || nameLow.includes("groove 100") || nameLow.includes("groove100") || nameLow.includes("kuwala") || nameLow.includes("mzati") || nameLow.includes("twr") || nameLow.includes("amaryllis") || nameLow.includes("kasupe") || nameLow.includes("chanco");
    if (isMalawi) {
      if (nameLow.includes("times")) return "assets/logos/times-radio-malawi.svg";
      if (nameLow.includes("zodiak") || nameLow.includes("zbs")) return "assets/logos/zbs-zodiak-malawi.svg";
      if (nameLow.includes("islam")) return "assets/logos/radio-islam-malawi.svg";
      if (nameLow.includes("groove")) return "assets/logos/groove100-malawi.svg";
      if (nameLow.includes("kuwala")) return "assets/logos/kuwala-fm-malawi.svg";
      if (nameLow.includes("mzati")) return "assets/logos/mzati-radio-malawi.svg";
      if (nameLow.includes("twr") || nameLow.includes("trans world")) return "assets/logos/twr-malawi.svg";
      if (nameLow.includes("amaryllis")) return "assets/logos/amaryllis-radio-malawi.svg";
      if (nameLow.includes("kasupe")) return "assets/logos/kasupe-radio-malawi.svg";
      if (nameLow.includes("chanco")) return "assets/logos/chanco-radio-malawi.svg";
      return "assets/logos/malawi-radio-badge.svg";
    }

    const isMauritanie = (cCode === "MR") || (st.code === "🇲🇷") || (st.country && (st.country.toLowerCase().includes("mauritani") || st.country.toLowerCase().includes("mouritani"))) ||
      stState.includes("nouakchott") || stState.includes("nouadhibou") || stState.includes("zouerat") || stState.includes("tiris") ||
      nameLow.includes("mauritani") || nameLow.includes("mouritani") || nameLow.includes("nouakchott") || nameLow.includes("nouadhibou") || nameLow.includes("zouerate") || nameLow.includes("موريتانيا") || nameLow.includes("القرآن الكريم");
    if (isMauritanie) {
      if (nameLow.includes("coran") || nameLow.includes("quran") || nameLow.includes("قرآن") || nameLow.includes("alkran")) return "assets/logos/radio-coran-mauritanie.svg";
      if (nameLow.includes("nouadhibou") || nameLow.includes("نواذيبو")) return "assets/logos/radio-nouadhibou-mr.svg";
      if (nameLow.includes("zouerat") || nameLow.includes("zouerate") || nameLow.includes("ازويرات")) return "assets/logos/radio-zouerate-mr.svg";
      if (nameLow.includes("mauritanie") || nameLow.includes("mauritania") || nameLow.includes("موريتانيا") || nameLow.includes("radioma")) return "assets/logos/radio-mauritanie.svg";
      return "assets/logos/mauritanie-radio-badge.svg";
    }

    const isSierraLeone = (cCode === "SL") || (st.code === "🇸🇱") || (st.country && (st.country.toLowerCase().includes("sierra leone") || st.country.toLowerCase().includes("serra leone"))) ||
      stState.includes("freetown") || stState.includes("koidu") || stState.includes("bo") || stState.includes("kenema") || stState.includes("makeni") ||
      nameLow.includes("sierra leone") || nameLow.includes("serra leone") || nameLow.includes("capital radio") || nameLow.includes("star radio") || nameLow.includes("fop radio") || nameLow.includes("binkongoh") || nameLow.includes("fusionsound");
    if (isSierraLeone) {
      if (nameLow.includes("capital")) return "assets/logos/capital-radio-sierra-leone.svg";
      if (nameLow.includes("star")) return "assets/logos/star-radio-sierra-leone.svg";
      if (nameLow.includes("fop")) return "assets/logos/fop-radio-sierra-leone.svg";
      if (nameLow.includes("binkongoh")) return "assets/logos/radio-binkongoh-sl.svg";
      if (nameLow.includes("fusion")) return "assets/logos/fusionsound-radio-sl.svg";
      return "assets/logos/sierra-leone-radio-badge.svg";
    }

    const domain = st.homepage ? getDomainFromUrl(st.homepage) : "";
    if (domain && !isSocialOrGenericLogo(domain)) {
      return `https://t0.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=http://${domain}&size=128`;
    }
    if (isCanada) return "assets/logos/canada-radio-badge.svg";
    if (isMichigan) return "assets/logos/michigan-radio-badge.svg";
    if (isTexas) return "assets/logos/texas-radio-badge.svg";
    if (isHawaii) return "assets/logos/hawaii-radio-badge.svg";
    if (isFlorida) return "assets/logos/florida-radio-badge.svg";
    if (isChicago) return "assets/logos/chicago-radio-badge.svg";
    if (isNigeria) return "assets/logos/nigeria-radio-badge.svg";
    if (isCameroon) return "assets/logos/cameroon-radio-badge.svg";
    if (isSenegal) return "assets/logos/senegal-radio-badge.svg";
    if (isBenin) return "assets/logos/benin-radio-badge.svg";
    if (isCoteIvoire) return "assets/logos/cote-divoire-radio-badge.svg";
    if (isGhana) return "assets/logos/ghana-radio-badge.svg";
    if (isMali) return "assets/logos/mali-radio-badge.svg";
    if (isNiger) return "assets/logos/niger-radio-badge.svg";
    if (isBurkina) return "assets/logos/burkina-faso-radio-badge.svg";
    if (isGuinee) return "assets/logos/guinee-radio-badge.svg";
    if (isGuineeBissau) return "assets/logos/guinee-bissau-radio-badge.svg";
    if (isGuineeEquatoriale) return "assets/logos/guinee-equatoriale-badge.svg";
    if (isMaroc) return "assets/logos/maroc-radio-badge.svg";
    if (isTunisie) return "assets/logos/tunisie-radio-badge.svg";
    if (isAlgerie) return "assets/logos/algerie-radio-badge.svg";
    if (isSouthAfrica) return "assets/logos/south-africa-radio-badge.svg";
    if (isMalawi) return "assets/logos/malawi-radio-badge.svg";
    if (isMauritanie) return "assets/logos/mauritanie-radio-badge.svg";
    if (isSierraLeone) return "assets/logos/sierra-leone-radio-badge.svg";
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
  // Normalisation intelligente pour la déduplication sans faille
  function normalizeForDedup(name) {
    return (name || "").toLowerCase()
      .normalize("NFD").replace(/[\u0300-\u036f]/g, "")
      .replace(/[\(\)\[\]\-–—•\.\,\/\\]/g, " ")
      .replace(/\s+/g, " ")
      .replace(/\b(la nationale|nationale|radio|fm|am|station|live|officiel|official|web)\b/g, "")
      .replace(/\s+/g, " ")
      .trim();
  }

  function getCleanStreamUrl(url) {
    if (!url) return "";
    return url.trim().toLowerCase()
      .replace(/^https?:\/\//, "")
      .replace(/\?.*$/, "")
      .replace(/\/+$/, "");
  }

  function deduplicateStationList(curatedList, dynamicList) {
    const seenIds = new Set();
    const seenUrls = new Set();
    const seenItems = [];
    const result = [];

    // Priorité absolue aux stations officielles vérifiées (curated)
    for (const st of (curatedList || [])) {
      seenIds.add(st.id);
      const url = getCleanStreamUrl(st.streamUrl);
      if (url) seenUrls.add(url);
      const norm = normalizeForDedup(st.name);
      const country = (st.country || "").toLowerCase().trim();
      if (norm) seenItems.push({ norm, country, id: st.id });
      result.push(st);
    }

    // Ajout des stations dynamiques uniquement si elles ne doublent pas une station officielle
    for (const st of (dynamicList || [])) {
      if (seenIds.has(st.id)) continue;
      const url = getCleanStreamUrl(st.streamUrl);
      if (url && seenUrls.has(url)) continue;

      const norm = normalizeForDedup(st.name);
      const country = (st.country || "").toLowerCase().trim();

      // Vérification de collision de nom dans le même pays
      let isDuplicateName = false;
      if (norm && norm.length >= 4) {
        for (const item of seenItems) {
          const sameCountry = !item.country || !country || item.country === country;
          if (sameCountry) {
            if (item.norm === norm || (item.norm.length >= 6 && norm.length >= 6 && (item.norm.includes(norm) || norm.includes(item.norm)))) {
              isDuplicateName = true;
              break;
            }
          }
        }
      }
      if (isDuplicateName) continue;

      seenIds.add(st.id);
      if (url) seenUrls.add(url);
      if (norm) seenItems.push({ norm, country, id: st.id });
      result.push(st);
    }
    return result;
  }

  function getFilteredList() {
    let list = deduplicateStationList(state.stations, state.apiStations);
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
    const fallbackLogo = getRegionalFallbackBadge(st);
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
    const fallbackLogo = getRegionalFallbackBadge(station);
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
        const combined = deduplicateStationList([...state.stations, ...state.apiStations], results);
        const existingMap = new Set([...state.stations.map(s => s.id), ...state.apiStations.map(s => s.id)]);
        const fresh = combined.filter(s => !existingMap.has(s.id));
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
          const combined = deduplicateStationList([...state.stations, ...state.apiStations], results);
          const existingMap = new Set([...state.stations.map(s => s.id), ...state.apiStations.map(s => s.id)]);
          const fresh = combined.filter(s => !existingMap.has(s.id));
          if (fresh.length > 0) {
            state.apiStations = [...state.apiStations, ...fresh];
            populateCountryDropdown(); // Mettre à jour les pays avec les nouvelles stations
          }
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
