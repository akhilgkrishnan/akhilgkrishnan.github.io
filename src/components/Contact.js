import React, { Component } from 'react';
import './Portfolio.css'

class Contact extends Component {
  render() {
    return (
      <React.Fragment>

        <section className="ftco-section ftco-hireme img bg1">
          <div className="overlay"></div>
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-md-7 ftco-animate text-center">
                <h2>I'm <span>Available</span> for freelancing</h2>
                <p>If you want a stunning service, I will make sure you available.</p>
                <p className="mb-0"><a href="#contact-section" className="btn btn-primary py-3 px-5">Hire me</a></p>
              </div>
            </div>
          </div>
		    </section>

        <section className="ftco-section contact-section ftco-no-pb " id="contact-section">
          <div className="container">

            <div className="row justify-content-center mb-5 pb-3">
              <div className="col-md-7 heading-section text-center ftco-animate">
                <h1 className="big big-2">Contact</h1>
                <h2 className="mb-4">Contact Me</h2>
                <p>Have a question? Please enquire below</p>
              </div>
            </div>

            <div className="row d-flex contact-info mb-5 justify-content-center">
              <div className="col-md-6 col-lg-3 d-flex ftco-animate">
                <div className="align-self-stretch box text-center p-4 shadow">
                  <div className="icon d-flex align-items-center justify-content-center">
                    <span className="icon-map-signs"></span>
                  </div>
                  <div>
                    <h3 className="mb-4">Address</h3>
                    <p>Mannar, Alappuzha Kerala India</p>
                  </div>
                </div>
              </div>
          
              <div className="col-md-6 col-lg-3 d-flex ftco-animate">
                <div className="align-self-stretch box text-center p-4 shadow">
                  <div className="icon d-flex align-items-center justify-content-center">
                    <span className="icon-paper-plane"></span>
                  </div>
                  <div>
                    <h3 className="mb-4">Email Address</h3>
                    <p><a href="mailto:info@akhilgkrishnan.me">info@akhilgkrishnan.me</a></p>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-3 d-flex ftco-animate">
                <div className="align-self-stretch box text-center p-4 shadow">
                  <div className="icon d-flex align-items-center justify-content-center">
                    <span className="icon-globe"></span>
                  </div>
                  <div>
                    <h3 className="mb-4">Website</h3>
                    <p><a href="https://akhilgkrishnan.me">akhilgkrishnan.me</a></p>
                  </div>
                </div>
              </div>
            </div>

            <div className="row no-gutters block-16 justify-content-center">
              <div className="col-md-9 order-md-last d-flex center-block">
                <form  name="contact" className="bg-light p-4 p-md-5 contact-form" method="POST" data-netlify="true">
                  <div className="form-group">
                    <input type="text" className="form-control" name="name" placeholder="Your Name"/>
                  </div>
                  <div className="form-group">
                    <input type="text" className="form-control" name="_replyto" placeholder="Your Email"/>
                  </div>
                  <div className="form-group">
                    <input type="text" className="form-control" name="subject"  placeholder="Subject"/>
                  </div>
                  <div className="form-group">
                    <textarea name="message" cols="30" rows="7" className="form-control" placeholder="Message"></textarea>
                  </div>
                  <div className="form-group text-center">
                    <input type="submit" value="Send Message" className="btn btn-primary py-3 px-5"/>
                  </div>
                </form>
              </div>
            </div>

          </div>
        </section>
      </React.Fragment>
    );
  }
}

export default Contact;