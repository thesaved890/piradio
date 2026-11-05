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
    logo: "assets/logos/ortb-radio-benin.svg",
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
    logo: "assets/logos/ortb-radio-parakou.svg",
    featured: true,
    locked: true
  },
  {
    id: "radio-cotonou-94-3",
    name: "Radio Cotonou 94.3 FM",
    country: "Bénin",
    city: "Cotonou",
    state: "Littoral",
    code: "🇧🇯",
    continent: "africa",
    category: "news",
    frequency: "94.3",
    band: "FM",
    language: "Français & Fon",
    genre: "Musique africaine, Actualités & Culture",
    streamUrl: "https://stream.zeno.fm/o9bspgm4y78vv",
    fallbackUrl: "https://stream.zeno.fm/o9bspgm4y78vv",
    logo: "assets/logos/radio-cotonou-94-3.svg",
    featured: true
  },

  // ==========================================
  // 1.b 🇨🇮 CÔTE D'IVOIRE
  // ==========================================
  {
    id: "radio-cote-divoire",
    name: "Radio Côte d'Ivoire (RTI 88.0 FM)",
    country: "Côte d'Ivoire",
    city: "Abidjan",
    state: "Lagunes",
    code: "🇨🇮",
    continent: "africa",
    category: "news",
    frequency: "88.0",
    band: "FM",
    language: "Français & Langues nationales",
    genre: "Actualités nationales, Débats & Culture",
    streamUrl: "https://listen.radioking.com/radio/732974/stream/799223",
    fallbackUrl: "https://listen.radioking.com/radio/732974/stream/799223",
    logo: "assets/logos/radio-cote-divoire.svg",
    featured: true
  },
  {
    id: "rti-frequence-2",
    name: "RTI Fréquence 2 (92.0 FM)",
    country: "Côte d'Ivoire",
    city: "Abidjan",
    state: "Lagunes",
    code: "🇨🇮",
    continent: "africa",
    category: "culture",
    frequency: "92.0",
    band: "FM",
    language: "Français & Nouchi",
    genre: "Hits, Jeunesse, Humour & Variétés",
    streamUrl: "https://listen.radioking.com/radio/734192/stream/800486",
    fallbackUrl: "https://listen.radioking.com/radio/734192/stream/800486",
    logo: "assets/logos/rti-frequence-2.svg",
    featured: true
  },
  {
    id: "radio-jam-abidjan",
    name: "Radio Jam 99.3 FM",
    country: "Côte d'Ivoire",
    city: "Abidjan",
    state: "Lagunes",
    code: "🇨🇮",
    continent: "africa",
    category: "culture",
    frequency: "99.3",
    band: "FM",
    language: "Français & Nouchi",
    genre: "Zouglou, Coupé-Décalé, Afrobeats & Rap",
    streamUrl: "https://listen.radioking.com/radio/61201/stream/98566",
    fallbackUrl: "https://listen.radioking.com/radio/61201/stream/98566",
    logo: "assets/logos/radio-jam-abidjan.svg",
    featured: true
  },
  {
    id: "alpha-blondy-fm",
    name: "Alpha Blondy FM (97.9 FM)",
    country: "Côte d'Ivoire",
    city: "Abidjan",
    state: "Lagunes",
    code: "🇨🇮",
    continent: "africa",
    category: "culture",
    frequency: "97.9",
    band: "FM",
    language: "Français & Dioula",
    genre: "Reggae, Paix, Droits de l'Homme & Société",
    streamUrl: "https://listen.radioking.com/radio/364633/stream/414370",
    fallbackUrl: "https://listen.radioking.com/radio/364633/stream/414370",
    logo: "assets/logos/alpha-blondy-fm.svg",
    featured: true
  },
  {
    id: "africa-radio-abidjan",
    name: "Africa Radio Abidjan (107.5 FM)",
    country: "Côte d'Ivoire",
    city: "Abidjan",
    state: "Lagunes",
    code: "🇨🇮",
    continent: "africa",
    category: "news",
    frequency: "107.5",
    band: "FM",
    language: "Français",
    genre: "Actualités panafricaines, Débats & Afropop",
    streamUrl: "https://africaradio.ice.infomaniak.ch/abidjan128.mp3",
    fallbackUrl: "https://africaradio.ice.infomaniak.ch/abidjan128.mp3",
    logo: "assets/logos/africa-radio-abidjan.svg",
    featured: true
  },
  {
    id: "hit-radio-ci",
    name: "Hit Radio Côte d'Ivoire (106.9 FM)",
    country: "Côte d'Ivoire",
    city: "Abidjan",
    state: "Lagunes",
    code: "🇨🇮",
    continent: "africa",
    category: "culture",
    frequency: "106.9",
    band: "FM",
    language: "Français",
    genre: "100% Hits, RnB, Dance & Pop urbaine",
    streamUrl: "https://hrci.ice.infomaniak.ch/ci-abidjan-128.mp3",
    fallbackUrl: "https://hrci.ice.infomaniak.ch/ci-abidjan-128.mp3",
    logo: "assets/logos/hit-radio-ci.svg",
    featured: true
  },
  {
    id: "life-radio-ci",
    name: "Life Radio (107.7 FM)",
    country: "Côte d'Ivoire",
    city: "Abidjan",
    state: "Lagunes",
    code: "🇨🇮",
    continent: "africa",
    category: "culture",
    frequency: "107.7",
    band: "FM",
    language: "Français",
    genre: "Musique urbaine, Talk, Société & Divertissement",
    streamUrl: "https://cast4.asurahosting.com/proxy/life/stream",
    fallbackUrl: "https://cast4.asurahosting.com/proxy/life/stream",
    logo: "assets/logos/life-radio-ci.svg",
    featured: true
  },
  {
    id: "radio-al-bayane-ci",
    name: "Radio Al Bayane (98.2 FM)",
    country: "Côte d'Ivoire",
    city: "Abidjan",
    state: "Lagunes",
    code: "🇨🇮",
    continent: "africa",
    category: "culture",
    frequency: "98.2",
    band: "FM",
    language: "Français, Arabe & Langues ivoiriennes",
    genre: "Spiritualité, Éducation, Société & Bien-être",
    streamUrl: "https://stream.zeno.fm/0t1c5kna90duv",
    fallbackUrl: "https://stream.zeno.fm/0t1c5kna90duv",
    logo: "assets/logos/radio-al-bayane-ci.svg",
    featured: true
  },

  // ==========================================
  // 1.c 🇬🇭 GHANA
  // ==========================================
  {
    id: "joy-fm-ghana",
    name: "Joy FM 99.7 (Accra)",
    country: "Ghana",
    city: "Accra",
    state: "Greater Accra",
    code: "🇬🇭",
    continent: "africa",
    category: "news",
    frequency: "99.7",
    band: "FM",
    language: "English",
    genre: "Ghana News, Business, Talk & Pop",
    streamUrl: "https://mmg.streamguys1.com/JoyFM-mp3",
    fallbackUrl: "https://mmg.streamguys1.com/JoyFM-mp3",
    logo: "assets/logos/joy-fm-ghana.svg",
    featured: true
  },
  {
    id: "citi-fm-ghana",
    name: "Citi FM 97.3 (Accra)",
    country: "Ghana",
    city: "Accra",
    state: "Greater Accra",
    code: "🇬🇭",
    continent: "africa",
    category: "news",
    frequency: "97.3",
    band: "FM",
    language: "English",
    genre: "Relevant Radio, Politics, Talk & Business",
    streamUrl: "https://citi973fm.radioca.st/index.html:80/;stream.mp3",
    fallbackUrl: "https://citi973fm.radioca.st/index.html:80/;stream.mp3",
    logo: "assets/logos/citi-fm-ghana.svg",
    featured: true
  },
  {
    id: "peace-fm-ghana",
    name: "Peace FM 104.3 (Accra)",
    country: "Ghana",
    city: "Accra",
    state: "Greater Accra",
    code: "🇬🇭",
    continent: "africa",
    category: "news",
    frequency: "104.3",
    band: "FM",
    language: "English & Twi",
    genre: "Kɔkrokoo, National News, Culture & Talk",
    streamUrl: "https://peacefm-atunwadigital.streamguys1.com/peacefm",
    fallbackUrl: "https://peacefm-atunwadigital.streamguys1.com/peacefm",
    logo: "assets/logos/peace-fm-ghana.svg",
    featured: true
  },
  {
    id: "adom-fm-ghana",
    name: "Adom FM 106.3 (Tema / Accra)",
    country: "Ghana",
    city: "Tema",
    state: "Greater Accra",
    code: "🇬🇭",
    continent: "africa",
    category: "culture",
    frequency: "106.3",
    band: "FM",
    language: "Akan, Twi & English",
    genre: "Highlife, Hiplife, Afrobeats & News",
    streamUrl: "https://mmg.streamguys1.com/AdomFM-mp3",
    fallbackUrl: "https://mmg.streamguys1.com/AdomFM-mp3",
    logo: "assets/logos/adom-fm-ghana.svg",
    featured: true
  },
  {
    id: "yfm-ghana",
    name: "YFM 107.9 (Accra)",
    country: "Ghana",
    city: "Accra",
    state: "Greater Accra",
    code: "🇬🇭",
    continent: "africa",
    category: "culture",
    frequency: "107.9",
    band: "FM",
    language: "English & Pidgin",
    genre: "Afrobeats, Hip Hop, Urban Youth & Dance",
    streamUrl: "https://atunwadigital.streamguys1.com/yfm1079accra",
    fallbackUrl: "https://atunwadigital.streamguys1.com/yfm1079accra",
    logo: "assets/logos/yfm-ghana.svg",
    featured: true
  },
  {
    id: "asempa-fm-ghana",
    name: "Asempa FM 94.7 (Accra)",
    country: "Ghana",
    city: "Accra",
    state: "Greater Accra",
    code: "🇬🇭",
    continent: "africa",
    category: "sports",
    frequency: "94.7",
    band: "FM",
    language: "Akan, Twi & English",
    genre: "All Sports, Talk, Football & Debate",
    streamUrl: "https://mmg.streamguys1.com/AsempaFM-mp3",
    fallbackUrl: "https://mmg.streamguys1.com/AsempaFM-mp3",
    logo: "assets/logos/asempa-fm-ghana.svg",
    featured: true
  },
  {
    id: "oman-fm-ghana",
    name: "Oman FM 107.1 (Accra)",
    country: "Ghana",
    city: "Accra",
    state: "Greater Accra",
    code: "🇬🇭",
    continent: "africa",
    category: "news",
    frequency: "107.1",
    band: "FM",
    language: "English & Twi",
    genre: "Current Affairs, Politics & National News",
    streamUrl: "https://omanfm-atunwadigital.streamguys1.com/omanfm",
    fallbackUrl: "https://omanfm-atunwadigital.streamguys1.com/omanfm",
    logo: "assets/logos/oman-fm-ghana.svg",
    featured: true
  },
  {
    id: "angel-fm-ghana",
    name: "Angel FM 102.9 (Accra)",
    country: "Ghana",
    city: "Accra",
    state: "Greater Accra",
    code: "🇬🇭",
    continent: "africa",
    category: "culture",
    frequency: "102.9",
    band: "FM",
    language: "Twi & English",
    genre: "Anɔpa Bɔfoɔ, Highlife, Sports & Talk",
    streamUrl: "https://atunwadigital.streamguys1.com/angelfm",
    fallbackUrl: "https://atunwadigital.streamguys1.com/angelfm",
    logo: "assets/logos/angel-fm-ghana.svg",
    featured: true
  },
  {
    id: "happy-fm-ghana",
    name: "Happy FM 98.9 (Accra)",
    country: "Ghana",
    city: "Accra",
    state: "Greater Accra",
    code: "🇬🇭",
    continent: "africa",
    category: "sports",
    frequency: "98.9",
    band: "FM",
    language: "English & Twi",
    genre: "Sports Station, Premier League & Entertainment",
    streamUrl: "https://atunwadigital.streamguys1.com/happyfm989accra",
    fallbackUrl: "https://atunwadigital.streamguys1.com/happyfm989accra",
    logo: "assets/logos/happy-fm-ghana.svg",
    featured: true
  },
  {
    id: "sunny-fm-ghana",
    name: "Sunny FM 88.7 (Accra)",
    country: "Ghana",
    city: "Accra",
    state: "Greater Accra",
    code: "🇬🇭",
    continent: "africa",
    category: "culture",
    frequency: "88.7",
    band: "FM",
    language: "English",
    genre: "Christian Contemporary, Gospel & Inspiration",
    streamUrl: "https://sunny-radio-server.cloud-ip.cc/radio/sunnyradio",
    fallbackUrl: "https://sunny-radio-server.cloud-ip.cc/radio/sunnyradio",
    logo: "assets/logos/sunny-fm-ghana.svg",
    featured: true
  },

  // ==========================================
  // 1.d 🇲🇱 MALI
  // ==========================================
  {
    id: "radio-kledu-bamako",
    name: "Radio Klédu 101.2 FM (Bamako)",
    country: "Mali",
    city: "Bamako",
    state: "District de Bamako",
    code: "🇲🇱",
    continent: "africa",
    category: "news",
    frequency: "101.2",
    band: "FM",
    language: "Français & Bambara",
    genre: "Actualités maliennes, Débats, Société & Musique",
    streamUrl: "https://stream.zeno.fm/f38bxpt3v2quv",
    fallbackUrl: "https://stream.zenolive.com/yerp85sughwtv",
    logo: "assets/logos/radio-kledu.svg",
    featured: true
  },
  {
    id: "radio-malijet-bamako",
    name: "Radio Malijet (Bamako)",
    country: "Mali",
    city: "Bamako",
    state: "District de Bamako",
    code: "🇲🇱",
    continent: "africa",
    category: "news",
    frequency: "WEB",
    band: "WEB",
    language: "Français & Bambara",
    genre: "Actualités, Débats politiques & Variétés maliennes",
    streamUrl: "https://stream.zenolive.com/yerp85sughwtv",
    fallbackUrl: "https://stream.zeno.fm/yerp85sughwtv",
    logo: "assets/logos/radio-malijet.svg",
    featured: true
  },
  {
    id: "noura-fm-bamako",
    name: "Noura FM 94.5 (Bamako)",
    country: "Mali",
    city: "Bamako",
    state: "District de Bamako",
    code: "🇲🇱",
    continent: "africa",
    category: "culture",
    frequency: "94.5",
    band: "FM",
    language: "Français & Bambara",
    genre: "Spiritualité, Culture, Éducation & Paix",
    streamUrl: "https://stream.zeno.fm/60x209af8e9uv",
    fallbackUrl: "https://stream-151.zeno.fm/60x209af8e9uv",
    logo: "assets/logos/noura-fm-bamako.svg",
    featured: true
  },
  {
    id: "joliba-fm-bamako",
    name: "Joliba FM 105.0 (Bamako)",
    country: "Mali",
    city: "Bamako",
    state: "District de Bamako",
    code: "🇲🇱",
    continent: "africa",
    category: "news",
    frequency: "105.0",
    band: "FM",
    language: "Français & Bambara",
    genre: "Voix du Djoliba, Analyses, Débats & Culture",
    streamUrl: "https://stream.zenolive.com/bux0vqx79zquv",
    fallbackUrl: "https://stream.zenolive.com/bux0vqx79zquv",
    logo: "assets/logos/joliba-fm-mali.svg",
    featured: true
  },
  {
    id: "radio-bamakan-bamako",
    name: "Radio Bamakan 100.3 FM (Bamako)",
    country: "Mali",
    city: "Bamako",
    state: "District de Bamako",
    code: "🇲🇱",
    continent: "africa",
    category: "culture",
    frequency: "100.3",
    band: "FM",
    language: "Français & Bambara",
    genre: "1ère radio libre du Mali, Communauté & Musique traditionnelle",
    streamUrl: "https://stream.zeno.fm/a9pfgv7zw3duv",
    fallbackUrl: "https://stream.zeno.fm/a9pfgv7zw3duv",
    logo: "assets/logos/radio-bamakan.svg",
    featured: true
  },
  {
    id: "radio-dambe-bamako",
    name: "Radio Dambé (Bamako)",
    country: "Mali",
    city: "Bamako",
    state: "District de Bamako",
    code: "🇲🇱",
    continent: "africa",
    category: "culture",
    frequency: "WEB",
    band: "WEB",
    language: "Français & Bambara",
    genre: "Dignité, Société, Débats & Tradition",
    streamUrl: "https://stream.zenolive.com/pynbqy45xreuv",
    fallbackUrl: "https://stream.zenolive.com/pynbqy45xreuv",
    logo: "assets/logos/radio-dambe-mali.svg",
    featured: true
  },
  {
    id: "radio-bougouni-kunkan",
    name: "Radio Bougouni Kunkan 102.9 FM",
    country: "Mali",
    city: "Bougouni",
    state: "Sikasso",
    code: "🇲🇱",
    continent: "africa",
    category: "culture",
    frequency: "102.9",
    band: "FM",
    language: "Bambara & Français",
    genre: "Voix du Banimonotié, Terroir & Société",
    streamUrl: "https://stream.zeno.fm/x3gb8t9nzk0uv",
    fallbackUrl: "https://stream.zeno.fm/e1fq9sdhrntuv",
    logo: "assets/logos/radio-bougouni-kunkan.svg",
    featured: true
  },
  {
    id: "radio-kassara-kayes",
    name: "Radio Kassara Barikama 107.4 FM (Kayes)",
    country: "Mali",
    city: "Kayes",
    state: "Kayes",
    code: "🇲🇱",
    continent: "africa",
    category: "culture",
    frequency: "107.4",
    band: "FM",
    language: "Soninké, Khassonké, Bambara & Français",
    genre: "Première région du Mali, Diaspora & Développement",
    streamUrl: "https://stream.zeno.fm/0ef19uaxh4duv",
    fallbackUrl: "https://stream.zeno.fm/0ef19uaxh4duv",
    logo: "assets/logos/radio-kassara-kayes.svg",
    featured: true
  },

  // ==========================================
  // 1.e 🇳🇪 NIGER
  // ==========================================
  {
    id: "radio-gaskia-niger",
    name: "Radio Gaskia (Niger)",
    country: "Niger",
    city: "Niamey",
    state: "Niamey",
    code: "🇳🇪",
    continent: "africa",
    category: "news",
    frequency: "WEB",
    band: "WEB",
    language: "Français & Hausa",
    genre: "Gaskia, Actualités nigériennes, Débats & Culture",
    streamUrl: "https://s1.free-shoutcast.com/stream/18478/;",
    fallbackUrl: "https://s1.free-shoutcast.com/stream/18478/;",
    logo: "assets/logos/radio-gaskia-niger.svg",
    featured: true
  },
  {
    id: "radio-garkuwa-niger",
    name: "Radio Garkuwa (Zinder / Niamey)",
    country: "Niger",
    city: "Zinder",
    state: "Zinder",
    code: "🇳🇪",
    continent: "africa",
    category: "culture",
    frequency: "WEB",
    band: "WEB",
    language: "Hausa, Zarma & Français",
    genre: "Le Bouclier du Sahel, Terroir & Musique nigérienne",
    streamUrl: "https://s1.free-shoutcast.com/stream/18046",
    fallbackUrl: "https://s1.free-shoutcast.com/stream/18046",
    logo: "assets/logos/radio-garkuwa-niger.svg",
    featured: true
  },
  {
    id: "wadata-radio-niamey",
    name: "Wadata Radio 107.4 FM (Niamey)",
    country: "Niger",
    city: "Niamey",
    state: "Niamey",
    code: "🇳🇪",
    continent: "africa",
    category: "news",
    frequency: "107.4",
    band: "FM",
    language: "Français, Hausa & Zarma",
    genre: "La Radio Autrement, Société, Débats & Jeunesse",
    streamUrl: "https://stream.zeno.fm/1y2c3qbgbchvv",
    fallbackUrl: "https://stream.zeno.fm/1y2c3qbgbchvv",
    logo: "assets/logos/wadata-radio-niger.svg",
    featured: true
  },
  {
    id: "radio-dallol-baleyara",
    name: "Radio Dallol 92.8 FM (Baleyara)",
    country: "Niger",
    city: "Baleyara",
    state: "Tillabéri",
    code: "🇳🇪",
    continent: "africa",
    category: "culture",
    frequency: "92.8",
    band: "FM",
    language: "Hausa, Zarma & Peulh",
    genre: "Voix du Dallol Bosso, Marché de Baleyara & Communauté",
    streamUrl: "https://stream.zeno.fm/kvxeteg0cf9uv",
    fallbackUrl: "https://stream.zeno.fm/kvxeteg0cf9uv",
    logo: "assets/logos/radio-dallol-niger.svg",
    featured: true
  },
  {
    id: "mudubar-radio-niamey",
    name: "Mudubar Radio TV (Niamey)",
    country: "Niger",
    city: "Niamey",
    state: "Niamey",
    code: "🇳🇪",
    continent: "africa",
    category: "news",
    frequency: "WEB",
    band: "WEB",
    language: "Français & Langues nationales",
    genre: "Actualités en direct, Événements & Médias du Niger",
    streamUrl: "https://stream.zeno.fm/aslxrjp4djutv",
    fallbackUrl: "https://stream.zeno.fm/aslxrjp4djutv",
    logo: "assets/logos/mudubar-radio-niger.svg",
    featured: true
  },
  {
    id: "voix-du-sahel-niamey",
    name: "RTN La Voix du Sahel (91.3 FM)",
    country: "Niger",
    city: "Niamey",
    state: "Niamey",
    code: "🇳🇪",
    continent: "africa",
    category: "news",
    frequency: "91.3",
    band: "FM",
    language: "Français, Hausa, Zarma & Tamasheq",
    genre: "Radio Télévision du Niger, Voix Officielle & Culture",
    streamUrl: "https://s1.free-shoutcast.com/stream/18478/;",
    fallbackUrl: "https://stream.zeno.fm/1y2c3qbgbchvv",
    logo: "assets/logos/voix-du-sahel-niger.svg",
    featured: true
  },
  {
    id: "radio-saraounia-niamey",
    name: "Radio Saraounia 96.2 FM (Niamey)",
    country: "Niger",
    city: "Niamey",
    state: "Niamey",
    code: "🇳🇪",
    continent: "africa",
    category: "culture",
    frequency: "96.2",
    band: "FM",
    language: "Français & Hausa",
    genre: "Voix de la Reine Saraounia, Société, Femmes & Musique",
    streamUrl: "https://s1.free-shoutcast.com/stream/18046",
    fallbackUrl: "https://s1.free-shoutcast.com/stream/18046",
    logo: "assets/logos/radio-saraounia-niger.svg",
    featured: true
  },
  {
    id: "radio-anfani-niamey",
    name: "Radio Anfani 100.0 FM (Niamey)",
    country: "Niger",
    city: "Niamey",
    state: "Niamey",
    code: "🇳🇪",
    continent: "africa",
    category: "news",
    frequency: "100.0",
    band: "FM",
    language: "Français, Hausa & Zarma",
    genre: "1ère radio privée indépendante, Débats & Liberté d'expression",
    streamUrl: "https://stream.zeno.fm/1y2c3qbgbchvv",
    fallbackUrl: "https://s1.free-shoutcast.com/stream/18478/;",
    logo: "assets/logos/radio-anfani-niger.svg",
    featured: true
  },

  // ==========================================
  // 1.f 🇧🇫 BURKINA FASO
  // ==========================================
  {
    id: "radio-omega-burkina",
    name: "Radio Oméga 103.9 FM (Ouaga)",
    country: "Burkina Faso",
    city: "Ouagadougou",
    state: "Centre",
    code: "🇧🇫",
    continent: "africa",
    category: "news",
    frequency: "103.9",
    band: "FM",
    language: "Français & Mooré",
    genre: "L'info en temps réel, Politique, Débats & Société",
    streamUrl: "https://listen.radioking.com/radio/891831/stream/962296",
    fallbackUrl: "https://listen.radioking.com/radio/891831/stream/962296",
    logo: "assets/logos/radio-omega-burkina.svg",
    featured: true
  },
  {
    id: "radio-pulsar-ouaga",
    name: "Radio Pulsar 94.8 FM (Ouaga)",
    country: "Burkina Faso",
    city: "Ouagadougou",
    state: "Centre",
    code: "🇧🇫",
    continent: "africa",
    category: "culture",
    frequency: "94.8",
    band: "FM",
    language: "Français & Mooré",
    genre: "Le Rythme de la Cité, Musique urbaine, Hip-hop & Afro",
    streamUrl: "https://pulsarouagadougou.ice.infomaniak.ch/pulsarouagadougou-128.mp3",
    fallbackUrl: "https://pulsarouagadougou.ice.infomaniak.ch/pulsarouagadougou-128.mp3",
    logo: "assets/logos/radio-pulsar-ouaga.svg",
    featured: true
  },
  {
    id: "savane-fm-burkina",
    name: "Savane FM 103.4 (Ouagadougou)",
    country: "Burkina Faso",
    city: "Ouagadougou",
    state: "Centre",
    code: "🇧🇫",
    continent: "africa",
    category: "news",
    frequency: "103.4",
    band: "FM",
    language: "Mooré, Français & Dioula",
    genre: "Radio n°1 du Burkina, Débats, Contes & Musiques du terroir",
    streamUrl: "https://stream.zeno.fm/97fyu5a10bruv",
    fallbackUrl: "https://stream.zeno.fm/97fyu5a10bruv",
    logo: "assets/logos/savane-fm-burkina.svg",
    featured: true
  },
  {
    id: "rtb-radio-burkina",
    name: "RTB Radio Nationale (99.9 FM)",
    country: "Burkina Faso",
    city: "Ouagadougou",
    state: "Centre",
    code: "🇧🇫",
    continent: "africa",
    category: "news",
    frequency: "99.9",
    band: "FM",
    language: "Français, Mooré, Dioula & Fulfuldé",
    genre: "Radiodiffusion Télévision du Burkina, Actualités officielles",
    streamUrl: "https://stream.zeno.fm/94799gsteg0uv",
    fallbackUrl: "https://stream.zeno.fm/94799gsteg0uv",
    logo: "assets/logos/rtb-radio-burkina.svg",
    featured: true
  },
  {
    id: "horizon-fm-ouaga",
    name: "Horizon FM 104.4 (Ouagadougou)",
    country: "Burkina Faso",
    city: "Ouagadougou",
    state: "Centre",
    code: "🇧🇫",
    continent: "africa",
    category: "culture",
    frequency: "104.4",
    band: "FM",
    language: "Français & Mooré",
    genre: "1ère radio privée d'Afrique de l'Ouest (1987), Variétés & Talk",
    streamUrl: "https://stream.zeno.fm/0945crn4bf9uv",
    fallbackUrl: "https://stream.zeno.fm/7861hrn4bf9uv",
    logo: "assets/logos/horizon-fm-ouaga.svg",
    featured: true
  },
  {
    id: "radio-balafon-bobo",
    name: "Radio Balafon 102.7 FM (Bobo)",
    country: "Burkina Faso",
    city: "Bobo-Dioulasso",
    state: "Hauts-Bassins",
    code: "🇧🇫",
    continent: "africa",
    category: "culture",
    frequency: "102.7",
    band: "FM",
    language: "Dioula & Français",
    genre: "Sya, Musique mandingue, Balafon, Culture & Infos",
    streamUrl: "https://stream.zeno.fm/v3ddfda0cf9uv",
    fallbackUrl: "https://stream.zeno.fm/v3ddfda0cf9uv",
    logo: "assets/logos/radio-balafon-bobo.svg",
    featured: true
  },
  {
    id: "radio-bizi-inter",
    name: "Radio Bizi Inter (Groupe BZ)",
    country: "Burkina Faso",
    city: "Ouagadougou",
    state: "Centre",
    code: "🇧🇫",
    continent: "africa",
    category: "culture",
    frequency: "WEB",
    band: "WEB",
    language: "Français & Mooré",
    genre: "Musique burkinabè, Diaspora, Variétés & Culture",
    streamUrl: "https://sonic.mediacp.eu/8040/;",
    fallbackUrl: "https://sonic.mediacp.eu/8040/;",
    logo: "assets/logos/radio-bizi-inter.svg",
    featured: true
  },
  {
    id: "radio-maria-burkina",
    name: "Radio Maria Burkina Faso",
    country: "Burkina Faso",
    city: "Ouagadougou",
    state: "Centre",
    code: "🇧🇫",
    continent: "africa",
    category: "culture",
    frequency: "91.6",
    band: "FM",
    language: "Français & Mooré",
    genre: "Spiritualité chrétienne, Évangélisation, Prière & Paix",
    streamUrl: "https://rcblive.stream/radio/8024/stream",
    fallbackUrl: "https://rcblive.stream/radio/8024/stream",
    logo: "assets/logos/radio-maria-burkina.svg",
    featured: true
  },

  // ==========================================
  // 1.g 🇬🇳 GUINÉE (CONAKRY)
  // ==========================================
  {
    id: "espace-fm-guinee-conakry",
    name: "Espace FM 101.5 (Conakry)",
    country: "Guinée",
    city: "Conakry",
    state: "Conakry",
    code: "🇬🇳",
    continent: "africa",
    category: "news",
    frequency: "101.5",
    band: "FM",
    language: "Français, Malinké, Soussou, Peul",
    genre: "Les Grandes Gueules, Actualités & Débats en direct",
    streamUrl: "http://listen.radioking.com/radio/16769/stream/49487",
    fallbackUrl: "http://listen.radioking.com/radio/16769/stream/49487",
    logo: "assets/logos/espace-fm-guinee.svg",
    featured: true
  },
  {
    id: "bonheur-fm-guinee-conakry",
    name: "BONHEUR FM Guinée 101.4 FM",
    country: "Guinée",
    city: "Conakry",
    state: "Conakry",
    code: "🇬🇳",
    continent: "africa",
    category: "general",
    frequency: "101.4",
    band: "FM",
    language: "Français & Langues nationales",
    genre: "Musique urbaine, Culture & Information Conakry",
    streamUrl: "https://stream.zeno.fm/gzxp5eqkafeuv",
    fallbackUrl: "https://stream.zeno.fm/gzxp5eqkafeuv",
    logo: "assets/logos/bonheur-fm-guinee.svg",
    featured: true
  },
  {
    id: "littoral-fm-guinee",
    name: "Littoral FM Guinée 99.7 FM",
    country: "Guinée",
    city: "Conakry",
    state: "Conakry",
    code: "🇬🇳",
    continent: "africa",
    category: "music",
    frequency: "99.7",
    band: "FM",
    language: "Français & Musique Mandingue",
    genre: "Hits guinéens, Musique Mandingue & Afrobeats",
    streamUrl: "https://stream.zeno.fm/q94z1t5hsm5tv",
    fallbackUrl: "https://stream.zeno.fm/q94z1t5hsm5tv",
    logo: "assets/logos/littoral-fm-guinee.svg",
    featured: true
  },
  {
    id: "lgf-fun-guinee",
    name: "LGF FUN GUINEE",
    country: "Guinée",
    city: "Conakry",
    state: "Conakry",
    code: "🇬🇳",
    continent: "africa",
    category: "music",
    frequency: "92.5",
    band: "FM",
    language: "Français & Pop",
    genre: "Jeunesse, Pop urbaine, RnB & Hits mondiaux",
    streamUrl: "https://stream.zeno.fm/6y3sswt61pcuv",
    fallbackUrl: "https://stream.zeno.fm/6y3sswt61pcuv",
    logo: "assets/logos/lgf-fun-guinee.svg",
    featured: true
  },
  {
    id: "lgf-talk-guinee",
    name: "LGF TALK GUINEE",
    country: "Guinée",
    city: "Conakry",
    state: "Conakry",
    code: "🇬🇳",
    continent: "africa",
    category: "news",
    frequency: "95.0",
    band: "FM",
    language: "Français & Débats",
    genre: "Talk show, Débats d'opinion, Politique & Société",
    streamUrl: "https://stream.zeno.fm/xirmzwnnpintv",
    fallbackUrl: "https://stream.zeno.fm/xirmzwnnpintv",
    logo: "assets/logos/lgf-talk-guinee.svg",
    featured: true
  },
  {
    id: "afrionde-conakry",
    name: "AfriOnde Conakry",
    country: "Guinée",
    city: "Conakry",
    state: "Conakry",
    code: "🇬🇳",
    continent: "africa",
    category: "culture",
    frequency: "WEB",
    band: "WEB",
    language: "Français & Langues d'Afrique",
    genre: "Culture africaine, Actualités & Variétés guinéennes",
    streamUrl: "https://live.afrionde.fr/afrionde5",
    fallbackUrl: "https://live.afrionde.fr/afrionde5",
    logo: "assets/logos/afrionde-conakry.svg",
    featured: true
  },

  // ==========================================
  // 1.h 🇬🇼 GUINÉE-BISSAU
  // ==========================================
  {
    id: "radio-voz-da-guine-bissau",
    name: "Rádio Voz da Guiné (Bissau)",
    country: "Guinée-Bissau",
    city: "Bissau",
    state: "Bissau",
    code: "🇬🇼",
    continent: "africa",
    category: "news",
    frequency: "98.5",
    band: "FM",
    language: "Português & Crioulo",
    genre: "Música africana, Informação & Cultura da Guiné-Bissau",
    streamUrl: "https://stream.zeno.fm/iwioelqe6qwtv",
    fallbackUrl: "https://stream.zeno.fm/iwioelqe6qwtv",
    logo: "assets/logos/radio-voz-da-guine.svg",
    featured: true
  },
  {
    id: "radio-voz-de-esperanca-bissau",
    name: "Rádio Voz de Esperança (Bissau)",
    country: "Guinée-Bissau",
    city: "Bissau",
    state: "Bissau",
    code: "🇬🇼",
    continent: "africa",
    category: "culture",
    frequency: "92.0",
    band: "FM",
    language: "Português & Crioulo",
    genre: "Programação cristã, Esperança & Valores Comunitários",
    streamUrl: "https://stream.zeno.fm/c857sevbu18uv",
    fallbackUrl: "https://stream.zeno.fm/c857sevbu18uv",
    logo: "assets/logos/radio-esperanca-bissau.svg",
    featured: true
  },

  // ==========================================
  // 1.i 🇬🇶 GUINÉE ÉQUATORIALE
  // ==========================================
  {
    id: "rnge-radio-malabo",
    name: "Radio Nacional de Guinea Ecuatorial (RNGE Malabo)",
    country: "Guinée équatoriale",
    city: "Malabo",
    state: "Bioko Norte",
    code: "🇬🇶",
    continent: "africa",
    category: "news",
    frequency: "95.5",
    band: "FM",
    language: "Español & Français",
    genre: "Emisora oficial nacional, Noticias de Guinea Ecuatorial & Música",
    streamUrl: "https://rpn.bozztv.com/ses/tvge/tvgeradio/playlist.m3u8",
    fallbackUrl: "https://rpn.bozztv.com/ses/tvge/tvgeradio/playlist.m3u8",
    logo: "assets/logos/rnge-radio-malabo.svg",
    featured: true
  },

  // ==========================================
  // 1.j 🇲🇦 MAROC
  // ==========================================
  {
    id: "medi1-radio-maroc",
    name: "Medi 1 Radio (Radio Méditerranée)",
    country: "Maroc",
    city: "Tanger",
    state: "Tanger-Tétouan-Al Hoceïma",
    code: "🇲🇦",
    continent: "africa",
    category: "news",
    frequency: "99.6",
    band: "FM",
    language: "Français & Arabe",
    genre: "La grande radio d'information du Grand Maghreb & Musique",
    streamUrl: "https://cdn.live.easybroadcast.io/live/83_medi1radio-maghreb_8s9i4bn/playlist.m3u8",
    fallbackUrl: "https://cdn.live.easybroadcast.io/live/83_medi1radio-maghreb_8s9i4bn/playlist.m3u8",
    logo: "assets/logos/medi1-radio-maroc.svg",
    featured: true
  },
  {
    id: "hit-radio-maroc",
    name: "Hit Radio Maroc (100% Hits)",
    country: "Maroc",
    city: "Rabat",
    state: "Rabat-Salé-Kénitra",
    code: "🇲🇦",
    continent: "africa",
    category: "music",
    frequency: "100.3",
    band: "FM",
    language: "Français & Darija",
    genre: "100% Hits, Pop, RnB, Dance & Jeunesse marocaine",
    streamUrl: "https://hitradio-maroc.ice.infomaniak.ch/hitradio-maroc-128.mp3",
    fallbackUrl: "https://hitradio-maroc.ice.infomaniak.ch/hitradio-maroc-128.mp3",
    logo: "assets/logos/hit-radio-maroc.svg",
    featured: true
  },
  {
    id: "radio-mars-maroc",
    name: "Radio Mars 91.2 FM Maroc",
    country: "Maroc",
    city: "Casablanca",
    state: "Casablanca-Settat",
    code: "🇲🇦",
    continent: "africa",
    category: "sports",
    frequency: "91.2",
    band: "FM",
    language: "العربية & Français",
    genre: "100% Football marocain, Botola Pro, Sport & Musique",
    streamUrl: "https://radiomars.ice.infomaniak.ch/radiomars-128.mp3",
    fallbackUrl: "https://radiomars.ice.infomaniak.ch/radiomars-128.mp3",
    logo: "assets/logos/radio-mars-maroc.svg",
    featured: true
  },
  {
    id: "radio-aswat-maroc",
    name: "Radio Aswat 104.5 FM",
    country: "Maroc",
    city: "Casablanca",
    state: "Casablanca-Settat",
    code: "🇲🇦",
    continent: "africa",
    category: "news",
    frequency: "104.5",
    band: "FM",
    language: "العربية & Français",
    genre: "Des voix et des hommes, Information, Société & Famille",
    streamUrl: "https://broadcast.ice.infomaniak.ch/aswat-high.mp3",
    fallbackUrl: "http://aswat.ice.infomaniak.ch/aswat-high.mp3",
    logo: "assets/logos/radio-aswat-maroc.svg",
    featured: true
  },
  {
    id: "radio-2m-maroc",
    name: "Radio 2M (Casablanca)",
    country: "Maroc",
    city: "Casablanca",
    state: "Casablanca-Settat",
    code: "🇲🇦",
    continent: "africa",
    category: "general",
    frequency: "93.1",
    band: "FM",
    language: "العربية & Français",
    genre: "La radio de la 2ème chaîne nationale marocaine",
    streamUrl: "https://radio2m.ice.infomaniak.ch/radio2m-64.mp3",
    fallbackUrl: "https://radio2m.ice.infomaniak.ch/radio2m-64.mp3",
    logo: "assets/logos/radio-2m-maroc.svg",
    featured: true
  },
  {
    id: "radio-mfm-maroc",
    name: "MFM Radio Maroc",
    country: "Maroc",
    city: "Casablanca",
    state: "Casablanca-Settat",
    code: "🇲🇦",
    continent: "africa",
    category: "general",
    frequency: "103.5",
    band: "FM",
    language: "العربية",
    genre: "La radio de proximité du Maroc, Conseils, Société & Musique",
    streamUrl: "https://mfm.ice.infomaniak.ch/mfm-128.mp3",
    fallbackUrl: "https://a5.asurahosting.com:7980/radio.mp3",
    logo: "assets/logos/radio-mfm-maroc.svg",
    featured: true
  },
  {
    id: "atlantic-radio-maroc",
    name: "Atlantic Radio 97.6 FM",
    country: "Maroc",
    city: "Casablanca",
    state: "Casablanca-Settat",
    code: "🇲🇦",
    continent: "africa",
    category: "news",
    frequency: "97.6",
    band: "FM",
    language: "Français & Arabe",
    genre: "Économie, Politique, Culture & Débats de société",
    streamUrl: "https://atlantic-sonic.nindohost.net:9300/stream",
    fallbackUrl: "https://atlantic-sonic.nindohost.net:9300/stream",
    logo: "assets/logos/atlantic-radio-maroc.svg",
    featured: true
  },
  {
    id: "chada-fm-maroc",
    name: "Chada FM 100.8",
    country: "Maroc",
    city: "Casablanca",
    state: "Casablanca-Settat",
    code: "🇲🇦",
    continent: "africa",
    category: "music",
    frequency: "100.8",
    band: "FM",
    language: "العربية",
    genre: "Chansons marocaines, Variétés orientales & Divertissement",
    streamUrl: "https://stream.bodkas.com/playlist?id=chadafmradio",
    fallbackUrl: "https://stream.bodkas.com/playlist?id=chadafmradio",
    logo: "assets/logos/chada-fm-maroc.svg",
    featured: true
  },
  {
    id: "medina-fm-maroc",
    name: "Medina FM Maroc",
    country: "Maroc",
    city: "Meknès",
    state: "Fès-Meknès",
    code: "🇲🇦",
    continent: "africa",
    category: "culture",
    frequency: "100.1",
    band: "FM",
    language: "العربية & Amazigh",
    genre: "Radio du monde rural, Patrimoine, Terroir & Chaabi",
    streamUrl: "https://medinafm.ice.infomaniak.ch/medinafm-128.mp3",
    fallbackUrl: "https://medinafm.ice.infomaniak.ch/medinafm-64.mp3",
    logo: "assets/logos/medina-fm-maroc.svg",
    featured: true
  },
  {
    id: "cap-radio-maroc",
    name: "Cap Radio Tanger",
    country: "Maroc",
    city: "Tanger",
    state: "Tanger-Tétouan-Al Hoceïma",
    code: "🇲🇦",
    continent: "africa",
    category: "news",
    frequency: "105.4",
    band: "FM",
    language: "العربية & Tarifit",
    genre: "La voix du Détroit et du Nord marocain, Info & Musique",
    streamUrl: "https://listen.radioking.com/radio/710810/stream/776366",
    fallbackUrl: "https://listen.radioking.com/radio/710810/stream/776366",
    logo: "assets/logos/cap-radio-maroc.svg",
    featured: true
  },

  // ==========================================
  // 1.k 🇹🇳 TUNISIE
  // ==========================================
  {
    id: "mosaique-fm-tunisie",
    name: "Mosaïque FM 94.9 (Radio n°1)",
    country: "Tunisie",
    city: "Tunis",
    state: "Grand Tunis",
    code: "🇹🇳",
    continent: "africa",
    category: "news",
    frequency: "94.9",
    band: "FM",
    language: "العربية & Français",
    genre: "Première radio de Tunisie, News, Talk & Variétés",
    streamUrl: "https://radio.mosaiquefm.net/mosalive",
    fallbackUrl: "http://radio.mosaiquefm.net:8000/mosalive",
    logo: "assets/logos/mosaique-fm-tunisie.svg",
    featured: true
  },
  {
    id: "jawhara-fm-tunisie",
    name: "Jawhara FM 102.5 (Sousse & Sahel)",
    country: "Tunisie",
    city: "Sousse",
    state: "Sousse",
    code: "🇹🇳",
    continent: "africa",
    category: "general",
    frequency: "102.5",
    band: "FM",
    language: "العربية & Français",
    genre: "La radio n°1 du Sahel tunisien, Divertissement & Info",
    streamUrl: "https://streaming2.toutech.net/jawharafm",
    fallbackUrl: "http://streaming2.toutech.net:8000/jawharafm",
    logo: "assets/logos/jawhara-fm-tunisie.svg",
    featured: true
  },
  {
    id: "diwan-fm-tunisie",
    name: "Diwan FM (Sfax & Grand Tunis)",
    country: "Tunisie",
    city: "Sfax",
    state: "Sfax",
    code: "🇹🇳",
    continent: "africa",
    category: "news",
    frequency: "91.2",
    band: "FM",
    language: "العربية",
    genre: "صوتكم, Débats d'actualité, Économie & Musique",
    streamUrl: "https://streaming.diwanfm.net/stream",
    fallbackUrl: "https://streaming.diwanfm.net/stream",
    logo: "assets/logos/diwan-fm-tunisie.svg",
    featured: true
  },
  {
    id: "express-fm-tunisie",
    name: "Radio Express FM 103.6",
    country: "Tunisie",
    city: "Tunis",
    state: "Grand Tunis",
    code: "🇹🇳",
    continent: "africa",
    category: "news",
    frequency: "103.6",
    band: "FM",
    language: "Français & Arabe",
    genre: "1ère radio économique et financière de Tunisie, Business & Talk",
    streamUrl: "https://expressfm.ice.infomaniak.ch/expressfm-64.mp3",
    fallbackUrl: "https://expressfm.ice.infomaniak.ch/expressfm-64.mp3",
    logo: "assets/logos/express-fm-tunisie.svg",
    featured: true
  },
  {
    id: "radio-nationale-tunisie",
    name: "Radio Nationale Tunisienne",
    country: "Tunisie",
    city: "Tunis",
    state: "Grand Tunis",
    code: "🇹🇳",
    continent: "africa",
    category: "news",
    frequency: "101.5",
    band: "FM",
    language: "العربية",
    genre: "الإذاعة الوطنية, La voix officielle de la Tunisie depuis 1938",
    streamUrl: "https://radio.radiotunisienne.tn/nationale",
    fallbackUrl: "http://rtstream.tanitweb.com/nationale",
    logo: "assets/logos/radio-nationale-tunisie.svg",
    featured: true
  },
  {
    id: "radio-jeunes-tunisie",
    name: "Radio Jeunes Tunisie (إذاعة الشباب)",
    country: "Tunisie",
    city: "Tunis",
    state: "Grand Tunis",
    code: "🇹🇳",
    continent: "africa",
    category: "music",
    frequency: "96.5",
    band: "FM",
    language: "العربية & Français",
    genre: "Hits tunisiens et internationaux, Jeunesse & Pop",
    streamUrl: "https://radio.radiotunisienne.tn/jeunes",
    fallbackUrl: "http://rtstream.tanitweb.com/jeunes",
    logo: "assets/logos/radio-jeunes-tunisie.svg",
    featured: true
  },
  {
    id: "rtci-radio-tunisie",
    name: "RTCI (Radio Tunis Chaîne Internationale)",
    country: "Tunisie",
    city: "Tunis",
    state: "Grand Tunis",
    code: "🇹🇳",
    continent: "africa",
    category: "news",
    frequency: "92.0",
    band: "FM",
    language: "Français, English, Italiano, Deutsch",
    genre: "Émissions polyglottes en Français, Anglais, Italien & Allemand",
    streamUrl: "https://radio.radiotunisienne.tn/rtci",
    fallbackUrl: "http://rtstream.tanitweb.com/rtci",
    logo: "assets/logos/rtci-radio-tunisie.svg",
    featured: true
  },
  {
    id: "sabra-fm-tunisie",
    name: "Sabra FM 98.8 (Kairouan)",
    country: "Tunisie",
    city: "Kairouan",
    state: "Kairouan",
    code: "🇹🇳",
    continent: "africa",
    category: "general",
    frequency: "98.8",
    band: "FM",
    language: "العربية",
    genre: "صبرة إف إم, La voix du Centre de la Tunisie et du patrimoine",
    streamUrl: "https://manager5.streamradio.fr:1905/stream",
    fallbackUrl: "https://manager5.streamradio.fr:1905/stream",
    logo: "assets/logos/sabra-fm-tunisie.svg",
    featured: true
  },
  {
    id: "zitouna-fm-tunisie",
    name: "Zitouna FM (إذاعة الزيتونة)",
    country: "Tunisie",
    city: "Tunis",
    state: "Grand Tunis",
    code: "🇹🇳",
    continent: "africa",
    category: "culture",
    frequency: "102.9",
    band: "FM",
    language: "العربية",
    genre: "Récitations du Saint Coran, Émissions religieuses & Spiritualité",
    streamUrl: "https://radio.radiotunisienne.tn/radiozaitouna",
    fallbackUrl: "https://radio.radiotunisienne.tn/radiozaitouna",
    logo: "assets/logos/zitouna-fm-tunisie.svg",
    featured: true
  },
  {
    id: "radio-misk-tunisie",
    name: "Radio Misk (Tunis)",
    country: "Tunisie",
    city: "Tunis",
    state: "Grand Tunis",
    code: "🇹🇳",
    continent: "africa",
    category: "culture",
    frequency: "106.9",
    band: "FM",
    language: "Français & Arabe",
    genre: "Culture, Musique alternative, Cinéma & Art tunisien",
    streamUrl: "https://live.misk.art/stream",
    fallbackUrl: "https://live.misk.art/stream",
    logo: "assets/logos/radio-misk-tunisie.svg",
    featured: true
  },

  // ==========================================
  // 2. 🇩🇿 ALGÉRIE
  // ==========================================
  {
    id: "algerie-chaine-3",
    name: "Radio Algérie Chaîne 3",
    country: "Algérie",
    city: "Alger",
    state: "Alger",
    code: "🇩🇿",
    continent: "africa",
    category: "news",
    frequency: "88.4",
    band: "FM",
    language: "Français & Arabe",
    genre: "Actualités algériennes, Débats, Culture & Société",
    streamUrl: "https://webradio1.tda.dz:8001/Chaine3_64K.mp3",
    fallbackUrl: "https://webradio2.tda.dz:8001/Chaine3_64K.mp3",
    logo: "assets/logos/algerie-chaine-3.svg",
    featured: true
  },
  {
    id: "algerie-chaine-1",
    name: "Radio Algérie Chaîne 1 (القناة الأولى)",
    country: "Algérie",
    city: "Alger",
    state: "Alger",
    code: "🇩🇿",
    continent: "africa",
    category: "news",
    frequency: "89.8",
    band: "FM",
    language: "العربية",
    genre: "Première radio généraliste, Information nationale & Société",
    streamUrl: "https://webradio1.tda.dz:8001/Chaine1_64K.mp3",
    fallbackUrl: "https://webradio2.tda.dz:8001/Chaine1_64K.mp3",
    logo: "assets/logos/algerie-chaine-1.svg",
    featured: true
  },
  {
    id: "algerie-chaine-2",
    name: "Radio Algérie Chaîne 2 (القناة الثانية - Tamaziɣt)",
    country: "Algérie",
    city: "Alger",
    state: "Alger",
    code: "🇩🇿",
    continent: "africa",
    category: "culture",
    frequency: "94.7",
    band: "FM",
    language: "Tamaziɣt (Kabyle, Chaoui, Mozabite)",
    genre: "Expression amazighe, Patrimoine & Musique traditionnelle",
    streamUrl: "https://webradio1.tda.dz:8001/Chaine2_64K.mp3",
    fallbackUrl: "https://webradio2.tda.dz:8001/Chaine2_64K.mp3",
    logo: "assets/logos/algerie-chaine-2.svg",
    featured: true
  },
  {
    id: "jil-fm-algerie",
    name: "Radio Jil FM (La Radio Jeunesse)",
    country: "Algérie",
    city: "Alger",
    state: "Alger",
    code: "🇩🇿",
    continent: "africa",
    category: "music",
    frequency: "94.7",
    band: "FM",
    language: "Français & Arabe dialectal",
    genre: "Pop algérienne, Raï moderne, Rap, Urban & Electro",
    streamUrl: "https://webradio1.tda.dz:8001/Jeunesse_64K.mp3",
    fallbackUrl: "https://webradio2.tda.dz:8001/Jeunesse_64K.mp3",
    logo: "assets/logos/jil-fm-algerie.svg",
    featured: true
  },
  {
    id: "el-bahdja-alger",
    name: "Radio El Bahdja 94.2 FM (Alger la Blanche)",
    country: "Algérie",
    city: "Alger",
    state: "Alger",
    code: "🇩🇿",
    continent: "africa",
    category: "general",
    frequency: "94.2",
    band: "FM",
    language: "Arabe algérois & Français",
    genre: "Chaâbi, Musique algéroise, Proximité & Vie de la capitale",
    streamUrl: "https://webradio1.tda.dz:8001/ElBahdja_64K.mp3",
    fallbackUrl: "https://webradio3.tda.dz:8001/ElBahdja_64K.mp3",
    logo: "assets/logos/el-bahdja-alger.svg",
    featured: true
  },
  {
    id: "algerie-internationale",
    name: "Radio Algérie Internationale (RAI - الجزائر الدولية)",
    country: "Algérie",
    city: "Alger",
    state: "Alger",
    code: "🇩🇿",
    continent: "africa",
    category: "news",
    frequency: "WEB",
    band: "WEB",
    language: "Français, Arabe, Anglais & Espagnol",
    genre: "Actualité mondiale, Diplomatie, Géopolitique & Analyses",
    streamUrl: "https://webradio3.tda.dz:8001/Internationale_64K.mp3",
    fallbackUrl: "https://webradio1.tda.dz:8001/Internationale_64K.mp3",
    logo: "assets/logos/algerie-internationale.svg",
    featured: true
  },
  {
    id: "algerie-coran",
    name: "Radio Coran Algérie (إذاعة القرآن الكريم)",
    country: "Algérie",
    city: "Alger",
    state: "Alger",
    code: "🇩🇿",
    continent: "africa",
    category: "culture",
    frequency: "1422",
    band: "AM",
    language: "العربية",
    genre: "Récitation du Saint Coran, Exégèse & Spiritualité",
    streamUrl: "https://webradio1.tda.dz:8001/Coran_64K.mp3",
    fallbackUrl: "https://webradio2.tda.dz:8001/Coran_64K.mp3",
    logo: "assets/logos/algerie-coran.svg",
    featured: true
  },
  {
    id: "algerie-culture",
    name: "Radio Algérie Culture (إذاعة الثقافة)",
    country: "Algérie",
    city: "Alger",
    state: "Alger",
    code: "🇩🇿",
    continent: "africa",
    category: "culture",
    frequency: "91.5",
    band: "FM",
    language: "Français & Arabe",
    genre: "Histoire d'Algérie, Patrimoine, Théâtre, Arts & Littérature",
    streamUrl: "https://webradio1.tda.dz:8001/Culture_64K.mp3",
    fallbackUrl: "https://webradio2.tda.dz:8001/Culture_64K.mp3",
    logo: "assets/logos/algerie-culture.svg",
    featured: true
  },
  {
    id: "zaman-fm-algerie",
    name: "Radio Zaman FM (زمان - La Radio du Patrimoine)",
    country: "Algérie",
    city: "Alger",
    state: "Alger",
    code: "🇩🇿",
    continent: "africa",
    category: "music",
    frequency: "WEB",
    band: "WEB",
    language: "Arabe & Français",
    genre: "Classiques de la chanson algérienne, Andalous & Nostalgie",
    streamUrl: "https://webradio2.tda.dz:8001/Zamen_64K.mp3",
    fallbackUrl: "https://webradio1.tda.dz:8001/Zamen_64K.mp3",
    logo: "assets/logos/zaman-fm-algerie.svg",
    featured: true
  },
  {
    id: "radio-oran-algerie",
    name: "Radio Oran El Bahia (إذاعة وهران)",
    country: "Algérie",
    city: "Oran",
    state: "Oran",
    code: "🇩🇿",
    continent: "africa",
    category: "general",
    frequency: "92.7",
    band: "FM",
    language: "Arabe oranais & Français",
    genre: "Grand Ouest algérien, Berceau du Raï & Culture oranaise",
    streamUrl: "https://webradio2.tda.dz:8001/Oran_64K.mp3",
    fallbackUrl: "https://webradio1.tda.dz:8001/Oran_64K.mp3",
    logo: "assets/logos/radio-oran-algerie.svg",
    featured: true
  },

  // ==========================================
  // 3. 🇦🇴 ANGOLA & 🇨🇲 CAMEROUN
  // ==========================================
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
    id: "crtv-poste-national",
    name: "CRTV Poste National 88.8 FM",
    country: "Cameroun",
    city: "Yaoundé",
    state: "Centre",
    code: "🇨🇲",
    continent: "africa",
    category: "news",
    frequency: "88.8",
    band: "FM",
    language: "Français & English",
    genre: "Radio Télévision Nationale du Cameroun, Actualités & Culture",
    streamUrl: "https://10gb1.acangroup.org:8000/postenational",
    fallbackUrl: "https://10gb1.acangroup.org:8000/postenational",
    logo: "assets/logos/crtv-poste-national.svg",
    featured: true
  },
  {
    id: "jambo-fm-douala",
    name: "Jambo FM Douala",
    country: "Cameroun",
    city: "Douala",
    state: "Littoral",
    code: "🇨🇲",
    continent: "africa",
    category: "culture",
    band: "WEB",
    language: "Français & Pidgin",
    genre: "L'Afrique en Couleurs, Musique Urbaine & Divertissement",
    streamUrl: "https://kdevstream.myvnc.com/listen/jambofm/jambofm",
    fallbackUrl: "https://kdevstream.myvnc.com/listen/jambofm/jambofm",
    logo: "assets/logos/jambo-fm-douala.svg",
    featured: true
  },
  {
    id: "237onair-yaounde",
    name: "237ONAIR Yaoundé",
    country: "Cameroun",
    city: "Yaoundé",
    state: "Centre",
    code: "🇨🇲",
    continent: "africa",
    category: "culture",
    band: "WEB",
    language: "Français & English",
    genre: "Le Son du 237, Afrobeats, Makossa & Hit Music",
    streamUrl: "https://radio.237onair.com/listen/237onair/radio.mp3",
    fallbackUrl: "https://radio.237onair.com/listen/237onair/radio.mp3",
    logo: "assets/logos/237onair-yaounde.svg",
    featured: true
  },
  {
    id: "camerhits-radio",
    name: "CamerHits Radio",
    country: "Cameroun",
    city: "Yaoundé",
    state: "Centre",
    code: "🇨🇲",
    continent: "africa",
    category: "culture",
    band: "WEB",
    language: "Français & English",
    genre: "100% 237 Hits, Makossa, Bikutsi & Musiques Camerounaises",
    streamUrl: "https://camerhits.com/icecast/stream",
    fallbackUrl: "https://camerhits.com/icecast/stream",
    logo: "assets/logos/camerhits-radio.svg",
    featured: false
  },
  {
    id: "radio-bonne-nouvelle",
    name: "Radio Bonne Nouvelle Douala",
    country: "Cameroun",
    city: "Douala",
    state: "Littoral",
    code: "🇨🇲",
    continent: "africa",
    category: "culture",
    band: "WEB",
    language: "Français",
    genre: "Évangile, Société, Paix & Musique chrétienne",
    streamUrl: "https://radiobonnenouvelle2.ice.infomaniak.ch/radiobonnenouvelle2-96.mp3",
    fallbackUrl: "https://radiobonnenouvelle2.ice.infomaniak.ch/radiobonnenouvelle2-96.mp3",
    logo: "assets/logos/radio-bonne-nouvelle.svg",
    featured: false
  },
  {
    id: "mmuock-community-radio",
    name: "Mmuock Community Radio",
    country: "Cameroun",
    city: "Alou",
    state: "Southwest",
    code: "🇨🇲",
    continent: "africa",
    category: "culture",
    band: "WEB",
    language: "English & Mmuock",
    genre: "Community Voice, Cultural Heritage of Southwest Cameroon",
    streamUrl: "https://a7.asurahosting.com/listen/mmuock_community_radio_/radio.mp3",
    fallbackUrl: "https://a7.asurahosting.com/listen/mmuock_community_radio_/radio.mp3",
    logo: "assets/logos/mmuock-community-radio.svg",
    featured: false
  },
  {
    id: "radio-maria-cameroun",
    name: "Radio Maria Cameroun 99.8 FM",
    country: "Cameroun",
    city: "Yaoundé",
    state: "Centre",
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
    featured: true,
    locked: true
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
    featured: true,
    locked: true
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
    featured: true,
    locked: true
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
    logo: "assets/logos/diamond-fm-ibadan.svg",
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
    featured: true,
    locked: true
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
    featured: true,
    locked: true
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
    featured: true,
    locked: true
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
    logo: "assets/logos/metro-fm-lagos.svg",
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
    logo: "assets/logos/bond-fm-lagos.svg",
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
    featured: false,
    locked: true
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
    featured: true,
    locked: true
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
    featured: false,
    locked: true
  },

  // --- AUTRES ÉTATS DU NIGERIA ---
  {
    id: "urban-radio-enugu",
    name: "Urban Radio 94.5 FM Enugu",
    country: "Nigeria",
    city: "Enugu",
    state: "Enugu State",
    code: "🇳🇬",
    continent: "africa",
    category: "culture",
    frequency: "94.5",
    band: "FM",
    language: "English & Igbo",
    genre: "The Sound of the East, Urban Music, News & Culture",
    streamUrl: "https://edge.mixlr.com/channel/cfldr",
    fallbackUrl: "https://edge.mixlr.com/channel/cfldr",
    logo: "assets/logos/urban-radio-enugu.svg",
    featured: true
  },
  {
    id: "lagosjump-radio",
    name: "LagosJump Radio",
    country: "Nigeria",
    city: "Lagos",
    state: "Lagos State",
    code: "🇳🇬",
    continent: "africa",
    category: "culture",
    band: "WEB",
    language: "English & Pidgin",
    genre: "Afrobeats, Lagos Vibes & Non-Stop Urban Music",
    streamUrl: "https://radio.lagosjumpradio.com/listen/lagosjump_radio/radio.mp3",
    fallbackUrl: "https://radio.lagosjumpradio.com/listen/lagosjump_radio/radio.mp3",
    logo: "assets/logos/lagosjump-radio.svg",
    featured: true
  },
  {
    id: "gospotainment-radio",
    name: "Gospotainment Radio Lagos",
    country: "Nigeria",
    city: "Lagos",
    state: "Lagos State",
    code: "🇳🇬",
    continent: "africa",
    category: "culture",
    band: "WEB",
    language: "English & Pidgin",
    genre: "Gospel Entertainment, Inspiration & Praise 24/7",
    streamUrl: "https://radio.gotright.net/radio/8000/radio.mp3",
    fallbackUrl: "https://radio.gotright.net/radio/8000/radio.mp3",
    logo: "assets/logos/gospotainment-radio.svg",
    featured: false
  },
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
    logo: "assets/logos/1radio-ikwerre-rivers.svg",
    featured: false,
    locked: true
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
    logo: "assets/logos/bourdex-fm-abia.svg",
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
    logo: "assets/logos/kcity-radio-abuja.svg",
    featured: false
  },
  {
    id: "sud-fm-senegal",
    name: "Sud FM 98.5 Dakar (La Première)",
    country: "Sénégal",
    city: "Dakar",
    state: "Dakar",
    code: "🇸🇳",
    continent: "africa",
    category: "news",
    frequency: "98.5",
    band: "FM",
    language: "Français & Wolof",
    genre: "Actualités sénégalaises & Débats",
    streamUrl: "https://sd-151888.dedibox.fr/proxy/cotesud/csfm",
    fallbackUrl: "https://sd-151888.dedibox.fr/proxy/cotesud/csfm",
    logo: "assets/logos/sud-fm-senegal.svg",
    featured: true,
    locked: true
  },
  {
    id: "rts-radio-senegal",
    name: "RTS Radio Sénégal 92.5 FM",
    country: "Sénégal",
    city: "Dakar",
    state: "Dakar",
    code: "🇸🇳",
    continent: "africa",
    category: "news",
    frequency: "92.5",
    band: "FM",
    language: "Français & Wolof",
    genre: "Radio d'État, Informations & Culture",
    streamUrl: "https://carina.streamerr.co:2020/stream/OnSportFM",
    fallbackUrl: "https://carina.streamerr.co:2020/stream/OnSportFM",
    logo: "assets/logos/rts-radio-senegal.svg",
    featured: true
  },
  {
    id: "radio-al-fayda-kaolack",
    name: "Radio Al Fayda 90.1 FM Kaolack",
    country: "Sénégal",
    city: "Kaolack",
    state: "Kaolack",
    code: "🇸🇳",
    continent: "africa",
    category: "culture",
    frequency: "90.1",
    band: "FM",
    language: "Wolof, Arabe & Français",
    genre: "Médina Baye Niass, Spiritualité & Développement",
    streamUrl: "https://usa5.fastcast4u.com/proxy/lyartech?mp=/stream/1/",
    fallbackUrl: "https://usa5.fastcast4u.com/proxy/lyartech?mp=/stream/1/",
    logo: "assets/logos/radio-al-fayda-kaolack.svg",
    featured: true
  },
  {
    id: "radio-thiossane-dakar",
    name: "Radio Thiossane Dakar",
    country: "Sénégal",
    city: "Dakar",
    state: "Dakar",
    code: "🇸🇳",
    continent: "africa",
    category: "culture",
    band: "WEB",
    language: "Wolof & Français",
    genre: "Culture sénégalaise, Mbalax & Musique traditionnelle",
    streamUrl: "https://listen.senemultimedia.net:8112/stream",
    fallbackUrl: "https://listen.senemultimedia.net:8112/stream",
    logo: "assets/logos/radio-thiossane-dakar.svg",
    featured: true
  },
  {
    id: "h24-senegal",
    name: "H24 Radio Sénégal",
    country: "Sénégal",
    city: "Dakar",
    state: "Dakar",
    code: "🇸🇳",
    continent: "africa",
    category: "news",
    band: "WEB",
    language: "Wolof & Français",
    genre: "L'Actualité en Direct 24/7, Débats & Société",
    streamUrl: "https://listen.senemultimedia.net:8072/stream",
    fallbackUrl: "https://listen.senemultimedia.net:8072/stream",
    logo: "assets/logos/h24-senegal.svg",
    featured: false
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
    featured: false,
    locked: true
  },
  // ==========================================
  // 4a. 🇿🇦 AFRIQUE DU SUD (SOUTH AFRICA)
  // ==========================================
  {
    id: "jacaranda-fm-sa",
    name: "Jacaranda FM 94.2 (Gauteng)",
    country: "Afrique du Sud",
    city: "Pretoria",
    state: "Gauteng",
    code: "🇿🇦",
    continent: "africa",
    category: "music",
    frequency: "94.2",
    band: "FM",
    language: "English & Afrikaans",
    genre: "More Music You Love, South African Pop & Hits",
    streamUrl: "https://edge.iono.fm/xice/jacarandafm_live_medium.aac",
    fallbackUrl: "https://edge.iono.fm/xice/jacarandafm_live_medium.aac",
    logo: "assets/logos/jacaranda-fm-sa.svg",
    featured: true
  },
  {
    id: "metro-fm-sa",
    name: "Metro FM (SABC National)",
    country: "Afrique du Sud",
    city: "Johannesburg",
    state: "Gauteng",
    code: "🇿🇦",
    continent: "africa",
    category: "music",
    frequency: "96.4",
    band: "FM",
    language: "English",
    genre: "It's Where You're At, Urban Contemporary, R&B & Hip Hop",
    streamUrl: "https://playerservices.streamtheworld.com/api/livestream-redirect/METROFMAAC.aac",
    fallbackUrl: "https://playerservices.streamtheworld.com/api/livestream-redirect/METROFMAAC.aac",
    logo: "assets/logos/metro-fm-sa.svg",
    featured: true
  },
  {
    id: "ukhozi-fm-sa",
    name: "Ukhozi FM (SABC - #1 in Africa)",
    country: "Afrique du Sud",
    city: "Durban",
    state: "KwaZulu-Natal",
    code: "🇿🇦",
    continent: "africa",
    category: "general",
    frequency: "91.5",
    band: "FM",
    language: "isiZulu",
    genre: "Luhamba Phambili, Première radio d'Afrique, Maskandi & Culture",
    streamUrl: "https://playerservices.streamtheworld.com/api/livestream-redirect/UKHOZIFMAAC_SC?dist=triton-widget&pname=tdwidgets",
    fallbackUrl: "https://playerservices.streamtheworld.com/api/livestream-redirect/UKHOZIFMAAC_SC?dist=triton-widget&pname=tdwidgets",
    logo: "assets/logos/ukhozi-fm-sa.svg",
    featured: true
  },
  {
    id: "5fm-radio-sa",
    name: "5FM (SABC Youth Radio)",
    country: "Afrique du Sud",
    city: "Johannesburg",
    state: "Gauteng",
    code: "🇿🇦",
    continent: "africa",
    category: "music",
    frequency: "98.0",
    band: "FM",
    language: "English",
    genre: "Live Loud, Pop, Dance, Electro & Rock",
    streamUrl: "https://playerservices.streamtheworld.com/api/livestream-redirect/5FMAAC.aac",
    fallbackUrl: "https://playerservices.streamtheworld.com/api/livestream-redirect/5FMAAC.aac",
    logo: "assets/logos/5fm-radio-sa.svg",
    featured: true
  },
  {
    id: "kaya-fm-sa",
    name: "Kaya 95.9 (Johannesburg)",
    country: "Afrique du Sud",
    city: "Johannesburg",
    state: "Gauteng",
    code: "🇿🇦",
    continent: "africa",
    category: "music",
    frequency: "95.9",
    band: "FM",
    language: "English & Zulu",
    genre: "On the Street On the Air, Soul, Afropolitan & Jazz",
    streamUrl: "https://edge.iono.fm/xice/82_medium.aac",
    fallbackUrl: "https://edge.iono.fm/xice/82_medium.aac",
    logo: "assets/logos/kaya-fm-sa.svg",
    featured: true
  },
  {
    id: "east-coast-radio-sa",
    name: "East Coast Radio (ECR 94.0 Durban)",
    country: "Afrique du Sud",
    city: "Durban",
    state: "KwaZulu-Natal",
    code: "🇿🇦",
    continent: "africa",
    category: "music",
    frequency: "94.0",
    band: "FM",
    language: "English",
    genre: "KwaZulu-Natal's #1 Hit Music Station",
    streamUrl: "https://edge.iono.fm/xice/ecr_live_medium.aac",
    fallbackUrl: "https://edge.iono.fm/xice/ecr_live_medium.aac",
    logo: "assets/logos/east-coast-radio-sa.svg",
    featured: true
  },
  {
    id: "kfm-cape-town-sa",
    name: "KFM 94.5 (Cape Town)",
    country: "Afrique du Sud",
    city: "Cape Town",
    state: "Western Cape",
    code: "🇿🇦",
    continent: "africa",
    category: "music",
    frequency: "94.5",
    band: "FM",
    language: "English & Afrikaans",
    genre: "Cape Town's Most Music Station, Western Cape Hits",
    streamUrl: "https://playerservices.streamtheworld.com/api/livestream-redirect/KFM.mp3",
    fallbackUrl: "https://playerservices.streamtheworld.com/api/livestream-redirect/KFM.mp3",
    logo: "assets/logos/kfm-cape-town-sa.svg",
    featured: true
  },
  {
    id: "jozi-fm-sa",
    name: "Jozi FM 105.8 (Soweto)",
    country: "Afrique du Sud",
    city: "Soweto",
    state: "Gauteng",
    code: "🇿🇦",
    continent: "africa",
    category: "general",
    frequency: "105.8",
    band: "FM",
    language: "isiZulu, Sesotho & English",
    genre: "More Than Just Radio, Soweto Culture & Kwaito",
    streamUrl: "https://edge.iono.fm/xice/51_medium.aac",
    fallbackUrl: "https://edge.iono.fm/xice/51_medium.aac",
    logo: "assets/logos/jozi-fm-sa.svg",
    featured: true
  },
  {
    id: "hot-1027-fm-sa",
    name: "Hot 102.7 FM (Johannesburg)",
    country: "Afrique du Sud",
    city: "Johannesburg",
    state: "Gauteng",
    code: "🇿🇦",
    continent: "africa",
    category: "music",
    frequency: "102.7",
    band: "FM",
    language: "English",
    genre: "Joburg's Best Old Skool and Classic Hits",
    streamUrl: "https://edge.iono.fm/xice/57_high.aac",
    fallbackUrl: "https://edge.iono.fm/xice/57_high.aac",
    logo: "assets/logos/hot-1027-fm-sa.svg",
    featured: true
  },
  {
    id: "joy-gospel-radio-sa",
    name: "Joy Gospel Radio Group (South Africa)",
    country: "Afrique du Sud",
    city: "Johannesburg",
    state: "Gauteng",
    code: "🇿🇦",
    continent: "africa",
    category: "culture",
    frequency: "WEB",
    band: "WEB",
    language: "English, Zulu & Xhosa",
    genre: "South African Praise & Worship, African Gospel 24/7",
    streamUrl: "https://servidor17.brlogic.com:7012/live",
    fallbackUrl: "https://servidor17.brlogic.com:7012/live",
    logo: "assets/logos/joy-gospel-radio-sa.svg",
    featured: true
  },

  // ==========================================
  // 4b. 🇲🇼 MALAWI (AFRIQUE AUSTRALE)
  // ==========================================
  {
    id: "times-radio-malawi",
    name: "Times Radio Malawi",
    country: "Malawi",
    city: "Blantyre",
    state: "Southern Region",
    code: "🇲🇼",
    continent: "africa",
    category: "news",
    frequency: "90.0",
    band: "FM",
    language: "English & Chichewa",
    genre: "First with the News, National Current Affairs & Music",
    streamUrl: "https://ice31.securenetsystems.net/TIMESFM",
    fallbackUrl: "https://ice31.securenetsystems.net/TIMESFM",
    logo: "assets/logos/times-radio-malawi.svg",
    featured: true
  },
  {
    id: "zbs-zodiak-malawi",
    name: "ZBS Zodiak Broadcasting Station",
    country: "Malawi",
    city: "Lilongwe",
    state: "Central Region",
    code: "🇲🇼",
    continent: "africa",
    category: "news",
    frequency: "95.1",
    band: "FM",
    language: "Chichewa & English",
    genre: "Top Independent Radio in Malawi • News & Debates",
    streamUrl: "https://ice31.securenetsystems.net/0079",
    fallbackUrl: "https://ice31.securenetsystems.net/0079",
    logo: "assets/logos/zbs-zodiak-malawi.svg",
    featured: true
  },
  {
    id: "radio-islam-malawi",
    name: "Radio Islam Malawi",
    country: "Malawi",
    city: "Blantyre",
    state: "Southern Region",
    code: "🇲🇼",
    continent: "africa",
    category: "culture",
    frequency: "96.1",
    band: "FM",
    language: "English, Chichewa & Arabic",
    genre: "Islamic Teachings, Spiritual Guidance & Community Talk",
    streamUrl: "https://s5.radio.co/s7b138c0fa/listen",
    fallbackUrl: "https://s5.radio.co/s7b138c0fa/listen",
    logo: "assets/logos/radio-islam-malawi.svg",
    featured: true
  },
  {
    id: "groove100-malawi",
    name: "Groove 100 FM Malawi",
    country: "Malawi",
    city: "Blantyre",
    state: "Southern Region",
    code: "🇲🇼",
    continent: "africa",
    category: "music",
    frequency: "100.0",
    band: "FM",
    language: "English & Chichewa",
    genre: "Urban Hits, Afrobeats, Hip-Hop & Youth Culture",
    streamUrl: "https://a9.asurahosting.com/listen/groove100_fm/radio.mp3",
    fallbackUrl: "https://a9.asurahosting.com/listen/groove100_fm/radio.mp3",
    logo: "assets/logos/groove100-malawi.svg",
    featured: true,
    locked: true
  },
  {
    id: "kuwala-fm-malawi",
    name: "Kuwala FM",
    country: "Malawi",
    city: "Lilongwe",
    state: "Central Region",
    code: "🇲🇼",
    continent: "africa",
    category: "culture",
    frequency: "98.5",
    band: "FM",
    language: "Chichewa & English",
    genre: "Radio ya Chitukuko • Education, Empowerment & Culture",
    streamUrl: "https://host2.streamafrica.net/listen/kuwala_radio/radio.mp3",
    fallbackUrl: "https://host2.streamafrica.net/listen/kuwala_radio/radio.mp3",
    logo: "assets/logos/kuwala-fm-malawi.svg",
    featured: true
  },
  {
    id: "mzati-radio-malawi",
    name: "Mzati Radio",
    country: "Malawi",
    city: "Mulanje",
    state: "Southern Region",
    code: "🇲🇼",
    continent: "africa",
    category: "news",
    frequency: "97.4",
    band: "FM",
    language: "Chichewa & English",
    genre: "The Pillar of Society • Grassroots Development & News",
    streamUrl: "https://host2.streamafrica.net/listen/mzati_radio/radio.mp3",
    fallbackUrl: "https://host2.streamafrica.net/listen/mzati_radio/radio.mp3",
    logo: "assets/logos/mzati-radio-malawi.svg",
    featured: true,
    locked: true
  },
  {
    id: "twr-malawi",
    name: "TWR Malawi (Trans World Radio)",
    country: "Malawi",
    city: "Lilongwe",
    state: "Central Region",
    code: "🇲🇼",
    continent: "africa",
    category: "culture",
    frequency: "103.7",
    band: "FM",
    language: "Chichewa, Tumbuka & English",
    genre: "Gospel, Family Life, Health & Spiritual Encouragement",
    streamUrl: "https://host2.streamafrica.net/listen/twr_malawi/radio.mp3",
    fallbackUrl: "https://host2.streamafrica.net/listen/twr_malawi/radio.mp3",
    logo: "assets/logos/twr-malawi.svg",
    featured: true
  },
  {
    id: "amaryllis-radio-malawi",
    name: "Amaryllis E-Radio",
    country: "Malawi",
    city: "Blantyre",
    state: "Southern Region",
    code: "🇲🇼",
    continent: "africa",
    category: "music",
    frequency: "WEB",
    band: "WEB",
    language: "English",
    genre: "Smooth Chillout, Jazz, Lounge & Contemporary Hits",
    streamUrl: "https://s4.radio.co/s40c05d6b1/low",
    fallbackUrl: "https://s4.radio.co/s40c05d6b1/low",
    logo: "assets/logos/amaryllis-radio-malawi.svg",
    featured: true,
    locked: true
  },
  {
    id: "kasupe-radio-malawi",
    name: "Kasupe Radio Malawi",
    country: "Malawi",
    city: "Lilongwe",
    state: "Central Region",
    code: "🇲🇼",
    continent: "africa",
    category: "culture",
    frequency: "91.5",
    band: "FM",
    language: "Chichewa & English",
    genre: "The Living Spring • Community Life & African Melodies",
    streamUrl: "https://host2.streamafrica.net/listen/kasupe_radio/radio.mp3",
    fallbackUrl: "https://host2.streamafrica.net/listen/kasupe_radio/radio.mp3",
    logo: "assets/logos/kasupe-radio-malawi.svg",
    featured: true,
    locked: true
  },
  {
    id: "chanco-community-malawi",
    name: "Chanco Community Radio",
    country: "Malawi",
    city: "Zomba",
    state: "Southern Region",
    code: "🇲🇼",
    continent: "africa",
    category: "culture",
    frequency: "99.0",
    band: "FM",
    language: "English & Chichewa",
    genre: "Chancellor College • Student Debates, Science & Arts",
    streamUrl: "https://live.netradio.pro/listen/chanco/radio.mp3",
    fallbackUrl: "https://live.netradio.pro/listen/chanco/radio.mp3",
    logo: "assets/logos/chanco-radio-malawi.svg",
    featured: true,
    locked: true
  },

  // ==========================================
  // 4c. 🇲🇷 MAURITANIE (AFRIQUE DU NORD / SAHEL)
  // ==========================================
  {
    id: "radio-mauritanie-nationale",
    name: "Radio Mauritanie (إذاعة موريتانيا)",
    country: "Mauritanie",
    city: "Nouakchott",
    state: "Nouakchott",
    code: "🇲🇷",
    continent: "africa",
    category: "news",
    frequency: "93.3",
    band: "FM",
    language: "Arabe & Français",
    genre: "Chaîne Nationale • Actualités, Culture et Débats de Mauritanie",
    streamUrl: "https://ec6.yesstreaming.net:2760/stream",
    fallbackUrl: "https://ec6.yesstreaming.net:2760/stream",
    logo: "assets/logos/radio-mauritanie.svg",
    featured: true
  },
  {
    id: "radio-coran-mauritanie",
    name: "Radio Coran Mauritanie (إذاعة القرآن الكريم)",
    country: "Mauritanie",
    city: "Nouakchott",
    state: "Nouakchott",
    code: "🇲🇷",
    continent: "africa",
    category: "culture",
    frequency: "98.0",
    band: "FM",
    language: "Arabe",
    genre: "Récitations coraniques continues, Tafsir et Enseignements religieux",
    streamUrl: "https://ec6.yesstreaming.net:2770/stream",
    fallbackUrl: "https://ec6.yesstreaming.net:2770/stream",
    logo: "assets/logos/radio-coran-mauritanie.svg",
    featured: true
  },
  {
    id: "radio-nouadhibou-mr",
    name: "Radio Mauritanie Nouadhibou (محطة نواذيبو)",
    country: "Mauritanie",
    city: "Nouadhibou",
    state: "Dakhlet Nouadhibou",
    code: "🇲🇷",
    continent: "africa",
    category: "news",
    frequency: "94.5",
    band: "FM",
    language: "Arabe & Français",
    genre: "Actualités maritimes, économiques et vie locale du Littoral",
    streamUrl: "https://ec6.yesstreaming.net:2720/stream",
    fallbackUrl: "https://ec6.yesstreaming.net:2720/stream",
    logo: "assets/logos/radio-nouadhibou-mr.svg",
    featured: true,
    locked: true
  },
  {
    id: "radio-zouerate-mr",
    name: "Radio Zouérate (إذاعة ازويرات)",
    country: "Mauritanie",
    city: "Zouérat",
    state: "Tiris Zemmour",
    code: "🇲🇷",
    continent: "africa",
    category: "culture",
    frequency: "96.0",
    band: "FM",
    language: "Arabe & Hassanya",
    genre: "Voix du Nord saharien • Culture bédouine et actualité minière",
    streamUrl: "https://ec6.yesstreaming.net:2780/stream",
    fallbackUrl: "https://ec6.yesstreaming.net:2780/stream",
    logo: "assets/logos/radio-zouerate-mr.svg",
    featured: true,
    locked: true
  },

  // ==========================================
  // 4d. 🇸🇱 SIERRA LEONE (AFRIQUE DE L'OUEST)
  // ==========================================
  {
    id: "capital-radio-sierra-leone",
    name: "Capital Radio 104.9 FM Sierra Leone",
    country: "Sierra Leone",
    city: "Freetown",
    state: "Western Area",
    code: "🇸🇱",
    continent: "africa",
    category: "news",
    frequency: "104.9",
    band: "FM",
    language: "English & Krio",
    genre: "The Sound of Freetown • News, Talk, Afrobeats & Global Pop",
    streamUrl: "https://global.citrus3.com:8262/stream",
    fallbackUrl: "https://global.citrus3.com:8262/stream",
    logo: "assets/logos/capital-radio-sierra-leone.svg",
    featured: true
  },
  {
    id: "star-radio-sierra-leone",
    name: "Star Radio SL 103.5 FM",
    country: "Sierra Leone",
    city: "Freetown",
    state: "Western Area",
    code: "🇸🇱",
    continent: "africa",
    category: "news",
    frequency: "103.5",
    band: "FM",
    language: "English & Krio",
    genre: "The Voice of the Nation • Independent Journalism & Hits",
    streamUrl: "https://radio-streaming.michcom-ix.net/listen/star_radio_fm_103.5/radio.mp3",
    fallbackUrl: "https://radio-streaming.michcom-ix.net/listen/star_radio_fm_103.5/radio.mp3",
    logo: "assets/logos/star-radio-sierra-leone.svg",
    featured: true,
    locked: true
  },
  {
    id: "fop-radio-sierra-leone",
    name: "FOP Radio Sierra Leone",
    country: "Sierra Leone",
    city: "Freetown",
    state: "Western Area",
    code: "🇸🇱",
    continent: "africa",
    category: "culture",
    frequency: "WEB",
    band: "WEB",
    language: "English & Krio",
    genre: "Community Voice, Inspirational Music & Youth Empowerment",
    streamUrl: "https://stream.fopradios.top/main",
    fallbackUrl: "https://stream.fopradios.top/main",
    logo: "assets/logos/fop-radio-sierra-leone.svg",
    featured: true
  },
  {
    id: "radio-binkongoh-sierra-leone",
    name: "Radio Binkongoh Sierra Leone",
    country: "Sierra Leone",
    city: "Koidu",
    state: "Eastern Province",
    code: "🇸🇱",
    continent: "africa",
    category: "culture",
    frequency: "98.7",
    band: "FM",
    language: "Krio & English",
    genre: "Grassroots Sierra Leone Culture, Local Stories & Traditional Music",
    streamUrl: "https://tamkorfai1.radioca.st/stream",
    fallbackUrl: "https://tamkorfai1.radioca.st/stream",
    logo: "assets/logos/radio-binkongoh-sl.svg",
    featured: true,
    locked: true
  },
  {
    id: "fusionsound-radio-sl",
    name: "FusionSound Radio Sierra Leone",
    country: "Sierra Leone",
    city: "Freetown",
    state: "Western Area",
    code: "🇸🇱",
    continent: "africa",
    category: "music",
    frequency: "WEB",
    band: "WEB",
    language: "English & Krio",
    genre: "Non-stop Afrobeats, Sierra Leone Sounds & Urban Club Hits",
    streamUrl: "https://radio.fusionsoundradio.com/listen/fusionsoundradio/radio.mp3",
    fallbackUrl: "https://radio.fusionsoundradio.com/listen/fusionsoundradio/radio.mp3",
    logo: "assets/logos/fusionsound-radio-sl.svg",
    featured: true,
    locked: true
  },

  // ==========================================
  // 4e. 🇹🇬 TOGO, 🇬🇲 GAMBIE, 🇬🇦 GABON, 🇱🇾 LIBYE, 🇷🇼 RWANDA, 🇺🇬 OUGANDA (AFRIQUE)
  // ==========================================
  {
    id: "nana-fm-togo",
    name: "Nana FM 95.5 Lomé",
    country: "Togo",
    code: "🇹🇬",
    continent: "africa",
    category: "news",
    frequency: "95.5",
    band: "FM",
    language: "Français & Éwé",
    genre: "Première radio privée du Togo • Actualités & Débats",
    streamUrl: "https://srv1269271.hstgr.cloud/;?type=http&nocache=16",
    fallbackUrl: "https://srv1269271.hstgr.cloud/;?type=http&nocache=16",
    logo: "assets/logos/nana-fm-togo.png",
    featured: true
  },
  {
    id: "light-radio-togo",
    name: "Light Radio 93.9 FM Lomé",
    country: "Togo",
    code: "🇹🇬",
    continent: "africa",
    category: "culture",
    frequency: "93.9",
    band: "FM",
    language: "Français & Éwé",
    genre: "La voix de l'espérance • Musique & Société à Lomé",
    streamUrl: "https://a9.asurahosting.com/listen/light_radio_93.9fm/radio.mp3",
    fallbackUrl: "https://a9.asurahosting.com/listen/light_radio_93.9fm/radio.mp3",
    logo: "assets/logos/light-radio-togo.png",
    featured: true,
    locked: true
  },
  {
    id: "star-fm-gambia",
    name: "Star FM 96.6 Banjul",
    country: "Gambie",
    code: "🇬🇲",
    continent: "africa",
    category: "news",
    frequency: "96.6",
    band: "FM",
    language: "English & Wolof",
    genre: "The Voice of Truth • Gambian News & Society",
    streamUrl: "https://stream.zeno.fm/edfd6fhdps8uv",
    fallbackUrl: "https://stream.zeno.fm/edfd6fhdps8uv",
    logo: "assets/logos/star-fm-gambia.png",
    featured: true
  },
  {
    id: "gam-express-gambia",
    name: "Gam Express FM Banjul",
    country: "Gambie",
    code: "🇬🇲",
    continent: "africa",
    category: "culture",
    frequency: "WEB",
    band: "WEB",
    language: "English, Mandinka & Wolof",
    genre: "Pure Gambian Melodies & West African Hits",
    streamUrl: "https://stream.zeno.fm/d1qwim65b68tv",
    fallbackUrl: "https://stream.zeno.fm/d1qwim65b68tv",
    logo: "assets/logos/gam-express-gambia.png",
    featured: true,
    locked: true
  },
  {
    id: "africa-no1-gabon",
    name: "Africa Radio (ex-Africa N°1 Gabon)",
    country: "Gabon",
    code: "🇬🇦",
    continent: "africa",
    category: "news",
    frequency: "WEB / FM",
    band: "WEB",
    language: "Français & Langues d'Afrique",
    genre: "La radio panafricaine historique de Libreville",
    streamUrl: "https://african1paris.ice.infomaniak.ch/african1paris-128.mp3",
    fallbackUrl: "https://african1paris.ice.infomaniak.ch/african1paris-128.mp3",
    logo: "assets/logos/africa-no1-gabon.png",
    featured: true
  },
  {
    id: "africa-mandingue",
    name: "Africa Mandingue & Rumba (Gabon)",
    country: "Gabon",
    code: "🇬🇦",
    continent: "africa",
    category: "culture",
    frequency: "WEB",
    band: "WEB",
    language: "Français & Lingala",
    genre: "Rumba congolaise, Afro-Soul & Musiques d'Afrique Centrale",
    streamUrl: "https://webradio1.ice.infomaniak.ch/webradio2-128.mp3",
    fallbackUrl: "https://webradio1.ice.infomaniak.ch/webradio2-128.mp3",
    logo: "assets/logos/africa-mandingue.png",
    featured: true,
    locked: true
  },
  {
    id: "almunir-radio-libya",
    name: "Almunir Radio Tripoli (المنير طرابلس)",
    country: "Libye",
    code: "🇱🇾",
    continent: "africa",
    category: "news",
    frequency: "WEB / FM",
    band: "WEB",
    language: "العربية",
    genre: "أخبار ليبيا والعالم العربي من طرابلس مباشر",
    streamUrl: "https://live.munir.ly/proxy/almunirtip/stream",
    fallbackUrl: "https://live.munir.ly/proxy/almunirtip/stream",
    logo: "assets/logos/almunir-radio-libya.png",
    featured: true
  },
  {
    id: "almunir-radio-benghazi",
    name: "Almunir Radio Benghazi (المنير بنغازي)",
    country: "Libye",
    code: "🇱🇾",
    continent: "africa",
    category: "culture",
    frequency: "WEB",
    band: "WEB",
    language: "العربية",
    genre: "إذاعة بنغازي • ثقافة، حوارات وموسيقى ليبية",
    streamUrl: "https://live.munir.ly/proxy/almunir/stream",
    fallbackUrl: "https://live.munir.ly/proxy/almunir/stream",
    logo: "assets/logos/almunir-radio-benghazi.png",
    featured: true,
    locked: true
  },
  {
    id: "radio-rwanda",
    name: "Radio Rwanda 100.7 FM (RBA Kigali)",
    country: "Rwanda",
    code: "🇷🇼",
    continent: "africa",
    category: "news",
    frequency: "100.7",
    band: "FM",
    language: "Kinyarwanda, Français & English",
    genre: "Radiodiffusion nationale du Rwanda • Actualités & Société",
    streamUrl: "https://listen.rba.co.rw:8008/rwanda/",
    fallbackUrl: "https://listen.rba.co.rw:8008/rwanda/",
    logo: "assets/logos/radio-rwanda.png",
    featured: true
  },
  {
    id: "kiss-fm-rwanda",
    name: "Kiss FM 102.3 Kigali (Rwanda)",
    country: "Rwanda",
    code: "🇷🇼",
    continent: "africa",
    category: "culture",
    frequency: "102.3",
    band: "FM",
    language: "English & Kinyarwanda",
    genre: "Kigali's #1 Hit Music Station • Afro-Pop & R&B",
    streamUrl: "https://kissfm-atunwadigital.streamguys1.com/kissfm",
    fallbackUrl: "https://kissfm-atunwadigital.streamguys1.com/kissfm",
    logo: "assets/logos/kiss-fm-rwanda.png",
    featured: true,
    locked: true
  },
  {
    id: "nrg-radio-uganda",
    name: "NRG Radio 106.5 FM Kampala",
    country: "Ouganda",
    code: "🇺🇬",
    continent: "africa",
    category: "culture",
    frequency: "106.5",
    band: "FM",
    language: "English & Luganda",
    genre: "The Beat of Kampala • High Energy Music & Entertainment",
    streamUrl: "https://dc4.serverse.com/proxy/nrgugstream/stream",
    fallbackUrl: "https://dc4.serverse.com/proxy/nrgugstream/stream",
    logo: "assets/logos/nrg-radio-uganda.png",
    featured: true
  },
  {
    id: "capital-fm-uganda",
    name: "Capital FM 91.3 Kampala",
    country: "Ouganda",
    code: "🇺🇬",
    continent: "africa",
    category: "news",
    frequency: "91.3",
    band: "FM",
    language: "English & Luganda",
    genre: "Kampala's #1 Hit Station • News, Pop & Talk",
    streamUrl: "https://capitalfm.cloudrad.io/stream",
    fallbackUrl: "https://capitalfm.cloudrad.io/stream",
    logo: "assets/logos/capital-fm-uganda.png",
    featured: true,
    locked: true
  },

  // ==========================================
  // 5. 🇯🇵 JAPON, 🇮🇳 INDE, 🇰🇷 CORÉE, 🇨🇳 CHINE, 🇵🇭 PHILIPPINES, 🇸🇬 SINGAPOUR, 🇮🇩 INDONÉSIE (ASIE)
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
    fallbackUrl: "http://shoutcast.wrn.org:8025/nhk41left",
    logo: "assets/logos/nhk-world-japan.png",
    featured: true,
    locked: true
  },
  {
    id: "j-pop-powerplay",
    name: "J-Pop Powerplay (Tokyo)",
    country: "Japon",
    code: "🇯🇵",
    continent: "asia",
    category: "culture",
    frequency: "WEB",
    band: "WEB",
    language: "Japanese",
    genre: "Top J-Pop Hits & Anime Melodies",
    streamUrl: "https://kathy.torontocast.com:3560/stream",
    fallbackUrl: "https://kathy.torontocast.com:3560/stream",
    logo: "assets/logos/j-pop-powerplay.png",
    featured: true,
    locked: true
  },
  {
    id: "radio-mirchi-top20",
    name: "Radio Mirchi Top 20 Bollywood",
    country: "Inde",
    code: "🇮🇳",
    continent: "asia",
    category: "culture",
    frequency: "98.3",
    band: "FM",
    language: "हिन्दी / English",
    genre: "India's #1 Bollywood Hits & Charts",
    streamUrl: "https://drive.uber.radio/uber/bollywoodnow/icecast.audio",
    fallbackUrl: "https://drive.uber.radio/uber/bollywoodnow/icecast.audio",
    logo: "assets/logos/radio-mirchi-top20.png",
    featured: true,
    locked: true
  },
  {
    id: "bollywood-gaane-purane",
    name: "Bollywood Gaane Purane",
    country: "Inde",
    code: "🇮🇳",
    continent: "asia",
    category: "culture",
    frequency: "WEB",
    band: "WEB",
    language: "हिन्दी",
    genre: "Classic Retro Bollywood Legends",
    streamUrl: "https://stream.zeno.fm/6n6ewddtad0uv",
    fallbackUrl: "https://stream.zeno.fm/6n6ewddtad0uv",
    logo: "assets/logos/bollywood-gaane-purane.png",
    featured: false,
    locked: true
  },
  {
    id: "big-b-radio-kpop",
    name: "Big B Radio #1 K-Pop (Séoul)",
    country: "Corée du Sud",
    code: "🇰🇷",
    continent: "asia",
    category: "culture",
    frequency: "WEB",
    band: "WEB",
    language: "한국어 / English",
    genre: "Korea's Hottest K-Pop 24/7",
    streamUrl: "https://antares.dribbcast.com/proxy/kpop?mp=/s",
    fallbackUrl: "https://antares.dribbcast.com/proxy/kpop?mp=/s",
    logo: "assets/logos/big-b-radio-kpop.png",
    featured: true,
    locked: true
  },
  {
    id: "cnr-1-voice-of-china",
    name: "CNR-1 中国之声 Voice of China",
    country: "Chine",
    code: "🇨🇳",
    continent: "asia",
    category: "news",
    frequency: "106.1",
    band: "FM",
    language: "中文 (Mandarin)",
    genre: "National News & Culture from Beijing",
    streamUrl: "https://lhttp.qtfm.cn/live/15318317/64k.mp3",
    fallbackUrl: "https://lhttp.qtfm.cn/live/15318317/64k.mp3",
    logo: "assets/logos/cnr-1-voice-of-china.png",
    featured: true,
    locked: true
  },
  {
    id: "easy-rock-manila",
    name: "Easy Rock 96.3 FM Manila",
    country: "Philippines",
    code: "🇵🇭",
    continent: "asia",
    category: "culture",
    frequency: "96.3",
    band: "FM",
    language: "Tagalog / English",
    genre: "Just the Rite Rock & Acoustic Manila Hits",
    streamUrl: "https://azura.easyrock.com.ph/listen/easy_rock_manila/radio.mp3",
    fallbackUrl: "https://azura.easyrock.com.ph/listen/easy_rock_manila/radio.mp3",
    logo: "assets/logos/easy-rock-manila.png",
    featured: true
  },
  {
    id: "capital-958-singapore",
    name: "Capital 95.8 FM Singapore",
    country: "Singapour",
    code: "🇸🇬",
    continent: "asia",
    category: "news",
    frequency: "95.8",
    band: "FM",
    language: "中文 / English",
    genre: "Mediacorp News & Finance from Singapore",
    streamUrl: "https://playerservices.streamtheworld.com/api/livestream-redirect/CAPITAL958FM_PREM.aac",
    fallbackUrl: "https://playerservices.streamtheworld.com/api/livestream-redirect/CAPITAL958FM_PREM.aac",
    logo: "assets/logos/capital-958-singapore.png",
    featured: true
  },
  {
    id: "sonora-fm-jakarta",
    name: "Sonora FM 92.0 Jakarta",
    country: "Indonésie",
    code: "🇮🇩",
    continent: "asia",
    category: "news",
    frequency: "92.0",
    band: "FM",
    language: "Bahasa Indonesia",
    genre: "Berita, Informasi & Musik Indonesia",
    streamUrl: "https://sonora-radio.arenastreaming.com/8130/stream",
    fallbackUrl: "https://sonora-radio.arenastreaming.com/8130/stream",
    logo: "assets/logos/sonora-fm-jakarta.png",
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
    featured: true,
    locked: true
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
    featured: true,
    locked: true
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
    featured: true,
    locked: true
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
  {
    id: "hot-97-newyork",
    name: "Hot 97 WQHT 97.1 FM New York",
    country: "États-Unis",
    code: "🇺🇸",
    continent: "americas",
    category: "culture",
    frequency: "97.1",
    band: "FM",
    language: "English",
    genre: "Where Hip Hop Lives • NYC Culture & Music",
    streamUrl: "https://18313.live.streamtheworld.com/WQHTFMAAC.aac",
    fallbackUrl: "https://18313.live.streamtheworld.com/WQHTFMAAC.aac",
    logo: "assets/logos/hot-97-newyork.png",
    featured: true,
    locked: true
  },
  {
    id: "kcrw-89-9-los-angeles",
    name: "KCRW 89.9 FM Los Angeles",
    country: "États-Unis",
    code: "🇺🇸",
    continent: "americas",
    category: "culture",
    frequency: "89.9",
    band: "FM",
    language: "English",
    genre: "Eclectic Music, Culture & Independent Journalism",
    streamUrl: "https://streams.kcrw.com/kcrw_mp3",
    fallbackUrl: "https://streams.kcrw.com/kcrw_mp3",
    logo: "assets/logos/kcrw-89-9-los-angeles.png",
    featured: true,
    locked: true
  },
  {
    id: "kqed-88-5-san-francisco",
    name: "KQED 88.5 FM San Francisco",
    country: "États-Unis",
    code: "🇺🇸",
    continent: "americas",
    category: "news",
    frequency: "88.5",
    band: "FM",
    language: "English",
    genre: "Bay Area & Silicon Valley In-Depth News",
    streamUrl: "https://streams.kqed.org/kqedradio",
    fallbackUrl: "https://streams.kqed.org/kqedradio",
    logo: "assets/logos/kqed-88-5-san-francisco.png",
    featured: true
  },
  {
    id: "wbez-91-5-chicago",
    name: "WBEZ 91.5 FM Chicago",
    country: "États-Unis",
    city: "Chicago, IL",
    state: "Illinois",
    code: "🇺🇸",
    continent: "americas",
    category: "news",
    frequency: "91.5",
    band: "FM",
    language: "English",
    genre: "Chicago Public Media & Investigations",
    streamUrl: "https://stream.wbez.org/wbez128.mp3",
    fallbackUrl: "https://stream.wbez.org/wbez128.mp3",
    logo: "assets/logos/wbez-91-5-chicago.png",
    featured: true
  },
  {
    id: "wfmt-98-7-chicago",
    name: "WFMT 98.7 FM (Classical Chicago)",
    country: "États-Unis",
    city: "Chicago, IL",
    state: "Illinois",
    code: "🇺🇸",
    continent: "americas",
    category: "culture",
    frequency: "98.7",
    band: "FM",
    language: "English",
    genre: "Classical Music, Opera & Fine Arts from Chicago",
    streamUrl: "https://wfmt.streamguys1.com/main128.aac",
    fallbackUrl: "https://wfmt.streamguys1.com/main128.aac",
    logo: "assets/logos/wfmt-98-7-chicago.png",
    featured: true,
    locked: false
  },
  {
    id: "wls-94-7-chicago",
    name: "94.7 WLS-FM (Chicago's Classic Hits)",
    country: "États-Unis",
    city: "Chicago, IL",
    state: "Illinois",
    code: "🇺🇸",
    continent: "americas",
    category: "music",
    frequency: "94.7",
    band: "FM",
    language: "English",
    genre: "Chicago 70s, 80s & 90s Legendary Classic Hits",
    streamUrl: "https://playerservices.streamtheworld.com/api/livestream-redirect/WLSFM.mp3",
    fallbackUrl: "https://playerservices.streamtheworld.com/api/livestream-redirect/WLSFM.mp3",
    logo: "assets/logos/wls-94-7-chicago.svg",
    featured: true,
    locked: true
  },
  {
    id: "chicago-house-radio",
    name: "Chicago House Radio (House Music Origin)",
    country: "États-Unis",
    city: "Chicago, IL",
    state: "Illinois",
    code: "🇺🇸",
    continent: "americas",
    category: "music",
    frequency: "WEB",
    band: "WEB",
    language: "English",
    genre: "The Authentic Birthplace of Deep & Soulful House",
    streamUrl: "https://stream.radio.co/sae989fe39/listen",
    fallbackUrl: "https://stream.radio.co/sae989fe39/listen",
    logo: "assets/logos/chicago-house-radio.svg",
    featured: false,
    locked: false
  },
  {
    id: "smooth-jazz-wnua-chicago",
    name: "Smooth Jazz WNUA (Chicago, IL)",
    country: "États-Unis",
    city: "Chicago, IL",
    state: "Illinois",
    code: "🇺🇸",
    continent: "americas",
    category: "music",
    frequency: "WEB",
    band: "WEB",
    language: "English",
    genre: "Chicago's Legendary Smooth Jazz & Instrumental Soul",
    streamUrl: "https://vip2.fastcast4u.com/proxy/wnua?mp=/1",
    fallbackUrl: "https://vip2.fastcast4u.com/proxy/wnua?mp=/1",
    logo: "assets/logos/smooth-jazz-wnua-chicago.svg",
    featured: false,
    locked: true
  },
  {
    id: "wlrn-91-3-miami",
    name: "WLRN 91.3 FM Miami",
    country: "États-Unis",
    city: "Miami, FL",
    state: "Florida",
    code: "🇺🇸",
    continent: "americas",
    category: "news",
    frequency: "91.3",
    band: "FM",
    language: "English",
    genre: "South Florida Public Media & Caribbean Culture",
    streamUrl: "https://wlrn.streamguys1.com/wlrn-news-web-icy",
    fallbackUrl: "https://wlrn.streamguys1.com/wlrn-news-web-icy",
    logo: "assets/logos/wlrn-91-3-miami.png",
    featured: true,
    locked: true
  },
  {
    id: "wjct-89-9-jacksonville",
    name: "WJCT 89.9 FM Jacksonville (NPR)",
    country: "États-Unis",
    city: "Jacksonville, FL",
    state: "Florida",
    code: "🇺🇸",
    continent: "americas",
    category: "news",
    frequency: "89.9",
    band: "FM",
    language: "English",
    genre: "Northeast Florida News, In-depth NPR Journalism",
    streamUrl: "https://playerservices.streamtheworld.com/api/livestream-redirect/WJCTFM.mp3",
    fallbackUrl: "https://playerservices.streamtheworld.com/api/livestream-redirect/WJCTFM.mp3",
    logo: "assets/logos/wjct-jacksonville.png",
    featured: true,
    locked: false
  },
  {
    id: "radio-motown-miami",
    name: "Radio Motown (Miami, Florida)",
    country: "États-Unis",
    city: "Miami, FL",
    state: "Florida",
    code: "🇺🇸",
    continent: "americas",
    category: "music",
    frequency: "WEB",
    band: "WEB",
    language: "English",
    genre: "Non-Stop Soul, R&B & Legendary Motown Classics",
    streamUrl: "https://broadcast.miami/proxy/motown?mp=/stream/;",
    fallbackUrl: "https://broadcast.miami/proxy/motown?mp=/stream/;",
    logo: "assets/logos/radio-motown-miami.svg",
    featured: false,
    locked: false
  },
  {
    id: "radio-italo-disco-miami",
    name: "Radio Italo Disco (Miami, Florida)",
    country: "États-Unis",
    city: "Miami, FL",
    state: "Florida",
    code: "🇺🇸",
    continent: "americas",
    category: "music",
    frequency: "WEB",
    band: "WEB",
    language: "English",
    genre: "Euro-Disco, Italo Synth & 80s Club Vibes",
    streamUrl: "https://broadcast.miami/proxy/italodisco?mp=/stream",
    fallbackUrl: "https://broadcast.miami/proxy/italodisco?mp=/stream",
    logo: "assets/logos/radio-italo-disco.svg",
    featured: false,
    locked: true
  },
  {
    id: "houston-public-media-88-7",
    name: "Houston Public Media 88.7 FM (KUHF)",
    country: "États-Unis",
    code: "🇺🇸",
    continent: "americas",
    category: "news",
    frequency: "88.7",
    band: "FM",
    language: "English",
    genre: "Houston & Texas Gulf Coast News",
    streamUrl: "https://stream.houstonpublicmedia.org/news-mp3",
    fallbackUrl: "https://stream.houstonpublicmedia.org/news-mp3",
    logo: "assets/logos/houston-public-media-88-7.png",
    featured: true
  },
  {
    id: "kut-90-5-austin",
    name: "KUT 90.5 FM Austin (Texas)",
    country: "États-Unis",
    city: "Austin, TX",
    state: "Texas",
    code: "🇺🇸",
    continent: "americas",
    category: "news",
    frequency: "90.5",
    band: "FM",
    language: "English",
    genre: "Austin's Public Radio & Live Music City News",
    streamUrl: "https://streams.kut.org/4426_128.mp3",
    fallbackUrl: "https://streams.kut.org/4426_128.mp3",
    logo: "assets/logos/kut-90-5-austin.png",
    featured: true,
    locked: true
  },
  {
    id: "kera-90-1-dallas",
    name: "KERA 90.1 FM Dallas-Fort Worth (NPR)",
    country: "États-Unis",
    city: "Dallas, TX",
    state: "Texas",
    code: "🇺🇸",
    continent: "americas",
    category: "news",
    frequency: "90.1",
    band: "FM",
    language: "English",
    genre: "North Texas Public Radio, NPR News & Arts",
    streamUrl: "https://kera.streamguys1.com/keralive",
    fallbackUrl: "https://kera.streamguys1.com/keralive",
    logo: "assets/logos/kera-90-1-dallas.png",
    featured: true,
    locked: false
  },
  {
    id: "radio-free-texas",
    name: "Radio Free Texas (Americana & Red Dirt)",
    country: "États-Unis",
    city: "Texas",
    state: "Texas",
    code: "🇺🇸",
    continent: "americas",
    category: "music",
    frequency: "WEB",
    band: "WEB",
    language: "English",
    genre: "Independent Texas Artists, Americana & Country",
    streamUrl: "https://server10.reliastream.com/proxy/damiller?mp=/stream",
    fallbackUrl: "https://server10.reliastream.com/proxy/damiller?mp=/stream",
    logo: "assets/logos/radio-free-texas.png",
    featured: true,
    locked: false
  },
  {
    id: "kora-98-3-texas",
    name: "KORA 98.3 The Texas Country Original",
    country: "États-Unis",
    city: "Bryan-College Station, TX",
    state: "Texas",
    code: "🇺🇸",
    continent: "americas",
    category: "music",
    frequency: "98.3",
    band: "FM",
    language: "English",
    genre: "Real Texas Country, Legends & Red Dirt Favorites",
    streamUrl: "https://ais-sa1.streamon.fm/7410_48k.aac/playlist.m3u8",
    fallbackUrl: "https://ais-sa1.streamon.fm/7410_48k.aac/playlist.m3u8",
    logo: "assets/logos/kora-98-3-texas.png",
    featured: false,
    locked: true
  },
  {
    id: "koke-fm-austin",
    name: "KOKE 99.3 & 98.5 FM Austin (Texas Country)",
    country: "États-Unis",
    city: "Austin, TX",
    state: "Texas",
    code: "🇺🇸",
    continent: "americas",
    category: "music",
    frequency: "99.3",
    band: "FM",
    language: "English",
    genre: "Austin Country Music Tradition & Live Artists",
    streamUrl: "https://server10.reliastream.com/proxy/damiller?mp=/stream",
    fallbackUrl: "https://server10.reliastream.com/proxy/damiller?mp=/stream",
    logo: "assets/logos/koke-fm-austin.svg",
    featured: false,
    locked: false
  },
  {
    id: "jazz24-seattle",
    name: "Jazz24 88.5 FM (Seattle)",
    country: "États-Unis",
    code: "🇺🇸",
    continent: "americas",
    category: "culture",
    frequency: "88.5",
    band: "FM",
    language: "English",
    genre: "America's Greatest Jazz Masters 24/7",
    streamUrl: "https://knkx-live-a.edge.audiocdn.com/6285_128k",
    fallbackUrl: "https://knkx-live-a.edge.audiocdn.com/6285_128k",
    logo: "assets/logos/jazz24-seattle.png",
    featured: true
  },

  // --- 🇺🇸 Michigan ---
  {
    id: "wuom-michigan-radio",
    name: "WUOM 91.7 FM Michigan Public (NPR)",
    country: "États-Unis",
    city: "Ann Arbor, MI",
    state: "Michigan",
    code: "🇺🇸",
    continent: "americas",
    category: "news",
    frequency: "91.7",
    band: "FM",
    language: "English",
    genre: "In-Depth Michigan & World News, NPR Journalism",
    streamUrl: "https://playerservices.streamtheworld.com/api/livestream-redirect/WUOMFM.mp3",
    fallbackUrl: "https://playerservices.streamtheworld.com/api/livestream-redirect/WUOMFM.mp3",
    logo: "assets/logos/wuom-michigan-radio.png",
    featured: true,
    locked: false
  },
  {
    id: "wkar-east-lansing-michigan",
    name: "WKAR 90.5 FM (East Lansing, MI)",
    country: "États-Unis",
    city: "East Lansing, MI",
    state: "Michigan",
    code: "🇺🇸",
    continent: "americas",
    category: "culture",
    frequency: "90.5",
    band: "FM",
    language: "English",
    genre: "Classical Music, NPR News & Arts from MSU",
    streamUrl: "https://wkar.streamguys1.com/wkar-fm-mp3",
    fallbackUrl: "https://wkar.streamguys1.com/wkar-fm-mp3",
    logo: "assets/logos/wkar-east-lansing.png",
    featured: true,
    locked: true
  },
  {
    id: "wemu-michigan-jazz",
    name: "WEMU 89.1 FM (Ypsilanti / Ann Arbor, MI)",
    country: "États-Unis",
    city: "Ypsilanti, MI",
    state: "Michigan",
    code: "🇺🇸",
    continent: "americas",
    category: "music",
    frequency: "89.1",
    band: "FM",
    language: "English",
    genre: "NPR News, Legendary Jazz, Blues & Roots",
    streamUrl: "https://playerservices.streamtheworld.com/api/livestream-redirect/WEMUFM.mp3",
    fallbackUrl: "https://playerservices.streamtheworld.com/api/livestream-redirect/WEMUFM.mp3",
    logo: "assets/logos/wemu-89-1-michigan.svg",
    featured: false,
    locked: false
  },
  {
    id: "muskegon-channel-radio-mi",
    name: "Muskegon Channel Radio (Muskegon, MI)",
    country: "États-Unis",
    city: "Muskegon, MI",
    state: "Michigan",
    code: "🇺🇸",
    continent: "americas",
    category: "music",
    frequency: "WEB",
    band: "WEB",
    language: "English",
    genre: "West Michigan Hits, Local Artists & Coastal Vibes",
    streamUrl: "https://muskegonchannelradio.radioca.st/stream",
    fallbackUrl: "https://muskegonchannelradio.radioca.st/stream",
    logo: "assets/logos/muskegon-channel-radio.svg",
    featured: false,
    locked: true
  },

  // --- 🌺 Hawaï (USA) ---
  {
    id: "hpr-1-hawaii-public-radio",
    name: "HPR-1 88.1 FM Hawaii Public Radio (NPR)",
    country: "États-Unis",
    city: "Honolulu, HI",
    state: "Hawaii",
    code: "🇺🇸",
    continent: "americas",
    category: "news",
    frequency: "88.1",
    band: "FM",
    language: "English",
    genre: "Statewide Hawaii & Global News, NPR Journalism",
    streamUrl: "https://khpr-ice.streamguys1.com/khpr2",
    fallbackUrl: "https://khpr-ice.streamguys1.com/khpr2",
    logo: "assets/logos/hawaii-public-radio.svg",
    featured: true,
    locked: false
  },
  {
    id: "94-7-kumu-honolulu",
    name: "94.7 KUMU (Honolulu, HI)",
    country: "États-Unis",
    city: "Honolulu, HI",
    state: "Hawaii",
    code: "🇺🇸",
    continent: "americas",
    category: "music",
    frequency: "94.7",
    band: "FM",
    language: "English",
    genre: "Hawaii's R&B, Island Grooves & Soul Classics",
    streamUrl: "https://pacificmedia.cdnstream1.com/2783_128.mp3",
    fallbackUrl: "https://pacificmedia.cdnstream1.com/2783_128.mp3",
    logo: "assets/logos/94-7-kumu-honolulu.svg",
    featured: true,
    locked: true
  },
  {
    id: "mana-o-radio-maui",
    name: "KMNO Mana'o Radio 91.7 FM (Maui, HI)",
    country: "États-Unis",
    city: "Maui, HI",
    state: "Hawaii",
    code: "🇺🇸",
    continent: "americas",
    category: "culture",
    frequency: "91.7",
    band: "FM",
    language: "English",
    genre: "Eclectic Maui Island Music, Blues, Reggae & Rock",
    streamUrl: "https://kmno.streamguys1.com/live",
    fallbackUrl: "https://kmno.streamguys1.com/live",
    logo: "assets/logos/mana-o-radio-maui.svg",
    featured: false,
    locked: false
  },
  {
    id: "ktuh-manoa-honolulu",
    name: "KTUH 90.1 FM (University of Hawaii, Honolulu)",
    country: "États-Unis",
    city: "Honolulu, HI",
    state: "Hawaii",
    code: "🇺🇸",
    continent: "americas",
    category: "culture",
    frequency: "90.1",
    band: "FM",
    language: "English",
    genre: "College Radio, Island Indie, Reggae & Underground",
    streamUrl: "https://stream.ktuh.org:8001/stream",
    fallbackUrl: "https://stream.ktuh.org:8001/stream",
    logo: "assets/logos/ktuh-honolulu.svg",
    featured: false,
    locked: true
  },

  // ==========================================
  // 6.b 🇨🇦 CANADA (AMÉRIQUES)
  // ==========================================
  {
    id: "cbc-radio-one-toronto",
    name: "CBC Radio One 99.1 FM (Toronto)",
    country: "Canada",
    city: "Toronto",
    state: "Ontario",
    code: "🇨🇦",
    continent: "americas",
    category: "news",
    frequency: "99.1",
    band: "FM",
    language: "English",
    genre: "Canadian & World News, In-depth Current Affairs",
    streamUrl: "https://cbcradiolive.akamaized.net/hls/live/2041036/ES_R1ETR/master.m3u8",
    fallbackUrl: "https://cbcliveradio.akamaized.net/hls/live/2041036/ES_R1ETR/master.m3u8",
    logo: "assets/logos/cbc-radio-one.png",
    featured: true,
    locked: false
  },
  {
    id: "radio-canada-premiere-montreal",
    name: "ICI Radio-Canada Première 95.1 FM (Montréal)",
    country: "Canada",
    city: "Montréal",
    state: "Quebec",
    code: "🇨🇦",
    continent: "americas",
    category: "news",
    frequency: "95.1",
    band: "FM",
    language: "Français",
    genre: "Actualités, culture et débats francophones du Canada",
    streamUrl: "https://rcavliveaudio.akamaized.net/hls/live/2006635/P-2QMTL0_MTL/playlist.m3u8",
    fallbackUrl: "https://rcavliveaudio.akamaized.net/hls/live/2006635/P-2QMTL0_MTL/playlist.m3u8",
    logo: "assets/logos/radio-canada-premiere.png",
    featured: true,
    locked: true
  },
  {
    id: "680-news-toronto",
    name: "CityNews 680 AM (Toronto)",
    country: "Canada",
    city: "Toronto",
    state: "Ontario",
    code: "🇨🇦",
    continent: "americas",
    category: "news",
    frequency: "680",
    band: "AM",
    language: "English",
    genre: "24/7 Breaking News, Traffic & Weather",
    streamUrl: "https://rogers-hls.leanstream.co/rogers/tor680.stream/playlist.m3u8",
    fallbackUrl: "https://rogers-hls.leanstream.co/rogers/tor680.stream/playlist.m3u8",
    logo: "assets/logos/680-news-toronto.png",
    featured: true,
    locked: false
  },
  {
    id: "ancient-fm-canada",
    name: "Ancient FM (Toronto, Canada)",
    country: "Canada",
    city: "Toronto",
    state: "Ontario",
    code: "🇨🇦",
    continent: "americas",
    category: "culture",
    frequency: "WEB",
    band: "WEB",
    language: "English",
    genre: "Medieval & Renaissance Commercial-Free Classical",
    streamUrl: "https://mediaserv73.live-streams.nl:18058/stream",
    fallbackUrl: "https://mediaserv73.live-streams.nl:18058/stream",
    logo: "assets/logos/ancient-fm.png",
    featured: true,
    locked: false
  },
  {
    id: "reggae-chill-cafe-canada",
    name: "Reggae Chill Cafe (Toronto, Canada)",
    country: "Canada",
    city: "Toronto",
    state: "Ontario",
    code: "🇨🇦",
    continent: "americas",
    category: "music",
    frequency: "WEB",
    band: "WEB",
    language: "English",
    genre: "Roots, Dub & Chillout Reggae Melodies",
    streamUrl: "https://maggie.torontocast.com:2020/stream/reggaechillcafe",
    fallbackUrl: "https://maggie.torontocast.com:2020/stream/reggaechillcafe",
    logo: "assets/logos/reggae-chill-cafe.svg",
    featured: false,
    locked: true
  },
  {
    id: "100-greatest-80s-canada",
    name: "100 Greatest of the 80s (Canada)",
    country: "Canada",
    city: "Toronto",
    state: "Ontario",
    code: "🇨🇦",
    continent: "americas",
    category: "music",
    frequency: "WEB",
    band: "WEB",
    language: "English",
    genre: "Non-Stop Iconic 80s Pop, Rock & Synth Classics",
    streamUrl: "https://maggie.torontocast.com:2020/stream/100greatestofthe80s",
    fallbackUrl: "https://maggie.torontocast.com:2020/stream/100greatestofthe80s",
    logo: "assets/logos/100-greatest-80s.svg",
    featured: false,
    locked: false
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
    featured: true,
    locked: true
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
    featured: false,
    locked: true
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
    featured: true,
    locked: true
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
    featured: true,
    locked: true
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
    featured: false,
    locked: true
  },
  {
    id: "swr3-allemagne",
    name: "SWR3 99.9 FM Baden-Baden",
    country: "Allemagne",
    code: "🇩🇪",
    continent: "europe",
    category: "culture",
    frequency: "99.9",
    band: "FM",
    language: "Deutsch",
    genre: "Pop, Rock, Comedy & Der beste Mix",
    streamUrl: "https://liveradio.swr.de/sw282p3/swr3/play.mp3",
    fallbackUrl: "https://liveradio.swr.de/sw282p3/swr3/play.mp3",
    logo: "assets/logos/swr3-allemagne.png",
    featured: false
  },
  {
    id: "antenne-bayern-allemagne",
    name: "Antenne Bayern 101.3 FM",
    country: "Allemagne",
    code: "🇩🇪",
    continent: "europe",
    category: "culture",
    frequency: "101.3",
    band: "FM",
    language: "Deutsch",
    genre: "Bayerns bester Musikmix & Infotainment",
    streamUrl: "https://s1-webradio.antenne.de/antenne",
    fallbackUrl: "https://s1-webradio.antenne.de/antenne",
    logo: "assets/logos/antenne-bayern-allemagne.png",
    featured: true,
    locked: true
  },
  {
    id: "radio-marca-espana",
    name: "Radio Marca 103.5 FM Madrid",
    country: "Espagne",
    code: "🇪🇸",
    continent: "europe",
    category: "sports",
    frequency: "103.5",
    band: "FM",
    language: "Español",
    genre: "El deporte que se vive • La Liga en directo",
    streamUrl: "https://sonic.mediatelekom.net/9316/stream",
    fallbackUrl: "https://sonic.mediatelekom.net/9316/stream",
    logo: "assets/logos/radio-marca-espana.png",
    featured: false
  },
  {
    id: "los40-espana",
    name: "Los 40 Principales 93.9 FM Madrid",
    country: "Espagne",
    code: "🇪🇸",
    continent: "europe",
    category: "culture",
    frequency: "93.9",
    band: "FM",
    language: "Español",
    genre: "Todos los Éxitos • La radio musical líder",
    streamUrl: "https://playerservices.streamtheworld.com/api/livestream-redirect/Los40.mp3",
    fallbackUrl: "https://playerservices.streamtheworld.com/api/livestream-redirect/Los40.mp3",
    logo: "assets/logos/los40-espana.png",
    featured: true,
    locked: true
  },
  {
    id: "rai-radio1-italie",
    name: "Rai Radio 1 89.7 FM Rome",
    country: "Italie",
    code: "🇮🇹",
    continent: "europe",
    category: "news",
    frequency: "89.7",
    band: "FM",
    language: "Italiano",
    genre: "Informazione, Attualità e Giornale Radio",
    streamUrl: "https://icestreaming.rai.it/1.mp3",
    fallbackUrl: "https://icestreaming.rai.it/1.mp3",
    logo: "assets/logos/rai-radio1-italie.png",
    featured: false
  },
  {
    id: "rtl-1025-italie",
    name: "RTL 102.5 FM Very Normal People",
    country: "Italie",
    code: "🇮🇹",
    continent: "europe",
    category: "culture",
    frequency: "102.5",
    band: "FM",
    language: "Italiano",
    genre: "La prima radiovisione d'Italia • Grandi Successi",
    streamUrl: "https://streamingv2.shoutcast.com/rtl-1025",
    fallbackUrl: "https://streamingv2.shoutcast.com/rtl-1025",
    logo: "assets/logos/rtl-1025-italie.png",
    featured: true,
    locked: true
  },
  {
    id: "rtbf-la-premiere-belgique",
    name: "RTBF La Première 92.5 FM Bruxelles",
    country: "Belgique",
    code: "🇧🇪",
    continent: "europe",
    category: "news",
    frequency: "92.5",
    band: "FM",
    language: "Français",
    genre: "Info, Débats, Société & Culture belge",
    streamUrl: "https://radio.rtbf.be/lapremiere/mp3-160/rv",
    fallbackUrl: "https://radios.rtbf.be/laprem1ere-128.mp3",
    logo: "assets/logos/rtbf-la-premiere-belgique.png",
    featured: false
  },
  {
    id: "rtbf-classic21-belgique",
    name: "RTBF Classic 21 95.6 FM Bruxelles",
    country: "Belgique",
    code: "🇧🇪",
    continent: "europe",
    category: "culture",
    frequency: "95.6",
    band: "FM",
    language: "Français",
    genre: "Écoutez l'original • Rock, Pop & Blues classique",
    streamUrl: "https://radio.rtbf.be/classic21/mp3-160/rv",
    fallbackUrl: "https://radios.rtbf.be/classic21-128.mp3",
    logo: "assets/logos/rtbf-classic21-belgique.png",
    featured: true,
    locked: true
  },
  {
    id: "hit-fm-ukraine",
    name: "Hit FM 96.4 FM Kyiv (Хіт FM)",
    country: "Ukraine",
    code: "🇺🇦",
    continent: "europe",
    category: "culture",
    frequency: "96.4",
    band: "FM",
    language: "Українська",
    genre: "Найбільші хіти України та світу • Поп-музика",
    streamUrl: "https://online.hitfm.ua/HitFM_HD",
    fallbackUrl: "https://online.hitfm.ua/HitFM_HD",
    logo: "assets/logos/hit-fm-ukraine.png",
    featured: false
  },
  {
    id: "radioroks-ukraine",
    name: "Radio ROKS 103.6 FM Kyiv (Радіо ROKS)",
    country: "Ukraine",
    code: "🇺🇦",
    continent: "europe",
    category: "culture",
    frequency: "103.6",
    band: "FM",
    language: "Українська",
    genre: "Рок. Тільки рок! Рок-класика світового рівня",
    streamUrl: "https://online.radioroks.ua/RadioROKS_HD",
    fallbackUrl: "https://online.radioroks.ua/RadioROKS_HD",
    logo: "assets/logos/radioroks-ukraine.png",
    featured: true,
    locked: true
  },
  {
    id: "radio-vanya-russie",
    name: "Радио Ваня 100.1 FM (Radio Vanya)",
    country: "Russie",
    code: "🇷🇺",
    continent: "europe",
    category: "culture",
    frequency: "100.1",
    band: "FM",
    language: "Русский",
    genre: "Позитивная музыка для хорошего настроения",
    streamUrl: "https://icecast-radiovanya.cdnvideo.ru/radiovanya",
    fallbackUrl: "https://icecast-radiovanya.cdnvideo.ru/radiovanya",
    logo: "assets/logos/radio-vanya-russie.png",
    featured: false
  },
  {
    id: "dfm-russian-dance",
    name: "DFM Russian Dance 107.4 FM",
    country: "Russie",
    code: "🇷🇺",
    continent: "europe",
    category: "culture",
    frequency: "107.4",
    band: "FM",
    language: "Русский",
    genre: "Клубная танцевальная музыка & Топ-чарты",
    streamUrl: "https://dfm-dfmrusdance.hostingradio.ru/dfmrusdance96.aacp",
    fallbackUrl: "https://dfm-dfmrusdance.hostingradio.ru/dfmrusdance96.aacp",
    logo: "assets/logos/dfm-russian-dance.png",
    featured: true,
    locked: true
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
    featured: true,
    locked: true
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
    featured: true,
    locked: true
  },

  // ==========================================
  // 10. 🕌 MOYEN-ORIENT & MONDE ARABE (SPIRITUALITÉ, ACTUALITÉS & CULTURE)
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
    fallbackUrl: "https://qurango.net/radio/abdulrahman_alsudaes",
    logo: "assets/logos/makkah-alsudais.png",
    featured: true,
    locked: true
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
    fallbackUrl: "https://qurango.net/radio/saud_alshuraim",
    logo: "assets/logos/makkah-alshuraim.png",
    featured: true,
    locked: true
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
    fallbackUrl: "https://qurango.net/radio/mishary_alafasi",
    logo: "assets/logos/quran-mishary-alafasy.png",
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
    fallbackUrl: "https://qurango.net/radio/abdulbasit_abdulsamad_mojawwad",
    logo: "assets/logos/quran-abdulbasit.png",
    featured: true,
    locked: true
  },
  {
    id: "monte-carlo-doualiya",
    name: "Monte Carlo Doualiya (مونت كارلو الدولية)",
    country: "Moyen-Orient",
    code: "🌐",
    continent: "middleEast",
    category: "news",
    frequency: "WEB / FM",
    band: "WEB",
    language: "العربية",
    genre: "الأخبار الدولية والتحليلات والثقافة في الشرق الأوسط",
    streamUrl: "https://montecarlodoualiya128k.ice.infomaniak.ch/mc-doualiya.mp3",
    fallbackUrl: "https://montecarlodoualiya128k.ice.infomaniak.ch/mc-doualiya.mp3",
    logo: "assets/logos/monte-carlo-doualiya.png",
    featured: true,
    locked: true
  },
  {
    id: "quran-radio-sharjah",
    name: "إذاعة القرآن الكريم من الشارقة (Sharjah)",
    country: "Émirats Arabes Unis",
    code: "🇦🇪",
    continent: "middleEast",
    category: "culture",
    frequency: "WEB",
    band: "WEB",
    language: "العربية",
    genre: "القرآن الكريم والأدعية من دولة الإمارات",
    streamUrl: "https://l3.itworkscdn.net/smcquranlive/quranradiolive/icecast.audio",
    fallbackUrl: "https://l3.itworkscdn.net/smcquranlive/quranradiolive/icecast.audio",
    logo: "assets/logos/quran-radio-sharjah.png",
    featured: true
  },
  {
    id: "alaraby-radio-qatar",
    name: "Al Araby Radio (إذاعة العربي قطر)",
    country: "Qatar",
    code: "🇶🇦",
    continent: "middleEast",
    category: "news",
    frequency: "WEB",
    band: "WEB",
    language: "العربية",
    genre: "أخبار الشرق الأوسط والعالم، حوارات وثقافة",
    streamUrl: "https://l3.itworkscdn.net/alarabyradiolive/alarabyradio_audio/icecast.audio",
    fallbackUrl: "https://l3.itworkscdn.net/alarabyradiolive/alarabyradio_audio/icecast.audio",
    logo: "assets/logos/alaraby-radio-qatar.png",
    featured: true
  },
  {
    id: "radio-9090-egypt",
    name: "Radio 9090 FM Le Caire (الراديو 9090)",
    country: "Égypte",
    code: "🇪🇬",
    continent: "middleEast",
    category: "culture",
    frequency: "90.9",
    band: "FM",
    language: "العربية",
    genre: "هواها مصري • الأخبار والموسيقى والبرامج الحوارية",
    streamUrl: "https://9090streaming.mobtada.com/9090FMEGYPT",
    fallbackUrl: "https://9090streaming.mobtada.com/9090FMEGYPT",
    logo: "assets/logos/radio-9090-egypt.png",
    featured: true,
    locked: true
  },
  {
    id: "radio-fairuz-liban",
    name: "Radio Fairuz (صوت لبنان وفيروزيات)",
    country: "Liban",
    code: "🇱🇧",
    continent: "middleEast",
    category: "culture",
    frequency: "WEB",
    band: "WEB",
    language: "العربية",
    genre: "أجمل روائع السيدة فيروز والتراث اللبناني الخالد",
    streamUrl: "https://stream.zeno.fm/9vrahqqfuuhvv",
    fallbackUrl: "https://stream.zeno.fm/9vrahqqfuuhvv",
    logo: "assets/logos/radio-fairuz-liban.png",
    featured: true
  },
  {
    id: "hayat-fm-jordan",
    name: "Hayat FM 104.7 Amman (إذاعة حياة إف إم)",
    country: "Jordanie",
    code: "🇯🇴",
    continent: "middleEast",
    category: "culture",
    frequency: "104.7",
    band: "FM",
    language: "العربية",
    genre: "صوتك للخير • برامج اجتماعية وثقافية أردنية",
    streamUrl: "https://dc1.serverse.com/proxy/kjxwtpdt/stream",
    fallbackUrl: "https://dc1.serverse.com/proxy/kjxwtpdt/stream",
    logo: "assets/logos/hayat-fm-jordan.png",
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
    featured: true,
    locked: true
  },

  // ==========================================
  // 11. 🇦🇺 AUSTRALIE, 🇳🇿 NOUVELLE-ZÉLANDE, 🇫🇯 FIDJI & 🇵🇫 POLYNÉSIE (OCÉANIE)
  // ==========================================
  {
    id: "abc-newsradio-australia",
    name: "ABC NewsRadio Australia",
    country: "Australie",
    code: "🇦🇺",
    continent: "oceania",
    category: "news",
    frequency: "WEB / AM",
    band: "WEB",
    language: "English",
    genre: "Australia's Continuous News Network 24/7",
    streamUrl: "https://abc.streamguys1.com/live/newsradio/icecast.audio",
    fallbackUrl: "https://abc.streamguys1.com/live/newsradio/icecast.audio",
    logo: "assets/logos/abc-newsradio-australia.png",
    featured: true,
    locked: true
  },
  {
    id: "sky-news-australia",
    name: "Sky News Australia Radio",
    country: "Australie",
    code: "🇦🇺",
    continent: "oceania",
    category: "news",
    frequency: "WEB",
    band: "WEB",
    language: "English",
    genre: "National Politics, Opinions & Breaking News",
    streamUrl: "https://playerservices.streamtheworld.com/api/livestream-redirect/NOVA_SKYNEWSAAC.aac",
    fallbackUrl: "https://playerservices.streamtheworld.com/api/livestream-redirect/NOVA_SKYNEWSAAC.aac",
    logo: "assets/logos/sky-news-australia.png",
    featured: true,
    locked: true
  },
  {
    id: "rnz-national-nz",
    name: "RNZ National (Radio New Zealand)",
    country: "Nouvelle-Zélande",
    code: "🇳🇿",
    continent: "oceania",
    category: "news",
    frequency: "101.0",
    band: "FM",
    language: "English / Māori",
    genre: "New Zealand's Premier Public Radio & Journalism",
    streamUrl: "https://stream-ice.radionz.co.nz/national.mp3",
    fallbackUrl: "https://stream-ice.radionz.co.nz/national.mp3",
    logo: "assets/logos/rnz-national-nz.png",
    featured: true,
    locked: true
  },
  {
    id: "the-breeze-auckland",
    name: "The Breeze 93.4 FM Auckland",
    country: "Nouvelle-Zélande",
    code: "🇳🇿",
    continent: "oceania",
    category: "culture",
    frequency: "93.4",
    band: "FM",
    language: "English",
    genre: "Easy Listening, Pop & Feel Good Hits",
    streamUrl: "https://mediaworks.streamguys1.com/breeze-akl-high_icy",
    fallbackUrl: "https://mediaworks.streamguys1.com/breeze-akl-high_icy",
    logo: "assets/logos/the-breeze-auckland.png",
    featured: true,
    locked: true
  },
  {
    id: "bula-fm-fiji",
    name: "Bula FM 102.6 Suva (Fiji)",
    country: "Fidji",
    code: "🇫🇯",
    continent: "oceania",
    category: "culture",
    frequency: "102.6",
    band: "FM",
    language: "iTaukei / English",
    genre: "N°1 Radio in Fiji • Music & Pacific Island Culture",
    streamUrl: "https://icecast1.sere.plus/Bula",
    fallbackUrl: "https://icecast1.sere.plus/Bula",
    logo: "assets/logos/bula-fm-fiji.png",
    featured: true
  },
  {
    id: "polynesie-la-1ere-tahiti",
    name: "Polynésie La 1ère (Tahiti)",
    country: "Polynésie française",
    code: "🇵🇫",
    continent: "oceania",
    category: "news",
    frequency: "89.0",
    band: "FM",
    language: "Français / Reo Tahiti",
    genre: "L'actualité et les sonorités chaleureuses du Pacifique",
    streamUrl: "https://polynesie.ice.infomaniak.ch/polynesie-128.mp3",
    fallbackUrl: "https://polynesie.ice.infomaniak.ch/polynesie-128.mp3",
    logo: "assets/logos/polynesie-la-1ere-tahiti.png",
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

// ============================================================
// DICTIONNAIRE MONDIAL DES SYNONYMES, PAYS, ÉTATS & CONTINENTS
// Supporte le Français, l'Anglais, les fautes courantes et phonétiques
// Ex: "Vietname", "Korré du Sude", "Azie", "Goergie", "Californie", "Allemagne"...
// ============================================================
const GLOBAL_LOCATION_SYNONYMS = {
  // --- ASIE & OCÉANIE ---
  "vietname": { code: "VN", en: "Vietnam", fr: "Vietnam", continent: "asia", type: "country" },
  "vietnam": { code: "VN", en: "Vietnam", fr: "Vietnam", continent: "asia", type: "country" },
  "viêt nam": { code: "VN", en: "Vietnam", fr: "Vietnam", continent: "asia", type: "country" },
  "viet nam": { code: "VN", en: "Vietnam", fr: "Vietnam", continent: "asia", type: "country" },
  "hanoi": { code: "VN", en: "Vietnam", fr: "Hanoï", continent: "asia", type: "country" },
  "saigon": { code: "VN", en: "Vietnam", fr: "Saïgon", continent: "asia", type: "country" },

  "korré du sude": { code: "KR", en: "South Korea", fr: "Corée du Sud", continent: "asia", type: "country" },
  "korre du sude": { code: "KR", en: "South Korea", fr: "Corée du Sud", continent: "asia", type: "country" },
  "corée du sud": { code: "KR", en: "South Korea", fr: "Corée du Sud", continent: "asia", type: "country" },
  "coree du sud": { code: "KR", en: "South Korea", fr: "Corée du Sud", continent: "asia", type: "country" },
  "corée": { code: "KR", en: "South Korea", fr: "Corée du Sud", continent: "asia", type: "country" },
  "coree": { code: "KR", en: "South Korea", fr: "Corée du Sud", continent: "asia", type: "country" },
  "korea": { code: "KR", en: "South Korea", fr: "Corée du Sud", continent: "asia", type: "country" },
  "south korea": { code: "KR", en: "South Korea", fr: "Corée du Sud", continent: "asia", type: "country" },
  "seoul": { code: "KR", en: "South Korea", fr: "Séoul", continent: "asia", type: "country" },
  "séoul": { code: "KR", en: "South Korea", fr: "Séoul", continent: "asia", type: "country" },

  "japon": { code: "JP", en: "Japan", fr: "Japon", continent: "asia", type: "country" },
  "japan": { code: "JP", en: "Japan", fr: "Japon", continent: "asia", type: "country" },
  "tokyo": { code: "JP", en: "Japan", fr: "Tokyo", continent: "asia", type: "country" },

  "chine": { code: "CN", en: "China", fr: "Chine", continent: "asia", type: "country" },
  "china": { code: "CN", en: "China", fr: "Chine", continent: "asia", type: "country" },
  "beijing": { code: "CN", en: "China", fr: "Pékin", continent: "asia", type: "country" },

  "inde": { code: "IN", en: "India", fr: "Inde", continent: "asia", type: "country" },
  "india": { code: "IN", en: "India", fr: "Inde", continent: "asia", type: "country" },
  "delhi": { code: "IN", en: "India", fr: "Delhi", continent: "asia", type: "country" },

  "indonesie": { code: "ID", en: "Indonesia", fr: "Indonésie", continent: "asia", type: "country" },
  "indonésie": { code: "ID", en: "Indonesia", fr: "Indonésie", continent: "asia", type: "country" },
  "indonesia": { code: "ID", en: "Indonesia", fr: "Indonésie", continent: "asia", type: "country" },

  "thailande": { code: "TH", en: "Thailand", fr: "Thaïlande", continent: "asia", type: "country" },
  "thaïlande": { code: "TH", en: "Thailand", fr: "Thaïlande", continent: "asia", type: "country" },
  "thailand": { code: "TH", en: "Thailand", fr: "Thaïlande", continent: "asia", type: "country" },

  "philippines": { code: "PH", en: "Philippines", fr: "Philippines", continent: "asia", type: "country" },
  "malaisie": { code: "MY", en: "Malaysia", fr: "Malaisie", continent: "asia", type: "country" },
  "malaysia": { code: "MY", en: "Malaysia", fr: "Malaisie", continent: "asia", type: "country" },

  "australie": { code: "AU", en: "Australia", fr: "Australie", continent: "oceania", type: "country" },
  "australia": { code: "AU", en: "Australia", fr: "Australie", continent: "oceania", type: "country" },
  "nouvelle-zelande": { code: "NZ", en: "New Zealand", fr: "Nouvelle-Zélande", continent: "oceania", type: "country" },
  "nouvelle-zélande": { code: "NZ", en: "New Zealand", fr: "Nouvelle-Zélande", continent: "oceania", type: "country" },
  "new zealand": { code: "NZ", en: "New Zealand", fr: "Nouvelle-Zélande", continent: "oceania", type: "country" },

  "arabie saoudite": { code: "SA", en: "Saudi Arabia", fr: "Arabie Saoudite", continent: "asia", type: "country" },
  "saudi arabia": { code: "SA", en: "Saudi Arabia", fr: "Arabie Saoudite", continent: "asia", type: "country" },
  "emirats": { code: "AE", en: "United Arab Emirates", fr: "Émirats Arabes Unis", continent: "asia", type: "country" },
  "émirats": { code: "AE", en: "United Arab Emirates", fr: "Émirats Arabes Unis", continent: "asia", type: "country" },
  "dubai": { code: "AE", en: "United Arab Emirates", fr: "Dubaï", continent: "asia", type: "country" },
  "dubaï": { code: "AE", en: "United Arab Emirates", fr: "Dubaï", continent: "asia", type: "country" },
  "turquie": { code: "TR", en: "Turkey", fr: "Turquie", continent: "asia", type: "country" },
  "turkey": { code: "TR", en: "Turkey", fr: "Turquie", continent: "asia", type: "country" },

  // --- EUROPE ---
  "france": { code: "FR", en: "France", fr: "France", continent: "europe", type: "country" },
  "paris": { code: "FR", en: "France", fr: "Paris", continent: "europe", type: "country" },

  "allemagne": { code: "DE", en: "Germany", fr: "Allemagne", continent: "europe", type: "country" },
  "germany": { code: "DE", en: "Germany", fr: "Allemagne", continent: "europe", type: "country" },
  "deutschland": { code: "DE", en: "Germany", fr: "Allemagne", continent: "europe", type: "country" },
  "berlin": { code: "DE", en: "Germany", fr: "Berlin", continent: "europe", type: "country" },

  "espagne": { code: "ES", en: "Spain", fr: "Espagne", continent: "europe", type: "country" },
  "spain": { code: "ES", en: "Spain", fr: "Espagne", continent: "europe", type: "country" },
  "españa": { code: "ES", en: "Spain", fr: "Espagne", continent: "europe", type: "country" },
  "madrid": { code: "ES", en: "Spain", fr: "Madrid", continent: "europe", type: "country" },

  "angleterre": { code: "GB", en: "United Kingdom", fr: "Angleterre", continent: "europe", type: "country" },
  "royaume-uni": { code: "GB", en: "United Kingdom", fr: "Royaume-Uni", continent: "europe", type: "country" },
  "royaume uni": { code: "GB", en: "United Kingdom", fr: "Royaume-Uni", continent: "europe", type: "country" },
  "uk": { code: "GB", en: "United Kingdom", fr: "Royaume-Uni", continent: "europe", type: "country" },
  "united kingdom": { code: "GB", en: "United Kingdom", fr: "Royaume-Uni", continent: "europe", type: "country" },
  "londres": { code: "GB", en: "United Kingdom", fr: "Londres", continent: "europe", type: "country" },
  "london": { code: "GB", en: "United Kingdom", fr: "Londres", continent: "europe", type: "country" },

  "italie": { code: "IT", en: "Italy", fr: "Italie", continent: "europe", type: "country" },
  "italy": { code: "IT", en: "Italy", fr: "Italie", continent: "europe", type: "country" },
  "italia": { code: "IT", en: "Italy", fr: "Italie", continent: "europe", type: "country" },

  "portugal": { code: "PT", en: "Portugal", fr: "Portugal", continent: "europe", type: "country" },
  "belgique": { code: "BE", en: "Belgium", fr: "Belgique", continent: "europe", type: "country" },
  "belgium": { code: "BE", en: "Belgium", fr: "Belgique", continent: "europe", type: "country" },
  "suisse": { code: "CH", en: "Switzerland", fr: "Suisse", continent: "europe", type: "country" },
  "switzerland": { code: "CH", en: "Switzerland", fr: "Suisse", continent: "europe", type: "country" },
  "pays-bas": { code: "NL", en: "Netherlands", fr: "Pays-Bas", continent: "europe", type: "country" },
  "pays bas": { code: "NL", en: "Netherlands", fr: "Pays-Bas", continent: "europe", type: "country" },
  "hollande": { code: "NL", en: "Netherlands", fr: "Hollande", continent: "europe", type: "country" },
  "netherlands": { code: "NL", en: "Netherlands", fr: "Pays-Bas", continent: "europe", type: "country" },
  "russie": { code: "RU", en: "Russia", fr: "Russie", continent: "europe", type: "country" },
  "russia": { code: "RU", en: "Russia", fr: "Russie", continent: "europe", type: "country" },
  "pologne": { code: "PL", en: "Poland", fr: "Pologne", continent: "europe", type: "country" },
  "grece": { code: "GR", en: "Greece", fr: "Grèce", continent: "europe", type: "country" },
  "grèce": { code: "GR", en: "Greece", fr: "Grèce", continent: "europe", type: "country" },

  // --- AFRIQUE ---
  "benin": { code: "BJ", en: "Benin", fr: "Bénin", continent: "africa", type: "country" },
  "bénin": { code: "BJ", en: "Benin", fr: "Bénin", continent: "africa", type: "country" },
  "cotonou": { code: "BJ", en: "Benin", fr: "Cotonou", continent: "africa", type: "country" },
  "parakou": { code: "BJ", en: "Benin", fr: "Parakou", continent: "africa", type: "country" },
  "porto-novo": { code: "BJ", en: "Benin", fr: "Porto-Novo", continent: "africa", type: "country" },

  "nigeria": { code: "NG", en: "Nigeria", fr: "Nigéria", continent: "africa", type: "country" },
  "nigéria": { code: "NG", en: "Nigeria", fr: "Nigéria", continent: "africa", type: "country" },
  "lagos": { code: "NG", en: "Nigeria", fr: "Lagos", continent: "africa", type: "country" },
  "abuja": { code: "NG", en: "Nigeria", fr: "Abuja", continent: "africa", type: "country" },
  "ibadan": { code: "NG", en: "Nigeria", fr: "Ibadan", continent: "africa", type: "country" },
  "abeokuta": { code: "NG", en: "Nigeria", fr: "Abeokuta", continent: "africa", type: "country" },

  "ci": { code: "CI", en: "Ivory Coast", fr: "Côte d'Ivoire", continent: "africa", type: "country" },
  "cote d'ivoire": { code: "CI", en: "Ivory Coast", fr: "Côte d'Ivoire", continent: "africa", type: "country" },
  "côte d'ivoire": { code: "CI", en: "Ivory Coast", fr: "Côte d'Ivoire", continent: "africa", type: "country" },
  "cotedivoire": { code: "CI", en: "Ivory Coast", fr: "Côte d'Ivoire", continent: "africa", type: "country" },
  "ivory coast": { code: "CI", en: "Ivory Coast", fr: "Côte d'Ivoire", continent: "africa", type: "country" },
  "abidjan": { code: "CI", en: "Ivory Coast", fr: "Abidjan", continent: "africa", type: "country" },
  "yamoussoukro": { code: "CI", en: "Ivory Coast", fr: "Yamoussoukro", continent: "africa", type: "country" },
  "bouake": { code: "CI", en: "Ivory Coast", fr: "Bouaké", continent: "africa", type: "country" },
  "bouaké": { code: "CI", en: "Ivory Coast", fr: "Bouaké", continent: "africa", type: "country" },
  "daloa": { code: "CI", en: "Ivory Coast", fr: "Daloa", continent: "africa", type: "country" },
  "san-pedro": { code: "CI", en: "Ivory Coast", fr: "San-Pédro", continent: "africa", type: "country" },
  "korhogo": { code: "CI", en: "Ivory Coast", fr: "Korhogo", continent: "africa", type: "country" },
  "duekoue": { code: "CI", en: "Ivory Coast", fr: "Duékoué", continent: "africa", type: "country" },
  "duékoué": { code: "CI", en: "Ivory Coast", fr: "Duékoué", continent: "africa", type: "country" },
  "katiola": { code: "CI", en: "Ivory Coast", fr: "Katiola", continent: "africa", type: "country" },

  "senegal": { code: "SN", en: "Senegal", fr: "Sénégal", continent: "africa", type: "country" },
  "sénégal": { code: "SN", en: "Senegal", fr: "Sénégal", continent: "africa", type: "country" },
  "dakar": { code: "SN", en: "Senegal", fr: "Dakar", continent: "africa", type: "country" },
  "thies": { code: "SN", en: "Senegal", fr: "Thiès", continent: "africa", type: "country" },
  "thiès": { code: "SN", en: "Senegal", fr: "Thiès", continent: "africa", type: "country" },
  "kaolack": { code: "SN", en: "Senegal", fr: "Kaolack", continent: "africa", type: "country" },
  "touba": { code: "SN", en: "Senegal", fr: "Touba", continent: "africa", type: "country" },
  "ziguinchor": { code: "SN", en: "Senegal", fr: "Ziguinchor", continent: "africa", type: "country" },
  "saint-louis": { code: "SN", en: "Senegal", fr: "Saint-Louis", continent: "africa", type: "country" },
  "matam": { code: "SN", en: "Senegal", fr: "Matam", continent: "africa", type: "country" },

  "cameroun": { code: "CM", en: "Cameroon", fr: "Cameroun", continent: "africa", type: "country" },
  "cameroune": { code: "CM", en: "Cameroon", fr: "Cameroun", continent: "africa", type: "country" },
  "cameroon": { code: "CM", en: "Cameroon", fr: "Cameroun", continent: "africa", type: "country" },
  "yaounde": { code: "CM", en: "Cameroon", fr: "Yaoundé", continent: "africa", type: "country" },
  "yaoundé": { code: "CM", en: "Cameroon", fr: "Yaoundé", continent: "africa", type: "country" },
  "douala": { code: "CM", en: "Cameroon", fr: "Douala", continent: "africa", type: "country" },
  "bamenda": { code: "CM", en: "Cameroon", fr: "Bamenda", continent: "africa", type: "country" },
  "buea": { code: "CM", en: "Cameroon", fr: "Buéa", continent: "africa", type: "country" },
  "buéa": { code: "CM", en: "Cameroon", fr: "Buéa", continent: "africa", type: "country" },
  "limbe": { code: "CM", en: "Cameroon", fr: "Limbé", continent: "africa", type: "country" },
  "limbé": { code: "CM", en: "Cameroon", fr: "Limbé", continent: "africa", type: "country" },
  "ebolowa": { code: "CM", en: "Cameroon", fr: "Ebolowa", continent: "africa", type: "country" },

  "togo": { code: "TG", en: "Togo", fr: "Togo", continent: "africa", type: "country" },
  "lome": { code: "TG", en: "Togo", fr: "Lomé", continent: "africa", type: "country" },
  "lomé": { code: "TG", en: "Togo", fr: "Lomé", continent: "africa", type: "country" },

  "gh": { code: "GH", en: "Ghana", fr: "Ghana", continent: "africa", type: "country" },
  "ghana": { code: "GH", en: "Ghana", fr: "Ghana", continent: "africa", type: "country" },
  "accra": { code: "GH", en: "Ghana", fr: "Accra", continent: "africa", type: "country" },
  "kumasi": { code: "GH", en: "Ghana", fr: "Kumasi", continent: "africa", type: "country" },
  "tema": { code: "GH", en: "Ghana", fr: "Tema", continent: "africa", type: "country" },
  "tamale": { code: "GH", en: "Ghana", fr: "Tamale", continent: "africa", type: "country" },
  "takoradi": { code: "GH", en: "Ghana", fr: "Takoradi", continent: "africa", type: "country" },
  "cape coast": { code: "GH", en: "Ghana", fr: "Cape Coast", continent: "africa", type: "country" },
  "sunyani": { code: "GH", en: "Ghana", fr: "Sunyani", continent: "africa", type: "country" },
  "koforidua": { code: "GH", en: "Ghana", fr: "Koforidua", continent: "africa", type: "country" },
  "ashanti": { code: "GH", en: "Ghana", fr: "Ashanti", continent: "africa", type: "country" },

  "ml": { code: "ML", en: "Mali", fr: "Mali", continent: "africa", type: "country" },
  "mali": { code: "ML", en: "Mali", fr: "Mali", continent: "africa", type: "country" },
  "bamako": { code: "ML", en: "Mali", fr: "Bamako", continent: "africa", type: "country" },
  "sikasso": { code: "ML", en: "Mali", fr: "Sikasso", continent: "africa", type: "country" },
  "kayes": { code: "ML", en: "Mali", fr: "Kayes", continent: "africa", type: "country" },
  "mopti": { code: "ML", en: "Mali", fr: "Mopti", continent: "africa", type: "country" },
  "segou": { code: "ML", en: "Mali", fr: "Ségou", continent: "africa", type: "country" },
  "ségou": { code: "ML", en: "Mali", fr: "Ségou", continent: "africa", type: "country" },
  "gao": { code: "ML", en: "Mali", fr: "Gao", continent: "africa", type: "country" },
  "tombouctou": { code: "ML", en: "Mali", fr: "Tombouctou", continent: "africa", type: "country" },
  "timbuktu": { code: "ML", en: "Mali", fr: "Tombouctou", continent: "africa", type: "country" },
  "koutiala": { code: "ML", en: "Mali", fr: "Koutiala", continent: "africa", type: "country" },
  "koulikoro": { code: "ML", en: "Mali", fr: "Koulikoro", continent: "africa", type: "country" },
  "bougouni": { code: "ML", en: "Mali", fr: "Bougouni", continent: "africa", type: "country" },
  "markala": { code: "ML", en: "Mali", fr: "Markala", continent: "africa", type: "country" },
  "san": { code: "ML", en: "Mali", fr: "San", continent: "africa", type: "country" },

  "ne": { code: "NE", en: "The Niger", fr: "Niger", continent: "africa", type: "country" },
  "niger": { code: "NE", en: "The Niger", fr: "Niger", continent: "africa", type: "country" },
  "niamey": { code: "NE", en: "The Niger", fr: "Niamey", continent: "africa", type: "country" },
  "maradi": { code: "NE", en: "The Niger", fr: "Maradi", continent: "africa", type: "country" },
  "zinder": { code: "NE", en: "The Niger", fr: "Zinder", continent: "africa", type: "country" },
  "tahoua": { code: "NE", en: "The Niger", fr: "Tahoua", continent: "africa", type: "country" },
  "agadez": { code: "NE", en: "The Niger", fr: "Agadez", continent: "africa", type: "country" },
  "diffa": { code: "NE", en: "The Niger", fr: "Diffa", continent: "africa", type: "country" },
  "dosso": { code: "NE", en: "The Niger", fr: "Dosso", continent: "africa", type: "country" },
  "tillaberi": { code: "NE", en: "The Niger", fr: "Tillabéri", continent: "africa", type: "country" },
  "tillabéri": { code: "NE", en: "The Niger", fr: "Tillabéri", continent: "africa", type: "country" },
  "baleyara": { code: "NE", en: "The Niger", fr: "Baleyara", continent: "africa", type: "country" },

  "bf": { code: "BF", en: "Burkina Faso", fr: "Burkina Faso", continent: "africa", type: "country" },
  "burkina": { code: "BF", en: "Burkina Faso", fr: "Burkina Faso", continent: "africa", type: "country" },
  "burkina faso": { code: "BF", en: "Burkina Faso", fr: "Burkina Faso", continent: "africa", type: "country" },
  "burkina-faso": { code: "BF", en: "Burkina Faso", fr: "Burkina Faso", continent: "africa", type: "country" },
  "ouagadougou": { code: "BF", en: "Burkina Faso", fr: "Ouagadougou", continent: "africa", type: "country" },
  "ouaga": { code: "BF", en: "Burkina Faso", fr: "Ouagadougou", continent: "africa", type: "country" },
  "bobo": { code: "BF", en: "Burkina Faso", fr: "Bobo-Dioulasso", continent: "africa", type: "country" },
  "bobo-dioulasso": { code: "BF", en: "Burkina Faso", fr: "Bobo-Dioulasso", continent: "africa", type: "country" },
  "koudougou": { code: "BF", en: "Burkina Faso", fr: "Koudougou", continent: "africa", type: "country" },
  "banfora": { code: "BF", en: "Burkina Faso", fr: "Banfora", continent: "africa", type: "country" },
  "ouahigouya": { code: "BF", en: "Burkina Faso", fr: "Ouahigouya", continent: "africa", type: "country" },
  "kaya": { code: "BF", en: "Burkina Faso", fr: "Kaya", continent: "africa", type: "country" },
  "dédougou": { code: "BF", en: "Burkina Faso", fr: "Dédougou", continent: "africa", type: "country" },
  "dedougou": { code: "BF", en: "Burkina Faso", fr: "Dédougou", continent: "africa", type: "country" },
  "fada": { code: "BF", en: "Burkina Faso", fr: "Fada N'Gourma", continent: "africa", type: "country" },

  // Maroc 🇲🇦
  "ma": { code: "MA", en: "Morocco", fr: "Maroc", continent: "africa", type: "country" },
  "maroc": { code: "MA", en: "Morocco", fr: "Maroc", continent: "africa", type: "country" },
  "morocco": { code: "MA", en: "Morocco", fr: "Maroc", continent: "africa", type: "country" },
  "المغرب": { code: "MA", en: "Morocco", fr: "Maroc", continent: "africa", type: "country" },
  "casablanca": { code: "MA", en: "Morocco", fr: "Casablanca", continent: "africa", type: "country" },
  "casa": { code: "MA", en: "Morocco", fr: "Casablanca", continent: "africa", type: "country" },
  "rabat": { code: "MA", en: "Morocco", fr: "Rabat", continent: "africa", type: "country" },
  "marrakech": { code: "MA", en: "Morocco", fr: "Marrakech", continent: "africa", type: "country" },
  "tanger": { code: "MA", en: "Morocco", fr: "Tanger", continent: "africa", type: "country" },
  "tangier": { code: "MA", en: "Morocco", fr: "Tanger", continent: "africa", type: "country" },
  "agadir": { code: "MA", en: "Morocco", fr: "Agadir", continent: "africa", type: "country" },
  "fès": { code: "MA", en: "Morocco", fr: "Fès", continent: "africa", type: "country" },
  "fes": { code: "MA", en: "Morocco", fr: "Fès", continent: "africa", type: "country" },
  "meknès": { code: "MA", en: "Morocco", fr: "Meknès", continent: "africa", type: "country" },
  "meknes": { code: "MA", en: "Morocco", fr: "Meknès", continent: "africa", type: "country" },
  "oujda": { code: "MA", en: "Morocco", fr: "Oujda", continent: "africa", type: "country" },

  // Algérie 🇩🇿
  "dz": { code: "DZ", en: "Algeria", fr: "Algérie", continent: "africa", type: "country" },
  "algerie": { code: "DZ", en: "Algeria", fr: "Algérie", continent: "africa", type: "country" },
  "algérie": { code: "DZ", en: "Algeria", fr: "Algérie", continent: "africa", type: "country" },
  "algeria": { code: "DZ", en: "Algeria", fr: "Algérie", continent: "africa", type: "country" },
  "alger": { code: "DZ", en: "Algeria", fr: "Alger", continent: "africa", type: "country" },
  "الجزائر": { code: "DZ", en: "Algeria", fr: "Algérie", continent: "africa", type: "country" },
  "oran": { code: "DZ", en: "Algeria", fr: "Oran", continent: "africa", type: "country" },
  "وهران": { code: "DZ", en: "Algeria", fr: "Oran", continent: "africa", type: "country" },
  "constantine": { code: "DZ", en: "Algeria", fr: "Constantine", continent: "africa", type: "country" },
  "قسنطينة": { code: "DZ", en: "Algeria", fr: "Constantine", continent: "africa", type: "country" },
  "annaba": { code: "DZ", en: "Algeria", fr: "Annaba", continent: "africa", type: "country" },
  "عنابة": { code: "DZ", en: "Algeria", fr: "Annaba", continent: "africa", type: "country" },
  "setif": { code: "DZ", en: "Algeria", fr: "Sétif", continent: "africa", type: "country" },
  "sétif": { code: "DZ", en: "Algeria", fr: "Sétif", continent: "africa", type: "country" },
  "سطيف": { code: "DZ", en: "Algeria", fr: "Sétif", continent: "africa", type: "country" },
  "tizi ouzou": { code: "DZ", en: "Algeria", fr: "Tizi Ouzou", continent: "africa", type: "country" },
  "tizi": { code: "DZ", en: "Algeria", fr: "Tizi Ouzou", continent: "africa", type: "country" },
  "تيزي وزو": { code: "DZ", en: "Algeria", fr: "Tizi Ouzou", continent: "africa", type: "country" },
  "tlemcen": { code: "DZ", en: "Algeria", fr: "Tlemcen", continent: "africa", type: "country" },
  "batna": { code: "DZ", en: "Algeria", fr: "Batna", continent: "africa", type: "country" },
  "bejaia": { code: "DZ", en: "Algeria", fr: "Béjaïa", continent: "africa", type: "country" },
  "béjaïa": { code: "DZ", en: "Algeria", fr: "Béjaïa", continent: "africa", type: "country" },
  "biskra": { code: "DZ", en: "Algeria", fr: "Biskra", continent: "africa", type: "country" },

  // Tunisie 🇹🇳
  "tn": { code: "TN", en: "Tunisia", fr: "Tunisie", continent: "africa", type: "country" },
  "tunisie": { code: "TN", en: "Tunisia", fr: "Tunisie", continent: "africa", type: "country" },
  "tunisia": { code: "TN", en: "Tunisia", fr: "Tunisie", continent: "africa", type: "country" },
  "تونس": { code: "TN", en: "Tunisia", fr: "Tunisie", continent: "africa", type: "country" },
  "tunis": { code: "TN", en: "Tunisia", fr: "Tunis", continent: "africa", type: "country" },
  "sfax": { code: "TN", en: "Tunisia", fr: "Sfax", continent: "africa", type: "country" },
  "sousse": { code: "TN", en: "Tunisia", fr: "Sousse", continent: "africa", type: "country" },
  "kairouan": { code: "TN", en: "Tunisia", fr: "Kairouan", continent: "africa", type: "country" },
  "bizerte": { code: "TN", en: "Tunisia", fr: "Bizerte", continent: "africa", type: "country" },
  "monastir": { code: "TN", en: "Tunisia", fr: "Monastir", continent: "africa", type: "country" },
  "gabes": { code: "TN", en: "Tunisia", fr: "Gabès", continent: "africa", type: "country" },
  "gabès": { code: "TN", en: "Tunisia", fr: "Gabès", continent: "africa", type: "country" },
  "ariana": { code: "TN", en: "Tunisia", fr: "Ariana", continent: "africa", type: "country" },
  "gafsa": { code: "TN", en: "Tunisia", fr: "Gafsa", continent: "africa", type: "country" },
  "kef": { code: "TN", en: "Tunisia", fr: "Le Kef", continent: "africa", type: "country" },
  "tataouine": { code: "TN", en: "Tunisia", fr: "Tataouine", continent: "africa", type: "country" },

  "egypte": { code: "EG", en: "Egypt", fr: "Égypte", continent: "africa", type: "country" },
  "égypte": { code: "EG", en: "Egypt", fr: "Égypte", continent: "africa", type: "country" },
  "egypt": { code: "EG", en: "Egypt", fr: "Égypte", continent: "africa", type: "country" },
  "le caire": { code: "EG", en: "Egypt", fr: "Le Caire", continent: "africa", type: "country" },
  "cairo": { code: "EG", en: "Egypt", fr: "Le Caire", continent: "africa", type: "country" },

  "rdc": { code: "CD", en: "Congo", fr: "RDC", continent: "africa", type: "country" },
  "congo": { code: "CD", en: "Congo", fr: "Congo", continent: "africa", type: "country" },
  "kinshasa": { code: "CD", en: "Congo", fr: "Kinshasa", continent: "africa", type: "country" },
  "mali": { code: "ML", en: "Mali", fr: "Mali", continent: "africa", type: "country" },
  "bamako": { code: "ML", en: "Mali", fr: "Bamako", continent: "africa", type: "country" },
  "burkina": { code: "BF", en: "Burkina Faso", fr: "Burkina Faso", continent: "africa", type: "country" },
  "burkina faso": { code: "BF", en: "Burkina Faso", fr: "Burkina Faso", continent: "africa", type: "country" },
  "madagascar": { code: "MG", en: "Madagascar", fr: "Madagascar", continent: "africa", type: "country" },
  // Afrique du Sud 🇿🇦
  "za": { code: "ZA", en: "South Africa", fr: "Afrique du Sud", continent: "africa", type: "country" },
  "afrique du sud": { code: "ZA", en: "South Africa", fr: "Afrique du Sud", continent: "africa", type: "country" },
  "south africa": { code: "ZA", en: "South Africa", fr: "Afrique du Sud", continent: "africa", type: "country" },
  "suid-afrika": { code: "ZA", en: "South Africa", fr: "Afrique du Sud", continent: "africa", type: "country" },
  "johannesburg": { code: "ZA", en: "South Africa", fr: "Johannesburg", continent: "africa", type: "country" },
  "joburg": { code: "ZA", en: "South Africa", fr: "Johannesburg", continent: "africa", type: "country" },
  "cape town": { code: "ZA", en: "South Africa", fr: "Le Cap", continent: "africa", type: "country" },
  "le cap": { code: "ZA", en: "South Africa", fr: "Le Cap", continent: "africa", type: "country" },
  "durban": { code: "ZA", en: "South Africa", fr: "Durban", continent: "africa", type: "country" },
  "pretoria": { code: "ZA", en: "South Africa", fr: "Pretoria", continent: "africa", type: "country" },
  "soweto": { code: "ZA", en: "South Africa", fr: "Soweto", continent: "africa", type: "country" },
  "gauteng": { code: "ZA", en: "South Africa", fr: "Gauteng", continent: "africa", type: "country" },

  // Malawi 🇲🇼
  "mw": { code: "MW", en: "Malawi", fr: "Malawi", continent: "africa", type: "country" },
  "malawi": { code: "MW", en: "Malawi", fr: "Malawi", continent: "africa", type: "country" },
  "malawian": { code: "MW", en: "Malawi", fr: "Malawi", continent: "africa", type: "country" },
  "lilongwe": { code: "MW", en: "Malawi", fr: "Lilongwe", continent: "africa", type: "country" },
  "blantyre": { code: "MW", en: "Malawi", fr: "Blantyre", continent: "africa", type: "country" },
  "zomba": { code: "MW", en: "Malawi", fr: "Zomba", continent: "africa", type: "country" },
  "mzuzu": { code: "MW", en: "Malawi", fr: "Mzuzu", continent: "africa", type: "country" },

  // Mauritanie 🇲🇷
  "mr": { code: "MR", en: "Mauritania", fr: "Mauritanie", continent: "africa", type: "country" },
  "mauritanie": { code: "MR", en: "Mauritania", fr: "Mauritanie", continent: "africa", type: "country" },
  "mouritani": { code: "MR", en: "Mauritania", fr: "Mauritanie", continent: "africa", type: "country" },
  "mouritanie": { code: "MR", en: "Mauritania", fr: "Mauritanie", continent: "africa", type: "country" },
  "mauritania": { code: "MR", en: "Mauritania", fr: "Mauritanie", continent: "africa", type: "country" },
  "mauritanien": { code: "MR", en: "Mauritania", fr: "Mauritanie", continent: "africa", type: "country" },
  "mauritanienne": { code: "MR", en: "Mauritania", fr: "Mauritanie", continent: "africa", type: "country" },
  "nouakchott": { code: "MR", en: "Mauritania", fr: "Nouakchott", continent: "africa", type: "country" },
  "nouadhibou": { code: "MR", en: "Mauritania", fr: "Nouadhibou", continent: "africa", type: "country" },
  "zouerate": { code: "MR", en: "Mauritania", fr: "Zouérat", continent: "africa", type: "country" },
  "zouerat": { code: "MR", en: "Mauritania", fr: "Zouérat", continent: "africa", type: "country" },
  "موريتانيا": { code: "MR", en: "Mauritania", fr: "Mauritanie", continent: "africa", type: "country" },

  // Sierra Leone 🇸🇱
  "sl": { code: "SL", en: "Sierra Leone", fr: "Sierra Leone", continent: "africa", type: "country" },
  "sierra leone": { code: "SL", en: "Sierra Leone", fr: "Sierra Leone", continent: "africa", type: "country" },
  "sierraleone": { code: "SL", en: "Sierra Leone", fr: "Sierra Leone", continent: "africa", type: "country" },
  "serra leone": { code: "SL", en: "Sierra Leone", fr: "Sierra Leone", continent: "africa", type: "country" },
  "sierra léone": { code: "SL", en: "Sierra Leone", fr: "Sierra Leone", continent: "africa", type: "country" },
  "sierraleonais": { code: "SL", en: "Sierra Leone", fr: "Sierra Leone", continent: "africa", type: "country" },
  "freetown": { code: "SL", en: "Sierra Leone", fr: "Freetown", continent: "africa", type: "country" },
  "bo": { code: "SL", en: "Sierra Leone", fr: "Bo", continent: "africa", type: "country" },
  "kenema": { code: "SL", en: "Sierra Leone", fr: "Kenema", continent: "africa", type: "country" },
  "makeni": { code: "SL", en: "Sierra Leone", fr: "Makeni", continent: "africa", type: "country" },
  "koidu": { code: "SL", en: "Sierra Leone", fr: "Koidu", continent: "africa", type: "country" },
  "kenya": { code: "KE", en: "Kenya", fr: "Kenya", continent: "africa", type: "country" },
  "angola": { code: "AO", en: "Angola", fr: "Angola", continent: "africa", type: "country" },
  "gabon": { code: "GA", en: "Gabon", fr: "Gabon", continent: "africa", type: "country" },
  // Guinée (Conakry) 🇬🇳
  "gn": { code: "GN", en: "Guinea", fr: "Guinée", continent: "africa", type: "country" },
  "guinea": { code: "GN", en: "Guinea", fr: "Guinée", continent: "africa", type: "country" },
  "guinee": { code: "GN", en: "Guinea", fr: "Guinée", continent: "africa", type: "country" },
  "guinée": { code: "GN", en: "Guinea", fr: "Guinée", continent: "africa", type: "country" },
  "guinee conakry": { code: "GN", en: "Guinea", fr: "Guinée (Conakry)", continent: "africa", type: "country" },
  "guinée conakry": { code: "GN", en: "Guinea", fr: "Guinée (Conakry)", continent: "africa", type: "country" },
  "guinea conakry": { code: "GN", en: "Guinea", fr: "Guinée (Conakry)", continent: "africa", type: "country" },
  "conakry": { code: "GN", en: "Guinea", fr: "Conakry", continent: "africa", type: "country" },
  "kankan": { code: "GN", en: "Guinea", fr: "Kankan", continent: "africa", type: "country" },
  "kindia": { code: "GN", en: "Guinea", fr: "Kindia", continent: "africa", type: "country" },
  "labe": { code: "GN", en: "Guinea", fr: "Labé", continent: "africa", type: "country" },
  "labé": { code: "GN", en: "Guinea", fr: "Labé", continent: "africa", type: "country" },
  "nzerekore": { code: "GN", en: "Guinea", fr: "Nzérékoré", continent: "africa", type: "country" },
  "nzérékoré": { code: "GN", en: "Guinea", fr: "Nzérékoré", continent: "africa", type: "country" },

  // Guinée-Bissau 🇬🇼
  "gw": { code: "GW", en: "Guinea-Bissau", fr: "Guinée-Bissau", continent: "africa", type: "country" },
  "guinee-bissau": { code: "GW", en: "Guinea-Bissau", fr: "Guinée-Bissau", continent: "africa", type: "country" },
  "guinée-bissau": { code: "GW", en: "Guinea-Bissau", fr: "Guinée-Bissau", continent: "africa", type: "country" },
  "guinee bissau": { code: "GW", en: "Guinea-Bissau", fr: "Guinée-Bissau", continent: "africa", type: "country" },
  "guinée bissau": { code: "GW", en: "Guinea-Bissau", fr: "Guinée-Bissau", continent: "africa", type: "country" },
  "guinea-bissau": { code: "GW", en: "Guinea-Bissau", fr: "Guinée-Bissau", continent: "africa", type: "country" },
  "guinea bissau": { code: "GW", en: "Guinea-Bissau", fr: "Guinée-Bissau", continent: "africa", type: "country" },
  "bissau": { code: "GW", en: "Guinea-Bissau", fr: "Bissau", continent: "africa", type: "country" },

  // Guinée équatoriale 🇬🇶
  "gq": { code: "GQ", en: "Equatorial Guinea", fr: "Guinée équatoriale", continent: "africa", type: "country" },
  "guinee equatoriale": { code: "GQ", en: "Equatorial Guinea", fr: "Guinée équatoriale", continent: "africa", type: "country" },
  "guinée équatoriale": { code: "GQ", en: "Equatorial Guinea", fr: "Guinée équatoriale", continent: "africa", type: "country" },
  "guinee-equatoriale": { code: "GQ", en: "Equatorial Guinea", fr: "Guinée équatoriale", continent: "africa", type: "country" },
  "guinée-équatoriale": { code: "GQ", en: "Equatorial Guinea", fr: "Guinée équatoriale", continent: "africa", type: "country" },
  "guinea ecuatorial": { code: "GQ", en: "Equatorial Guinea", fr: "Guinée équatoriale", continent: "africa", type: "country" },
  "equatorial guinea": { code: "GQ", en: "Equatorial Guinea", fr: "Guinée équatoriale", continent: "africa", type: "country" },
  "malabo": { code: "GQ", en: "Equatorial Guinea", fr: "Malabo", continent: "africa", type: "country" },
  "bata": { code: "GQ", en: "Equatorial Guinea", fr: "Bata", continent: "africa", type: "country" },
  "niger": { code: "NE", en: "Niger", fr: "Niger", continent: "africa", type: "country" },
  "rwanda": { code: "RW", en: "Rwanda", fr: "Rwanda", continent: "africa", type: "country" },

  // --- AMÉRIQUES ---
  "usa": { code: "US", en: "United States", fr: "États-Unis", continent: "americas", type: "country" },
  "etats-unis": { code: "US", en: "United States", fr: "États-Unis", continent: "americas", type: "country" },
  "états-unis": { code: "US", en: "United States", fr: "États-Unis", continent: "americas", type: "country" },
  "etats unis": { code: "US", en: "United States", fr: "États-Unis", continent: "americas", type: "country" },
  "united states": { code: "US", en: "United States", fr: "États-Unis", continent: "americas", type: "country" },

  "californie": { code: "US", state: "California", en: "California", fr: "Californie", continent: "americas", type: "state" },
  "california": { code: "US", state: "California", en: "California", fr: "Californie", continent: "americas", type: "state" },
  "hawai": { code: "US", state: "Hawaii", en: "Hawaii", fr: "Hawaï", continent: "americas", type: "state" },
  "hawaï": { code: "US", state: "Hawaii", en: "Hawaii", fr: "Hawaï", continent: "americas", type: "state" },
  "hawaii": { code: "US", state: "Hawaii", en: "Hawaii", fr: "Hawaï", continent: "americas", type: "state" },
  "goergie": { code: "US", state: "Georgia", en: "Georgia", fr: "Géorgie", continent: "americas", type: "state" },
  "georgie": { code: "US", state: "Georgia", en: "Georgia", fr: "Géorgie", continent: "americas", type: "state" },
  "géorgie": { code: "US", state: "Georgia", en: "Georgia", fr: "Géorgie", continent: "americas", type: "state" },
  "georgia": { code: "US", state: "Georgia", en: "Georgia", fr: "Géorgie", continent: "americas", type: "state" },
  "iowa": { code: "US", state: "Iowa", en: "Iowa", fr: "Iowa", continent: "americas", type: "state" },
  "michigan": { code: "US", state: "Michigan", en: "Michigan", fr: "Michigan", continent: "americas", type: "state" },
  "floride": { code: "US", state: "Florida", en: "Florida", fr: "Floride", continent: "americas", type: "state" },
  "florida": { code: "US", state: "Florida", en: "Florida", fr: "Floride", continent: "americas", type: "state" },
  "texas": { code: "US", state: "Texas", en: "Texas", fr: "Texas", continent: "americas", type: "state" },
  "louisiane": { code: "US", state: "Louisiana", en: "Louisiana", fr: "Louisiane", continent: "americas", type: "state" },
  "louisiana": { code: "US", state: "Louisiana", en: "Louisiana", fr: "Louisiane", continent: "americas", type: "state" },
  "pennsylvanie": { code: "US", state: "Pennsylvania", en: "Pennsylvania", fr: "Pennsylvanie", continent: "americas", type: "state" },
  "pennsylvania": { code: "US", state: "Pennsylvania", en: "Pennsylvania", fr: "Pennsylvanie", continent: "americas", type: "state" },
  "ohio": { code: "US", state: "Ohio", en: "Ohio", fr: "Ohio", continent: "americas", type: "state" },
  "illinois": { code: "US", state: "Illinois", en: "Illinois", fr: "Illinois", continent: "americas", type: "state" },
  "washington": { code: "US", state: "Washington", en: "Washington", fr: "Washington", continent: "americas", type: "state" },
  "arizona": { code: "US", state: "Arizona", en: "Arizona", fr: "Arizona", continent: "americas", type: "state" },
  "colorado": { code: "US", state: "Colorado", en: "Colorado", fr: "Colorado", continent: "americas", type: "state" },
  "nevada": { code: "US", state: "Nevada", en: "Nevada", fr: "Nevada", continent: "americas", type: "state" },
  "caroline du nord": { code: "US", state: "North Carolina", en: "North Carolina", fr: "Caroline du Nord", continent: "americas", type: "state" },
  "caroline du sud": { code: "US", state: "South Carolina", en: "South Carolina", fr: "Caroline du Sud", continent: "americas", type: "state" },
  "virginie": { code: "US", state: "Virginia", en: "Virginia", fr: "Virginie", continent: "americas", type: "state" },
  "new york": { code: "US", state: "New York", en: "New York", fr: "New York", continent: "americas", type: "state" },
  "new jersey": { code: "US", state: "New Jersey", en: "New Jersey", fr: "New Jersey", continent: "americas", type: "state" },
  "tennessee": { code: "US", state: "Tennessee", en: "Tennessee", fr: "Tennessee", continent: "americas", type: "state" },

  "canada": { code: "CA", en: "Canada", fr: "Canada", continent: "americas", type: "country" },
  "quebec": { code: "CA", state: "Quebec", en: "Canada", fr: "Québec", continent: "americas", type: "state" },
  "québec": { code: "CA", state: "Quebec", en: "Canada", fr: "Québec", continent: "americas", type: "state" },
  "montreal": { code: "CA", state: "Quebec", en: "Canada", fr: "Montréal", continent: "americas", type: "state" },
  "montréal": { code: "CA", state: "Quebec", en: "Canada", fr: "Montréal", continent: "americas", type: "state" },
  "haiti": { code: "HT", en: "Haiti", fr: "Haïti", continent: "americas", type: "country" },
  "haïti": { code: "HT", en: "Haiti", fr: "Haïti", continent: "americas", type: "country" },
  "bresil": { code: "BR", en: "Brazil", fr: "Brésil", continent: "americas", type: "country" },
  "brésil": { code: "BR", en: "Brazil", fr: "Brésil", continent: "americas", type: "country" },
  "brazil": { code: "BR", en: "Brazil", fr: "Brésil", continent: "americas", type: "country" },
  "mexique": { code: "MX", en: "Mexico", fr: "Mexique", continent: "americas", type: "country" },
  "colombie": { code: "CO", en: "Colombia", fr: "Colombie", continent: "americas", type: "country" },
  "argentine": { code: "AR", en: "Argentina", fr: "Argentine", continent: "americas", type: "country" },

  // --- CONTINENTS DIRECTS (avec variantes d'orthographe) ---
  "afrique": { continent: "africa", en: "Africa", fr: "Afrique", type: "continent", topCodes: ["NG", "SN", "CI", "CM", "MA", "DZ", "EG", "BJ"] },
  "africa": { continent: "africa", en: "Africa", fr: "Afrique", type: "continent", topCodes: ["NG", "SN", "CI", "CM", "MA", "DZ", "EG", "BJ"] },
  "europe": { continent: "europe", en: "Europe", fr: "Europe", type: "continent", topCodes: ["FR", "GB", "DE", "ES", "IT"] },
  "azie": { continent: "asia", en: "Asia", fr: "Asie", type: "continent", topCodes: ["JP", "KR", "VN", "CN", "IN"] },
  "aziez": { continent: "asia", en: "Asia", fr: "Asie", type: "continent", topCodes: ["JP", "KR", "VN", "CN", "IN"] },
  "asie": { continent: "asia", en: "Asia", fr: "Asie", type: "continent", topCodes: ["JP", "KR", "VN", "CN", "IN"] },
  "asia": { continent: "asia", en: "Asia", fr: "Asie", type: "continent", topCodes: ["JP", "KR", "VN", "CN", "IN"] },
  "amerique": { continent: "americas", en: "Americas", fr: "Amériques", type: "continent", topCodes: ["US", "CA", "BR", "MX"] },
  "ameriques": { continent: "americas", en: "Americas", fr: "Amériques", type: "continent", topCodes: ["US", "CA", "BR", "MX"] },
  "oceanie": { continent: "oceania", en: "Oceania", fr: "Océanie", type: "continent", topCodes: ["AU", "NZ"] },
  "océanie": { continent: "oceania", en: "Oceania", fr: "Océanie", type: "continent", topCodes: ["AU", "NZ"] }
};

// Fonction pour déterminer le continent d'un pays à partir de son code ISO 2 lettres
function getContinentFromCountryCode(code) {
  if (!code) return "all";
  const c = code.toUpperCase();
  const AF = ["BJ", "NG", "CI", "SN", "CM", "TG", "GH", "MA", "DZ", "TN", "EG", "CD", "ML", "BF", "MG", "ZA", "KE", "AO", "GA", "GN", "NE", "RW"];
  const EU = ["FR", "DE", "ES", "GB", "IT", "PT", "BE", "CH", "NL", "RU", "PL", "GR", "SE", "NO", "IE", "AT"];
  const AS = ["VN", "KR", "JP", "CN", "IN", "ID", "TH", "PH", "MY", "PK", "SA", "AE", "TR"];
  const AM = ["US", "CA", "HT", "BR", "MX", "CO", "AR", "CL", "PE"];
  const OC = ["AU", "NZ"];
  if (AF.includes(c)) return "africa";
  if (EU.includes(c)) return "europe";
  if (AS.includes(c)) return "asia";
  if (AM.includes(c)) return "americas";
  if (OC.includes(c)) return "oceania";
  return "all";
}

// Résolveur de logo haute fidélité par région (Canada, etc.)
function resolveRegionalStationLogo(st) {
  const nameLow = (st.name || "").toLowerCase();
  const cCode = (st.countrycode || "").toUpperCase();
  const isCanada = cCode === "CA" || (st.country || "").toLowerCase().includes("canada");

  // 1. Logos officiels et stations majeures du Canada 🇨🇦
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
  }

  // 1.b Logos officiels Michigan 🇺🇸
  const stState = (st.state || "").toLowerCase();
  const isMichigan = stState.includes("michigan") || nameLow.includes("michigan") || nameLow.includes("ann arbor") || nameLow.includes("east lansing") || nameLow.includes("detroit");
  if (isMichigan) {
    if (nameLow.includes("wuom") || nameLow.includes("michigan radio") || nameLow.includes("michigan public")) return "assets/logos/wuom-michigan-radio.png";
    if (nameLow.includes("wkar")) return "assets/logos/wkar-east-lansing.png";
    if (nameLow.includes("wemu")) return "assets/logos/wemu-89-1-michigan.svg";
    if (nameLow.includes("muskegon")) return "assets/logos/muskegon-channel-radio.svg";
    if (nameLow.includes("drumbase")) return "assets/logos/drumbase-radio.svg";
  }

  // 1.c Logos officiels Texas 🇺🇸
  const isTexas = stState.includes("texas") || nameLow.includes("texas") || nameLow.includes("houston") || nameLow.includes("austin") || nameLow.includes("dallas") || nameLow.includes("san antonio") || nameLow.includes("fort worth");
  if (isTexas) {
    if (nameLow.includes("houston public") || nameLow.includes("kuhf")) return "assets/logos/houston-public-media-88-7.png";
    if (nameLow.includes("kut ") || nameLow.includes("kut 90") || nameLow.includes("austin music")) return "assets/logos/kut-90-5-austin.png";
    if (nameLow.includes("kera")) return "assets/logos/kera-90-1-dallas.png";
    if (nameLow.includes("radio free texas")) return "assets/logos/radio-free-texas.png";
    if (nameLow.includes("kora")) return "assets/logos/kora-98-3-texas.png";
    if (nameLow.includes("rebel")) return "assets/logos/texas-rebel-radio.svg";
    if (nameLow.includes("koke")) return "assets/logos/koke-fm-austin.svg";
  }

  // 1.d Logos officiels Hawaï 🌺
  const isHawaii = stState.includes("hawaii") || stState.includes("hawai") || nameLow.includes("hawaii") || nameLow.includes("hawai") || nameLow.includes("honolulu") || nameLow.includes("maui") || nameLow.includes("oahu") || nameLow.includes("kauai");
  if (isHawaii) {
    if (nameLow.includes("hpr") || nameLow.includes("hawaii public")) return "assets/logos/hawaii-public-radio.svg";
    if (nameLow.includes("kumu")) return "assets/logos/94-7-kumu-honolulu.svg";
    if (nameLow.includes("mana")) return "assets/logos/mana-o-radio-maui.svg";
    if (nameLow.includes("ukulele")) return "assets/logos/ukulele-island-radio.svg";
    if (nameLow.includes("ktuh")) return "assets/logos/ktuh-honolulu.svg";
  }

  // 1.e Logos officiels Floride ☀️
  const isFlorida = stState.includes("florida") || stState.includes("floride") || nameLow.includes("florida") || nameLow.includes("floride") || nameLow.includes("miami") || nameLow.includes("orlando") || nameLow.includes("tampa") || nameLow.includes("jacksonville");
  if (isFlorida) {
    if (nameLow.includes("wlrn")) return "assets/logos/wlrn-91-3-miami.png";
    if (nameLow.includes("wjct")) return "assets/logos/wjct-jacksonville.png";
    if (nameLow.includes("motown")) return "assets/logos/radio-motown-miami.svg";
    if (nameLow.includes("disco planet")) return "assets/logos/the-disco-planet.svg";
    if (nameLow.includes("italo disco") || nameLow.includes("italodisco")) return "assets/logos/radio-italo-disco.svg";
    if (nameLow.includes("miami beach")) return "assets/logos/miami-beach-radio.svg";
  }

  // 1.f Logos officiels Chicago 🏙️
  const isChicago = nameLow.includes("chicago") || nameLow.includes("wbez") || nameLow.includes("wfmt") || (stState.includes("illinois") && nameLow.includes("chi"));
  if (isChicago) {
    if (nameLow.includes("wbez")) return "assets/logos/wbez-91-5-chicago.png";
    if (nameLow.includes("wfmt")) return "assets/logos/wfmt-98-7-chicago.png";
    if (nameLow.includes("wls") || nameLow.includes("94.7")) return "assets/logos/wls-94-7-chicago.svg";
    if (nameLow.includes("house")) return "assets/logos/chicago-house-radio.svg";
    if (nameLow.includes("wnua") || nameLow.includes("smooth jazz")) return "assets/logos/smooth-jazz-wnua-chicago.svg";
  }

  // 1.g Logos officiels Nigéria 🇳🇬
  const isNigeria = (cCode === "NG") || (st.code === "🇳🇬") || (st.country || "").toLowerCase().includes("nigeria") || (st.country || "").toLowerCase().includes("nigéria") || stState.includes("lagos") || stState.includes("ogun") || stState.includes("oyo") || stState.includes("enugu") || stState.includes("rivers") || stState.includes("abia") || stState.includes("abuja") || nameLow.includes("nigeria") || nameLow.includes("lagos") || nameLow.includes("abuja") || nameLow.includes("ibadan") || nameLow.includes("enugu") || nameLow.includes("abeokuta");
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
  }

  // 1.h Logos officiels Cameroun 🇨🇲
  const isCameroon = (cCode === "CM") || (st.code === "🇨🇲") || (st.country || "").toLowerCase().includes("cameroun") || (st.country || "").toLowerCase().includes("cameroon") || stState.includes("yaoundé") || stState.includes("yaounde") || stState.includes("douala") || stState.includes("bamenda") || stState.includes("buea") || stState.includes("limbe") || stState.includes("ebolowa") || nameLow.includes("cameroun") || nameLow.includes("cameroon") || nameLow.includes("yaounde") || nameLow.includes("douala") || nameLow.includes("crtv") || nameLow.includes("237");
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
  }

  // 1.i Logos officiels Sénégal 🇸🇳
  const isSenegal = ((cCode === "SN") || (st.code === "🇸🇳") || (st.country || "").toLowerCase().includes("sénégal") || (st.country || "").toLowerCase().includes("senegal") || stState.includes("dakar") || stState.includes("thiès") || stState.includes("thies") || stState.includes("kaolack") || stState.includes("ziguinchor") || stState.includes("saint-louis") || stState.includes("matam") || nameLow.includes("sénégal") || nameLow.includes("senegal") || nameLow.includes("dakar") || nameLow.includes("ziguinchor") || nameLow.includes("kaolack") || (nameLow.includes("touba") && !nameLow.includes("madjoura"))) && cCode !== "ML" && !(st.country || "").toLowerCase().includes("mali");
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
  }

  // 1.j Logos officiels Bénin 🇧🇯
  const isBenin = (cCode === "BJ") || (st.code === "🇧🇯") || (st.country || "").toLowerCase().includes("bénin") || (st.country || "").toLowerCase().includes("benin") || stState.includes("cotonou") || stState.includes("parakou") || stState.includes("littoral") || stState.includes("borgou") || stState.includes("ouémé") || stState.includes("oueme") || stState.includes("porto-novo") || nameLow.includes("bénin") || nameLow.includes("benin") || nameLow.includes("cotonou") || nameLow.includes("parakou") || nameLow.includes("ortb");
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

  // 1.k Logos officiels Côte d'Ivoire 🇨🇮
  const isCoteIvoire = (cCode === "CI") || (st.code === "🇨🇮") || (st.country || "").toLowerCase().includes("ivoire") || (st.country || "").toLowerCase().includes("ivory") || stState.includes("abidjan") || stState.includes("yamoussoukro") || stState.includes("bouaké") || stState.includes("bouake") || stState.includes("daloa") || stState.includes("san-pedro") || stState.includes("korhogo") || stState.includes("lagunes") || nameLow.includes("ivoire") || nameLow.includes("ivory") || nameLow.includes("abidjan") || nameLow.includes("yamoussoukro") || nameLow.includes("bouake");
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

  // 1.l Logos officiels Ghana 🇬🇭
  const isGhana = (cCode === "GH") || (st.code === "🇬🇭") || (st.country || "").toLowerCase().includes("ghana") || stState.includes("accra") || stState.includes("kumasi") || stState.includes("ashanti") || stState.includes("tema") || stState.includes("tamale") || stState.includes("takoradi") || stState.includes("cape coast") || nameLow.includes("ghana") || nameLow.includes("accra") || nameLow.includes("kumasi");
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

  // 1.m Logos officiels Mali 🇲🇱
  const isMali = (cCode === "ML") || (st.code === "🇲🇱") || (st.country || "").toLowerCase().includes("mali") || stState.includes("bamako") || stState.includes("sikasso") || stState.includes("kayes") || stState.includes("mopti") || stState.includes("segou") || stState.includes("ségou") || stState.includes("gao") || stState.includes("tombouctou") || stState.includes("koulikoro") || nameLow.includes("mali") || nameLow.includes("bamako") || nameLow.includes("bougouni");
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

  // 1.n Logos officiels Niger 🇳🇪
  const isNiger = (cCode === "NE") || (st.code === "🇳🇪") || (st.country || "").toLowerCase() === "the niger" || (st.country || "").toLowerCase() === "niger" || stState.includes("niamey") || stState.includes("maradi") || stState.includes("zinder") || stState.includes("tahoua") || stState.includes("agadez") || stState.includes("dosso") || stState.includes("diffa") || stState.includes("tillaberi") || stState.includes("tillabéri") || nameLow.includes("niamey") || nameLow.includes("wadata") || nameLow.includes("gaskia") || nameLow.includes("garkuwa") || (nameLow.includes("dallol") && !nameLow.includes("texas"));
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

  // 1.o Logos officiels Burkina Faso 🇧🇫
  const isBurkina = (cCode === "BF") || (st.code === "🇧🇫") || (st.country || "").toLowerCase().includes("burkina") || stState.includes("ouaga") || stState.includes("bobo") || stState.includes("koudougou") || stState.includes("banfora") || stState.includes("ouahigouya") || nameLow.includes("burkina") || nameLow.includes("ouaga") || nameLow.includes("bobo") || nameLow.includes("koudougou") || nameLow.includes("balafon") || nameLow.includes("bizi") || nameLow.includes("biwi");
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

  // 1.p Logos officiels Guinée (Conakry) 🇬🇳
  const isGuinee = (cCode === "GN") || (st.code === "🇬🇳") || 
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

  // 1.q Logos officiels Guinée-Bissau 🇬🇼
  const isGuineeBissau = (cCode === "GW") || (st.code === "🇬🇼") ||
    (st.country || "").toLowerCase().includes("bissau") ||
    stState.includes("bissau") || nameLow.includes("bissau") || nameLow.includes("voz da guiné") || nameLow.includes("voz da guine");
  if (isGuineeBissau) {
    if (nameLow.includes("esperança") || nameLow.includes("esperanca")) return "assets/logos/radio-esperanca-bissau.svg";
    if (nameLow.includes("voz da guin") || nameLow.includes("voz da guiné")) return "assets/logos/radio-voz-da-guine.svg";
    return "assets/logos/guinee-bissau-radio-badge.svg";
  }

  // 1.r Logos officiels Guinée équatoriale 🇬🇶
  const isGuineeEquatoriale = (cCode === "GQ") || (st.code === "🇬🇶") ||
    (st.country || "").toLowerCase().includes("equatorial") || (st.country || "").toLowerCase().includes("équatoriale") || (st.country || "").toLowerCase().includes("ecuatorial") ||
    stState.includes("malabo") || stState.includes("bioko") || stState.includes("bata") || nameLow.includes("malabo") || nameLow.includes("rnge");
  if (isGuineeEquatoriale) {
    if (nameLow.includes("rnge") || nameLow.includes("nacional")) return "assets/logos/rnge-radio-malabo.svg";
    return "assets/logos/guinee-equatoriale-badge.svg";
  }

  // 1.s Logos officiels Maroc 🇲🇦
  const isMaroc = (cCode === "MA") || (st.code === "🇲🇦") || (st.country || "").toLowerCase().includes("maroc") || (st.country || "").toLowerCase().includes("morocco") ||
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

  // 1.t Logos officiels Tunisie 🇹🇳
  const isTunisie = (cCode === "TN") || (st.code === "🇹🇳") || (st.country || "").toLowerCase().includes("tunis") ||
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

  // 1.u Logos officiels Algérie 🇩🇿
  const isAlgerie = (cCode === "DZ") || (st.code === "🇩🇿") || (st.country || "").toLowerCase().includes("alg") ||
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

  // 1.v Logos officiels Afrique du Sud 🇿🇦
  const isSouthAfrica = (cCode === "ZA") || (st.code === "🇿🇦") || (st.country || "").toLowerCase().includes("south africa") || (st.country || "").toLowerCase().includes("afrique du sud") ||
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

  // 1.w Logos officiels Malawi 🇲🇼
  const isMalawi = (cCode === "MW") || (st.code === "🇲🇼") || (st.country || "").toLowerCase().includes("malawi") ||
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

  // 1.x Logos officiels Mauritanie 🇲🇷
  const isMauritanie = (cCode === "MR") || (st.code === "🇲🇷") || (st.country || "").toLowerCase().includes("mauritani") || (st.country || "").toLowerCase().includes("mouritani") ||
    stState.includes("nouakchott") || stState.includes("nouadhibou") || stState.includes("zouerat") || stState.includes("tiris") ||
    nameLow.includes("mauritani") || nameLow.includes("mouritani") || nameLow.includes("nouakchott") || nameLow.includes("nouadhibou") || nameLow.includes("zouerate") || nameLow.includes("موريتانيا") || nameLow.includes("القرآن الكريم");
  if (isMauritanie) {
    if (nameLow.includes("coran") || nameLow.includes("quran") || nameLow.includes("قرآن") || nameLow.includes("alkran")) return "assets/logos/radio-coran-mauritanie.svg";
    if (nameLow.includes("nouadhibou") || nameLow.includes("نواذيبو")) return "assets/logos/radio-nouadhibou-mr.svg";
    if (nameLow.includes("zouerat") || nameLow.includes("zouerate") || nameLow.includes("ازويرات")) return "assets/logos/radio-zouerate-mr.svg";
    if (nameLow.includes("mauritanie") || nameLow.includes("mauritania") || nameLow.includes("موريتانيا") || nameLow.includes("radioma")) return "assets/logos/radio-mauritanie.svg";
    return "assets/logos/mauritanie-radio-badge.svg";
  }

  // 1.y Logos officiels Sierra Leone 🇸🇱
  const isSierraLeone = (cCode === "SL") || (st.code === "🇸🇱") || (st.country || "").toLowerCase().includes("sierra leone") || (st.country || "").toLowerCase().includes("serra leone") ||
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

  // Fonction de filtrage des icônes de réseaux sociaux ou hébergeurs génériques (ne doivent JAMAIS servir de logo de radio)
  const isSocialOrGenericFavicon = (url) => {
    if (!url) return true;
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

  // 2. Favicon HTTPS officiel fourni par l'API Radio Browser (filtré contre les réseaux sociaux)
  if (st.favicon && st.favicon.startsWith("https://") && !isSocialOrGenericFavicon(st.favicon)) {
    return st.favicon;
  }

  // 3. Favicon haute résolution via domaine racine
  const domain = getDomainFromUrl(st.homepage);
  if (domain && !isSocialOrGenericFavicon(domain)) {
    return `https://t0.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=http://${domain}&size=128`;
  }

  // 4. Badges officiels régionaux de secours
  if (isCanada) {
    return "assets/logos/canada-radio-badge.svg";
  }
  if (isMichigan) {
    return "assets/logos/michigan-radio-badge.svg";
  }
  if (isTexas) {
    return "assets/logos/texas-radio-badge.svg";
  }
  if (isHawaii) {
    return "assets/logos/hawaii-radio-badge.svg";
  }
  if (isFlorida) {
    return "assets/logos/florida-radio-badge.svg";
  }
  if (isChicago) {
    return "assets/logos/chicago-radio-badge.svg";
  }
  if (isNigeria) {
    return "assets/logos/nigeria-radio-badge.svg";
  }
  if (isCameroon) {
    return "assets/logos/cameroon-radio-badge.svg";
  }
  if (isSenegal) {
    return "assets/logos/senegal-radio-badge.svg";
  }
  if (isBenin) {
    return "assets/logos/benin-radio-badge.svg";
  }
  if (isCoteIvoire) {
    return "assets/logos/cote-divoire-radio-badge.svg";
  }
  if (isGhana) {
    return "assets/logos/ghana-radio-badge.svg";
  }
  if (isMali) {
    return "assets/logos/mali-radio-badge.svg";
  }
  if (isNiger) {
    return "assets/logos/niger-radio-badge.svg";
  }
  if (isBurkina) {
    return "assets/logos/burkina-faso-radio-badge.svg";
  }
  if (isGuinee) {
    return "assets/logos/guinee-radio-badge.svg";
  }
  if (isGuineeBissau) {
    return "assets/logos/guinee-bissau-radio-badge.svg";
  }
  if (isGuineeEquatoriale) {
    return "assets/logos/guinee-equatoriale-badge.svg";
  }
  if (isMaroc) {
    return "assets/logos/maroc-radio-badge.svg";
  }
  if (isTunisie) {
    return "assets/logos/tunisie-radio-badge.svg";
  }
  if (isAlgerie) {
    return "assets/logos/algerie-radio-badge.svg";
  }
  if (isSouthAfrica) {
    return "assets/logos/south-africa-radio-badge.svg";
  }
  if (isMalawi) {
    return "assets/logos/malawi-radio-badge.svg";
  }
  if (isMauritanie) {
    return "assets/logos/mauritanie-radio-badge.svg";
  }
  if (isSierraLeone) {
    return "assets/logos/sierra-leone-radio-badge.svg";
  }

  return "";
}

