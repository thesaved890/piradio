// Pi Radio • Service Worker v3.2
// Cache App Shell & Mode Hors-Ligne pour PWA avec Logos Officiels

const CACHE_NAME = 'piradio-v3.2';
const PRECACHE_ASSETS = [
  './',
  './index.html',
  './style.css',
  './app.js',
  './translations.js',
  './stations.js',
  './manifest.json',
  './icon-192.png',
  './icon-512.png',
  './icon-maskable.png',
  './apple-touch-icon.png',
  './favicon.png',
  // Logos officiels Afrique
  './assets/logos/ortb-radio-benin.png',
  './assets/logos/ortb-radio-parakou.jpg',
  './assets/logos/algerie-chaine-3.png',
  './assets/logos/tunisie-mosaique-fm.png',
  './assets/logos/radio-mars-maroc.png',
  './assets/logos/guinee-espace-fm.png',
  './assets/logos/angola-radio-nacional.png',
  './assets/logos/radio-maria-cameroun.png',
  './assets/logos/eagle-7-fm-abeokuta.png',
  './assets/logos/ogbc-fm-abeokuta.png',
  './assets/logos/tatafo-radio-ogun.jpg',
  './assets/logos/agidigbo-fm-ibadan.png',
  './assets/logos/diamond-fm-ibadan.png',
  './assets/logos/cool-fm-lagos.png',
  './assets/logos/wazobia-fm-lagos.png',
  './assets/logos/nigeria-info-lagos.png',
  './assets/logos/metro-fm-lagos.png',
  './assets/logos/bond-fm-lagos.png',
  './assets/logos/rhythm-fm-lagos.png',
  './assets/logos/brila-fm-lagos.png',
  './assets/logos/vybz-fm-lagos.png',
  './assets/logos/1radio-ikwerre-rivers.png',
  './assets/logos/bourdex-fm-abia.png',
  './assets/logos/kcity-radio-abuja.png',
  './assets/logos/sud-fm-senegal.png',
  './assets/logos/rts-radio-senegal.png',
  './assets/logos/capital-fm-kenya.png',
  './assets/logos/classic-105-nairobi.png',
  './assets/logos/peace-fm-ghana.png',
  './assets/logos/jacaranda-fm-sa.png',
  './assets/logos/nana-fm-togo.png',
  './assets/logos/light-radio-togo.png',
  './assets/logos/star-fm-gambia.png',
  './assets/logos/gam-express-gambia.png',
  './assets/logos/africa-no1-gabon.png',
  './assets/logos/africa-mandingue.png',
  './assets/logos/almunir-radio-libya.png',
  './assets/logos/almunir-radio-benghazi.png',
  './assets/logos/radio-rwanda.png',
  './assets/logos/kiss-fm-rwanda.png',
  './assets/logos/nrg-radio-uganda.png',
  './assets/logos/capital-fm-uganda.png',
  // Logos officiels Europe
  './assets/logos/france-info.png',
  './assets/logos/europe-1.png',
  './assets/logos/france-inter.png',
  './assets/logos/bbc-world-service.png',
  './assets/logos/cadena-ser-espana.png',
  './assets/logos/deutschlandfunk-allemagne.png',
  './assets/logos/talksport-premier-league.png',
  './assets/logos/rmc-sport-direct.png',
  './assets/logos/rire-et-chansons-france.png',
  './assets/logos/radio-swiss-jazz.png',
  './assets/logos/capital-chill-uk.png',
  './assets/logos/swr3-allemagne.png',
  './assets/logos/antenne-bayern-allemagne.png',
  './assets/logos/radio-marca-espana.png',
  './assets/logos/los40-espana.png',
  './assets/logos/rai-radio1-italie.png',
  './assets/logos/rtl-1025-italie.png',
  './assets/logos/rtbf-la-premiere-belgique.png',
  './assets/logos/rtbf-classic21-belgique.png',
  './assets/logos/hit-fm-ukraine.png',
  './assets/logos/radioroks-ukraine.png',
  './assets/logos/radio-vanya-russie.png',
  './assets/logos/dfm-russian-dance.png',
  // Logos officiels Amériques & USA (Villes américaines)
  './assets/logos/npr-news-usa.png',
  './assets/logos/wnyc-fm-newyork.png',
  './assets/logos/hot-97-newyork.png',
  './assets/logos/kcrw-89-9-los-angeles.png',
  './assets/logos/kqed-88-5-san-francisco.png',
  './assets/logos/wbez-91-5-chicago.png',
  './assets/logos/wlrn-91-3-miami.png',
  './assets/logos/houston-public-media-88-7.png',
  './assets/logos/kut-90-5-austin.png',
  './assets/logos/jazz24-seattle.png',
  './assets/logos/radio-tiempo-89-5.png',
  './assets/logos/fox-sports-640-am.png',
  './assets/logos/cbn-sao-paulo.png',
  // Logos officiels Asie
  './assets/logos/nhk-world-japan.png',
  './assets/logos/j-pop-powerplay.png',
  './assets/logos/radio-mirchi-top20.png',
  './assets/logos/bollywood-gaane-purane.png',
  './assets/logos/big-b-radio-kpop.png',
  './assets/logos/cnr-1-voice-of-china.png',
  './assets/logos/easy-rock-manila.png',
  './assets/logos/capital-958-singapore.png',
  './assets/logos/sonora-fm-jakarta.png',
  // Logos officiels Moyen-Orient
  './assets/logos/makkah-alsudais.png',
  './assets/logos/makkah-alshuraim.png',
  './assets/logos/quran-mishary-alafasy.png',
  './assets/logos/quran-abdulbasit.png',
  './assets/logos/monte-carlo-doualiya.png',
  './assets/logos/quran-radio-sharjah.png',
  './assets/logos/alaraby-radio-qatar.png',
  './assets/logos/radio-9090-egypt.png',
  './assets/logos/radio-fairuz-liban.png',
  './assets/logos/hayat-fm-jordan.png',
  // Logos officiels Océanie
  './assets/logos/abc-newsradio-australia.png',
  './assets/logos/sky-news-australia.png',
  './assets/logos/rnz-national-nz.png',
  './assets/logos/the-breeze-auckland.png',
  './assets/logos/bula-fm-fiji.png',
  './assets/logos/polynesie-la-1ere-tahiti.png'
];

