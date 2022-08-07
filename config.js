// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";

import firebase from 'firebase/compat/app';


// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD-SNVkaZF7RDRP5Zu30C-jCCgpz5d_ZP0",
  authDomain: "union-24cfe.firebaseapp.com",
  projectId: "union-24cfe",
  storageBucket: "union-24cfe.appspot.com",
  messagingSenderId: "372446167219",
  appId: "1:372446167219:web:973875ea02fa5ae580b0c6"
};

// const firebase = initializeApp(firebaseConfig);

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export {firebaseConfig}

// const auth = getAuth(firebase);

// const confirmation = await auth.signInWithPhoneNumber('301-500-8723')

// console.log(confirmation)
// console.log('auth^^')

// auth.languageCode = 'it';

// window.recaptchaVerifier = new RecaptchaVerifier('sign-in-button', {
//     'size': 'invisible',
//     'callback': (response) => {
//       // reCAPTCHA solved, allow signInWithPhoneNumber.
//       onSignInSubmit();
//     }
// }, auth);  

// signInWithPhoneNumber(auth, phoneNumber, appVerifier)
//     .then((confirmationResult) => {
//       // SMS sent. Prompt user to type the code from the message, then sign the
//       // user in with confirmationResult.confirm(code).
//       window.confirmationResult = confirmationResult;
//       // ...
//     }).catch((error) => {
//       // Error; SMS not sent
//       // ...
// });

// const code = getCodeFromUserInput();
// confirmationResult.confirm(code).then((result) => {
//   // User signed in successfully.
//   const user = result.user;
//   // ...
// }).catch((error) => {
//   // User couldn't sign in (bad verification code?)
//   // ...
// });


// console.log('asusauado')
// console.log('auth+ ', auth)

// export {firebase, auth}
