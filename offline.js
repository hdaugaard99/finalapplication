// JavaScript Document

self.addEventListener('install', function(e) {
 e.waitUntil(
   caches.open('video-store').then(function(cache) {
     return cache.addAll([
       'index.html',
       'index.js',
       'style.css',
       'analysis.html',
		'analysis.js',
		'appicon.png',
		'cache.js',
		'cookies.js',
		'expenses.html',
		'expenses.js',
		'manifest.json',
		'mediaqueries.css',
		'piechart.js',
		'questions.html',
		'questions.js',
		'scripts.js',
		'spendingchart.html'
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