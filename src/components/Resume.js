import React, { Component } from 'react';
import Award from './Award';
import Education from './Education';
import Experience from './Experience';
import Skills from './Skills';

class Resume extends Component {
  render() {
    return (
      <section className="ftco-section ftco-no-pb goto-here" id="resume-section">
    	<div className="container">
    		<div className="row">
    			<div className="col-md-3">
				    <nav id="navi">
					    <ul>
					      <li><a href="#page-1">Education</a></li>
					      <li><a href="#page-2">Experience</a></li>
					      <li><a href="#page-3">Skills</a></li>
					      <li><a href="#page-4">Awards</a></li>
					    </ul>
					  </nav>
					</div>
					<div className="col-md-9">
					  <div id="page-1" className= "page one">
					  	<h2 className="heading">Education</h2>
					    <Education />
					  </div>

					  <div id="page-2" className= "page two">
					  	<h2 className="heading">Experience</h2>
              <Experience />
					  </div>

					  <div id="page-3" className= "page three">
					  	<h2 className="heading">Skills</h2>
					  	<Skills />
					  </div>
					  <div id="page-4" className= "page four">
					    <h2 className="heading">Awards</h2>
						  <Award />
					  </div>
					</div>
			  </div>
    	</div>
    </section>
    );
  }
}

export default Resume;