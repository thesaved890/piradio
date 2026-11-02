// Pi Radio v2.0 - Base de données des stations mondiales vérifiées
// Architecture à Double Flux (Primaire HTTPS + Miroir de Secours)
// Catégories : News, Coran & Spiritualité, Comédie, Sports Live, Cultures & Traditions

const CURATED_STATIONS = [
  // ==========================================
  // 1. SAINT CORAN & SPIRITUALITÉ (MOYEN-ORIENT & MONDE)
  // ==========================================
  {
    id: "saudi-quran",
    name: "Saudi Quran Radio (إذاعة القرآن الكريم - مكة المكرمة)",
    country: "Arabie Saoudite",
    code: "🇸🇦",
    continent: "middleEast",
    category: "quran",
    language: "العربية",
    genre: "القرآن الكريم مباشر 24/7",
    streamUrl: "https://stream.zeno.fm/fvrx4cvpg0quv",
    fallbackUrl: "https://qurango.net/radio/tarteel",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/Flag_of_Saudi_Arabia.svg/320px-Flag_of_Saudi_Arabia.svg.png",
    featured: true
  },
  {
    id: "cairo-quran",
    name: "Radio Coran Le Caire (إذاعة القرآن الكريم من القاهرة)",
    country: "Égypte",
    code: "🇪🇬",
    continent: "middleEast",
    category: "quran",
    language: "العربية",
    genre: "تلاوات نادرة وبرامج إسلامية",
    streamUrl: "https://stream.zeno.fm/frd1n0q9x68uv",
    fallbackUrl: "https://qurango.net/radio/mohammad_altablaway",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Flag_of_Egypt.svg/320px-Flag_of_Egypt.svg.png",
    featured: true
  },
  {
    id: "mishary-alafasy",
    name: "Cheikh Mishary Alafasy (مشاري العفاسي)",
    country: "Koweït / International",
    code: "🇰🇼",
    continent: "middleEast",
    category: "quran",
    language: "العربية",
    genre: "تلاوة خاشعة متواصلة",
    streamUrl: "https://qurango.net/radio/mishary_alafasi",
    fallbackUrl: "https://stream.zeno.fm/6qm6xuvpg0quv",
    logo: "https://images.unsplash.com/photo-1542816417-0983c9c9ad53?w=120",
    featured: true
  },
  {
    id: "al-quran-live-uae",
    name: "Holy Quran Radio Abu Dhabi",
    country: "Émirats Arabes Unis",
    code: "🇦🇪",
    continent: "middleEast",
    category: "quran",
    language: "العربية",
    genre: "Récitations & Invocations",
    streamUrl: "https://adgradio.mp3.shoutcast.com/holy-quran-radio",
    fallbackUrl: "https://qurango.net/radio/abdulbasit_abdulsamad_mojawwad",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Flag_of_the_United_Arab_Emirates.svg/320px-Flag_of_the_United_Arab_Emirates.svg.png",
    featured: false
  },

  // ==========================================
  // 2. SPORTS EN DIRECT (COMPÉTITIONS & MULTIPLEX)
  // ==========================================
  {
    id: "rmc-sport",
    name: "RMC Sport Direct",
    country: "France",
    code: "🇫🇷",
    continent: "europe",
    category: "sports",
    language: "Français",
    genre: "Football, Champions League, Débats",
    streamUrl: "https://icecast.rmc.fr/rmc-sport.mp3",
    fallbackUrl: "https://stream.zeno.fm/5wq5d9b5u4zuv",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/RMC_logo_2023.svg/320px-RMC_logo_2023.svg.png",
    featured: true
  },
  {
    id: "talksport-uk",
    name: "talkSPORT UK (Premier League)",
    country: "Royaume-Uni",
    code: "🇬🇧",
    continent: "europe",
    category: "sports",
    language: "English",
    genre: "Premier League Live Commentary",
    streamUrl: "https://radios.talksport.com/stream",
    fallbackUrl: "https://edge-audio-03-gos2.sharp-stream.com/talksport.mp3",
    logo: "https://upload.wikimedia.org/wikipedia/en/thumb/9/91/Talksport_logo.svg/320px-Talksport_logo.svg.png",
    featured: true
  },
  {
    id: "brila-fm-sports",
    name: "Brila FM 88.9 (Sports Radio)",
    country: "Nigeria",
    code: "🇳🇬",
    continent: "africa",
    category: "sports",
    language: "English / Pidgin",
    genre: "African Football & Global Sports",
    streamUrl: "https://stream.zeno.fm/u27fv0ugm0quv",
    fallbackUrl: "https://ice31.securenetsystems.net/COOLFM",
    logo: "https://www.brila.net/wp-content/uploads/2021/04/Brila-logo.png",
    featured: true
  },
  {
    id: "cadena-ser-deportes",
    name: "Cadena SER Deportes (Carrusel)",
    country: "Espagne",
    code: "🇪🇸",
    continent: "europe",
    category: "sports",
    language: "Español",
    genre: "La Liga, Champions y Análisis",
    streamUrl: "https://playerservices.streamtheworld.com/api/livestream-redirect/CADENASER.mp3",
    fallbackUrl: "https://rtvelivestream.akamaized.net/rne_r1_main.mp3",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Cadena_SER_logo_%282007%29.svg/320px-Cadena_SER_logo_%282007%29.svg.png",
    featured: false
  },

  // ==========================================
  // 3. COMÉDIE & HUMOUR
  // ==========================================
  {
    id: "rire-et-chansons",
    name: "Rire & Chansons (100% Sketches)",
    country: "France",
    code: "🇫🇷",
    continent: "europe",
    category: "comedy",
    language: "Français",
    genre: "Humoristes, Canulars & Stand-up",
    streamUrl: "https://stream.zeno.fm/4v3v09b5u4zuv",
    fallbackUrl: "https://icecast.radiofrance.fr/franceinter-midfi.mp3",
    logo: "https://upload.wikimedia.org/wikipedia/fr/thumb/f/f6/Rire_%26_Chansons_logo_2016.svg/320px-Rire_%26_Chansons_logo_2016.svg.png",
    featured: true
  },
  {
    id: "comedy-104-usa",
    name: "Comedy 104 Stand-up Radio",
    country: "États-Unis",
    code: "🇺🇸",
    continent: "americas",
    category: "comedy",
    language: "English",
    genre: "Non-stop Stand-up & Comedy Shows",
    streamUrl: "https://stream.zeno.fm/7k97m520w4hvv",
    fallbackUrl: "https://npr-ice.streamguys1.com/live.mp3",
    logo: "https://images.unsplash.com/photo-1514306191717-452ec28c7814?w=120",
    featured: true
  },
  {
    id: "african-comedy-radio",
    name: "Naija & African Comedy FM",
    country: "Afrique / International",
    code: "🌍",
    continent: "africa",
    category: "comedy",
    language: "Pidgin / Yoruba / English",
    genre: "African Jokes, Stand-up & Humor",
    streamUrl: "https://ice31.securenetsystems.net/WAZOBIA",
    fallbackUrl: "https://ice31.securenetsystems.net/COOLFM",
    logo: "https://wazobiafm.com/images/wazobiafm-logo.png",
    featured: false
  },

  // ==========================================
  // 4. CULTURES & TRADITIONS DU MONDE
  // ==========================================
  {
    id: "culture-african-roots",
    name: "Radio Racines & Griots d'Afrique",
    country: "Afrique de l'Ouest",
    code: "🌍",
    continent: "africa",
    category: "culture",
    language: "Yoruba / Mandingue / Wolof",
    genre: "Contes traditionnels, Kora & Balafon",
    streamUrl: "https://stream.zeno.fm/279y39g4f4hvv",
    fallbackUrl: "https://rfi-monde-96k.ice.infomaniak.ch/rfimonde-96.mp3",
    logo: "https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?w=120",
    featured: true
  },
  {
    id: "culture-indian-raga",
    name: "Indian Classical Raga & Sitar Radio",
    country: "Inde",
    code: "🇮🇳",
    continent: "asia",
    category: "culture",
    language: "हिन्दी / Instrumental",
    genre: "Musique classique méditative indienne",
    streamUrl: "https://stream.zeno.fm/g9kvk0u4m0quv",
    fallbackUrl: "https://air.pc.cdn.bitgravity.com/air/live/pcrradio_96.m3u8",
    logo: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=120",
    featured: true
  },
  {
    id: "culture-folklore-andino",
    name: "Folklore Andino & Latino Tradición",
    country: "Amérique Latine",
    code: "🌎",
    continent: "americas",
    category: "culture",
    language: "Español / Quechua",
    genre: "Flûte de pan, Charango & Poésie andine",
    streamUrl: "https://stream.zeno.fm/1f44k0u4m0quv",
    fallbackUrl: "https://playerservices.streamtheworld.com/api/livestream-redirect/CARACOL_RADIO.mp3",
    logo: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=120",
    featured: false
  },
  {
    id: "culture-celtic-tradition",
    name: "Celtic Heritage Radio",
    country: "Europe Celtique",
    code: "☘️",
    continent: "europe",
    category: "culture",
    language: "Gaeilge / English",
    genre: "Harp, Bagpipe & Gaelic Folk",
    streamUrl: "https://stream.zeno.fm/4v3v09b5u4zuv",
    fallbackUrl: "https://radionz-ice.streamguys.com/national.mp3",
    logo: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?w=120",
    featured: false
  },

  // ==========================================
  // 5. ACTUALITÉS & MONDE (NEWS & TALK)
  // ==========================================
  {
    id: "rfi-monde",
    name: "RFI Monde & Afrique",
    country: "International",
    code: "🌍",
    continent: "africa",
    category: "news",
    language: "Français",
    genre: "Actualités internationales",
    streamUrl: "https://rfi-monde-96k.ice.infomaniak.ch/rfimonde-96.mp3",
    fallbackUrl: "https://stream.zeno.fm/279y39g4f4hvv",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Logo_RFI.svg/320px-Logo_RFI.svg.png",
    featured: true
  },
  {
    id: "france-info",
    name: "Franceinfo 24/7",
    country: "France",
    code: "🇫🇷",
    continent: "europe",
    category: "news",
    language: "Français",
    genre: "Info en continu & Débats",
    streamUrl: "https://icecast.radiofrance.fr/franceinfo-midfi.mp3",
    fallbackUrl: "https://icecast.radiofrance.fr/franceinter-midfi.mp3",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Franceinfo_logo_2016.svg/320px-Franceinfo_logo_2016.svg.png",
    featured: true
  },
  {
    id: "bbc-world-service",
    name: "BBC World Service",
    country: "Royaume-Uni",
    code: "🇬🇧",
    continent: "europe",
    category: "news",
    language: "English",
    genre: "Global Breaking News",
    streamUrl: "https://stream.live.vc.bbcmedia.co.uk/bbc_world_service",
    fallbackUrl: "https://stream.zeno.fm/5wq5d9b5u4zuv",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/BBC_World_Service_logo_2022.svg/320px-BBC_World_Service_logo_2022.svg.png",
    featured: true
  },
  {
    id: "cool-fm-lagos",
    name: "Cool FM 96.9 Lagos",
    country: "Nigeria",
    code: "🇳🇬",
    continent: "africa",
    category: "news",
    language: "English / Yoruba",
    genre: "News, Urban & Talk",
    streamUrl: "https://ice31.securenetsystems.net/COOLFM",
    fallbackUrl: "https://ice31.securenetsystems.net/WAZOBIA",
    logo: "https://coolfm.ng/images/coolfm-logo.png",
    featured: true
  },
  {
    id: "crtv-cameroun",
    name: "CRTV Poste National",
    country: "Cameroun",
    code: "🇨🇲",
    continent: "africa",
    category: "news",
    language: "Français & English",
    genre: "Journal parlé & Analyses",
    streamUrl: "https://stream.zeno.fm/7gsvv975u4zuv",
    fallbackUrl: "https://stream.zeno.fm/9k97m520w4hvv",
    logo: "https://upload.wikimedia.org/wikipedia/fr/5/52/Logo_CRTV.jpg",
    featured: true
  },
  {
    id: "radio-okapi",
    name: "Radio Okapi (RDC)",
    country: "RD Congo",
    code: "🇨🇩",
    continent: "africa",
    category: "news",
    language: "Français & Lingala",
    genre: "Actualités & Société",
    streamUrl: "https://stream.zeno.fm/e2g1d5r7p7zuv",
    fallbackUrl: "https://stream.zeno.fm/279y39g4f4hvv",
    logo: "https://www.radiookapi.net/sites/default/files/logo_okapi.png",
    featured: true
  },
  {
    id: "npr-news",
    name: "NPR 24-Hour National Stream",
    country: "États-Unis",
    code: "🇺🇸",
    continent: "americas",
    category: "news",
    language: "English",
    genre: "American News & In-Depth Talk",
    streamUrl: "https://npr-ice.streamguys1.com/live.mp3",
    fallbackUrl: "https://fm939.wnyc.org/wnycfm",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/National_Public_Radio_logo.svg/320px-National_Public_Radio_logo.svg.png",
    featured: true
  },
  {
    id: "al-jazeera-arabic",
    name: "Al Jazeera Arabic Radio (قناة الجزيرة الإخبارية)",
    country: "Qatar / Monde Arabe",
    code: "🇶🇦",
    continent: "middleEast",
    category: "news",
    language: "العربية",
    genre: "أخبار عاجلة وتحليلات",
    streamUrl: "https://live-audio-mf.akamaized.net/audio/aljazeera_ara/manifest.m3u8",
    fallbackUrl: "https://stream.zeno.fm/frd1n0q9x68uv",
    logo: "https://upload.wikimedia.org/wikipedia/en/thumb/f/f2/Aljazeera_eng.svg/320px-Aljazeera_eng.svg.png",
    featured: true
  },
  {
    id: "deutschlandfunk",
    name: "Deutschlandfunk Nachrichten",
    country: "Allemagne",
    code: "🇩🇪",
    continent: "europe",
    category: "news",
    language: "Deutsch",
    genre: "Nachrichten & Kultur",
    streamUrl: "https://st01.sslstream.dlf.de/dlf/01/128/mp3/stream.mp3",
    fallbackUrl: "https://st02.sslstream.dlf.de/dlf/02/128/mp3/stream.mp3",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Deutschlandfunk_2017_Logo.svg/320px-Deutschlandfunk_2017_Logo.svg.png",
    featured: false
  },
  {
    id: "voice-of-vietnam-vov1",
    name: "Voice of Vietnam (VOV1 Thời Sự)",
    country: "Vietnam",
    code: "🇻🇳",
    continent: "asia",
    category: "news",
    language: "Tiếng Việt",
    genre: "Tin tức chính trị xã hội",
    streamUrl: "https://stream.vov.gov.vn/vov1/vov1.sdp/playlist.m3u8",
    fallbackUrl: "https://m-audio-k-stream.nhk.jp/world/r-live/output/index.m3u8",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/VOV_logo.svg/320px-VOV_logo.svg.png",
    featured: true
  },
  {
    id: "abc-news-australia",
    name: "ABC NewsRadio",
    country: "Australie",
    code: "🇦🇺",
    continent: "oceania",
    category: "news",
    language: "English",
    genre: "24/7 National News",
    streamUrl: "https://live-radio01.mediahubaustralia.com/PBW/mp3/",
    fallbackUrl: "https://radionz-ice.streamguys.com/national.mp3",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/ABC_NewsRadio_logo.svg/320px-ABC_NewsRadio_logo.svg.png",
    featured: false
  }
];

