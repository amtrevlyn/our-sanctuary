const CACHE_NAME = 'sanctuary-cache-v1';
const assetsToCache = [
    './',
    './index.html',
    'https://cdn-icons-png.flaticon.com/512/2589/2589175.png'
];

self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(CACHE_NAME).then(cache => {
            return cache.addAll(assetsToCache);
        })
    );
});

self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request).then(response => {
            return response || fetch(event.request);
        })
    );
});