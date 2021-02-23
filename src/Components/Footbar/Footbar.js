import React, { Component } from 'react'
import {
  FaMapMarker, FaPhone, FaMailBulk,
  FaAngleDoubleRight, FaAngleDoubleUp, FaTwitterSquare,
  FaFacebookSquare, FaInstagramSquare
} from 'react-icons/fa';
import './Footbar.scss'

class Footbar extends Component {
  constructor(props) {
    super(props)
    this.state = {
      loading: false,
    }
  }
  subscribe() {
    this.setState({ loading: true });
  }
  changePassword() {
    window.scrollTo(0, 0)
  }
  render() {
    return (
      <div>
        <div className="footerPage">
          <div className="footerContents">
            <div className="col-sm-12 d-flex description">
              <div className="col-sm-12 contactInfo col-xl-6 col-md-6">
                <h3>Contact Information</h3>
                <hr />
                <div className="d-flex contactInfoContents">
                  <FaMapMarker className="m-1" />
                  <div className="address pl-4">
                    <b>SIVA Exports</b>
                    <p>2/236 MIDDLE STREET PERIYAKATTALAI,</p>
                    <p>PERAIYUR TALUK, CHINNAKATTALAI</p>
                    <p>MADURAI, TAMILNADU-625527, INDIA.</p>
                  </div>
                </div>
                <div className="d-flex contactInfoContents">
                  <FaPhone className="m-1" />
                  <div className="phoneNumber pl-4">
                    <p>+91-<a href="tel:8973114696" >8973114696</a></p>
                    <p>+91-<a href="tel:6369190214" >6369190214</a></p>
                    <p>+91-<a href="tel:9360489972" >9360489972</a></p>
                  </div>
                </div>
                <div className="d-flex contactInfoContents">
                  <FaMailBulk className="m-1" />
                  <div className="mailAddress d-flex flex-wrap pl-4">
                    <a href='mailto:sivamurugan30591@gmail.com'>sivamurugan30591@gmail.com</a>,&nbsp;&nbsp;
                    <a href='mailto:siva3151991@gmail.com'>siva3151991@gmail.com</a>
                  </div>
                </div>
                <div className="d-flex contactInfoContents">
                  <i class="m-1 fa fa-globe"></i>
                  <div className="webAddress pl-4">
                    <p>www.sivaexports.com</p>
                  </div>
                </div>
              </div>
              <div className="col-sm-3 quickLinks">
                <h3>Quick Links</h3>
                <hr />
                <div className="quickLinksContents">
                  <div className="d-flex">
                    <FaAngleDoubleRight className="mr-2" />
                    <p><a href='/'>Home</a></p>
                  </div>
                  <div className="d-flex">
                    <FaAngleDoubleRight className="mr-2" />
                    <p><a href='aboutUs'>About Us</a></p>
                  </div>
                  <div className="d-flex">
                    <FaAngleDoubleRight className="mr-2" />
                    <p><a href='quality'>Quality</a></p>
                  </div>
                  <div className="d-flex">
                    <FaAngleDoubleRight className="mr-2" />
                    <p><a href='delivery'>Delivery</a></p>
                  </div>
                  <div className="d-flex">
                    <FaAngleDoubleRight className="mr-2" />
                    <p><a href='contactUs'>Contact Us</a></p>
                  </div>
                  <div className="d-flex">
                    <FaAngleDoubleRight className="mr-2" />
                    <p><a href='export'>Export</a></p>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 p-3 subscriptionSection col-xl-3 col-md-3">
                <div className="contents">
                  <h4>Subscribe More Info</h4>
                  <div className="inputForm p-3">
                    <input class="form-control" type="text" placeholder="Type your Email" />
                    <div className="col-sm-12 text-center">
                      <button type="button" class="btn btn-outline-primary m-3"
                        onClick={() => this.subscribe()}>{this.state.loading ?
                          'Subscribed' : 'Subscribe'}</button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="socialNetworkSection position-absolute d-flex">
                <h6 className="m-auto pr-2">Follow us on:</h6>
                <a href='https://m.facebook.com/sivamurugan.sivamurugan.31586?ref=bookmarks' target="_blank">
                  <FaFacebookSquare className="socialIcons mx-3" /></a>
              </div>
            </div>
          </div>
        </div >
        <div className="copyrightSection col-sm-12 d-flex p-2">
          <span>Copyright © 2020 <b>Siva Exporter</b>. All Rights Reserved.</span>
          <span class="text-right">Powered By <a href='mailto:kuttenajith1998@gmail.com'>kuttenajith1998@gmail.com</a></span>
        </div>
      </div >
    );
  }
}

export default Footbar