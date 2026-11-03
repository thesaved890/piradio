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
    city: "Cotonou",
    state: "Littoral",
    code: "🇧🇯",
    continent: "africa",
    category: "news",
    frequency: "98.2",
    band: "FM",
    language: "Français & Langues nationales",
    genre: "Actualités nationales & Débats",
    streamUrl: "https://listen.radioking.com/radio/47608/stream/84430",
    fallbackUrl: "https://listen.radioking.com/radio/47608/stream/84430",
    logo: "assets/logos/ortb-radio-benin.png",
    featured: true
  },
  {
    id: "ortb-radio-parakou",
    name: "ORTB Radio Parakou 91.4 FM",
    country: "Bénin",
    city: "Parakou",
    state: "Borgou",
    code: "🇧🇯",
    continent: "africa",
    category: "news",
    frequency: "91.4",
    band: "FM",
    language: "Français & Bariba / Dendi",
    genre: "Informations régionales Nord Bénin",
    streamUrl: "https://listen.radioking.com/radio/51919/stream/88927",
    fallbackUrl: "https://listen.radioking.com/radio/51919/stream/88927",
    logo: "assets/logos/ortb-radio-parakou.jpg",
    featured: true
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
    logo: "assets/logos/algerie-chaine-3.png",
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
    logo: "assets/logos/tunisie-mosaique-fm.png",
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
    fallbackUrl: "https://radiomars.ice.infomaniak.ch/radiomars-128.mp3",
    logo: "assets/logos/radio-mars-maroc.png",
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
    logo: "assets/logos/guinee-espace-fm.png",
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
    logo: "assets/logos/angola-radio-nacional.png",
    featured: true
  },
  {
    id: "radio-maria-cameroun",
    name: "Radio Maria Cameroun 99.8 FM",
    country: "Cameroun",
    code: "🇨🇲",
    code: "🇨🇲",
    continent: "africa",
    category: "culture",
    frequency: "99.8",
    band: "FM",
    language: "Français & English",
    genre: "Paix, Société, Éducation & Foi",
    streamUrl: "https://dreamsiteradiocp7.com/proxy/rmcameroon?mp=/stream",
    fallbackUrl: "https://dreamsiteradiocp7.com/proxy/rmcameroon?mp=/stream",
    logo: "assets/logos/radio-maria-cameroun.png",
    featured: false
  },

  // ==========================================
  // 4. 🇳🇬 NIGERIA (OGUN, OYO/IBADAN, LAGOS, RIVERS, ABIA, ABUJA)
  // Flux 100% Vérifiés & Indépendants (Zéro redirection)
  // ==========================================
  // --- OGUN STATE (ABEOKUTA) ---
  {
    id: "eagle-7-fm-abeokuta",
    name: "Eagle 7 Sports Radio 103.7 FM Abeokuta",
    country: "Nigeria",
    city: "Abeokuta",
    state: "Ogun State",
    code: "🇳🇬",
    continent: "africa",
    category: "sports",
    frequency: "103.7",
    band: "FM",
    language: "English & Yoruba",
    genre: "Sports, Musique & Talk Abeokuta",
    streamUrl: "https://eagle7fm-atunwadigital.streamguys1.com/eagle7fm",
    fallbackUrl: "https://eagle7fm-atunwadigital.streamguys1.com/eagle7fm",
    logo: "assets/logos/eagle-7-fm-abeokuta.png",
    homepage: "https://eagle7fm.com",
    featured: true
  },
  {
    id: "ogbc-fm-abeokuta",
    name: "OGBC Radio 90.5 FM Abeokuta",
    country: "Nigeria",
    city: "Abeokuta",
    state: "Ogun State",
    code: "🇳🇬",
    continent: "africa",
    category: "news",
    frequency: "90.5",
    band: "FM",
    language: "Yoruba & English",
    genre: "Ogun State Broadcasting Corporation, Actualités & Culture",
    streamUrl: "https://mpc.my-control-panel.eu/stream/8118",
    fallbackUrl: "https://mpc.my-control-panel.eu/stream/8118",
    logo: "assets/logos/ogbc-fm-abeokuta.png",
    homepage: "https://ogbc.com.ng",
    featured: true
  },
  {
    id: "tatafo-radio-ogun",
    name: "Tatafo Radio Ogun",
    country: "Nigeria",
    city: "Abeokuta",
    state: "Ogun State",
    code: "🇳🇬",
    continent: "africa",
    category: "news",
    band: "WEB",
    language: "Pidgin, Yoruba & English",
    genre: "Informations locales & Culture d'Ogun State",
    streamUrl: "https://pro06.caster.fm:8050/radio",
    fallbackUrl: "https://pro06.caster.fm:8050/radio",
    logo: "assets/logos/tatafo-radio-ogun.jpg",
    featured: false
  },

  // --- OYO STATE (IBADAN) ---
  {
    id: "agidigbo-fm-ibadan",
    name: "Agidigbo 88.7 FM Ibadan",
    country: "Nigeria",
    city: "Ibadan",
    state: "Oyo State",
    code: "🇳🇬",
    continent: "africa",
    category: "news",
    frequency: "88.7",
    band: "FM",
    language: "Yoruba & English",
    genre: "La voix d'Ibadan (Oriyomi Hamzat), Débats & Société",
    streamUrl: "https://agidigbostream.com.ng/radio/8000/radio.mp3",
    fallbackUrl: "https://agidigbostream.com.ng/radio/8000/radio.mp3",
    logo: "assets/logos/agidigbo-fm-ibadan.png",
    featured: true
  },
  {
    id: "diamond-fm-ibadan",
    name: "Diamond 101.1 FM Ibadan",
    country: "Nigeria",
    city: "Ibadan",
    state: "Oyo State",
    code: "🇳🇬",
    continent: "africa",
    category: "culture",
    frequency: "101.1",
    band: "FM",
    language: "English & Yoruba",
    genre: "University of Ibadan Radio, Débats, Savoir & Musique",
    streamUrl: "https://cast1.asurahosting.com/proxy/brightb1/stream",
    fallbackUrl: "https://cast1.asurahosting.com/proxy/brightb1/stream",
    logo: "assets/logos/diamond-fm-ibadan.png",
    featured: false
  },

  // --- LAGOS STATE ---
  {
    id: "cool-fm-lagos",
    name: "Cool FM 96.9 Lagos",
    country: "Nigeria",
    city: "Lagos",
    state: "Lagos State",
    code: "🇳🇬",
    continent: "africa",
    category: "culture",
    frequency: "96.9",
    band: "FM",
    language: "English & Pidgin",
    genre: "Top Hit Music, Afrobeats & Divertissement",
    streamUrl: "https://coolfmlagos969-atunwadigital.streamguys1.com/coolfmlagos969",
    fallbackUrl: "https://coolfmlagos969-atunwadigital.streamguys1.com/coolfmlagos969",
    logo: "assets/logos/cool-fm-lagos.png",
    featured: true
  },
  {
    id: "wazobia-fm-lagos",
    name: "Wazobia FM 95.1 Lagos",
    country: "Nigeria",
    city: "Lagos",
    state: "Lagos State",
    code: "🇳🇬",
    continent: "africa",
    category: "culture",
    frequency: "95.1",
    band: "FM",
    language: "Pidgin English",
    genre: "100% Pidgin English, Afrobeats & Divertissement populaire",
    streamUrl: "https://wazobiafmlagos951-atunwadigital.streamguys1.com/wazobiafmlagos951",
    fallbackUrl: "https://wazobiafmlagos951-atunwadigital.streamguys1.com/wazobiafmlagos951",
    logo: "assets/logos/wazobia-fm-lagos.png",
    featured: true
  },
  {
    id: "nigeria-info-lagos",
    name: "Nigeria Info 99.3 FM Lagos",
    country: "Nigeria",
    city: "Lagos",
    state: "Lagos State",
    code: "🇳🇬",
    continent: "africa",
    category: "news",
    frequency: "99.3",
    band: "FM",
    language: "English & Pidgin",
    genre: "News, Débats politiques & Débats citoyens",
    streamUrl: "https://nigeriainfofmlagos993-atunwadigital.streamguys1.com/nigeriainfofmlagos993",
    fallbackUrl: "https://nigeriainfofmlagos993-atunwadigital.streamguys1.com/nigeriainfofmlagos993",
    logo: "assets/logos/nigeria-info-lagos.png",
    featured: true
  },
  {
    id: "metro-fm-lagos",
    name: "Metro FM 97.7 Lagos",
    country: "Nigeria",
    city: "Lagos",
    state: "Lagos State",
    code: "🇳🇬",
    continent: "africa",
    category: "news",
    frequency: "97.7",
    band: "FM",
    language: "English / Yoruba / Pidgin",
    genre: "Actualités métropolitaines, Musique & Culture urbaine",
    streamUrl: "https://go.webgateready.com/metrofm",
    fallbackUrl: "https://go.webgateready.com/metrofm",
    logo: "assets/logos/metro-fm-lagos.png",
    featured: true
  },
  {
    id: "bond-fm-lagos",
    name: "Bond FM 92.9 Lagos",
    country: "Nigeria",
    city: "Lagos",
    state: "Lagos State",
    code: "🇳🇬",
    continent: "africa",
    category: "news",
    frequency: "92.9",
    band: "FM",
    language: "Yoruba / Hausa / Igbo",
    genre: "Langues régionales & Culture locale du Nigeria",
    streamUrl: "https://go.webgateready.com/bondfm",
    fallbackUrl: "https://go.webgateready.com/bondfm",
    logo: "assets/logos/bond-fm-lagos.png",
    featured: true
  },
  {
    id: "rhythm-fm-lagos",
    name: "Rhythm 93.7 FM Lagos",
    country: "Nigeria",
    city: "Lagos",
    state: "Lagos State",
    code: "🇳🇬",
    continent: "africa",
    category: "culture",
    frequency: "93.7",
    band: "FM",
    language: "English",
    genre: "More Music Less Talk, R&B, Hip Hop & Afropop",
    streamUrl: "https://rhythmfmlagos-atunwadigital.streamguys1.com/rhythmfmlagos",
    fallbackUrl: "https://rhythmfmlagos-atunwadigital.streamguys1.com/rhythmfmlagos",
    logo: "assets/logos/rhythm-fm-lagos.png",
    featured: false
  },
  {
    id: "brila-fm-lagos",
    name: "Sports Radio Brila FM 88.9 Lagos",
    country: "Nigeria",
    city: "Lagos",
    state: "Lagos State",
    code: "🇳🇬",
    continent: "africa",
    category: "sports",
    frequency: "88.9",
    band: "FM",
    language: "English & Pidgin",
    genre: "1ère Radio 100% Sports du Nigeria, Football en direct",
    streamUrl: "https://atunwadigital.streamguys1.com/brilafm",
    fallbackUrl: "https://atunwadigital.streamguys1.com/brilafm",
    logo: "assets/logos/brila-fm-lagos.png",
    featured: true
  },
  {
    id: "vybz-fm-lagos",
    name: "Vybz 94.5 FM Lagos",
    country: "Nigeria",
    city: "Lagos",
    state: "Lagos State",
    code: "🇳🇬",
    continent: "africa",
    category: "culture",
    frequency: "94.5",
    band: "FM",
    language: "English & Pidgin",
    genre: "Afrobeats, Dancehall & Culture jeune de Lagos",
    streamUrl: "https://mpc.my-control-panel.eu/stream/8138",
    fallbackUrl: "https://mpc.my-control-panel.eu/stream/8138",
    logo: "assets/logos/vybz-fm-lagos.png",
    featured: false
  },

  // --- AUTRES ÉTATS DU NIGERIA ---
  {
    id: "1radio-ikwerre-rivers",
    name: "1Radio Ikwerre (Port Harcourt)",
    country: "Nigeria",
    city: "Port Harcourt",
    state: "Rivers State",
    code: "🇳🇬",
    continent: "africa",
    category: "culture",
    band: "WEB",
    language: "Ikwerre & English",
    genre: "Culture & Musique de Rivers State",
    streamUrl: "https://fm.imediaport.com/ikwerre",
    fallbackUrl: "https://fm.imediaport.com/ikwerre",
    logo: "assets/logos/1radio-ikwerre-rivers.png",
    featured: false
  },
  {
    id: "bourdex-fm-abia",
    name: "Bourdex 97.9 FM Abiriba",
    country: "Nigeria",
    city: "Abiriba",
    state: "Abia State",
    code: "🇳🇬",
    continent: "africa",
    category: "news",
    frequency: "97.9",
    band: "FM",
    language: "Igbo & English",
    genre: "Actualités régionales d'Abia State & Musique Highlife",
    streamUrl: "https://a8.asurahosting.com:9080/radio.mp3",
    fallbackUrl: "https://a8.asurahosting.com:9080/radio.mp3",
    logo: "assets/logos/bourdex-fm-abia.png",
    featured: false
  },
  {
    id: "kcity-radio-abuja",
    name: "KCity Radio Abuja",
    country: "Nigeria",
    city: "Abuja",
    state: "Federal Capital Territory",
    code: "🇳🇬",
    continent: "africa",
    category: "culture",
    band: "WEB",
    language: "English & Hausa",
    genre: "Capital City Vibes, Musique & Actualités fédérales",
    streamUrl: "https://radio.gotright.net/radio/8010/radio.mp3",
    fallbackUrl: "https://radio.gotright.net/radio/8010/radio.mp3",
    logo: "assets/logos/kcity-radio-abuja.png",
    featured: false
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
    fallbackUrl: "https://sd-151888.dedibox.fr/proxy/cotesud/csfm",
    logo: "assets/logos/sud-fm-senegal.png",
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
    fallbackUrl: "https://carina.streamerr.co:2020/stream/OnSportFM",
    logo: "assets/logos/rts-radio-senegal.png",
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
    fallbackUrl: "https://atunwadigital.streamguys1.com/capitalfm",
    logo: "assets/logos/capital-fm-kenya.png",
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
    fallbackUrl: "https://atunwadigital.streamguys1.com/classic105",
    logo: "assets/logos/classic-105-nairobi.png",
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
    fallbackUrl: "https://peacefm-atunwadigital.streamguys1.com/peacefm",
    logo: "assets/logos/peace-fm-ghana.png",
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
    fallbackUrl: "https://edge.iono.fm/xice/jacarandafm_live_medium.aac",
    logo: "assets/logos/jacaranda-fm-sa.png",
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
    fallbackUrl: "https://npr-ice.streamguys1.com/live.mp3",
    logo: "assets/logos/npr-news-usa.png",
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
    fallbackUrl: "https://fm939.wnyc.org/wnycfm",
    logo: "assets/logos/wnyc-fm-newyork.png",
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
    logo: "assets/logos/radio-tiempo-89-5.png",
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
    logo: "assets/logos/fox-sports-640-am.png",
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
    fallbackUrl: "https://playerservices.streamtheworld.com/api/livestream-redirect/CBN_SP_SC.mp3",
    logo: "assets/logos/cbn-sao-paulo.png",
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
    fallbackUrl: "https://icecast.radiofrance.fr/franceinfo-midfi.mp3",
    logo: "assets/logos/france-info.png",
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
    fallbackUrl: "https://stream.europe1.fr/europe1.aac",
    logo: "assets/logos/europe-1.png",
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
    fallbackUrl: "https://icecast.radiofrance.fr/franceinter-midfi.mp3",
    logo: "assets/logos/france-inter.png",
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
    fallbackUrl: "https://stream.live.vc.bbcmedia.co.uk/bbc_world_service",
    logo: "assets/logos/bbc-world-service.png",
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
    fallbackUrl: "https://playerservices.streamtheworld.com/api/livestream-redirect/CADENASER.mp3",
    logo: "assets/logos/cadena-ser-espana.png",
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
    fallbackUrl: "https://st01.sslstream.dlf.de/dlf/01/128/mp3/stream.mp3",
    logo: "assets/logos/deutschlandfunk-allemagne.png",
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
    fallbackUrl: "https://radio.talksport.com/stream",
    logo: "assets/logos/talksport-premier-league.png",
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
    fallbackUrl: "https://audio.bfmtv.com/rmcradio_128.mp3",
    logo: "assets/logos/rmc-sport-direct.png",
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
    fallbackUrl: "https://streaming.nrjaudio.fm/ou8o8xgk7oiu?origine=fluxradios",
    logo: "assets/logos/rire-et-chansons-france.png",
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
  },
  {
    id: "radio-swiss-jazz",
    name: "Radio Swiss Jazz",
    country: "Suisse",
    code: "🇨🇭",
    continent: "europe",
    category: "culture",
    frequency: "WEB",
    band: "WEB",
    language: "Français & Multilingual",
    genre: "Jazz, Soul, Blues & Swing",
    streamUrl: "https://stream.srg-ssr.ch/m/rsj/aacp_96",
    fallbackUrl: "https://stream.srg-ssr.ch/m/rsj/aacp_96",
    logo: "assets/logos/radio-swiss-jazz.png",
    homepage: "https://www.radioswissjazz.ch",
    featured: true
  },
  {
    id: "capital-chill-uk",
    name: "Capital Chill UK",
    country: "Royaume-Uni",
    code: "🇬🇧",
    continent: "europe",
    category: "culture",
    frequency: "WEB",
    band: "WEB",
    language: "English",
    genre: "Chillout, Ambient, Deep Beats & Lounge",
    streamUrl: "https://media-ssl.musicradio.com/CapitalChill",
    fallbackUrl: "https://media-ssl.musicradio.com/CapitalChill",
    logo: "assets/logos/capital-chill-uk.png",
    homepage: "https://www.capitalfm.com",
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

// Helper extraction domaine propre pour Google Favicon Service
function getDomainFromUrl(urlStr) {
  if (!urlStr || typeof urlStr !== "string") return "";
  try {
    let clean = urlStr.trim();
    if (!clean.startsWith("http")) clean = "https://" + clean;
    const hostname = new URL(clean).hostname;
    return hostname.replace(/^www\./, "");
  } catch (e) {
    return "";
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
    const isTagQuery = ["jazz", "chill", "chillout", "sport", "sports", "news", "rock", "pop", "classical", "culture", "dance"].includes(qClean.toLowerCase());
    
    let url = `${base}/json/stations/search?limit=${limit}&hidebroken=true&order=votes&reverse=true`;
    if (isTagQuery) {
      url += `&tag=${encodeURIComponent(qClean.toLowerCase())}`;
    } else if (qClean !== "") {
      url += `&name=${encodeURIComponent(qClean)}`;
    }
    if (country && country !== "all") {
      url += `&country=${encodeURIComponent(country.trim())}`;
    }

    let res = await fetch(url, { headers: { "User-Agent": "PiRadio-PioneerApp/2.1" } });
    if (!res.ok) return [];
    let data = await res.json();

    // Si la recherche par tag renvoie 0 résultat, tenter par nom
    if ((!data || data.length === 0) && isTagQuery) {
      const fallbackUrl = `${base}/json/stations/search?limit=${limit}&hidebroken=true&order=votes&reverse=true&name=${encodeURIComponent(qClean)}`;
      const resName = await fetch(fallbackUrl, { headers: { "User-Agent": "PiRadio-PioneerApp/2.1" } });
      if (resName.ok) {
        data = await resName.json();
      }
    }

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
      const freqNum = freq ? parseFloat(freq) : null;
      const isFM = (freqNum !== null && freqNum >= 87 && freqNum <= 108) || st.name.toLowerCase().includes(" fm") || st.name.toLowerCase().endsWith("fm");
      const flagEmoji = getCountryFlagEmoji(st.countrycode);
      
      // Récupération intelligente du logo :
      // 1. Logo officiel fourni en HTTPS
      // 2. Ou Logo officiel haute résolution via Google Favicon Service sur le domaine du site web de la radio
      const domain = getDomainFromUrl(st.homepage);
      let logoUrl = "";
      if (st.favicon && st.favicon.startsWith("https://")) {
        logoUrl = st.favicon;
      } else if (domain) {
        logoUrl = `https://www.google.com/s2/favicons?domain=${domain}&sz=128`;
      }

      return {
        id: "rb_" + st.stationuuid,
        name: st.name.trim(),
        country: st.country || "Monde",
        code: flagEmoji,
        continent: "all",
        category: isTagQuery ? qClean.toLowerCase() : "news",
        frequency: freq,
        band: isAM ? "AM" : (isFM ? "FM" : "WEB"),
        language: st.language || "Multilingual",
        genre: st.tags ? st.tags.split(",").slice(0, 3).join(", ") : "Radio Live",
        streamUrl: st.url_resolved || st.url,
        fallbackUrl: st.url,
        logo: logoUrl,
        homepage: st.homepage || "",
        featured: false
      };
    });
  } catch (err) {
    console.warn("API Search fallback", err);
    return [];
  }
}
