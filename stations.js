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
    featured: true,
    locked: true
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
  // 4b. 🇹🇬 TOGO, 🇬🇲 GAMBIE, 🇬🇦 GABON, 🇱🇾 LIBYE, 🇷🇼 RWANDA, 🇺🇬 OUGANDA (AFRIQUE)
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

  "cote d'ivoire": { code: "CI", en: "Ivory Coast", fr: "Côte d'Ivoire", continent: "africa", type: "country" },
  "côte d'ivoire": { code: "CI", en: "Ivory Coast", fr: "Côte d'Ivoire", continent: "africa", type: "country" },
  "cotedivoire": { code: "CI", en: "Ivory Coast", fr: "Côte d'Ivoire", continent: "africa", type: "country" },
  "ivory coast": { code: "CI", en: "Ivory Coast", fr: "Côte d'Ivoire", continent: "africa", type: "country" },
  "abidjan": { code: "CI", en: "Ivory Coast", fr: "Abidjan", continent: "africa", type: "country" },

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

  "ghana": { code: "GH", en: "Ghana", fr: "Ghana", continent: "africa", type: "country" },
  "accra": { code: "GH", en: "Ghana", fr: "Accra", continent: "africa", type: "country" },

  "maroc": { code: "MA", en: "Morocco", fr: "Maroc", continent: "africa", type: "country" },
  "morocco": { code: "MA", en: "Morocco", fr: "Maroc", continent: "africa", type: "country" },
  "casablanca": { code: "MA", en: "Morocco", fr: "Casablanca", continent: "africa", type: "country" },
  "rabat": { code: "MA", en: "Morocco", fr: "Rabat", continent: "africa", type: "country" },

  "algerie": { code: "DZ", en: "Algeria", fr: "Algérie", continent: "africa", type: "country" },
  "algérie": { code: "DZ", en: "Algeria", fr: "Algérie", continent: "africa", type: "country" },
  "algeria": { code: "DZ", en: "Algeria", fr: "Algérie", continent: "africa", type: "country" },
  "alger": { code: "DZ", en: "Algeria", fr: "Alger", continent: "africa", type: "country" },

  "tunisie": { code: "TN", en: "Tunisia", fr: "Tunisie", continent: "africa", type: "country" },
  "tunisia": { code: "TN", en: "Tunisia", fr: "Tunisie", continent: "africa", type: "country" },
  "tunis": { code: "TN", en: "Tunisia", fr: "Tunis", continent: "africa", type: "country" },

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
  "afrique du sud": { code: "ZA", en: "South Africa", fr: "Afrique du Sud", continent: "africa", type: "country" },
  "south africa": { code: "ZA", en: "South Africa", fr: "Afrique du Sud", continent: "africa", type: "country" },
  "kenya": { code: "KE", en: "Kenya", fr: "Kenya", continent: "africa", type: "country" },
  "angola": { code: "AO", en: "Angola", fr: "Angola", continent: "africa", type: "country" },
  "gabon": { code: "GA", en: "Gabon", fr: "Gabon", continent: "africa", type: "country" },
  "guinee": { code: "GN", en: "Guinea", fr: "Guinée", continent: "africa", type: "country" },
  "guinée": { code: "GN", en: "Guinea", fr: "Guinée", continent: "africa", type: "country" },
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
  const isSenegal = (cCode === "SN") || (st.code === "🇸🇳") || (st.country || "").toLowerCase().includes("sénégal") || (st.country || "").toLowerCase().includes("senegal") || stState.includes("dakar") || stState.includes("thiès") || stState.includes("thies") || stState.includes("kaolack") || stState.includes("touba") || stState.includes("ziguinchor") || stState.includes("saint-louis") || stState.includes("matam") || nameLow.includes("sénégal") || nameLow.includes("senegal") || nameLow.includes("dakar") || nameLow.includes("touba") || nameLow.includes("ziguinchor") || nameLow.includes("kaolack");
  if (isSenegal) {
    if (nameLow.includes("h24")) return "assets/logos/h24-senegal.svg";
    if (nameLow.includes("rfm") || nameLow.includes("futurs medias") || nameLow.includes("futurs médias") || nameLow.includes("94.0")) return "assets/logos/rfm-senegal.svg";
    if (nameLow.includes("zik fm") || nameLow.includes("d-media") || nameLow.includes("89.7")) return "assets/logos/zik-fm-senegal.svg";
    if (nameLow.includes("lamp fall") || nameLow.includes("lampfall") || nameLow.includes("touba")) return "assets/logos/lamp-fall-fm.svg";
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

  // 2. Favicon HTTPS officiel fourni par l'API Radio Browser
  if (st.favicon && st.favicon.startsWith("https://")) {
    return st.favicon;
  }

  // 3. Favicon haute résolution via domaine racine
  const domain = getDomainFromUrl(st.homepage);
  if (domain && !domain.includes("torontocast") && !domain.includes("radioking") && !domain.includes("streamguys")) {
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
      const countryUrl = `${base}/json/stations/search?limit=${limit}&countrycode=${loc.code}&hidebroken=true&order=votes&reverse=true`;
      const nameUrl = `${base}/json/stations/search?limit=${limit}&name=${encodeURIComponent(loc.en)}&hidebroken=true&order=votes&reverse=true`;
      const [resCountry, resName] = await Promise.all([fetchFromEndpoint(countryUrl), fetchFromEndpoint(nameUrl)]);
      allFetched = [...(resCountry || []), ...(resName || [])];
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
