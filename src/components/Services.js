import React, { Component } from 'react';

class Services extends Component {
  render() {
    return (
      <section className="ftco-section" id="services-section">
    	  <div className="container-fluid px-md-5">
          <div className="row justify-content-center py-5 mt-5">
            <div className="col-md-12 heading-section text-center ftco-animate">
              <h1 className="big big-2">Services</h1>
              <h2 className="mb-4">Services</h2>
              <p>What all the things I do for you</p>
            </div>
          </div>
    		  <div className="row">
            <div className="col-md-4 text-center d-flex ftco-animate">
              <a href="#" className="services-1 shadow">
                <span className="icon">
                  <i className="flaticon-analysis"></i>
                </span>
                <div className="desc">
                  <h3 className="mb-5">Web Design</h3>
                  <p>I value simple content structure, clean design patterns, and thoughtful interactions.</p>
                </div>
              </a>
            </div>
            <div className="col-md-4 text-center d-flex ftco-animate">
              <a href="#" className="services-1 shadow">
                <span className="icon">
                  <i className="flaticon-flasks"></i>
                </span>
                <div className="desc">
                  <h3 className="mb-5">Photography</h3>
                  <p>Creative photographs makes a brand perfect.</p>
                </div>
              </a>
            </div>
            <div className="col-md-4 text-center d-flex ftco-animate">
              <a href="#" className="services-1 shadow">
                <span className="icon">
                  <i className="flaticon-ideas"></i>
                </span>
                <div className="desc">
                  <h3 className="mb-5">Web Development</h3>
                  <p>Having a fast website is key to keeping people around which ultimately converts them into customers.</p>
                </div>
              </a>
            </div>

            <div className="col-md-4 text-center d-flex ftco-animate">
              <a href="#" className="services-1 shadow">
                <span className="icon">
                  <i className="flaticon-innovation"></i>
                </span>
                <div className="desc">
                  <h3 className="mb-5">AI/ML Development</h3>
                  <p>I value to make man work effort easier and create a magic in world.</p>
                </div>
              </a>
            </div>
            <div className="col-md-4 text-center d-flex ftco-animate">
              <a href="#" className="services-1 shadow">
                <span className="icon">
                  <i className="flaticon-ux-design"></i>
                </span>
                <div className="desc">
                  <h3 className="mb-5">SEO</h3>
                  <p>SEO is the practice of improving and promoting a website in order to increase the number of visitors it receives.</p>
                </div>
              </a>
            </div>
            <div className="col-md-4 text-center d-flex ftco-animate">
              <a href="#" className="services-1 shadow">
                <span className="icon">
                  <i className="flaticon-idea"></i>
                </span>
                <div className="desc">
                  <h3 className="mb-5">Web Application Security</h3>
                  <p>I will help to makes your website secure and bug free. </p>
                </div>
              </a>
            </div>
				  </div>
    	  </div>
      </section>
    );
  }
}

export default Services;