const CACHE_NAME = 'govago-cache-v1';
const urlsToCache = [
  '/',
  '/manifest.json',
  '/path/to/icon.png', // Assure-toi d'ajuster le chemin de l'icône
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});