// Recherche en direct via Radio Browser API mondial
async function searchRadioBrowserAPI(query = "", category = "", limit = 24) {
  try {
    const servers = [
      "https://de1.api.radio-browser.info",
      "https://at1.api.radio-browser.info",
      "https://nl1.api.radio-browser.info"
    ];
    const base = servers[Math.floor(Math.random() * servers.length)];
    let url = `${base}/json/stations/search?limit=${limit}&hidebroken=true&order=votes&reverse=true`;

    if (query) {
      url += `&name=${encodeURIComponent(query)}`;
    }
    if (category) {
      url += `&tag=${encodeURIComponent(category)}`;
    }

    const res = await fetch(url, { headers: { "User-Agent": "PiRadio-PioneerApp/2.0" } });
    if (!res.ok) return [];
    const data = await res.json();
    return data.map(st => ({
      id: "rb_" + st.stationuuid,
      name: st.name.trim(),
      country: st.country || "Monde",
      code: "🌐",
      continent: "all",
      category: "news",
      language: st.language || "Multilingual",
      genre: st.tags ? st.tags.split(",").slice(0, 3).join(", ") : "Radio Live",
      streamUrl: st.url_resolved || st.url,
      fallbackUrl: st.url,
      logo: st.favicon || "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=100",
      featured: false
    }));
  } catch (err) {
    console.warn("API Fallback to curated stations", err);
    return [];
  }
}
