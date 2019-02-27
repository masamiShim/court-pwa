importScripts('https://www.gstatic.com/firebasejs/5.5.6/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/5.5.6/firebase-messaging.js');
const config = require('../src/firebaseConfig.json');
firebase.initializeApp({
   'messagingSenderId' : config.messagingSenderId
});

const messaging = firebase.messaging();
