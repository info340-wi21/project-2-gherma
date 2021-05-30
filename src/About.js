import React from 'react';

function App() {
  return(
    <body>
      <Header />
      <Content />
      <Footer />
    </body>
  );
}

function Header () {
  return (
    <header className="jumbotron about">
      <nav>
        <div className="d-md-none d-inline" id="hamburger-menu"><a href="#"><FaBars className="text-dark" aria-label="menu"/></a></div>
        <ul className="d-none d-md-inline p-1">
          <a className="text-dark mr-3" href="#"><FaHome aria-hidden="true" aria-label="Home Icon"/> Home</a>
          <a className="text-dark m-3" href="landing.html"><FaInfoCircle aria-hidden="true" aria-label="About Icon"/> About</a>
          <a className="text-dark" href="#"><FaRegUser aria-hidden="true" aria-label="Account Icon"/> My Account</a>
        </ul>
      </nav>
      <div class="container pt-5 text-center text-white"><h1 class="font-weight-light">About Us</h1></div>
    </header>
  );
}


function Content() {
  return (
    <main className="text-center">
      <div className="about-content">
        <div className="about-row">
          <div className="text-center values">
            <h2 className="font-weight-light">Values</h2>
            <p>As a team, we believe that easy access to knowledge is integral in improving the spaces we inhabit.
               As members of our home, houseplants play an integral role in balancing our homes and lives. We
               strive to ensure that taking care of your plants is a simple yet rewarding task.</p>
          </div>
        </div>
        <h2 className="font-weight-light environment">Environmental Considerations</h2>
        <div className="about-row">
          <div className="about-column summary">
                <p>We here at 'Plant.' believe that staying environmentally conscious starts within our own homes! Please
                   refer to these websites to understand how houseplants impact the environment and best practices
                   when it comes to remaining environmentally friendly in our plant endeavors!</p>
                <ul className="environment">
                  <li className="text-center"><a href="https://planethouseplant.com/are-indoor-plants-good-for-the-environment/">Plants and the Environment</a></li>
                  <li className="text-center"><a href="https://sustainabilityx.co/are-your-houseplants-sustainable-d4e2297face3">Are your Plants Sustainable?</a></li>
                  <li className="text-center"><a href="https://www.greenwithpurpose.com/sustainable-houseplants-eco-friendly/">How to Make your Houseplants Sustainable</a></li>
                </ul>
           </div>
          <div className="about-column d-none d-md-block">
            <img className="plant-tower" src="./plantTower.jpeg" alt="building with overgrown plants spilling out"/>
          </div>
        </div>
      </div>
    </main>
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
