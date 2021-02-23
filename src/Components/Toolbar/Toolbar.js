import React from "react";
import "../../UserManagement/user_management.scss";
import 'react-responsive-modal/styles.css';
const axios = require("axios").default;
class login extends React.Component {

  render() {

    return (
      <div class="topSection">
        <div class="topSectionContents d-flex">
          <div class="logoSection">
            <a href="/">   <img src="img/logo.png" class="logo" /></a>
          </div>
          <div class="d-flex col-sm-10 menuSection">
            <span><a href='/'><b>Home</b></a> </span>
            <vr />
            <span><a href='aboutUs'><b>About US</b></a> </span>
            <vr />
            <span><a href='quality'><b>Quality</b></a> </span>
            <vr />
            <span><a href='delivery'><b>Delivery</b></a> </span>
            <vr />
            <span><a href='contactUs'><b>Contact US</b></a> </span>
            <vr />
            <span><a href='export'><b>Export</b></a> </span>
          </div>
        </div>
      </div>
    );
  }
}

export default login;
