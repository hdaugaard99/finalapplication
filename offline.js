// JavaScript Document
if('serviceWorker' in navigator) {
    navigator.serviceWorker.register('offlinecache.js');
    
 console.log('ServiceWorker registration successful with scope: ', registration.scope);
    }, function(err) {
        // Registration failed

        console.log('ServiceWorker registration failed: ', err);
    });
});

self.addEventListener('install', (e) => {
    console.log('[Service Worker] Install');
});

var cacheName = 'finalapplication';

var urlsToCache = [
    
    '/finalapplication/analysis.html',
    '/finalapplication/analysis.js',
    '/finalapplication/cache.js',
    '/finalapplication/cookies.js',
    '/finalapplication/expenses.html',
    '/finalapplication/index.html',
    '/finalapplication/manifest.json',
    '/finalapplication/offline.js',
    '/finalapplication/serviceworker.js',
    '/finalapplication/sw.js',
    '/finalapplication/finalapplication/questions.html',
    '/finalapplication/spendingchart.html',
    '/finalapplication/piechart.js',
    '/finalapplication/scripts.js',
    '/finalapplication/analysis.js',
    '/finalapplication/cookies.js',
    '/finalapplication/expenses.js',
    '/finalapplication/questions.js',
    '/finalapplication/styles.css',
    '/finalapplication/mediaqueries.css'
];

self.addEventListener('install', (e) => {
  console.log('[Service Worker] Install');
  e.waitUntil(
    caches.open(cacheName).then((cache) => {
          console.log('[Service Worker] Caching all: app shell and content');
      return cache.addAll(urlsToCache);
    })
  );
});
