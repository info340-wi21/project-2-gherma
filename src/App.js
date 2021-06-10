import React from 'react';
import { useState, useEffect } from 'react';
import { Route, Switch, Link, NavLink, Redirect } from 'react-router-dom';
import { FaHome, FaInfoCircle, FaBars, FaRegUser, FaHeart } from "react-icons/fa";
import { Filtering } from './Form.js';
import About from './About';
import { PlantGrid } from './PlantGrid';
import firebase from 'firebase/app';
import 'firebase/auth';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import { Favorites } from './Favorites';

// App renders the webpage, displaying different content based on the page a user is on.

const uiConfig = {
  signInOptions: [
    {
      provider: firebase.auth.EmailAuthProvider.PROVIDER_ID,
      requireDisplayName: true
    },
    firebase.auth.GoogleAuthProvider.PROVIDER_ID
  ],
  credentialHelper: 'none',
  signInFlow: 'popup',
  callbacks: {
    // avoids redirecting after sign-in
    signInSuccessWithAuthResult: () => false
  }
}
const handleSignOut = () => {
  firebase.auth().signOut();
}


export function App(props) {
  let plantArray = props.plantData;
  let filteredPlants = [];

  let plantNameArray = plantArray.map((plant) => {
    return plant['Plant Name'];
  })

  const [isLoading, setIsLoading] = useState(true);
  const [user, setUser] = useState(undefined);
  const [favoritesList, setFavoritesList] = useState([]);
  const [water, setWater] = useState("");
  const [light, setLight] = useState("");
  const [tox, setTox] = useState("");
  const [diffi, setDiffi] = useState("");

  filteredPlants = plantArray.filter((plant) => {
    let pass = true;
    if (plant["Water Level"] !== water && water !== "DEFAULT" && water !== "") {
      pass = false;
    } else if (plant["Light Level"] !== light && light !== "DEFAULT" && light !== "") {
      pass = false;
    } else if (plant["Overall Difficulty"] !== diffi && diffi !== "DEFAULT" && diffi !== "") {
      pass = false;
    } else if (plant["Toxicity"] !== tox && tox !== "DEFAULT" && tox !== "") {
      pass = false;
    }
    if (pass) {
      return plant;
    }
  })

  const changeForm = (filter, type) => {
    if (type === "Water Level") {
      setWater(filter);
    } else if (type === "Light Level") {
      setLight(filter);
    } else if (type === "Overall Difficulty") {
      setDiffi(filter);
    } else {
      setTox(filter);
    }
  }


  useEffect(() => {
    const registered = firebase.auth().onAuthStateChanged((firebaseUser) => {
      if(firebaseUser) {
        setUser(firebaseUser);
        setIsLoading(false);
        addToDb(firebaseUser);
      } else {
        setUser(null);
        setIsLoading(false);
      }
    })
    return function cleanup() {
      registered();
    }
  }, []);

  function addToDb(firebaseUser) {
    let user = firebaseUser;
    const dbRef = firebase.database().ref();
    dbRef.child("User").child(user.uid).get().then((snapshot) => {
      if (!snapshot.exists()) {
        firebase.database().ref('User/' + user.uid).set({
        username: user.displayName
      });

      const favRef = firebase.database().ref('User/' + user.uid + '/favorites')
      for (let name of plantNameArray) {
        favRef.push(false);
      }
    }})
  }

  if (isLoading) {
    return (
      <div className="text-center">
        <i className="fa fa-spinner fa-spin fa-3x" aria-label="loading"></i>
      </div>
    );
  }

  let content = null;

  if(!user) {
    content = (
      <div className="container">
        <h1>Sign Up</h1>
        <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} />
      </div>
    );
  } else {
    content = (
      <div className="text-center">
        <h1>Welcome {user.displayName}</h1>
        <button className="btn" onClick={handleSignOut}>Log Out</button>
      </div>
    );
  }

return (
    <div>
      <Header user={user}/>

      <Switch>
        <Route exact path="/">
          <div className="row px-2">
            <Filtering changeForm={changeForm}/>
            <PlantGrid plantArray={filteredPlants} favoritesList={favoritesList} setFavoritesList={setFavoritesList} user={user}/>
          </div>
        </Route>
        <Route path="/favorites">
          <Favorites plantArray={plantArray} favoritesList={favoritesList} user={user} setFavoritesList={setFavoritesList}/>
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route exact path="/signin">
          {content}
        </Route>
        <Redirect to="/" />
      </Switch>

      <Footer />
    </div>
  );
}


function Header (props) {
  let user = props.user;
  let content = null;

  return (
    <header className="about">
      <nav id="menu">
        <ul className="d-inline p-1">
          <NavLink className="text-dark mr-3" activeClassName="activeLink" exact to="/"><FaHome aria-hidden="true" aria-label="Home Icon"/> Home</NavLink>
          <NavLink className="text-dark m-3" activeClassName="activeLink" to="/about"><FaInfoCircle aria-hidden="true" aria-label="About Icon"/> About</NavLink>
          <NavLink className="text-dark" activeClassName="activeLink" to="/signin"><FaRegUser aria-hidden="true" aria-label="Account Icon"/> My Account</NavLink>
          <NavLink className="text-dark m-2" activeClassName="activeLink" to="/favorites"><FaHeart className ="m-1" aria-hidden="true" aria-label="Favorite Icon"/>Favorites</NavLink>
        </ul>
      </nav>
      <div className="jumbotron mt-3 mb-3">
        <h1 className="display-4 text-white text-center pt-5">Plant.</h1>
      </div>
    </header>
  );
}

function Footer () {
  return (
    <footer className="mt-auto">
      <h4 className="text-center social-media font-weight-light">&#169;
      2021 Alex Gherman, Mai Frey, Sneha Reddy</h4>
    </footer>
  );
}


export default App;
