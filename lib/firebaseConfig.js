import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyABuuDTUFCp2F7fE6P3x54X2f_jq_lfPtI",
  authDomain: "nayan-signal-pro.firebaseapp.com",
  projectId: "nayan-signal-pro",
  storageBucket: "nayan-signal-pro.appspot.com",
  messagingSenderId: "417984812966",
  appId: "1:417984812966:web:dc21df583abd8c46cd2167"
};

const app = initializeApp(firebaseConfig);
export default app;