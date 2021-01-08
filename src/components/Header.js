import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
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
    );
  }
}

export default Header;