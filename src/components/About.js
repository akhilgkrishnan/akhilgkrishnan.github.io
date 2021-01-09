import React, { Component } from 'react';
import './Portfolio.css';

class About extends Component {
  render() {
    return (
      <section className="ftco-about img ftco-section ftco-no-pt ftco-no-pb" id="about-section">
        <div className="container">
          <div className="row d-flex no-gutters">
            <div className="col-md-6 col-lg-6 d-flex">
              <div className="img-about img d-flex align-items-stretch">
                <div className="overlay"></div>
                <div className="img d-flex align-self-stretch align-items-center profile-image">
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-6 pl-md-5 py-5">
              <div className="row justify-content-start pb-3">
                <div className="col-md-12 heading-section ftco-animate">
                  <h1 className="big">About</h1>
                  <h2 className="mb-4">About Me</h2>
                  <p>I'm Akhil G Krishnan, a 22-year old technical enthusiast who does web development, security research and ML/DL development. Passionate to contribute open-source projects and make cool products.</p>
                  <ul className="about-info mt-4 px-md-0 px-2">
                    <li className="d-flex"><span>Name:</span> <span>Akhil G Krishnan</span></li>
                    
                    <li className="d-flex"><span>Address:</span> <span>Mannar Alappuzha Kerala India</span></li>
                    <li className="d-flex"><span>Zip code:</span> <span>689622</span></li>
                    <li className="d-flex"><span>Email:</span> <span>info@akhilgkrishnan.me</span></li>
                    
                  </ul>
                </div>
              </div>
              <div className="counter-wrap ftco-animate d-flex mt-md-3">
                <div className="text">
                  <p className="mb-4">
                    <span className="number" data-number="7">0</span>
                    <span>Project complete</span>
                  </p>
                  <p><a href="akhilresume.pdf" className="btn btn-primary py-3 px-3">Download CV</a></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default About;