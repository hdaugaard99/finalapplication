if ('serviceWorker' in navigator) {
    window.addEventListener('load', function() {
    navigator.serviceWorker.register('sw.js').then(function(registration) {
        // Registration successful

        console.log('ServiceWorker registration successful with scope: ', registration.scope);
    }, function(err) {
        // Registration failed

        console.log('ServiceWorker registration failed: ', err);
    });
});
};

var cache = "cache";
var urlsToCache = [
    '/',
    '/analysis.html',
    '/expenses.html',
    '/index.html',
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

self.addEventListener('install', function(event) {
    // Perform install steps

    event.waitUntil(
        caches.open(cache) 
        .then(function(cache) {
            console.log('Opened cache');
            return cache.addAll(urlsToCache);
        })
    );
});

self.addEventListener('fetch', function(event) {
    event.respondWith(
        caches.match(event.request)
        .then(function(response) {
            // Cache hit - return response
            if (response) {
                return response;
            }
            return fetch(event.request);
        })
    );
});
