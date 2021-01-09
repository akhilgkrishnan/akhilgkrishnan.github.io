import React, { Component } from 'react';
import './Portfolio.css';

class Project extends Component {
  render() {
    return (
      <React.Fragment>
        <section className="ftco-section ftco-project" id="projects-section">
    	    <div className="container-fluid px-md-0">
    		    <div className="row no-gutters justify-content-center pb-5">
              <div className="col-md-12 heading-section text-center ftco-animate">
                <h1 className="big big-2">Projects</h1>
                <h2 className="mb-4">My Projects</h2>
                <p>Here is some of cool project that I worked on!</p>
              </div>
		        </div>
			      <div className="row no-gutters">
				      <div className="col-md-4">
                <div className="project img ftco-animate d-flex justify-content-center align-items-center project-4">
                  <div className="overlay"></div>
                  <div className="text text-center p-4">
                    <h3><a href="https://github.com/AkhilGKrishnan/Censorlabel">CensorLabel</a></h3>
                    <span>Automated censorable content identification in movies using Deeplearing</span>
                    <div className="project-tool-icon">
                      <i className="fa fa-html5" aria-hidden="true"></i>
                      <i className="fa fa-css3" aria-hidden="true"></i>
                    </div>
                  </div>
                </div>
			  	    </div>
    		
              <div className="col-md-4">
                <div className="project img ftco-animate d-flex justify-content-center align-items-center project-1">
                  <div className="overlay"></div>
                  <div className="text text-center p-4">
                    <h3><a href="https://github.com/AkhilGKrishnan/GekayRealEstate">Gekay RealEstate</a></h3>
                  <span>Django Web App</span>
                  <div className="project-tool-icon">
                    <i className="fa fa-html5" aria-hidden="true"></i>
                    <i className="fa fa-css3" aria-hidden="true"></i>
                  </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="project img ftco-animate d-flex justify-content-center align-items-center project-2">
                  <div className="overlay"></div>
                  <div className="text text-center p-4">
                    <h3><a href="https://github.com/AkhilGKrishnan/ContactManagement">UnivContact</a></h3>
                  <span>Ruby on rails based contact management system</span>
                  <div className="project-tool-icon">
                    <i className="fa fa-html5" aria-hidden="true"></i>
                    <i className="fa fa-css3" aria-hidden="true"></i>
                  </div>
                  </div>
                </div>
              </div>

              <div className="col-md-4">
                <div className="project img ftco-animate d-flex justify-content-center align-items-center project-3">
                  <div className="overlay"></div>
                  <div className="text text-center p-4">
                    <h3><a href="https://illuminateanywhere.com">Solester</a></h3>
                  <span>Web Design</span>
                  <div className="project-tool-icon">
                    <i className="fa fa-html5" aria-hidden="true"></i>
                    <i className="fa fa-css3" aria-hidden="true"></i>
                  </div>
                  </div>
                </div>
              </div>
    		    </div>
    	    </div>
        </section>

        <section className="ftco-section ftco-no-pt ftco-no-pb ftco-counter img" id="section-counter">
          <div className="container-fluid px-md-5">
            <div className="row d-md-flex align-items-center">
              <div className="col-md d-flex justify-content-center counter-wrap ftco-animate">
                <div className="block-18 shadow">
                  <div className="text">
                    <strong className="number" data-number="4">0</strong>
                    <span>Awards</span>
                  </div>
                </div>
              </div>
              <div className="col-md d-flex justify-content-center counter-wrap ftco-animate">
                <div className="block-18 shadow">
                  <div className="text">
                    <strong className="number" data-number="7">0</strong>
                    <span>Complete Projects</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </React.Fragment>
    );
  }
}

export default Project;