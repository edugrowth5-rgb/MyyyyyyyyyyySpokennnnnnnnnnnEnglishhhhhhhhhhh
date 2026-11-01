const CACHE_NAME = 'vanicraft-cache-v1';
const urlsToCache = [
  'index.html',
  'Vstyle.css',
  'Vapp.js',
  'Vdata.js',
  'Vmanifest.json',
  'vc.png'
];

// Install Service Worker
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        return cache.addAll(urlsToCache);
      })
  );
});

// Fetch Cached Files when Offline
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        return response || fetch(event.request);
      })
  );
});
