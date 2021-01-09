import React, { Component } from 'react';

class Education extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="resume-wrap d-flex ftco-animate">
          <div className="icon d-flex align-items-center justify-content-center">
            <span className="flaticon-ideas"></span>
          </div>
          <div className="text pl-3">
            <span className="date">2016-2020</span>
            <h2>Bachelor of Technology</h2>
            <span className="position">Providence College of Engineering, Chengannur</span>
            <p>Studied BTech in Computer Science Engineering and secured 7.3 CGPA under APJ Abdul Kalam Technological University Kerala.</p>
          </div>
        </div>
        <div className="resume-wrap d-flex ftco-animate">
          <div className="icon d-flex align-items-center justify-content-center">
            <span className="flaticon-ideas"></span>
          </div>
          <div className="text pl-3">
            <span className="date">2014-2016</span>
            <h2>Plus Two</h2>
            <span className="position">Nair Samajam Higher Secondary School, Mannar</span>
            <p>Completed higher secondary education in biology science under Kerala state education board. Passed with 78% marks.</p>
          </div>
        </div>
        <div className="resume-wrap d-flex ftco-animate">
          <div className="icon d-flex align-items-center justify-content-center">
            <span className="flaticon-ideas"></span>
          </div>
          <div className="text pl-3">
            <span className="date">2013-2014</span>
            <h2>SSLC</h2>
            <span className="position">Nair Samajam Boys High School, Mannar</span>
            <p>Secured 95% of marks in 10th level under Kerala state education board.</p>
          </div>
        </div>
        <div className="resume-wrap d-flex ftco-animate">
          <div className="icon d-flex align-items-center justify-content-center">
            <span className="flaticon-ideas"></span>
          </div>
          <div className="text pl-3">
            <span className="date">2002-2009</span>
            <h2>Primary School</h2>
            <span className="position">Akshara English Medium School, Mannar</span>
            <p>Studied my primary education.</p>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Education;