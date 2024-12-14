// firebaseConfig.js

import { initializeApp, getApp, getApps } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

// Configuración de Firebase (sustituye con tu propia configuración)
const firebaseConfig = {
    apiKey: "AIzaSyC4RYFIxC5Ui9IUOobsgNNT_72GBDZD_dY",
    authDomain: "skin-and-makeup.firebaseapp.com",
    projectId: "skin-and-makeup",
    storageBucket: "skin-and-makeup.firebasestorage.app",
    messagingSenderId: "101743566156",
    appId: "1:101743566156:web:848bfee0654486f31183e9",
    measurementId: "G-BW4Q5LYZ78"
};

// Inicializa Firebase solo si no ha sido inicializado previamente
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();  // Si ya existe, usa la app existente

// Obtener las instancias de Firebase
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export { app, auth, db, storage };
