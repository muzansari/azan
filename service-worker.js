self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open('azan-cache').then(function(cache) {
      return cache.addAll([
        '/',
        '/index.html',
        '/adan.mp3',
        // Add other resources you want to cache
      ]);
    })
  );
});

self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request).then(function(response) {
      return response || fetch(event.request);
    })
  );
});