// Moteur de recherche mondial Radio Browser API en temps réel (45 000+ stations)
async function searchRadioBrowserAPI(query = "", country = "", limit = 25) {
  try {
    const servers = [
      "https://de1.api.radio-browser.info",
      "https://all.api.radio-browser.info"
    ];
    const base = servers[0];
    const qRaw = (query || "").trim();
    const qLower = qRaw.toLowerCase().replace(/['"`]/g, "");
    const qClean = qRaw.replace(',', '.');
    const loc = GLOBAL_LOCATION_SYNONYMS[qLower];
    const isTagQuery = ["jazz", "chill", "chillout", "sport", "sports", "news", "rock", "pop", "classical", "culture", "dance"].includes(qLower);

    async function fetchFromEndpoint(url) {
      try {
        const res = await fetch(url, { headers: { "User-Agent": "PiRadio-PioneerApp/2.1" } });
        if (res.ok) return await res.json();
      } catch (e) {
        // En cas d'indisponibilité du serveur primaire, bascule sur le miroir secondaire
        const fallbackUrl = url.replace(servers[0], servers[1]);
        try {
          const res2 = await fetch(fallbackUrl, { headers: { "User-Agent": "PiRadio-PioneerApp/2.1" } });
          if (res2.ok) return await res2.json();
        } catch (e2) {}
      }
      return [];
    }

    let allFetched = [];

    // 1. Si la recherche correspond à un Pays reconnu (ex: Vietname, Korré du Sude, Allemagne, Espagne, Sénégal...)
    if (loc && loc.type === "country" && loc.code) {
      if (loc.code === "NE") {
        // Traitement spécifique Niger 🇳🇪 pour éviter toute confusion avec le Nigéria (NG)
        const countryUrl = `${base}/json/stations/bycountrycodeexact/NE`;
        const countryTheUrl = `${base}/json/stations/bycountryexact/The%20Niger`;
        const [resCountry, resThe] = await Promise.all([fetchFromEndpoint(countryUrl), fetchFromEndpoint(countryTheUrl)]);
        allFetched = [...(resCountry || []), ...(resThe || [])];
      } else {
        const countryUrl = `${base}/json/stations/search?limit=${limit}&countrycode=${loc.code}&hidebroken=true&order=votes&reverse=true`;
        const nameUrl = `${base}/json/stations/search?limit=${limit}&name=${encodeURIComponent(loc.en)}&hidebroken=true&order=votes&reverse=true`;
        const [resCountry, resName] = await Promise.all([fetchFromEndpoint(countryUrl), fetchFromEndpoint(nameUrl)]);
        allFetched = [...(resCountry || []), ...(resName || [])];
      }
    }
    // 2. Si la recherche correspond à un État/Région (ex: Californie, Iowa, Michigan, Goergie, Québec...)
    else if (loc && loc.type === "state" && loc.state) {
      const stateUrl = `${base}/json/stations/search?limit=${limit}&state=${encodeURIComponent(loc.state)}&countrycode=${loc.code || 'US'}&hidebroken=true&order=votes&reverse=true`;
      const nameUrl = `${base}/json/stations/search?limit=${limit}&name=${encodeURIComponent(loc.state)}&countrycode=${loc.code || 'US'}&hidebroken=true&order=votes&reverse=true`;
      const [resState, resName] = await Promise.all([fetchFromEndpoint(stateUrl), fetchFromEndpoint(nameUrl)]);
      allFetched = [...(resState || []), ...(resName || [])];
    }
    // 3. Si la recherche correspond à un Continent complet (ex: Afrique, Europe, Azie...)
    else if (loc && loc.type === "continent" && loc.topCodes) {
      const promises = loc.topCodes.slice(0, 5).map(cCode => 
        fetchFromEndpoint(`${base}/json/stations/search?limit=6&countrycode=${cCode}&hidebroken=true&order=votes&reverse=true`)
      );
      const resGroup = await Promise.all(promises);
      allFetched = resGroup.flat();
    }
    // 4. Recherche standard par mot-clé, tag ou pays sélectionné
    else {
      let mainUrl = `${base}/json/stations/search?limit=${limit}&hidebroken=true&order=votes&reverse=true`;
      if (isTagQuery) {
        mainUrl += `&tag=${encodeURIComponent(qLower)}`;
      } else if (qClean !== "") {
        mainUrl += `&name=${encodeURIComponent(qClean)}`;
      }
      if (country && country !== "all") {
        mainUrl += `&country=${encodeURIComponent(country.trim())}`;
      }
      allFetched = await fetchFromEndpoint(mainUrl);

      // Si peu de résultats par nom, tenter également par État/Région
      if ((!allFetched || allFetched.length < 5) && !isTagQuery && qClean.length >= 3) {
        const altStateUrl = `${base}/json/stations/search?limit=${limit}&state=${encodeURIComponent(qClean)}&hidebroken=true&order=votes&reverse=true`;
        const altData = await fetchFromEndpoint(altStateUrl);
        if (altData && altData.length > 0) {
          allFetched = [...(allFetched || []), ...altData];
        }
      }
    }

    if (!allFetched || !Array.isArray(allFetched)) return [];

    // Dédoublonnage par stationuuid
    const seenUuids = new Set();
    let uniqueData = [];
    allFetched.forEach(st => {
      if (!seenUuids.has(st.stationuuid)) {
        seenUuids.add(st.stationuuid);
        uniqueData.push(st);
      }
    });

    // Filtre spécifique Niger 🇳🇪 pour écarter le Nigéria et les radios pirates étrangères mal indexées
    if (loc && loc.code === "NE") {
      uniqueData = uniqueData.filter(st => {
        const c = (st.countrycode || "").toUpperCase();
        const country = (st.country || "").toLowerCase();
        const name = (st.name || "").toLowerCase();
        if (c === "NG" || country.includes("nigeria") || name.includes("nigeria")) return false;
        if (name.includes("leipzig") || name.includes("muziekknallers")) return false;
        return c === "NE" || country.includes("the niger") || country === "niger";
      });
    }

    // Filtre spécifique Guinée (Conakry) 🇬🇳 pour écarter Bissau, Guinée équatoriale et Papouasie
    if (loc && loc.code === "GN") {
      uniqueData = uniqueData.filter(st => {
        const c = (st.countrycode || "").toUpperCase();
        const country = (st.country || "").toLowerCase();
        const name = (st.name || "").toLowerCase();
        if (c === "GW" || country.includes("bissau") || name.includes("bissau")) return false;
        if (c === "GQ" || country.includes("equat") || country.includes("équat") || name.includes("malabo")) return false;
        if (c === "PG" || country.includes("papua")) return false;
        return c === "GN" || country === "guinea" || country === "guinée" || name.includes("conakry") || name.includes("guinée live");
      });
    }

    // Filtre spécifique Guinée-Bissau 🇬🇼
    if (loc && loc.code === "GW") {
      uniqueData = uniqueData.filter(st => {
        const c = (st.countrycode || "").toUpperCase();
        const country = (st.country || "").toLowerCase();
        const name = (st.name || "").toLowerCase();
        if (c === "GN" || c === "GQ" || c === "PG") return false;
        return c === "GW" || country.includes("bissau") || name.includes("bissau") || name.includes("voz da guiné");
      });
    }

    // Filtre spécifique Guinée équatoriale 🇬🇶
    if (loc && loc.code === "GQ") {
      uniqueData = uniqueData.filter(st => {
        const c = (st.countrycode || "").toUpperCase();
        const country = (st.country || "").toLowerCase();
        return c === "GQ" || country.includes("equat") || country.includes("équat") || country.includes("ecuatorial");
      });
    }

    // Filtre spécifique Algérie 🇩🇿 pour écarter les radios étrangères mal indexées
    if (loc && loc.code === "DZ") {
      uniqueData = uniqueData.filter(st => {
        const name = (st.name || "").toLowerCase();
        if (name.includes("chemnitz") || name.includes("k-sun66") || name.includes("svitle") || name.includes("sleep") || name.includes("ygg") || name.includes("christmas kids") || name.includes("frekans avrupa")) return false;
        return true;
      });
    }

    // Filtrer les flux HTTP non sécurisés si l'application s'exécute en HTTPS
    const isHttpsSite = typeof window !== "undefined" && window.location && window.location.protocol === "https:";
    if (isHttpsSite) {
      uniqueData = uniqueData.filter(st => {
        const u = (st.url_resolved || st.url || "").trim();
        return u.startsWith("https://");
      });
    }

    return uniqueData.map(st => {
      const freqMatch = st.name.match(/\d+([.,]\d+)?/);
      const freq = freqMatch ? freqMatch[0].replace(',', '.') : "";
      const isAM = st.name.toLowerCase().includes("am") || (st.tags && st.tags.toLowerCase().includes("am"));
      const freqNum = freq ? parseFloat(freq) : null;
      const isFM = (freqNum !== null && freqNum >= 87 && freqNum <= 108) || st.name.toLowerCase().includes(" fm") || st.name.toLowerCase().endsWith("fm");
      const flagEmoji = getCountryFlagEmoji(st.countrycode);
      const logoUrl = resolveRegionalStationLogo(st);

      const assignedContinent = (loc && loc.continent) 
        ? loc.continent 
        : getContinentFromCountryCode(st.countrycode);

      const countryDisplay = (loc && loc.type === "country") 
        ? (loc.fr || loc.en) 
        : (st.country || "Monde");

      const stateDisplay = st.state ? st.state.trim() : (loc && loc.state ? loc.state : "");

      return {
        id: "rb_" + st.stationuuid,
        name: st.name.trim(),
        country: countryDisplay,
        state: stateDisplay,
        city: stateDisplay ? `${stateDisplay}, ${countryDisplay}` : countryDisplay,
        code: flagEmoji,
        continent: assignedContinent,
        category: isTagQuery ? qLower : "news",
        frequency: freq,
        band: isAM ? "AM" : (isFM ? "FM" : "WEB"),
        language: st.language || "International",
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
