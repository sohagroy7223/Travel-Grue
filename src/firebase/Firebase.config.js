// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBxm2joXfM3k9nj9K2K_qBwIBWwYbAo5fI",
  authDomain: "travel-grue-8cc50.firebaseapp.com",
  projectId: "travel-grue-8cc50",
  storageBucket: "travel-grue-8cc50.firebasestorage.app",
  messagingSenderId: "746414097801",
  appId: "1:746414097801:web:26ab215d86f46641e80d58",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
