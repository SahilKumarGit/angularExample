// Give the service worker access to Firebase Messaging.
// Note that you can only use Firebase Messaging here, other Firebase libraries
// are not available in the service worker.
importScripts('https://www.gstatic.com/firebasejs/9.17.1/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.17.1/firebase-messaging-compat.js');

// Initialize the Firebase app in the service worker by passing in the
// messagingSenderId.

firebase.initializeApp({
    projectId: 'hjjh-a9067',
    appId: '1:498387395841:web:80298177222d339ea2e700',
    storageBucket: 'hjjh-a9067.appspot.com',
    locationId: 'europe-west',
    apiKey: 'AIzaSyBjG6EE1P6L67NVr__WCAFovu8gvuhAjhs',
    authDomain: 'hjjh-a9067.firebaseapp.com',
    messagingSenderId: '498387395841',
    measurementId: 'G-40SSQ7JQ8W'
});

// Retrieve an instance of Firebase Messaging so that it can handle background
// messages.
const isSupported = firebase.messaging.isSupported();
console.log({ isSupported });
const messaging = firebase.messaging();
self.addEventListener('notificationclick', function (event, err) {
    console.log({ event })
    if (err) console.error(err)
});
messaging.onBackgroundMessage(function (payload) {
    console.log('[firebase-messaging-sw.js] Received background message', payload.data);

    console.log(payload)
    let notify_data = payload['notification'];
    let title = notify_data['title'];
    let options = {
      body: notify_data['body'],
      icon: "./assets/image/logo.jpg",
      badge: "./assets/image/badge.png",
      image: "./assets/image/logo.jpg",
    };

    console.log("new message received. ", notify_data);
    let notify = new Notification(title, options);

    notify.onclick = event => {
      event.preventDefault();
      window.location.href = 'https://www.google.com';
    }
});



