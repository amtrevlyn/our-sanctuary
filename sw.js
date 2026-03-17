const CACHE_NAME = 'sanctuary-v1';
const assets = [
  './',
  './index.html',
  'https://cdn-icons-png.flaticon.com/512/2589/2589175.png'
];

self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(assets))
  );
});

self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(res => res || fetch(e.request))
  );
});