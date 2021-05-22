import React from 'react';
import { useState } from 'react';

export function App(props) {
  let plantArray = props.plantData;

  return(
    <div>
      <h1>Plant Care Site: React</h1>
      <PlantGrid plantArray={plantArray} />
    </div>
  );
}

function PlantText (props) {
  let plantObject = props.plant;
  let header = props.header;

  let textContent = "";
  let textClasses = "";

  if (header === 'Detailed Info') {
    textContent = plantObject[header];
    textClasses = "d-none m-0 p-1";
  } else if (header === 'Care Tip') {
    textContent = "Care Tip: " + plantObject[header];
    textClasses = "d-none m-0 p-1";
  } else {
    textContent = header + ': ' + plantObject[header];
    textClasses = "d-none m-1 p-0.5";
  }

  if (header === 'Light Level' || header === 'Water Level'){
    textClasses = textClasses + " d-md-block";
  } else if (header === 'Overall Difficulty') {
    textClasses = textClasses.replace("d-none", " ");
    textClasses = textClasses + " base-content";
  }

  return (
    <p className={textClasses}>{textContent}</p>
  );
}

function PlantCard (props) {
  let plantObject = props.plant;
  let cardTextHeaders = ['Light Level', 'Water Level', 'Temperature', 'Pot Size', 'Overall Difficulty', 'Toxicity', 'Detailed Info', 'Care Tip'];
  // props = one plant object
  let plantText = [];
  for (let header in plantObject) {
    if (cardTextHeaders.includes(header)) {
      let textElement = <PlantText key={header + " " + plantObject['Plant Name']} header={header} plant={plantObject} />
      plantText.push(textElement);
    }
  }

  return (
    <div className="card mb-4">
      <div className="card-body p-2">
        <img className="img-fluid mb-3 rounded" src={"img/" + plantObject['Image Source']} alt={plantObject['Image Alt']} role="button" aria-label="get plant details"/>
        <h2 className="card-title">{plantObject['Plant Name']}</h2>
        <h3 className="card-subtitle font-weight-light text-muted">{plantObject['Latin Name']}</h3>
        <div className="text-content card-text pt-2">
          {plantText}
          <button className="d-none btn btn-light" type="button">Back</button>
        </div>

      </div>
    </div>
  );
}

function PlantGrid (props) {
  let plantElements = props.plantArray.map((plant) => {
    let plantElement = <PlantCard plant={plant} key={plant['Plant Name']}/>
    return plantElement;
  })

  return (
    <div id="plant-cards" className="plantGrid card-columns col-lg-8 col-xl-9">
      {plantElements}
    </div>
  );
}


export default App;
