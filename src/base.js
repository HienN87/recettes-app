import Rebase from 're-base'
import firebase from 'firebase/app'
import 'firebase/database'

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBu2Cf1xYsMmlFKLA815-lLKOkDIiz0JO0",
  authDomain: "recettes-app-5ace7.firebaseapp.com",
  databaseURL: "https://recettes-app-5ace7-default-rtdb.europe-west1.firebasedatabase.app"
})

const base = Rebase.createClass(firebaseApp.database())

// This is a named export
export { firebaseApp }

// this is a default export
export default base
