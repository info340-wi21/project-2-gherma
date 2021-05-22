import React from 'react';
import ReactDOM from 'react-dom';
import * as d3 from 'd3';
import 'bootstrap/dist/css/bootstrap.css';
import './style.css';
import App from './App';

let plantData = [];

d3.csv('data/plant-data.csv')
  .then(function(text) {
    plantData = text;
    console.log(plantData);
    ReactDOM.render(
        <App plantData={plantData}/>,
      document.getElementById('root')
    );
  })
  .catch(function() {
    console.log("error occurred");
  })
