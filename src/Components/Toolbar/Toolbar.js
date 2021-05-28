import React from "react";
import "../../UserManagement/user_management.scss";
import"../Toolbar/Toolbar.scss";
import 'react-responsive-modal/styles.css';
class login extends React.Component {

  render() {
console.log(window.location.pathname)
    return (
      <div class="topSection container">
      <nav class="navbar navbar-expand-lg navbar-light">
  <a class="navbar-brand" href="/"><span class="font-weight-bold">SMS</span> Campaign</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" 
  data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" 
  aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
    <div class="navbar-nav">
      <a class="nav-item nav-link" href="campaigns">CAMPAIGNS <span class="sr-only">(current)</span></a>
      <a class="nav-item nav-link" href="lists">LISTS</a>
      <a class="nav-item nav-link active" href="/">CONTACTS</a>
      <button type='button' className='logOut'>
                LOGOUT <i class="fa fa-power-off" aria-hidden="true"></i>
              </button>
    </div>
  </div>
</nav>
      </div>
    );
  }
}

export default login;
