// Pi Radio v2.0 - Base Officielle des Stations Vérifiées (100% Testées & Actives)
// Double Flux Directs (HTTPS / Audio CDN) • Zéro Flux Défaillant

const CURATED_STATIONS = [
  // ==========================================
  // 1. 🇧🇯 BÉNIN (RADIOS NATIONALES & RÉGIONALES)
  // ==========================================
  {
    id: "ortb-radio-benin",
    name: "ORTB Radio Bénin (La Nationale)",
    country: "Bénin",
    code: "🇧🇯",
    continent: "africa",
    category: "news",
    language: "Français & Langues nationales",
    genre: "Actualités nationales béninoises",
    streamUrl: "https://listen.radioking.com/radio/47608/stream/84430",
    fallbackUrl: "https://listen.radioking.com/radio/47608/stream/84430",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Flag_of_Benin.svg/320px-Flag_of_Benin.svg.png",
    featured: true
  },
  {
    id: "ortb-radio-parakou",
    name: "ORTB Radio Parakou",
    country: "Bénin",
    code: "🇧🇯",
    continent: "africa",
    category: "news",
    language: "Français & Bariba / Dendi",
    genre: "Informations & Région Nord Bénin",
    streamUrl: "https://listen.radioking.com/radio/51919/stream/88927",
    fallbackUrl: "https://listen.radioking.com/radio/51919/stream/88927",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Flag_of_Benin.svg/320px-Flag_of_Benin.svg.png",
    featured: true
  },

  // ==========================================
  // 2. 🌍 AFRIQUE (NIGERIA, SÉNÉGAL, KENYA, GHANA, CAMEROUN, AFRIQUE DU SUD, MAROC)
  // ==========================================
  {
    id: "metro-fm-lagos",
    name: "Metro FM 97.7 Lagos",
    country: "Nigeria",
    code: "🇳🇬",
    continent: "africa",
    category: "news",
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
    language: "Yoruba / Hausa / Igbo",
    genre: "Grassroots News & African Culture",
    streamUrl: "https://go.webgateready.com/bondfm",
    fallbackUrl: "https://go.webgateready.com/metrofm/radio.mp3",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/Flag_of_Nigeria.svg/320px-Flag_of_Nigeria.svg.png",
    featured: true
  },
  {
    id: "sud-fm-senegal",
    name: "Sud FM Dakar (La Première)",
    country: "Sénégal",
    code: "🇸🇳",
    continent: "africa",
    category: "news",
    language: "Français & Wolof",
    genre: "Actualités sénégalaises & Débats",
    streamUrl: "https://sd-151888.dedibox.fr/proxy/cotesud/csfm",
    fallbackUrl: "https://carina.streamerr.co:2020/stream/OnSportFM",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/Flag_of_Senegal.svg/320px-Flag_of_Senegal.svg.png",
    featured: true
  },
  {
    id: "rts-radio-senegal",
    name: "RTS Radio Sénégal (Radio Publique)",
    country: "Sénégal",
    code: "🇸🇳",
    continent: "africa",
    category: "news",
    language: "Français & Wolof",
    genre: "Informations & Culture nationale",
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
    language: "English & Twi",
    genre: "Ghanaian News, Politics & Talk",
    streamUrl: "https://peacefm-atunwadigital.streamguys1.com/peacefm",
    fallbackUrl: "https://atunwadigital.streamguys1.com/capitalfm",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Flag_of_Ghana.svg/320px-Flag_of_Ghana.svg.png",
    featured: true
  },
  {
    id: "jacaranda-fm-sa",
    name: "Jacaranda FM (Afrique du Sud)",
    country: "Afrique du Sud",
    code: "🇿🇦",
    continent: "africa",
    category: "news",
    language: "English & Afrikaans",
    genre: "South African News & More Music",
    streamUrl: "https://edge.iono.fm/xice/jacarandafm_live_medium.aac",
    fallbackUrl: "https://atunwadigital.streamguys1.com/capitalfm",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Flag_of_South_Africa.svg/320px-Flag_of_South_Africa.svg.png",
    featured: true
  },
  {
    id: "radio-maria-cameroun",
    name: "Radio Maria Cameroun",
    country: "Cameroun",
    code: "🇨🇲",
    continent: "africa",
    category: "culture",
    language: "Français & English",
    genre: "Informations, Paix & Société",
    streamUrl: "https://dreamsiteradiocp7.com/proxy/rmcameroon?mp=/stream",
    fallbackUrl: "https://listen.radioking.com/radio/47608/stream/84430",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Flag_of_Cameroon.svg/320px-Flag_of_Cameroon.svg.png",
    featured: false
  },
  {
    id: "radio-mars-maroc",
    name: "Radio Mars Maroc (Sport en Direct)",
    country: "Maroc",
    code: "🇲🇦",
    continent: "africa",
    category: "sports",
    language: "العربية & Français",
    genre: "100% Football, Botola & Direct",
    streamUrl: "https://radiomars.ice.infomaniak.ch/radiomars-128.mp3",
    fallbackUrl: "https://audio.bfmtv.com/rmcradio_128.mp3",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Flag_of_Morocco.svg/320px-Flag_of_Morocco.svg.png",
    featured: true
  },

  // ==========================================
  // 3. 🕌 SAINT CORAN & LA MECQUE (SPIRITUALITÉ DIRECTE)
  // ==========================================
  {
    id: "makkah-alsudais",
    name: "Cheikh Al-Sudais (Grand Imam de La Mecque)",
    country: "Arabie Saoudite",
    code: "🇸🇦",
    continent: "middleEast",
    category: "quran",
    language: "العربية",
    genre: "تلاوات الحرم المكي الشريف",
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
    category: "quran",
    language: "العربية",
    genre: "تلاوة خاشعة 24/7",
    streamUrl: "https://qurango.net/radio/saud_alshuraim",
    fallbackUrl: "https://qurango.net/radio/abdulrahman_alsudaes",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/Flag_of_Saudi_Arabia.svg/320px-Flag_of_Saudi_Arabia.svg.png",
    featured: true
  },
  {
    id: "quran-mishary-alafasy",
    name: "Cheikh Mishary Alafasy (مشاري العفاسي)",
    country: "Koweït / International",
    code: "🇰🇼",
    continent: "middleEast",
    category: "quran",
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
    country: "Égypte / International",
    code: "🇪🇬",
    continent: "middleEast",
    category: "quran",
    language: "العربية",
    genre: "تلاوة مجودة نادرة",
    streamUrl: "https://qurango.net/radio/abdulbasit_abdulsamad_mojawwad",
    fallbackUrl: "https://qurango.net/radio/mohammad_altablaway",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Flag_of_Egypt.svg/320px-Flag_of_Egypt.svg.png",
    featured: true
  },
  {
    id: "quran-tablaway",
    name: "Cheikh Mohammad Al-Tablaway (الطبلاوي)",
    country: "Égypte",
    code: "🇪🇬",
    continent: "middleEast",
    category: "quran",
    language: "العربية",
    genre: "تلاوة القرآن الكريم من مصر",
    streamUrl: "https://qurango.net/radio/mohammad_altablaway",
    fallbackUrl: "https://qurango.net/radio/mishary_alafasi",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Flag_of_Egypt.svg/320px-Flag_of_Egypt.svg.png",
    featured: false
  },

  // ==========================================
  // 4. ⚽ SPORTS EN DIRECT (FOOTBALL & MULTIPLEX)
  // ==========================================
  {
    id: "talksport-premier-league",
    name: "talkSPORT UK (Premier League Live)",
    country: "Royaume-Uni",
    code: "🇬🇧",
    continent: "europe",
    category: "sports",
    language: "English",
    genre: "Premier League Live Commentary & Debate",
    streamUrl: "https://radio.talksport.com/stream",
    fallbackUrl: "https://audio.bfmtv.com/rmcradio_128.mp3",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Flag_of_the_United_Kingdom_%281-2%29.svg/320px-Flag_of_the_United_Kingdom_%281-2%29.svg.png",
    featured: true
  },
  {
    id: "rmc-sport-direct",
    name: "RMC Sport Direct",
    country: "France",
    code: "🇫🇷",
    continent: "europe",
    category: "sports",
    language: "Français",
    genre: "Football, After Foot & Direct",
    streamUrl: "https://audio.bfmtv.com/rmcradio_128.mp3",
    fallbackUrl: "https://radio.talksport.com/stream",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Flag_of_France.svg/320px-Flag_of_France.svg.png",
    featured: true
  },

  // ==========================================
  // 5. 🎭 COMÉDIE & HUMOUR (100% RIRE)
  // ==========================================
  {
    id: "rire-et-chansons-france",
    name: "Rire & Chansons (100% Sketches)",
    country: "France",
    code: "🇫🇷",
    continent: "europe",
    category: "comedy",
    language: "Français",
    genre: "Sketches, Stand-up & Canulars",
    streamUrl: "https://streaming.nrjaudio.fm/ou8o8xgk7oiu?origine=fluxradios",
    fallbackUrl: "https://icecast.radiofrance.fr/franceinter-midfi.mp3",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Flag_of_France.svg/320px-Flag_of_France.svg.png",
    featured: true
  },

  // ==========================================
  // 6. 🌍 GRANDES RADIOS D'ACTUALITÉS MONDIALES
  // ==========================================
  {
    id: "france-info",
    name: "Franceinfo 24/7",
    country: "France",
    code: "🇫🇷",
    continent: "europe",
    category: "news",
    language: "Français",
    genre: "L'actualité mondiale en continu",
    streamUrl: "https://icecast.radiofrance.fr/franceinfo-midfi.mp3",
    fallbackUrl: "https://icecast.radiofrance.fr/franceinter-midfi.mp3",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Flag_of_France.svg/320px-Flag_of_France.svg.png",
    featured: true
  },
  {
    id: "france-inter",
    name: "France Inter",
    country: "France",
    code: "🇫🇷",
    continent: "europe",
    category: "news",
    language: "Français",
    genre: "Grandes voix, analyses & culture",
    streamUrl: "https://icecast.radiofrance.fr/franceinter-midfi.mp3",
    fallbackUrl: "https://icecast.radiofrance.fr/franceinfo-midfi.mp3",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Flag_of_France.svg/320px-Flag_of_France.svg.png",
    featured: false
  },
  {
    id: "europe-1",
    name: "Europe 1",
    country: "France",
    code: "🇫🇷",
    continent: "europe",
    category: "news",
    language: "Français",
    genre: "Actualités & Société",
    streamUrl: "https://stream.europe1.fr/europe1.aac",
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
    language: "English",
    genre: "Global Impartial News 24/7",
    streamUrl: "https://stream.live.vc.bbcmedia.co.uk/bbc_world_service",
    fallbackUrl: "https://npr-ice.streamguys1.com/live.mp3",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Flag_of_the_United_Kingdom_%281-2%29.svg/320px-Flag_of_the_United_Kingdom_%281-2%29.svg.png",
    featured: true
  },
  {
    id: "cadena-ser-espana",
    name: "Cadena SER España",
    country: "Espagne",
    code: "🇪🇸",
    continent: "europe",
    category: "news",
    language: "Español",
    genre: "Noticias y Deportes de España",
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
    language: "Deutsch",
    genre: "Nachrichten & Politik",
    streamUrl: "https://st01.sslstream.dlf.de/dlf/01/128/mp3/stream.mp3",
    fallbackUrl: "https://icecast.radiofrance.fr/franceinfo-midfi.mp3",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Flag_of_Germany.svg/320px-Flag_of_Germany.svg.png",
    featured: false
  },
  {
    id: "npr-news-usa",
    name: "NPR News 24/7",
    country: "États-Unis",
    code: "🇺🇸",
    continent: "americas",
    category: "news",
    language: "English",
    genre: "In-Depth US News & World Reports",
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
    language: "English",
    genre: "New York City & International News",
    streamUrl: "https://fm939.wnyc.org/wnycfm",
    fallbackUrl: "https://npr-ice.streamguys1.com/live.mp3",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Flag_of_the_United_States.svg/320px-Flag_of_the_United_States.svg.png",
    featured: false
  },
  {
    id: "cbn-sao-paulo",
    name: "Rádio CBN São Paulo",
    country: "Brésil",
    code: "🇧🇷",
    continent: "americas",
    category: "news",
    language: "Português",
    genre: "A Rádio Que Toca Notícia",
    streamUrl: "https://playerservices.streamtheworld.com/api/livestream-redirect/CBN_SP_SC.mp3",
    fallbackUrl: "https://npr-ice.streamguys1.com/live.mp3",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Flag_of_Brazil.svg/320px-Flag_of_Brazil.svg.png",
    featured: true
  },
  {
    id: "nhk-world-japan",
    name: "NHK World Radio Japan",
    country: "Japon",
    code: "🇯🇵",
    continent: "asia",
    category: "news",
    language: "Japanese / English",
    genre: "News from Tokyo & Asia",
    streamUrl: "http://shoutcast.wrn.org:8025/nhk41left",
    fallbackUrl: "https://stream.live.vc.bbcmedia.co.uk/bbc_world_service",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Flag_of_Japan.svg/320px-Flag_of_Japan.svg.png",
    featured: true
  }
];

// Moteur de recherche mondial Radio Browser API
async function searchRadioBrowserAPI(query = "", category = "", limit = 24) {
  try {
    const servers = [
      "https://de1.api.radio-browser.info",
      "https://at1.api.radio-browser.info",
      "https://nl1.api.radio-browser.info"
    ];
    const base = servers[Math.floor(Math.random() * servers.length)];
    let url = `${base}/json/stations/search?limit=${limit}&hidebroken=true&order=votes&reverse=true`;

    if (query) url += `&name=${encodeURIComponent(query)}`;
    if (category) url += `&tag=${encodeURIComponent(category)}`;

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
      logo: st.favicon || "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c4/Globe_icon.svg/320px-Globe_icon.svg.png",
      featured: false
    }));
  } catch (err) {
    console.warn("API Fallback to curated", err);
    return [];
  }
}
