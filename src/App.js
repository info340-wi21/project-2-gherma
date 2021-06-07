import React from 'react';
import { useState } from 'react';
import { Route, Switch, Link, NavLink, Redirect } from 'react-router-dom';
import { FaHome, FaInfoCircle, FaBars, FaRegUser } from "react-icons/fa";
import { Filtering } from './Form.js';
import About from './About';
import { PlantGrid } from './PlantGrid';

// App renders the webpage, displaying different content based on the page a user is on.


export function App(props) {
  let plantArray = props.plantData;
  let filteredPlants = [];

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


  return(
    <div>
      <Header />

      <Switch>
        <Route exact path="/">
          <div className="row px-2">
            <Filtering changeForm={changeForm}/>
            <PlantGrid plantArray={filteredPlants}/>
          </div>
        </Route>
        <Route path="/about">
          <About />
        </Route>

        <Redirect to="/" />
      </Switch>

      <Footer />
    </div>
  );
}


function Header () {

  return (
    <header className="about">
      <nav>
        <div className="d-md-none d-inline" id="hamburger-menu"><a href="#"><FaBars className="text-dark" aria-label="menu"/></a></div>
        <ul className="d-none d-md-inline p-1">
          <NavLink className="text-dark mr-3" activeClassName="activeLink" exact to="/"><FaHome aria-hidden="true" aria-label="Home Icon"/> Home</NavLink>
          <NavLink className="text-dark m-3" activeClassName="activeLink" to="/about"><FaInfoCircle aria-hidden="true" aria-label="About Icon"/> About</NavLink>
          <a className="text-dark" href="#"><FaRegUser aria-hidden="true" aria-label="Account Icon"/> My Account</a>
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
    <footer>
      <h4 className="text-center social-media font-weight-light">&#169;
2021 Alex Gherman, Mai Frey, Sneha Reddy</h4>
    </footer>
  );
}


export default App;
