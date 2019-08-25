import Rebase from 're-base'
import firebase from 'firebase/app'
import 'firebase/database'

const firebaseApp = firebase.initializeApp({
  apiKey: "toBeReplaced",
  authDomain: "chatbox-826a7.firebaseapp.com",
  databaseURL: "https://chatbox-826a7.firebaseio.com",
  projectId: "chatbox-826a7",
  storageBucket: "",
  messagingSenderId: "447240277641",
  appId: "1:447240277641:web:a6ee6caecff21a6a"
})

const base = Rebase.createClass(firebase.database())

export { firebaseApp }

export default base
