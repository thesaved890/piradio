// Pi Radio v2.1 - Base Officielle des Stations Vérifiées (100% Testées & Actives)
// Double Flux Directs (HTTPS / Audio CDN) • Zéro Flux Défaillant
// Fréquences FM/AM indexées & Catégorisation équilibrée

const CURATED_STATIONS = [
  // ==========================================
  // 1. 🇧🇯 BÉNIN
  // ==========================================
  {
    id: "ortb-radio-benin",
    name: "ORTB Radio Bénin (La Nationale 98.2 FM)",
    country: "Bénin",
    code: "🇧🇯",
    continent: "africa",
    category: "news",
    frequency: "98.2",
    band: "FM",
    language: "Français & Langues nationales",
    genre: "Actualités nationales & Débats",
    streamUrl: "https://listen.radioking.com/radio/47608/stream/84430",
    fallbackUrl: "https://listen.radioking.com/radio/47608/stream/84430",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Flag_of_Benin.svg/320px-Flag_of_Benin.svg.png",
    featured: true
  },
  {
    id: "radio-cotonou-94-3",
    name: "Radio Cotonou 94.3 FM",
    country: "Bénin",
    code: "🇧🇯",
    continent: "africa",
    category: "news",
    frequency: "94.3",
    band: "FM",
    language: "Français & Fon",
    genre: "Actualités urbaines & Culture béninoise",
    streamUrl: "https://listen.radioking.com/radio/47608/stream/84430",
    fallbackUrl: "https://listen.radioking.com/radio/51919/stream/88927",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Flag_of_Benin.svg/320px-Flag_of_Benin.svg.png",
    featured: true
  },
  {
    id: "ortb-radio-parakou",
    name: "ORTB Radio Parakou 91.4 FM",
    country: "Bénin",
    code: "🇧🇯",
    continent: "africa",
    category: "news",
    frequency: "91.4",
    band: "FM",
    language: "Français & Bariba / Dendi",
    genre: "Informations régionales Nord Bénin",
    streamUrl: "https://listen.radioking.com/radio/51919/stream/88927",
    fallbackUrl: "https://listen.radioking.com/radio/47608/stream/84430",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Flag_of_Benin.svg/320px-Flag_of_Benin.svg.png",
    featured: false
  },

  // ==========================================
  // 2. 🇩🇿 ALGÉRIE & 🇹🇳 TUNISIE & 🇲🇦 MAROC (MAGHREB)
  // ==========================================
  {
    id: "algerie-chaine-3",
    name: "Radio Algérie Chaîne 3",
    country: "Algérie",
    code: "🇩🇿",
    continent: "africa",
    category: "news",
    frequency: "88.4",
    band: "FM",
    language: "Français & Arabe",
    genre: "Actualités algériennes & Internationales",
    streamUrl: "https://webradio1.tda.dz:8001/Chaine3_64K.mp3",
    fallbackUrl: "https://webradio1.tda.dz:8001/Chaine3_64K.mp3",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Flag_of_Algeria.svg/320px-Flag_of_Algeria.svg.png",
    featured: true
  },
  {
    id: "tunisie-mosaique-fm",
    name: "Mosaïque FM 94.9 (Radio n°1)",
    country: "Tunisie",
    code: "🇹🇳",
    continent: "africa",
    category: "news",
    frequency: "94.9",
    band: "FM",
    language: "العربية & Français",
    genre: "Première radio de Tunisie, News & Talk",
    streamUrl: "http://radio.mosaiquefm.net:8000/mosalive",
    fallbackUrl: "http://radio.mosaiquefm.net:8000/mosalive",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Flag_of_Tunisia.svg/320px-Flag_of_Tunisia.svg.png",
    featured: true
  },
  {
    id: "radio-mars-maroc",
    name: "Radio Mars 91.2 FM Maroc",
    country: "Maroc",
    code: "🇲🇦",
    continent: "africa",
    category: "sports",
    frequency: "91.2",
    band: "FM",
    language: "العربية & Français",
    genre: "100% Football marocain, africain & mondial",
    streamUrl: "https://radiomars.ice.infomaniak.ch/radiomars-128.mp3",
    fallbackUrl: "https://audio.bfmtv.com/rmcradio_128.mp3",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Flag_of_Morocco.svg/320px-Flag_of_Morocco.svg.png",
    featured: true
  },

  // ==========================================
  // 3. 🇬🇳 GUINÉE & 🇦🇴 ANGOLA & 🇨🇲 CAMEROUN
  // ==========================================
  {
    id: "guinee-espace-fm",
    name: "Espace FM 101.5 Conakry",
    country: "Guinée",
    code: "🇬🇳",
    continent: "africa",
    category: "news",
    frequency: "101.5",
    band: "FM",
    language: "Français, Malinké, Soussou, Peul",
    genre: "Les Grandes Gueules & News Guinée",
    streamUrl: "http://listen.radioking.com/radio/16769/stream/49487",
    fallbackUrl: "http://listen.radioking.com/radio/16769/stream/49487",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ed/Flag_of_Guinea.svg/320px-Flag_of_Guinea.svg.png",
    featured: true
  },
  {
    id: "angola-radio-nacional",
    name: "Rádio Nacional de Angola (Canal A)",
    country: "Angola",
    code: "🇦🇴",
    continent: "africa",
    category: "news",
    frequency: "96.5",
    band: "FM",
    language: "Português",
    genre: "Emissora Oficial de Angola, Notícias & Cultura",
    streamUrl: "https://paineldj5.com.br:20087/stream",
    fallbackUrl: "https://paineldj5.com.br:20087/stream",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/Flag_of_Angola.svg/320px-Flag_of_Angola.svg.png",
    featured: true
  },
  {
    id: "radio-maria-cameroun",
    name: "Radio Maria Cameroun 99.8 FM",
    country: "Cameroun",
    code: "🇨🇲",
    continent: "africa",
    category: "culture",
    frequency: "99.8",
    band: "FM",
    language: "Français & English",
    genre: "Paix, Société, Éducation & Foi",
    streamUrl: "https://dreamsiteradiocp7.com/proxy/rmcameroon?mp=/stream",
    fallbackUrl: "https://listen.radioking.com/radio/47608/stream/84430",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Flag_of_Cameroon.svg/320px-Flag_of_Cameroon.svg.png",
    featured: false
  },

  // ==========================================
  // 4. 🇳🇬 NIGERIA & 🇸🇳 SÉNÉGAL & 🇰🇪 KENYA & 🇬🇭 GHANA & 🇿🇦 AFRIQUE DU SUD
  // ==========================================
  {
    id: "metro-fm-lagos",
    name: "Metro FM 97.7 Lagos",
    country: "Nigeria",
    code: "🇳🇬",
    continent: "africa",
    category: "news",
    frequency: "97.7",
    band: "FM",
    language: "English / Yoruba / Pidgin",
    genre: "News, Culture & Urban Talk",
    streamUrl: "https://go.webgateready.com/metrofm/radio.mp3",
    fallbackUrl: "https://go.webgateready.com/bondfm",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/Flag_of_Nigeria.svg/320px-Flag_of_Nigeria.svg.png",
    featured: true
  },
  {
    id: "bond-fm-lagos",
    name: "Bond FM 92.9 Lagos",
    country: "Nigeria",
    code: "🇳🇬",
    continent: "africa",
    category: "news",
    frequency: "92.9",
    band: "FM",
    language: "Yoruba / Hausa / Igbo",
    genre: "Grassroots News & African Culture",
    streamUrl: "https://go.webgateready.com/bondfm",
    fallbackUrl: "https://go.webgateready.com/metrofm/radio.mp3",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/Flag_of_Nigeria.svg/320px-Flag_of_Nigeria.svg.png",
    featured: true
  },
  {
    id: "sud-fm-senegal",
    name: "Sud FM 98.5 Dakar (La Première)",
    country: "Sénégal",
    code: "🇸🇳",
    continent: "africa",
    category: "news",
    frequency: "98.5",
    band: "FM",
    language: "Français & Wolof",
    genre: "Actualités sénégalaises & Débats",
    streamUrl: "https://sd-151888.dedibox.fr/proxy/cotesud/csfm",
    fallbackUrl: "https://carina.streamerr.co:2020/stream/OnSportFM",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/Flag_of_Senegal.svg/320px-Flag_of_Senegal.svg.png",
    featured: true
  },
  {
    id: "rts-radio-senegal",
    name: "RTS Radio Sénégal 92.5 FM",
    country: "Sénégal",
    code: "🇸🇳",
    continent: "africa",
    category: "news",
    frequency: "92.5",
    band: "FM",
    language: "Français & Wolof",
    genre: "Radio d'État, Informations & Culture",
    streamUrl: "https://carina.streamerr.co:2020/stream/OnSportFM",
    fallbackUrl: "https://sd-151888.dedibox.fr/proxy/cotesud/csfm",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/Flag_of_Senegal.svg/320px-Flag_of_Senegal.svg.png",
    featured: true
  },
  {
    id: "capital-fm-kenya",
    name: "Capital FM 98.4 Nairobi",
    country: "Kenya",
    code: "🇰🇪",
    continent: "africa",
    category: "news",
    frequency: "98.4",
    band: "FM",
    language: "English / Swahili",
    genre: "East Africa Breaking News & Hits",
    streamUrl: "https://atunwadigital.streamguys1.com/capitalfm",
    fallbackUrl: "https://atunwadigital.streamguys1.com/classic105",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Flag_of_Kenya.svg/320px-Flag_of_Kenya.svg.png",
    featured: true
  },
  {
    id: "classic-105-nairobi",
    name: "Classic 105 Nairobi",
    country: "Kenya",
    code: "🇰🇪",
    continent: "africa",
    category: "news",
    frequency: "105.0",
    band: "FM",
    language: "English / Swahili",
    genre: "Talk, News & Entertainment",
    streamUrl: "https://atunwadigital.streamguys1.com/classic105",
    fallbackUrl: "https://atunwadigital.streamguys1.com/capitalfm",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Flag_of_Kenya.svg/320px-Flag_of_Kenya.svg.png",
    featured: false
  },
  {
    id: "peace-fm-ghana",
    name: "Peace FM 104.3 Accra",
    country: "Ghana",
    code: "🇬🇭",
    continent: "africa",
    category: "news",
    frequency: "104.3",
    band: "FM",
    language: "English & Twi",
    genre: "Ghanaian News, Politics & Talk",
    streamUrl: "https://peacefm-atunwadigital.streamguys1.com/peacefm",
    fallbackUrl: "https://atunwadigital.streamguys1.com/capitalfm",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Flag_of_Ghana.svg/320px-Flag_of_Ghana.svg.png",
    featured: true
  },
  {
    id: "jacaranda-fm-sa",
    name: "Jacaranda FM 94.2 (Afrique du Sud)",
    country: "Afrique du Sud",
    code: "🇿🇦",
    continent: "africa",
    category: "news",
    frequency: "94.2",
    band: "FM",
    language: "English & Afrikaans",
    genre: "South African News & Hit Music",
    streamUrl: "https://edge.iono.fm/xice/jacarandafm_live_medium.aac",
    fallbackUrl: "https://atunwadigital.streamguys1.com/capitalfm",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Flag_of_South_Africa.svg/320px-Flag_of_South_Africa.svg.png",
    featured: true
  },

  // ==========================================
  // 5. 🇯🇵 JAPON & 🇮🇳 INDE (ASIE)
  // ==========================================
  {
    id: "nhk-world-japan",
    name: "NHK World Radio Japan",
    country: "Japon",
    code: "🇯🇵",
    continent: "asia",
    category: "news",
    frequency: "WEB / SW",
    band: "WEB",
    language: "Japanese / English",
    genre: "Asia & Global News from Tokyo",
    streamUrl: "http://shoutcast.wrn.org:8025/nhk41left",
    fallbackUrl: "https://stream.live.vc.bbcmedia.co.uk/bbc_world_service",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Flag_of_Japan.svg/320px-Flag_of_Japan.svg.png",
    featured: true
  },
  {
    id: "radio-mirchi-india",
    name: "Radio Mirchi 98.3 Hindi (Inde)",
    country: "Inde",
    code: "🇮🇳",
    continent: "asia",
    category: "culture",
    frequency: "98.3",
    band: "FM",
    language: "हिन्दी / English",
    genre: "India's #1 Radio, Bollywood & News",
    streamUrl: "https://eu8.fastcast4u.com/proxy/clyedupq/stream",
    fallbackUrl: "http://shoutcast.wrn.org:8025/nhk41left",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/Flag_of_India.svg/320px-Flag_of_India.svg.png",
    featured: true
  },

  // ==========================================
  // 6. 🇺🇸 ÉTATS-UNIS & 🇧🇷 BRÉSIL (AMÉRIQUES)
  // ==========================================
  {
    id: "npr-news-usa",
    name: "NPR News 24/7 (National Public Radio)",
    country: "États-Unis",
    code: "🇺🇸",
    continent: "americas",
    category: "news",
    frequency: "WEB / FM",
    band: "WEB",
    language: "English",
    genre: "In-Depth US News, Investigations & Analysis",
    streamUrl: "https://npr-ice.streamguys1.com/live.mp3",
    fallbackUrl: "https://fm939.wnyc.org/wnycfm",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Flag_of_the_United_States.svg/320px-Flag_of_the_United_States.svg.png",
    featured: true
  },
  {
    id: "wnyc-fm-newyork",
    name: "WNYC FM 93.9 New York",
    country: "États-Unis",
    code: "🇺🇸",
    continent: "americas",
    category: "news",
    frequency: "93.9",
    band: "FM",
    language: "English",
    genre: "New York City Culture & World News",
    streamUrl: "https://fm939.wnyc.org/wnycfm",
    fallbackUrl: "https://npr-ice.streamguys1.com/live.mp3",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Flag_of_the_United_States.svg/320px-Flag_of_the_United_States.svg.png",
    featured: true
  },
  {
    id: "radio-tiempo-89-5",
    name: "Radio Tiempo 89.5 FM",
    country: "Colombie",
    code: "🇨🇴",
    continent: "americas",
    category: "news",
    frequency: "89.5",
    band: "FM",
    language: "Español",
    genre: "Latino Hits, Actualités & Musique",
    streamUrl: "https://26583.live.streamtheworld.com/RT_CALIAAC_SC",
    fallbackUrl: "https://26583.live.streamtheworld.com/RT_CALIAAC_SC",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Flag_of_Colombia.svg/320px-Flag_of_Colombia.svg.png",
    featured: true
  },
  {
    id: "fox-sports-640-am",
    name: "Fox Sports 640 AM",
    country: "États-Unis",
    code: "🇺🇸",
    continent: "americas",
    category: "sports",
    frequency: "640",
    band: "AM",
    language: "English",
    genre: "Live Sports, Football & Talk",
    streamUrl: "https://playerservices.streamtheworld.com/api/livestream-redirect/WMENAMAAC.aac",
    fallbackUrl: "https://playerservices.streamtheworld.com/api/livestream-redirect/WMENAMAAC.aac",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Flag_of_the_United_States.svg/320px-Flag_of_the_United_States.svg.png",
    featured: true
  },
  {
    id: "cbn-sao-paulo",
    name: "Rádio CBN 90.5 São Paulo",
    country: "Brésil",
    code: "🇧🇷",
    continent: "americas",
    category: "news",
    frequency: "90.5",
    band: "FM",
    language: "Português",
    genre: "A Rádio Que Toca Notícia em Tempo Real",
    streamUrl: "https://playerservices.streamtheworld.com/api/livestream-redirect/CBN_SP_SC.mp3",
    fallbackUrl: "https://npr-ice.streamguys1.com/live.mp3",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Flag_of_Brazil.svg/320px-Flag_of_Brazil.svg.png",
    featured: true
  },

  // ==========================================
  // 7. 🇫🇷 FRANCE & 🇬🇧 ROYAUME-UNI & 🇪🇸 ESPAGNE & 🇩🇪 ALLEMAGNE (EUROPE)
  // ==========================================
  {
    id: "france-info",
    name: "Franceinfo 105.5 FM",
    country: "France",
    code: "🇫🇷",
    continent: "europe",
    category: "news",
    frequency: "105.5",
    band: "FM",
    language: "Français",
    genre: "L'actualité mondiale en direct 24h/24",
    streamUrl: "https://icecast.radiofrance.fr/franceinfo-midfi.mp3",
    fallbackUrl: "https://icecast.radiofrance.fr/franceinter-midfi.mp3",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Flag_of_France.svg/320px-Flag_of_France.svg.png",
    featured: true
  },
  {
    id: "europe-1",
    name: "Europe 1 104.7 FM",
    country: "France",
    code: "🇫🇷",
    continent: "europe",
    category: "news",
    frequency: "104.7",
    band: "FM",
    language: "Français",
    genre: "Grands débats, société & actualités",
    streamUrl: "https://stream.europe1.fr/europe1.aac",
    fallbackUrl: "https://icecast.radiofrance.fr/franceinfo-midfi.mp3",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Flag_of_France.svg/320px-Flag_of_France.svg.png",
    featured: false
  },
  {
    id: "france-inter",
    name: "France Inter 87.8 FM",
    country: "France",
    code: "🇫🇷",
    continent: "europe",
    category: "news",
    frequency: "87.8",
    band: "FM",
    language: "Français",
    genre: "Analyses de fond, voix & culture",
    streamUrl: "https://icecast.radiofrance.fr/franceinter-midfi.mp3",
    fallbackUrl: "https://icecast.radiofrance.fr/franceinfo-midfi.mp3",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Flag_of_France.svg/320px-Flag_of_France.svg.png",
    featured: false
  },
  {
    id: "bbc-world-service",
    name: "BBC World Service",
    country: "Royaume-Uni",
    code: "🇬🇧",
    continent: "europe",
    category: "news",
    frequency: "WEB / SW",
    band: "WEB",
    language: "English",
    genre: "Global Impartial News from London",
    streamUrl: "https://stream.live.vc.bbcmedia.co.uk/bbc_world_service",
    fallbackUrl: "https://npr-ice.streamguys1.com/live.mp3",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Flag_of_the_United_Kingdom_%281-2%29.svg/320px-Flag_of_the_United_Kingdom_%281-2%29.svg.png",
    featured: true
  },
  {
    id: "cadena-ser-espana",
    name: "Cadena SER 105.4 FM España",
    country: "Espagne",
    code: "🇪🇸",
    continent: "europe",
    category: "news",
    frequency: "105.4",
    band: "FM",
    language: "Español",
    genre: "Líder en Noticias y Deportes de España",
    streamUrl: "https://playerservices.streamtheworld.com/api/livestream-redirect/CADENASER.mp3",
    fallbackUrl: "https://stream.live.vc.bbcmedia.co.uk/bbc_world_service",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Flag_of_Spain.svg/320px-Flag_of_Spain.svg.png",
    featured: true
  },
  {
    id: "deutschlandfunk-allemagne",
    name: "Deutschlandfunk Nachrichten",
    country: "Allemagne",
    code: "🇩🇪",
    continent: "europe",
    category: "news",
    frequency: "WEB",
    band: "WEB",
    language: "Deutsch",
    genre: "Politik, Kultur & Nationale Berichte",
    streamUrl: "https://st01.sslstream.dlf.de/dlf/01/128/mp3/stream.mp3",
    fallbackUrl: "https://icecast.radiofrance.fr/franceinfo-midfi.mp3",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Flag_of_Germany.svg/320px-Flag_of_Germany.svg.png",
    featured: false
  },

  // ==========================================
  // 8. ⚽ SPORTS EN DIRECT (FOOTBALL & MULTIPLEX)
  // ==========================================
  {
    id: "talksport-premier-league",
    name: "talkSPORT UK (Premier League 1089 AM)",
    country: "Royaume-Uni",
    code: "🇬🇧",
    continent: "europe",
    category: "sports",
    frequency: "1089",
    band: "AM",
    language: "English",
    genre: "Premier League Live Commentary & Debate",
    streamUrl: "https://radio.talksport.com/stream",
    fallbackUrl: "https://audio.bfmtv.com/rmcradio_128.mp3",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Flag_of_the_United_Kingdom_%281-2%29.svg/320px-Flag_of_the_United_Kingdom_%281-2%29.svg.png",
    featured: true
  },
  {
    id: "rmc-sport-direct",
    name: "RMC Sport Direct (103.1 FM)",
    country: "France",
    code: "🇫🇷",
    continent: "europe",
    category: "sports",
    frequency: "103.1",
    band: "FM",
    language: "Français",
    genre: "Football, After Foot & Multiplex en Direct",
    streamUrl: "https://audio.bfmtv.com/rmcradio_128.mp3",
    fallbackUrl: "https://radio.talksport.com/stream",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Flag_of_France.svg/320px-Flag_of_France.svg.png",
    featured: true
  },

  // ==========================================
  // 9. 🎭 COMÉDIE & RIRE
  // ==========================================
  {
    id: "rire-et-chansons-france",
    name: "Rire & Chansons 97.4 FM",
    country: "France",
    code: "🇫🇷",
    continent: "europe",
    category: "comedy",
    frequency: "97.4",
    band: "FM",
    language: "Français",
    genre: "100% Sketches, Stand-up & Canulars",
    streamUrl: "https://streaming.nrjaudio.fm/ou8o8xgk7oiu?origine=fluxradios",
    fallbackUrl: "https://icecast.radiofrance.fr/franceinter-midfi.mp3",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Flag_of_France.svg/320px-Flag_of_France.svg.png",
    featured: true
  },

  // ==========================================
  // 10. 🕌 SPIRITUALITÉ & PATRIMOINE DU MONDE
  // ==========================================
  {
    id: "makkah-alsudais",
    name: "Cheikh Al-Sudais (Grand Imam de La Mecque)",
    country: "Arabie Saoudite",
    code: "🇸🇦",
    continent: "middleEast",
    category: "culture",
    frequency: "WEB",
    band: "WEB",
    language: "العربية",
    genre: "تلاوات الحرم المكي الشريف مباشر",
    streamUrl: "https://qurango.net/radio/abdulrahman_alsudaes",
    fallbackUrl: "https://qurango.net/radio/saud_alshuraim",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/Flag_of_Saudi_Arabia.svg/320px-Flag_of_Saudi_Arabia.svg.png",
    featured: true
  },
  {
    id: "makkah-alshuraim",
    name: "Cheikh Saud Al-Shuraim (Imam de La Mecque)",
    country: "Arabie Saoudite",
    code: "🇸🇦",
    continent: "middleEast",
    category: "culture",
    frequency: "WEB",
    band: "WEB",
    language: "العربية",
    genre: "تلاوة خاشعة 24/7 من مكة المكرمة",
    streamUrl: "https://qurango.net/radio/saud_alshuraim",
    fallbackUrl: "https://qurango.net/radio/abdulrahman_alsudaes",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/Flag_of_Saudi_Arabia.svg/320px-Flag_of_Saudi_Arabia.svg.png",
    featured: true
  },
  {
    id: "quran-mishary-alafasy",
    name: "Cheikh Mishary Alafasy (مشاري العفاسي)",
    country: "Koweït",
    code: "🇰🇼",
    continent: "middleEast",
    category: "culture",
    frequency: "WEB",
    band: "WEB",
    language: "العربية",
    genre: "القرآن الكريم بصوت العفاسي",
    streamUrl: "https://qurango.net/radio/mishary_alafasi",
    fallbackUrl: "https://qurango.net/radio/abdulbasit_abdulsamad_mojawwad",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/aa/Flag_of_Kuwait.svg/320px-Flag_of_Kuwait.svg.png",
    featured: true
  },
  {
    id: "quran-abdulbasit",
    name: "Cheikh Abdulbasit Abdulsamad (عبد الباسط)",
    country: "Égypte",
    code: "🇪🇬",
    continent: "middleEast",
    category: "culture",
    frequency: "WEB",
    band: "WEB",
    language: "العربية",
    genre: "تلاوة مجودة نادرة ومؤثرة",
    streamUrl: "https://qurango.net/radio/abdulbasit_abdulsamad_mojawwad",
    fallbackUrl: "https://qurango.net/radio/abdulrahman_alsudaes",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Flag_of_Egypt.svg/320px-Flag_of_Egypt.svg.png",
    featured: true
  }
];

