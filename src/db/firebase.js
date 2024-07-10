// firebase.js
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
const firebaseConfig = {
    apiKey: "AIzaSyC781HJMfrgCHl8tAc1KOZEYGLn2LLbMIs",
    authDomain: "asur-snu.firebaseapp.com",
    projectId: "asur-snu",
    storageBucket: "asur-snu.appspot.com",
    messagingSenderId: "653677327927",
    appId: "1:653677327927:web:eaa4a9377225e3980db1b2",
    measurementId: "G-84E4XWJPJX"
};

export const app = initializeApp(firebaseConfig);
// if (!firebase.apps.length) {
//     firebase.initializeApp({});
//  }else {
//     firebase.app(); // if already initialized, use that one
//  }
// // const analytics = getAnalytics(app);

// export default app;