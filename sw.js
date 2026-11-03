// Pi Radio • Service Worker v2.1
// Cache App Shell & Mode Hors-Ligne pour PWA

const CACHE_NAME = 'piradio-v2.1';
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
  './favicon.png'
];

// Installation : Mise en cache des composants de base (App Shell)
self.addEventListener('install', (event) => {
  self.skipWaiting();
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log('[Pi Radio SW] Pré-mise en cache des fichiers statiques');
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
    return; // Laisser le navigateur gérer le flux en direct sans passer par le cache
  }

  // Pour les requêtes d'API externes (Radio Browser, etc.) : Réseau en priorité
  if (url.hostname.includes('radio-browser.info') || url.hostname.includes('google.com')) {
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
        // En cas d'absence de réseau, charger depuis le cache
        return caches.match(req).then((cachedResponse) => {
          if (cachedResponse) {
            return cachedResponse;
          }
          // Si navigation HTML hors-ligne, renvoyer la coquille index.html
          if (req.mode === 'navigate') {
            return caches.match('./index.html');
          }
        });
      })
  );
});
