import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import * as d3 from 'd3';
import 'bootstrap/dist/css/bootstrap.css';
import './style.css';
import App from './App';

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
