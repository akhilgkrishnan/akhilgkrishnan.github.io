import React, { Component } from 'react';

class Skills extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="row progress-circle mb-5">
          <div className="col-lg-4 mb-4">
            <div className="bg-white rounded-lg shadow p-4">
              <h2 className="h5 font-weight-bold text-center mb-4">Web Development</h2>

        
              <div className="progress mx-auto" data-value='70'>
                <span className="progress-left">
                  <span className="progress-bar border-primary"></span>
                </span>
                <span className="progress-right">
                  <span className="progress-bar border-primary"></span>
                </span>
                <div className="progress-value w-100 h-100 rounded-circle d-flex align-items-center justify-content-center">
                  <div className="h2 font-weight-bold">70<sup className="small">%</sup></div>
                </div>
              </div>
        
              <div className="row text-center mt-4">
                <div className="col-6 border-right">
                  <div className="h4 font-weight-bold mb-0">28%</div><span className="small text-gray">Last week</span>
                </div>
                <div className="col-6">
                  <div className="h4 font-weight-bold mb-0">60%</div><span className="small text-gray">Last month</span>
                </div>
              </div>
        
            </div>
          </div>

          <div className="col-lg-4 mb-4">
            <div className="bg-white rounded-lg shadow p-4">
              <h2 className="h5 font-weight-bold text-center mb-4">ML/DL</h2>

              <div className="progress mx-auto" data-value='60'>
                <span className="progress-left">
                  <span className="progress-bar border-primary"></span>
                </span>
                <span className="progress-right">
                  <span className="progress-bar border-primary"></span>
                </span>
                <div className="progress-value w-100 h-100 rounded-circle d-flex align-items-center justify-content-center">
                  <div className="h2 font-weight-bold">60<sup className="small">%</sup></div>
                </div>
              </div>
            
              <div className="row text-center mt-4">
                <div className="col-6 border-right">
                  <div className="h4 font-weight-bold mb-0">28%</div><span className="small text-gray">Last week</span>
                </div>
                <div className="col-6">
                  <div className="h4 font-weight-bold mb-0">60%</div><span className="small text-gray">Last month</span>
                </div>
              </div>
        
            </div>
          </div>

          <div className="col-lg-4 mb-4">
            <div className="bg-white rounded-lg shadow p-4">
              <h2 className="h5 font-weight-bold text-center mb-4">CyberSecurity</h2>
              <div className="progress mx-auto" data-value='55'>
                <span className="progress-left">
                  <span className="progress-bar border-primary"></span>
                </span>
                <span className="progress-right">
                  <span className="progress-bar border-primary"></span>
                </span>
                <div className="progress-value w-100 h-100 rounded-circle d-flex align-items-center justify-content-center">
                  <div className="h2 font-weight-bold">55<sup className="small">%</sup></div>
                </div>
              </div>
        
              <div className="row text-center mt-4">
                <div className="col-6 border-right">
                  <div className="h4 font-weight-bold mb-0">28%</div><span className="small text-gray">Last week</span>
                </div>
                <div className="col-6">
                  <div className="h4 font-weight-bold mb-0">60%</div><span className="small text-gray">Last month</span>
                </div>
              </div>
      
            </div>
          </div>
        </div>
      
        <div className="row">
            <div className="col-md-6 animate-box">
            <div className="progress-wrap ftco-animate">
              <h3>Python</h3>
              <div className="progress">
                <div className="progress-bar color-3" role="progressbar" aria-valuenow="85"
                  aria-valuemin="0" aria-valuemax="100" style={{width: "85%" }}>
                  <span>85%</span>
                  </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 animate-box">
            <div className="progress-wrap ftco-animate">
              <h3>C</h3>
              <div className="progress">
                <div className="progress-bar color-3" role="progressbar" aria-valuenow="80"
                  aria-valuemin="0" aria-valuemax="100" style={{width:"80%"}}>
                  <span>80%</span>
                  </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 animate-box">
            <div className="progress-wrap ftco-animate">
              <h3>Javascript</h3>
              <div className="progress">
                <div className="progress-bar color-3" role="progressbar" aria-valuenow="70"
                  aria-valuemin="0" aria-valuemax="100" style={{width:"70%"}}>
                  <span>70%</span>
                  </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 animate-box">
            <div className="progress-wrap ftco-animate">
              <h3>Golang</h3>
              <div className="progress">
                <div className="progress-bar color-3" role="progressbar" aria-valuenow="70"
                  aria-valuemin="0" aria-valuemax="100" style={{width:"70%"}}>
                  <span>70%</span>
                  </div>
              </div>
            </div>
          </div>
            <div className="col-md-6 animate-box">
            <div className="progress-wrap ftco-animate">
              <h3>Photoshop</h3>
              <div className="progress">
                <div className="progress-bar color-1" role="progressbar" aria-valuenow="90"
                  aria-valuemin="0" aria-valuemax="100" style={{width:"90%"}}>
                  <span>90%</span>
                  </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 animate-box">
            <div className="progress-wrap ftco-animate">
              <h3>jQuery</h3>
              <div className="progress">
                <div className="progress-bar color-2" role="progressbar" aria-valuenow="70"
                  aria-valuemin="0" aria-valuemax="100" style={{width:"70%"}}>
                  <span>70%</span>
                  </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 animate-box">
            <div className="progress-wrap ftco-animate">
              <h3>Bootstrap</h3>
              <div className="progress">
                <div className="progress-bar color-2" role="progressbar" aria-valuenow="75"
                  aria-valuemin="0" aria-valuemax="100" style={{width:"75%"}}>
                  <span>75%</span>
                  </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 animate-box">
            <div className="progress-wrap ftco-animate">
              <h3>Git</h3>
              <div className="progress">
                <div className="progress-bar color-2" role="progressbar" aria-valuenow="85"
                  aria-valuemin="0" aria-valuemax="100" style={{width:"85%"}}>
                  <span>85%</span>
                  </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 animate-box">
            <div className="progress-wrap ftco-animate">
              <h3>Django</h3>
              <div className="progress">
                <div className="progress-bar color-2" role="progressbar" aria-valuenow="80"
                  aria-valuemin="0" aria-valuemax="100" style={{width:"80%"}}>
                  <span>80%</span>
                  </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 animate-box">
            <div className="progress-wrap ftco-animate">
              <h3>Ruby on Rails</h3>
              <div className="progress">
                <div className="progress-bar color-2" role="progressbar" aria-valuenow="70"
                  aria-valuemin="0" aria-valuemax="100" style={{width:"70%"}}>
                  <span>90%</span>
                  </div>
              </div>
            </div>
          </div><div className="col-md-6 animate-box">
            <div className="progress-wrap ftco-animate">
              <h3>React</h3>
              <div className="progress">
                <div className="progress-bar color-2" role="progressbar" aria-valuenow="40"
                  aria-valuemin="0" aria-valuemax="100" style={{width:"40%"}}>
                  <span>40%</span>
                  </div>
              </div>
            </div>
          </div>

          <div className="col-md-6 animate-box">
            <div className="progress-wrap ftco-animate">
              <h3>HTML5</h3>
              <div className="progress">
                <div className="progress-bar color-3" role="progressbar" aria-valuenow="95"
                  aria-valuemin="0" aria-valuemax="100" style={{width:"95%"}}>
                  <span>95%</span>
                  </div>
              </div>
            </div>
          </div>
          
          <div className="col-md-6 animate-box">
            <div className="progress-wrap ftco-animate">
              <h3>CSS3</h3>
              <div className="progress">
                <div className="progress-bar color-4" role="progressbar" aria-valuenow="90"
                  aria-valuemin="0" aria-valuemax="100" style={{width:"90%"}}>
                  <span>90%</span>
                  </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 animate-box">
            <div className="progress-wrap ftco-animate">
              <h3>SQL</h3>
              <div className="progress">
                <div className="progress-bar color-2" role="progressbar" aria-valuenow="90"
                  aria-valuemin="0" aria-valuemax="100" style={{width:"90%"}}>
                  <span>90%</span>
                  </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 animate-box">
            <div className="progress-wrap ftco-animate">
              <h3>MongoDB</h3>
              <div className="progress">
                <div className="progress-bar color-2" role="progressbar" aria-valuenow="85"
                  aria-valuemin="0" aria-valuemax="100" style={{width:"85%"}}>
                  <span>85%</span>
                  </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 animate-box">
            <div className="progress-wrap ftco-animate">
              <h3>WordPress</h3>
              <div className="progress">
                <div className="progress-bar color-5" role="progressbar" aria-valuenow="70"
                  aria-valuemin="0" aria-valuemax="100" style={{width:"70%"}}>
                  <span>70%</span>
                  </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 animate-box">
            <div className="progress-wrap ftco-animate">
              <h3>SEO</h3>
              <div className="progress">
                <div className="progress-bar color-6" role="progressbar" aria-valuenow="80"
                  aria-valuemin="0" aria-valuemax="100" style={{width:"80%"}}>
                  <span>80%</span>
                  </div>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Skills;