// Import and configure the Firebase SDK
// These scripts are made available when the app is served or deployed on Firebase Hosting
// If you do not serve/host your project using Firebase Hosting see https://firebase.google.com/docs/web/setup
/*importScripts('https://www.gstatic.com/firebasejs/3.4.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/3.4.0/firebase-messaging.js');
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyDvdO9PkZe5RQGU7_gY_w3ApNzeUZI9nTI",
    authDomain: "sport-test-push.firebaseapp.com",
    databaseURL: "https://sport-test-push.firebaseio.com",
    projectId: "sport-test-push",
    storageBucket: "sport-test-push.appspot.com",
    messagingSenderId: "461249772176"
  };
  firebase.initializeApp(config);

const messaging = firebase.messaging();*/

var config = {
    apiKey: "AIzaSyDvdO9PkZe5RQGU7_gY_w3ApNzeUZI9nTI",
    authDomain: "sport-test-push.firebaseapp.com",
    databaseURL: "https://sport-test-push.firebaseio.com",
    projectId: "sport-test-push",
    storageBucket: "sport-test-push.appspot.com",
    messagingSenderId: "461249772176"
  };

 // [START initialize_firebase_in_sw]
 // Give the service worker access to Firebase Messaging.
 // Note that you can only use Firebase Messaging here, other Firebase libraries
 // are not available in the service worker.
 importScripts('https://www.gstatic.com/firebasejs/3.9.0/firebase-app.js');
 importScripts('https://www.gstatic.com/firebasejs/3.9.0/firebase-messaging.js');

 // Initialize the Firebase app in the service worker by passing in the
 // messagingSenderId.
 firebase.initializeApp(config);

 // Retrieve an instance of Firebase Messaging so that it can handle background
 // messages.
 const messaging = firebase.messaging();
 // [END initialize_firebase_in_sw]
 **/


// If you would like to customize notifications that are received in the
// background (Web app is closed or not in browser focus) then you should
// implement this optional method.
// [START background_handler]
messaging.setBackgroundMessageHandler(function(payload) {
  console.log('[firebase-messaging-sw.js] Received background message ', payload);
  // Customize notification here
  const notificationTitle = 'Background Message Title';
  const notificationOptions = {
    body: 'Background Message body.',
    icon: '/firebase-logo.png'
  };

  return self.registration.showNotification(notificationTitle,
      notificationOptions);
});
// [END background_handler]
