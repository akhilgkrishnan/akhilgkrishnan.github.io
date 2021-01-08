import React, { Component } from 'react';

class Footer extends Component {
  render() {
    return (
      <footer className="ftco-footer ftco-section">
        <div className="container" >
          <div className="row mb-5 col-md-8 offset-md-2">
            <div className="col-md ">
              <div className="ftco-footer-widget mb-4">
                <ul className="ftco-footer-social list-unstyled float-md-left float-lft mt-4">
                  <li className="ftco-animate"><a href="https://twitter.com/mrakhilg"><span className="icon-twitter"></span></a></li>
                  <li className="ftco-animate"><a href="https://facebook.com/akhilgkrishnan9800"><span className="icon-facebook"></span></a></li>
                  <li className="ftco-animate"><a href="https://instagram.com/akhilgkrishnan"><span className="icon-instagram"></span></a></li>
                  <li className="ftco-animate"><a href="https://linkedin.com/in/akhilgkrishnan"><span className="icon-linkedin"></span></a></li>
                  <li className="ftco-animate"><a href="https://github.com/akhilgkrishnan"><span className="icon-github"></span></a></li>
                  <li className="ftco-animate"><a href="https://linkedin.com/in/akhilgkrishnan"><span className="icon-gitlab"></span></a></li>
                </ul>
              </div>
            </div>
          
            <div className="col-md">
              <div className="ftco-footer-widget mb-4">
                <h2 className="ftco-heading-2">Have a Questions?</h2>
                <div className="block-23 mb-3">
                  <ul>
                    <li><span className="icon icon-map-marker"></span><span className="text">Mannar, Alappuzha, Kerala, India</span></li>
                    <li><a href="#"><span className="icon icon-envelope"></span><span className="text">info@akhilgkrishnan.me</span></a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12 text-center">
              <p>Copyright &copy;<script>document.write(new Date().getFullYear());</script> All rights reserved | This website is hosted with <i className="icon-heart color-danger" aria-hidden="true"></i> by <a href="https://github.com/akhilgkrishnan/akhilgkrishnan.github.io" target="_blank">Akhil G Krishnan</a></p>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;