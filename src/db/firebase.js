// firebase.js
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';

// asur firebase
const firebaseConfig = {
    apiKey: "AIzaSyC781HJMfrgCHl8tAc1KOZEYGLn2LLbMIs",
    authDomain: "asur-snu.firebaseapp.com",
    projectId: "asur-snu",
    storageBucket: "asur-snu.appspot.com",
    messagingSenderId: "653677327927",
    appId: "1:653677327927:web:eaa4a9377225e3980db1b2",
    measurementId: "G-84E4XWJPJX"
};

// punyam firebase
// const firebaseConfig = {
//     apiKey: "AIzaSyDWJpjZ_ooXl8pbMEw1-WsILmthVlfKu9M",
//     authDomain: "asurtest-e714e.firebaseapp.com",
//     projectId: "asurtest-e714e",
//     storageBucket: "asurtest-e714e.appspot.com",
//     messagingSenderId: "986254805167",
//     appId: "1:986254805167:web:7730f7ef7cac08871c6c5a",
//     measurementId: "G-GQ1EZMC25G"
// };

// const app = initializeApp(firebaseConfig);
// let analytics;

// if (typeof window !== 'undefined') {
//     analytics = getAnalytics(app);
// }

// export default app;

export const app = initializeApp(firebaseConfig);