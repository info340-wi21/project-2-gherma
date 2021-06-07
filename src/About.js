import React from 'react';

// Renders 'About' page content

export function About () {
  return(
    <div>
      <Content />
    </div>
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
            <img className="plant-tower" src="img/plantTower.jpeg" alt="building with overgrown plants spilling out"/>
          </div>
        </div>
      </div>
    </main>
  );
}

export default About;
