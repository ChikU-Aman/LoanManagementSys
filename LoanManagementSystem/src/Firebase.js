import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore'
// import 'firebase/compat/database'
// import 'firebase/compat/storage'

const app = firebase.initializeApp({
    apiKey: "AIzaSyAPitbfl4Khei0y175BBv1NYlPmM9gf-6w",
    authDomain: "loanmanagementsystem-fd3fa.firebaseapp.com",
    projectId: "loanmanagementsystem-fd3fa",
    storageBucket: "loanmanagementsystem-fd3fa.appspot.com",
    messagingSenderId: "568862395381",
    appId: "1:568862395381:web:b5a427ecd0033d44712ebc"
})

export default app