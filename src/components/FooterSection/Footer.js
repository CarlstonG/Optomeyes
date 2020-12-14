import React from 'react'
import Map from '../images/Mask Group 3.png'
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBIcon, MDBInput } from 'mdbreact'

export default function Footer() {
    return (

            
   

        <div className="container  mt-5">
              <fr />
            <div className="row">
            <div class="col col-md-4">
                <h2>Get In Touch With</h2>
                <h2>Optomeyes Eyewear</h2>
                <div className="content">
                    <div className="social mt-3 mb-1">
                        <a href="https://facebook.com/" className="fab fa-facebook-f mr-5">FB</a>
                        <a href="instagram.com" className="fab fa-instagram mr-5">IG</a>
                        <a href="www.twitter.com" className="fab fa-twitter mr-5">Twitter</a>
                    </div>
                </div>

            </div>
            <div class="col col-md-4">
                <h1>Location</h1>
                
                <div className="content">
                    <div className="email">
                    <span className="fas fa-envelope mr-3 text-info"></span>
                    <span className="text"> info@auburnoptom.com.au</span>
                    </div>
                    <div className="phone">
                    <span className="fas fa-phone-alt text-info mr-3"></span>
                    <span className="text"> (02) 9643 2749</span>
                    </div>
                    <div className="place">
                    <span className="fas fa-map-marker-alt text-info mr-3"></span>
                    <span className="text"> 4A Auburn Rd, Auburn NSW 2144</span>
                    </div>
                </div>
                
            </div>
            <div className="col col-md-4">
                <h2>Map</h2>
                <div className="img mb-5">
                    <img src={Map}/>
                </div>
            </div>
            </div>
            <div className="row">
            <div className="col col-md-8 mt-1">
                <h2>Get InTouch</h2>
                <div>
                <MDBContainer>
  <MDBRow>
    <MDBCol md="8">
      <form>
        <div className="grey-text">
          <MDBInput label="Your Name"  placeholder="First name" className="text-dark" icon="user" group type="text" validate error="wrong"
            success="right" />
          <MDBInput label="Your Email" icon="envelope" group type="email" validate error="wrong"
            success="right" />
          <MDBInput label="Subject" icon="tag" group type="text" validate error="wrong" success="right" />
          <MDBInput type="textarea" rows="2" label="Your message" icon="pencil-alt" />
        </div>
        <div className="text-center">
          <MDBBtn outline color="primary text-light">
            Send
            <MDBIcon far icon="paper-plane" className="ml-1" />
          </MDBBtn>
        </div>
      </form>
    </MDBCol>
  </MDBRow>
</MDBContainer>
                </div>
            </div>
           <div className="col mt-4 col-md-4">
               <h2>OUR BUSINESS HOURS</h2>
           <div className="row">
                        <div className="col"><p>Monday to Friday</p></div>
                        <div className="col"><p>9:00 AM - 5:30 PM</p></div>
                    </div>
                    <div className="row">
                        <div className="col"><p>Saturday</p></div>
                        <div className="col"><p>8:30 AM - 3:00 PM</p></div>
                    </div>
                    <div className="row">
                        <div className="col"><p>Sunday</p></div>
                        <div className="col"><p>CLOSED</p></div>
                    </div>
           </div>
            </div>

         
            
          </div>
    )
}
