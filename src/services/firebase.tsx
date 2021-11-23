import { initializeApp } from "firebase/app";
import { getStorage,ref } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyDh1oVAwpcpu1pbAuMGzRh3Fc_GrtJyl0g",
    authDomain: "fellowship-2.firebaseapp.com",
    projectId: "fellowship-2",
    storageBucket: "fellowship-2.appspot.com",
    messagingSenderId: "489108573617",
    appId: "1:489108573617:web:737244e867d007f588c190"
};

// Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig);

// Get a reference to the storage service, which is used to create references in your storage bucket
export const storage = getStorage(firebaseApp);