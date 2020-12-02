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
    '/finalapplication/analysis.html',
    '/finalapplication/expenses.html',
    '/finalapplication/index.html',
    '/finalapplication/questions.html',
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
