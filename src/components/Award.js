import React, { Component } from 'react';

class Award extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="resume-wrap d-flex ftco-animate">
          <div className="icon d-flex align-items-center justify-content-center">
            <span className="flaticon-ideas"></span>
          </div>
          <div className="text pl-3">
            <span className="date">2019</span>
            <h2>Champion</h2>
            <span className="position">Providence College of Engineering</span>
            <p>Got First Prize in Quriocity quiz competion conducted by ECAP.</p>
          </div>
        </div>
        
        <div className="resume-wrap d-flex ftco-animate">
          <div className="icon d-flex align-items-center justify-content-center">
            <span className="flaticon-ideas"></span>
          </div>
          <div className="text pl-3">
            <span className="date">2017</span>
            <h2>First RunnerUp</h2>
            <span className="position">G-Tec</span>
            <p>Got Third Prize in State level G -Tec IT QUIZ ChampionShip.</p>
          </div>
        </div>
        <div className="resume-wrap d-flex ftco-animate">
          <div className="icon d-flex align-items-center justify-content-center">
            <span className="flaticon-ideas"></span>
          </div>
          <div className="text pl-3">
            <span className="date">2013</span>
            <h2>First Prize</h2>
            <span className="position">Kerala Shasthrolsavam</span>
            <p>Got First Prize in Kerala Shasthrolsavam Sub District IT Quiz Championship.</p>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Award;