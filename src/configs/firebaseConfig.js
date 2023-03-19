import firebase from '@react-native-firebase/app';
import auth from '@react-native-firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyBVuUV9u26REMT9s31-tTDN5PH7b9-HG6Q',
  authDomain: 'unotodo-e85b5.firebaseapp.com',
  projectId: 'unotodo-e85b5',
  storageBucket: 'unotodo-e85b5.appspot.com',
  messagingSenderId: '233522968630',
  appId: '1:233522968630:web:8119530b57b2e3caa90097',
  measurementId: 'G-7BNTPBTY87'
};
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export default () => {
  return { firebase, auth };
};
