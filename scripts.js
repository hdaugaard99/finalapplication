// JavaScript Document



function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}



if('serviceWorker' in navigator) {
  navigator.serviceWorker
           .register('offline.js')
           .then(function() { console.log('Service Worker Registered'); });
}




































