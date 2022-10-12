import { initializeApp } from "firebase/app"
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { getMessaging, getToken  } from "firebase/messaging";

import React,  {
  useEffect} from 'react';
import PropTypes from 'prop-types';

export  function Notifications() {
 useEffect(() => {
// config info from firebase
    var config = {
      apiKey: "AIzaSyDxr9uxaOdFv1BHgrPqA481-e3LjO6uUhE",
      authDomain: "react-storybook-8985a.firebaseapp.com",  
      projectId: "react-storybook-8985a", 
      storageBucket: "react-storybook-8985a.appspot.com",  
      messagingSenderId: "367258231736", 
      appId: "1:367258231736:web:9e236724f34a60dc51654d",  
      measurementId: "G-0ZZM6MRFQP"
    };
    const firebaseApp = initializeApp(config );
    const messaging = getMessaging();
// Generate Server key from firebase use in vapidKey
    getToken(messaging, { vapidKey: 'BIIxmHA9KsSJupavqbYBjVRHciFLdcq03Kvo1Kj44mv9dltirkkub45J62qS5DfAcy2gfqQRNMRSYfzT5SI4rqU' }).then((currentToken) => {
      if (currentToken) {
// Use currentToken to test the Push Notifications
       console.log("currenttoken", currentToken)
      } else {
        // Show permission request UI
        console.log('No registration token available. Request permission to generate one.');
        // ...
      }
    }).catch((err) => {
      console.log('An error occurred while retrieving token. ', err);
      // ...
    });

  }, []);

 return (
  <h1>Cloud Notification</h1>
 );
}