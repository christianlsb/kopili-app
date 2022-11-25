import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAzkrxX2mzdROdHVTMyiKz5LKfFp1vNy0c",
  authDomain: "kopili-social-media-images.firebaseapp.com",
  projectId: "kopili-social-media-images",
  storageBucket: "kopili-social-media-images.appspot.com",
  messagingSenderId: "759638570492",
  appId: "1:759638570492:web:fca3de465e81655511ee79",
  measurementId: "G-Y2N0360NSS",
};

export const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
