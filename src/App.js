import React from 'react';
import { useState } from 'react';
import ReactCardFlip from 'react-card-flip';

export function App(props) {
  let plantArray = props.plantData;

  return(
    <div>
      <h1>Plant Care Site: React</h1>
      <PlantGrid plantArray={plantArray}/>
    </div>
  );
}


function PlantCard (props) {
  let plantObject = props.plant;

  const [isFlipped, setFlipped] = useState(false);

  const handleClick = () => {
    setFlipped(!isFlipped);
  }

  return (
    <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
    <div className="card mb-4">
      <CardFront plant={plantObject} handleClick={handleClick}/>
    </div>

    <div className="card mb-4">
      <CardBack plant={plantObject} handleClick={handleClick}/>
    </div>
    </ReactCardFlip>
  );
}


function CardFront (props) {
  let plantObject = props.plant;
  let handleClick = props.handleClick;

  return (
    <div className="card-body p-2">
      <img onClick={handleClick} className="img-fluid mb-3 rounded" src={"img/" + plantObject['Image Source']} alt={plantObject['Image Alt']} role="button" aria-label="get plant details"/>
      <h2 className="card-title">{plantObject['Plant Name']}</h2>
      <h3 className="card-subtitle font-weight-light text-muted">{plantObject['Latin Name']}</h3>
      <div className="text-content card-text pt-2">
        <p className="d-none d-md-block m-1 p-0.5">{"Light Level: " + plantObject['Light Level']}</p>
        <p className="d-none d-md-block m-1 p-0.5">{"Water Level: " + plantObject['Water Level']}</p>
        <p className="m-1 p-0.5">{"Overall Difficulty: " + plantObject['Overall Difficulty']}</p>
      </div>

    </div>
  );
}

function CardBack (props) {
  let plantObject = props.plant;
  let handleClick = props.handleClick;

  return (
    <div className="card-body p-2">
      <h2 className="card-title">{plantObject['Plant Name']}</h2>
      <h3 className="card-subtitle font-weight-light text-muted">{plantObject['Latin Name']}</h3>
      <div className="text-content card-text pt-2">
        <p className="m-1 p-0.5">{"Light Level: " + plantObject['Light Level']}</p>
        <p className="m-1 p-0.5">{"Water Level: " + plantObject['Water Level']}</p>
        <p className="m-1 p-0.5">{"Temperature: " + plantObject['Temperature']}</p>
        <p className="m-1 p-0.5">{"Pot Size: " + plantObject['Pot Size']}</p>
        <p className="m-1 p-0.5">{"Overall Difficulty: " + plantObject['Overall Difficulty']}</p>
        <p className="m-1 p-0.5">{"Toxicity: " + plantObject['Toxicity']}</p>
        <p className="m-0 p-1">{plantObject['Detailed Info']}</p>
        <p className="m-0 p-1"><em>Care Tip: </em>{plantObject['Care Tip']}</p>
        <button onClick={handleClick} className="btn btn-light" type="button">Back</button>
      </div>

    </div>
  );
}

function FavoriteButton () {
  const [isFavorited, setFavorite] = useState(false);

  const handleClick = () => {
    setFavorite(!isFavorited);
  }

  return (

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
