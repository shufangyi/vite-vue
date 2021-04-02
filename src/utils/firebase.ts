// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// Firebase App (the core Firebase SDK) is always required and must be listed first
import firebase from 'firebase/app'
// If you are using v7 or any earlier version of the JS SDK, you should import firebase using namespace import
// import * as firebase from "firebase/app"

// If you enabled Analytics in your project, add the Firebase SDK for Analytics
import 'firebase/analytics'
import 'firebase/performance'

// Add the Firebase products that you want to use
// import 'firebase/auth'
// import 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyDwXbYWvr8_Oz58qkdc_bz_CNJlulnySX8',
  authDomain: 'vite-vue.firebaseapp.com',
  projectId: 'vite-vue',
  storageBucket: 'vite-vue.appspot.com',
  messagingSenderId: '192997084892',
  appId: '1:192997084892:web:4b1dd26c953f2bad41ae19',
  measurementId: 'G-L872BE3QJM',
}

firebase.initializeApp(firebaseConfig)

export const Analytics = firebase.analytics()
export const Perf = firebase.performance()
