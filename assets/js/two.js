self.addEventListener('install', function (event) {
    event.waitUntil(
        caches.open('my-site-cache-v1').then(function (cache) {
            return cache.addAll([
                '/',
                '/index.html',
                '/musicApp.css',
                '/musicApp.js',
            ]);
        })
    );
});
self.addEventListener('fetch', function (event) {
    event.respondWith(
        caches.match(event.request).then(function (response) {
            return response || fetch(event.request);
        })
    );
});



// const CACHE_NAME = 'my-site-cache-v1';
// const urlsToCache = [
//   '/',
//   '/index.html',
//   '/style.css',
//   '/script.js',
//   '/image.jpg'
// ];

// self.addEventListener('install', function(event) {
//   // Önbelleğe alınacak dosyaları ekleme
//   event.waitUntil(
//     caches.open(CACHE_NAME)
//       .then(function(cache) {
//         console.log('Önbelleğe alınan dosyalar: ', urlsToCache);
//         return cache.addAll(urlsToCache);
//       })
//   );
// });

// self.addEventListener('fetch', function(event) {
//   event.respondWith(
//     caches.match(event.request)
//       .then(function(response) {
//         // Önbellekte varsa önbellekten döndür
//         if (response) {
//           return response;
//         }
//         // Ağa istek gönder ve sonucu önbelleğe ekle
//         return fetch(event.request)
//           .then(function(response) {
//             // Yanıt başarılı ise önbelleğe ekle
//             if (!response || response.status !== 200 || response.type !== 'basic') {
//               return response;
//             }
//             var responseToCache = response.clone();
//             caches.open(CACHE_NAME)
//               .then(function(cache) {
//                 cache.put(event.request, responseToCache);
//               });
//             return response;
//           });
//       })
//   );
// });

// self.addEventListener('activate', function(event) {
//   // Yeni bir Service Worker etkin olduğunda eski önbelleği temizle
//   var cacheWhitelist = ['my-site-cache-v1'];
//   event.waitUntil(
//     caches.keys().then(function(cacheNames) {
//       return Promise.all(
//         cacheNames.map(function(cacheName) {
//           if (cacheWhitelist.indexOf(cacheName) === -1) {
//             return caches.delete(cacheName);
//           }
//         })
//       );
//     })
//   );
// });
