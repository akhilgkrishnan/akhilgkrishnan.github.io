import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-dark ftco_navbar ftco-navbar-light site-navbar-target" id="ftco-navbar">
	        <div ClassName="container">
            <a href="" ClassName="logo">
            <span ClassName="grey-color"> &lt;</span>
            <span ClassName="logo-name">AkhilGKrishnan</span>
            <span ClassName="grey-color">/&gt;</span>
            </a>

            <button ClassName="navbar-toggler js-fh5co-nav-toggle fh5co-nav-toggle" type="button" data-toggle="collapse" data-target="#ftco-nav" aria-controls="ftco-nav" aria-expanded="false" aria-label="Toggle navigation">
              <span ClassName="oi oi-menu"></span> Menu
            </button>

            <div ClassName="collapse navbar-collapse" id="ftco-nav">
              <ul ClassName="navbar-nav nav ml-auto">
                <li ClassName="nav-item"><a href="#home-section" ClassName="nav-link"><span>Home</span></a></li>
                <li ClassName="nav-item"><a href="#about-section" ClassName="nav-link"><span>About</span></a></li>
                <li ClassName="nav-item"><a href="#resume-section" ClassName="nav-link"><span>Resume</span></a></li>
                <li ClassName="nav-item"><a href="#services-section" ClassName="nav-link"><span>Services</span></a></li>
                <li ClassName="nav-item"><a href="#projects-section" ClassName="nav-link"><span>Projects</span></a></li>
                <li ClassName="nav-item"><a href="#contact-section" ClassName="nav-link"><span>Contact</span></a></li>
              </ul>
            </div>
	        </div>
	      </nav>
        <section className="hero-wrap js-fullheight">
          <div className="overlay"></div>
          <div className="container">
            <div className="row no-gutters slider-text js-fullheight justify-content-center align-items-center">
              <div className="col-lg-8 col-md-6 ftco-animate d-flex align-items-center">
                <div className="text text-center">
                  <span className="subheading">Hey! I am</span>
                  <h1>Akhil G Krishnan <span className="wave-emoji">👋</span></h1>
                  <h2>I'm a
                    <span
                        className="txt-rotate"
                        data-period="2000"
                        data-rotate='[ "Web Designer.", "Developer.", "Cybersecurity Researcher.", "ML/DL Enthusiast.", "Equity Trader." ,"Linux Lover."]'>
                    </span>
                  </h2>
                </div>
              </div>
            </div>
          </div>
          <div className="mouse">
            <a href="#" className="mouse-icon">
              <div className="mouse-wheel"><span className="ion-ios-arrow-round-down"></span></div>
            </a>
          </div>
        </section>
      </div>
    );
  }
}

export default Header;