import React from 'react';
import { PlantGrid } from './PlantGrid';
import { Redirect } from 'react-router-dom';
import firebase from 'firebase/app'

// This function will render card Plants that are in the list of favorites
export function Favorites(props) {
  let favoritesList = props.favoritesList;
  let setFavoritesList = props.setFavoritesList;
  let user = props.user;

  if (user) {
    return (
      <PlantGrid plantArray={favoritesList} favoritesList={favoritesList} setFavoritesList={setFavoritesList} user={user}/>
    );
  } else {
    return (
      <Redirect to='/signin' />
    );
  }
}
