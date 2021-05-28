import React from 'react';
import { useState } from 'react';
import ReactCardFlip from 'react-card-flip';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart as fasFaHeart } from '@fortawesome/free-solid-svg-icons';
import { faHeart as farFaHeart } from '@fortawesome/free-regular-svg-icons';


export function App(props) {
  let plantArray = props.plantData;

  return(
    <div>
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
    <ReactCardFlip containerStyle={{marginBottom: "10px", padding:"8px"}} isFlipped={isFlipped} flipDirection="horizontal">
      <div className="card h-100">
        <CardFront plant={plantObject} handleClick={handleClick}/>
      </div>

      <div className="card h-100">
        <CardBack plant={plantObject} handleClick={handleClick}/>
      </div>
    </ReactCardFlip>
  );
}


function CardFront (props) {
  let plantObject = props.plant;
  let handleClick = props.handleClick;

  return (
    <div className="card h-100">
      <div className="card-body p-2">
        <img onClick={handleClick} className="img-fluid mb-3 rounded" src={"img/" + plantObject['Image Source']} alt={plantObject['Image Alt']} role="button" aria-label="get plant details"/>
        <h2 className="card-title">{plantObject['Plant Name']}</h2>
        <h3 className="card-subtitle font-weight-light text-muted">{plantObject['Latin Name']}</h3>
        <div className="text-content card-text pt-2">
          <CardText cardSide="front" plant={plantObject}/>
        </div>
      </div>
      <div className="card-footer d-flex justify-content-end">
        <div className="m-1 p-0.5"><FavoriteButton /></div>
      </div>
    </div>
  );
}

function CardBack (props) {
  let plantObject = props.plant;
  let handleClick = props.handleClick;

  return (
    <div className="card h-100">
      <div className="card-body p-2">
        <h2 className="card-title">{plantObject['Plant Name']}</h2>
        <h3 className="card-subtitle font-weight-light text-muted">{plantObject['Latin Name']}</h3>
        <div className="text-content card-text pt-2">
          <CardText cardSide="back" plant={plantObject}/>
        </div>
      </div>
      <div className="card-footer">
        <button onClick={handleClick} className="btn btn-light" type="button">Back</button>
      </div>
    </div>
  );
}

function CardText (props) {
  const side = props.cardSide;
  let plantObject = props.plant;

  let textGroup = (
  <div>
    <p className="m-1 p-0.5">{"Light Level: " + plantObject['Light Level']}</p>
    <p className="m-1 p-0.5">{"Water Level: " + plantObject['Water Level']}</p>
    <p className="m-1 p-0.5">{"Temperature: " + plantObject['Temperature (opt temp 60-75, above 75, below 60)']}</p>
    <p className="m-1 p-0.5">{"Pot Size: " + plantObject['Pot Size']}</p>
    <p className="m-1 p-0.5">{"Overall Difficulty: " + plantObject['Overall Difficulty']}</p>
    <p className="m-1 p-0.5">{"Toxicity: " + plantObject['Toxicity']}</p>
    <p className="m-0 p-1">{plantObject['Detailed Info']}</p>
    <p className="m-0 p-1"><em>Care Tip: </em>{plantObject['Care Tip']}</p>
  </div>
  )

  if (side === "front") {
    textGroup = (
    <div>
      <p className="d-none d-md-block m-1 p-0.5">{"Light Level: " + plantObject['Light Level']}</p>
      <p className="d-none d-md-block m-1 p-0.5">{"Water Level: " + plantObject['Water Level']}</p>
      <p className="m-1 p-0.5">{"Overall Difficulty: " + plantObject['Overall Difficulty']}</p>
    </div>
    )
  }

  return (
    <div>
      {textGroup}
    </div>
  );
}

function FavoriteButton () {
  const [isFavorited, setFavorite] = useState(false);

  const handleClick = () => {
    setFavorite(!isFavorited);
  }

  let icon = <FontAwesomeIcon className="icon" onClick={handleClick} icon={farFaHeart} color="green" size="lg" aria-label="add to favorites"/>

  if (isFavorited) {
    icon = <FontAwesomeIcon className="icon" onClick={handleClick} icon={fasFaHeart} color="green" size="lg" aria-label="add to favorites"/>;
  }

  return (
    <div>
      {icon}
    </div>
  );
}

function PlantGrid (props) {
  let plantElements = props.plantArray.map((plant) => {
    let plantElement = <PlantCard plant={plant} key={plant['Plant Name']}/>
    return plantElement;
  })

  return (
    <div className="container-fluid col-lg-8 col-xl-9">
      <div className="d-flex justify-content-between">
        <h2 className="clickDetails m-0 p-0.5 align-self-end">Click Plant for Details</h2>
        <h3 className="m-0 p-0.5 align-self-end">{props.plantArray.length + " Results"}</h3>
      </div>
      <div id="plant-cards" className="plantGrid row row-cols-2 row-cols-md-3 row-cols-lg-4">
      {plantElements}
      </div>
    </div>
  );
}


export default App;
