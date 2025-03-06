// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { GoogleAuthProvider } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyAE2wlCIONHwyDOSFrMv7UDWZPAZbhIVz4',
  authDomain: 'nextjs-todo-app-9d8b3.firebaseapp.com',
  projectId: 'nextjs-todo-app-9d8b3',
  storageBucket: 'nextjs-todo-app-9d8b3.firebasestorage.app',
  messagingSenderId: '295768016413',
  appId: '1:295768016413:web:6693a6f44b359c2d4828f4',
  measurementId: 'G-R07MYD9N99',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
// const analytics = getAnalytics(app)ß

const auth = getAuth(app)
const provider = new GoogleAuthProvider()

// Firestore のインスタンスを取得
const db = getFirestore(app);

export { auth, provider, db }