// Installation : Mise en cache des composants de base (App Shell + Logos)
self.addEventListener('install', (event) => {
  self.skipWaiting();
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log('[Pi Radio SW] Pré-mise en cache des fichiers statiques et logos');
      return cache.addAll(PRECACHE_ASSETS);
    })
  );
});

// Activation : Nettoyage des anciens caches obsolètes
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys.map((key) => {
          if (key !== CACHE_NAME) {
            console.log('[Pi Radio SW] Suppression ancien cache :', key);
            return caches.delete(key);
          }
        })
      );
    }).then(() => self.clients.claim())
  );
});

// Interception des requêtes :
// 1. NE JAMAIS intercepter ni mettre en cache les flux audio en direct
// 2. Stratégie Stale-While-Revalidate pour les fichiers de l'application
self.addEventListener('fetch', (event) => {
  const req = event.request;
  const url = new URL(req.url);

  // Ignorer les requêtes non GET ou non HTTP/HTTPS
  if (req.method !== 'GET' || !req.url.startsWith('http')) {
    return;
  }

  // Ignorer impérativement tous les flux audio (MP3, AAC, HLS m3u8, streams)
  if (
    req.destination === 'audio' ||
    url.pathname.endsWith('.mp3') ||
    url.pathname.endsWith('.m3u8') ||
    url.pathname.endsWith('.aac') ||
    url.pathname.includes('/stream') ||
    url.pathname.includes('/live') ||
    url.searchParams.has('stream')
  ) {
    return;
  }

  // Requêtes vers assets/logos : Cache-First avec fallback Réseau
  if (url.pathname.includes('/assets/logos/')) {
    event.respondWith(
      caches.match(req).then((cached) => cached || fetch(req).then((res) => {
        const copy = res.clone();
        caches.open(CACHE_NAME).then((cache) => cache.put(req, copy));
        return res;
      }))
    );
    return;
  }

  // Pour les requêtes d'API externes (Radio Browser, etc.) : Réseau en priorité
  if (url.hostname.includes('radio-browser.info') || url.hostname.includes('google.com') || url.hostname.includes('gstatic.com')) {
    event.respondWith(
      fetch(req).catch(() => caches.match(req))
    );
    return;
  }

  // Pour les fichiers statiques de l'application : Network-First avec fallback Cache
  event.respondWith(
    fetch(req)
      .then((networkResponse) => {
        if (networkResponse && networkResponse.status === 200) {
          const responseToCache = networkResponse.clone();
          caches.open(CACHE_NAME).then((cache) => {
            cache.put(req, responseToCache);
          });
        }
        return networkResponse;
      })
      .catch(() => {
        return caches.match(req).then((cachedResponse) => {
          if (cachedResponse) {
            return cachedResponse;
          }
          if (req.mode === 'navigate') {
            return caches.match('./index.html');
          }
        });
      })
  );
});
