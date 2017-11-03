import firebase from 'firebase'
import MobxFirebaseStore from 'mobx-firebase-store'
const config = {
    apiKey: "AIzaSyD__D-JwCIUn1pTQse1R81jLMnmLiiVepI",
    authDomain: "dinderapp-82e9b.firebaseapp.com",
    databaseURL: "https://dinderapp-82e9b.firebaseio.com",
    storageBucket: "dinderapp-82e9b.appspot.com",
    messagingSenderId: "995950484442"
  }
  
  
 export default class SettingsStore extends MobxFirebaseStore {
  constructor() {
    firebase.initializeApp(config)
    super(firebase.database().ref())

    this.loginBG = require('../../images/login.jpg')
  }
  get LoginBG() {
    return this.loginBG
  }
 
}
 
