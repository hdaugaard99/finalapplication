// JavaScript Document

self.addEventListener('install', (e) => {
    console.log('[Service Worker] Install');
});

var cacheName = 'finalapplication';

var urlsToCache = [
    '/',
    '/analysis.html',
    '/analysis.js',
    '/cache.js',
    '/cookies.js',
    '/expenses.html',
    '/index.html',
    '/manifest.json',
    '/offline.js',
    '/serviceworker.js',
    '/sw.js',
    '/questions.html',
    '/spendingchart.html',
    '/piechart.js',
    '/scripts.js',
    '/analysis.js',
    '/cookies.js',
    '/expenses.js',
    '/questions.js',
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
