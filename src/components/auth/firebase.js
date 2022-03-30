import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyCpqizMct6_G6JKnSVdDzyMjZkRzXW6XfE",
  authDomain: "groceries-ed1c7.firebaseapp.com",
  projectId: "groceries-ed1c7",
  storageBucket: "groceries-ed1c7.appspot.com",
  messagingSenderId: "256212699369",
  appId: "1:256212699369:web:30013d7c970f12cb4ac878"
};

const app = initializeApp(firebaseConfig)
const auth = getAuth(app)

export { auth } 
