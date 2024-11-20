import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCQE92XvTljCSoZYLPNfgksdjX0NNVK8Vo",
    authDomain: "login-ti31.firebaseapp.com",
    projectId: "login-ti31",
    storageBucket: "login-ti31.firebasestorage.app",
    messagingSenderId: "820545944377",
    appId: "1:820545944377:web:a91227bb1e09e5b8f186e8"
};

// Initialize Firebase
initializeApp(firebaseConfig);

const app = createApp(App);

app.use(router);

app.mount("#app")