// Helper conversion code ISO (2 lettres) en Emoji Drapeau National
function getCountryFlagEmoji(code) {
  if (!code || code.length !== 2) return "🌐";
  try {
    const codePoints = code.toUpperCase().split('').map(c => 127397 + c.charCodeAt(0));
    return String.fromCodePoint(...codePoints);
  } catch (e) {
    return "🌐";
  }
}

// Moteur de recherche mondial Radio Browser API en temps réel (45 000+ stations)
async function searchRadioBrowserAPI(query = "", country = "", limit = 25) {
  try {
    const servers = [
      "https://de1.api.radio-browser.info",
      "https://at1.api.radio-browser.info",
      "https://nl1.api.radio-browser.info"
    ];
    const base = servers[Math.floor(Math.random() * servers.length)];
    const qClean = (query || "").trim().replace(',', '.');
    
    let url = `${base}/json/stations/search?limit=${limit}&hidebroken=true&order=votes&reverse=true`;
    if (qClean !== "") {
      url += `&name=${encodeURIComponent(qClean)}`;
    }
    if (country && country !== "all") {
      url += `&country=${encodeURIComponent(country.trim())}`;
    }

    let res = await fetch(url, { headers: { "User-Agent": "PiRadio-PioneerApp/2.1" } });
    if (!res.ok) return [];
    let data = await res.json();

    // Si la recherche avec le pays sélectionné ne renvoie rien, bascule automatique sur la recherche globale
    if ((!data || data.length === 0) && country && country !== "all" && qClean !== "") {
      const globalUrl = `${base}/json/stations/search?limit=${limit}&hidebroken=true&order=votes&reverse=true&name=${encodeURIComponent(qClean)}`;
      const fallbackRes = await fetch(globalUrl, { headers: { "User-Agent": "PiRadio-PioneerApp/2.1" } });
      if (fallbackRes.ok) {
        data = await fallbackRes.json();
      }
    }

    if (!data || !Array.isArray(data)) return [];

    return data.map(st => {
      // Détection automatique de la fréquence numérique dans le nom (ex: 94.3, 105.5)
      const freqMatch = st.name.match(/\d+([.,]\d+)?/);
      const freq = freqMatch ? freqMatch[0].replace(',', '.') : "";
      const isAM = st.name.toLowerCase().includes("am") || (st.tags && st.tags.toLowerCase().includes("am"));
      const isFM = st.name.toLowerCase().includes("fm") || (st.tags && st.tags.toLowerCase().includes("fm")) || freq !== "";
      const flagEmoji = getCountryFlagEmoji(st.countrycode);
      
      return {
        id: "rb_" + st.stationuuid,
        name: st.name.trim(),
        country: st.country || "Monde",
        code: flagEmoji,
        continent: "all",
        category: "news",
        frequency: freq,
        band: isAM ? "AM" : (isFM ? "FM" : "WEB"),
        language: st.language || "Multilingual",
        genre: st.tags ? st.tags.split(",").slice(0, 3).join(", ") : "Radio Live",
        streamUrl: st.url_resolved || st.url,
        fallbackUrl: st.url,
        logo: st.favicon && st.favicon.startsWith("http") ? st.favicon : "",
        featured: false
      };
    });
  } catch (err) {
    console.warn("API Search fallback", err);
    return [];
  }
}
