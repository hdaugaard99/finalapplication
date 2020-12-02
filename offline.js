// JavaScript Document
if('serviceWorker' in navigator) {
    navigator.serviceWorker.register('offlinecache.js');
    
 console.log('ServiceWorker registration successful with scope: ', registration.scope);
 };

var cacheName = 'finalapplication';

var urlsToCache = [
    '/finalapplication',
    '/finalapplication/analysis.html',
    '/analysis.js',
    '/cache.js',
    '/cookies.js',
    '/finalapplication/expenses.html',
    '/finalapplication/index.html',
    '/manifest.json',
    '/offline.js',
    '/serviceworker.js',
    '/sw.js',
    '/finalapplication/questions.html',
    '/finalapplication/spendingchart.html',
    '/piechart.js',
    '/scripts.js',
    '/analysis.js',
    '/cookies.js',
    '/expenses.js',
    '/finalapplication/questions.js',
    '/styles.css',
    '/mediaqueries.css'
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
