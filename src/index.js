import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import * as d3 from 'd3';
import 'bootstrap/dist/css/bootstrap.css';
import './style.css';
import App from './App';
import firebase from 'firebase/app';

  // Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDAWgSZyYeoaqZZ_6oO7UBgDE8sS34dKwc",
    authDomain: "plant-abb5d.firebaseapp.com",
    projectId: "plant-abb5d",
    storageBucket: "plant-abb5d.appspot.com",
    messagingSenderId: "495000295431",
    appId: "1:495000295431:web:c1f8604c534fa9e96172a2"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Array of Plant Objects
let plantData = [];

d3.csv('data/plant-data.csv')
  .then(function(text) {
    plantData = text;
    ReactDOM.render(
      <BrowserRouter>
        <App plantData={plantData}/>
      </BrowserRouter>,
      document.getElementById('root')
    );
  })
  .catch(function() {
    console.log("Error Occurred");
  })
