// firebase.js
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';

const firebaseConfig = {
    apiKey: "AIzaSyDWJpjZ_ooXl8pbMEw1-WsILmthVlfKu9M",
    authDomain: "asurtest-e714e.firebaseapp.com",
    projectId: "asurtest-e714e",
    storageBucket: "asurtest-e714e.appspot.com",
    messagingSenderId: "986254805167",
    appId: "1:986254805167:web:7730f7ef7cac08871c6c5a",
    measurementId: "G-GQ1EZMC25G"
};

const app = initializeApp(firebaseConfig);
let analytics;

if (typeof window !== 'undefined') {
    analytics = getAnalytics(app);
}

export default app;