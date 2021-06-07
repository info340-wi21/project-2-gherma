import React from 'react';
import { useState } from 'react';
import ReactCardFlip from 'react-card-flip';
import { IoIosHeartEmpty, IoIosHeartHalf, IoIosHeart, IoIosHeartDislike } from "react-icons/io";

// Renders a grid of interactive plant cards displaying general and detailed plant information. The PlantGrid is also responsive to filtering and displays accordingly based on user-selected filters

export function PlantGrid (props) {
  const [favoritesList, setFavorites] = useState([])

  let plantElements = props.plantArray.map((plant) => {
    let plantElement = <PlantCard plant={plant} key={plant['Plant Name']} favoritesList={favoritesList} setFavoritesList={setFavorites}/>
    return plantElement;
  })

  /* Use favoritesList array to render the right favoritesPlant elements on favorites page */

  return (
      <div className="container-fluid col-lg-8 col-xl-9">
        <div className="d-flex justify-content-between mx-3">
          <h2 className="clickDetails m-0 p-0.5 align-self-end">Click Plant for Details</h2>
          <h3 className="m-0 p-0.5 align-self-end">{props.plantArray.length + " Results"}</h3>
        </div>
        <div id="plant-cards" className="plantGrid row row-cols-2 row-cols-md-3 row-cols-lg-4 m-1">
        {plantElements}
        </div>
      </div>
  );
}


function PlantCard (props) {
  let plantObject = props.plant;
  let setFavoritesList = props.setFavoritesList;
  let favoritesList = props.favoritesList;

  const [isFlipped, setFlipped] = useState(false);

  const handleFlip = () => {
    setFlipped(!isFlipped);
  }

  return (
    <ReactCardFlip containerStyle={{marginBottom: "10px", padding:"8px"}} isFlipped={isFlipped} flipDirection="horizontal">
      <div className="card h-100">
        <CardFront plant={plantObject} handleImgClick={handleFlip} favoritesList={favoritesList} setFavoritesList={setFavoritesList}/>
      </div>

      <div className="card h-100">
        <CardBack plant={plantObject} handleClick={handleFlip}/>
      </div>
    </ReactCardFlip>
  );
}


function CardFront (props) {
  let plantObject = props.plant;
  let handleImgClick = props.handleImgClick;
  let setFavoritesList = props.setFavoritesList;
  let favoritesList = props.favoritesList;


  return (
    <div className="card h-100">
      <div className="card-body p-2">
        <img onClick={handleImgClick} className="img-fluid mb-3 rounded" src={"img/" + plantObject['Image Source']} alt={plantObject['Image Alt']} role="button" aria-label="get plant details"/>
        <h2 className="card-title">{plantObject['Plant Name']}</h2>
        <h3 className="card-subtitle font-weight-light text-muted">{plantObject['Latin Name']}</h3>
        <div className="text-content card-text pt-2">
          <CardText cardSide="front" plant={plantObject}/>
        </div>
      </div>
      <div className="card-footer d-flex justify-content-end">
        <div className="m-1 p-0.5"><FavoriteButton plant={plantObject} favoritesList={favoritesList} setFavoritesList={setFavoritesList}/></div>
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
    <p className="m-1 p-0.5">{"Temperature: " + plantObject['Temperature (opt temp 60-75, above 75, below 60)']}&#176;F</p>
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

function FavoriteButton (props) {
  let plant = props.plant;
  let favoritesList = props.favoritesList;
  let setFavoritesList = props.setFavoritesList;

  const [isHovering, setHover] = useState(false);
  const [isFavorited, setFavorite] = useState(false);

  const handleHover = () => {
    setHover(!isHovering);
  }

  const handleClick = () => {
    setFavorite(!isFavorited);
    if (!isFavorited) {
      addFavorites();
    } else {
      removeFavorites(plant['Plant Name']);
    }
  }

  const addFavorites = () => {
    setFavoritesList([...favoritesList, plant]);
  }

  const removeFavorites = (currPlant) => {
    setFavoritesList(favoritesList.filter((plant) => {
      return plant['Plant Name'] !== currPlant;
    }))
  }

  let icon = <IoIosHeartEmpty className="heartIcon" onClick={handleClick} onMouseEnter={() => setHover(true)} onMouseLeave={handleHover} color="green" size={22} aria-label="add to favorites" role="button"/>

  if (isFavorited && !isHovering) {
    icon = <IoIosHeart className="heartIcon" onClick={handleClick} onMouseEnter={() => setHover(true)} color="green" size={22} aria-label="remove from favorites" role="button"/>;
  } else if (isFavorited && isHovering) {
    icon = <IoIosHeartDislike className="heartIcon" onClick={handleClick} onMouseEnter={() => setHover(true)} onMouseLeave={handleHover} color="green" size={21} aria-label="remove from favorites" role="button"/>;
  } else if (!isFavorited && isHovering) {
    icon = <IoIosHeartHalf className="heartIcon" onClick={handleClick} onMouseEnter={() => setHover(true)} onMouseLeave={handleHover} color="green" size={22} aria-label="add to favorites" role="button"/>;
  }


  return (
    <div>
      {icon}
    </div>
  );
}

export default PlantGrid;
