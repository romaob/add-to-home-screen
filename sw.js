self.addEventListener('install', function(e) {
    e.waitUntil(
      caches.open('content-store').then(function(cache) {
        return cache.addAll([
          '/add-to-home-screen/',
          '/add-to-home-screen/index.html',
          '/add-to-home-screen/index.js',
          '/add-to-home-screen/style.css',
          '/add-to-home-screen/GitHub-Mark-Light-64px.png'
        ]);
      })
    );
   });
   
   self.addEventListener('fetch', function(e) {
     console.log(e.request.url);
     e.respondWith(
       caches.match(e.request).then(function(response) {
         return response || fetch(e.request);
       })
     );
   });
   