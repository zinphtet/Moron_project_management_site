import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';
// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: 'AIzaSyD0fgYh_HmLAaC6NW6SbYW5jL1JwxFbJEE',
	authDomain: 'projectmanagement-e11d2.firebaseapp.com',
	projectId: 'projectmanagement-e11d2',
	storageBucket: 'projectmanagement-e11d2.appspot.com',
	messagingSenderId: '259325572865',
	appId: '1:259325572865:web:5fac58188b5a35b21ccd00',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
