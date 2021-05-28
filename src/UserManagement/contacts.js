import React from "react";
import "./user_management.scss";
import 'react-responsive-modal/styles.css';
import Toolbar from '../Components/Toolbar/Toolbar'
class contacts extends React.Component {
  state = {
    shown: true
  }
handleChange(event) {
  console.log(`Selected file - ${event.target.files[0].name}`, '\n' , `Selected file modified date - ${event.target.files[0].lastModifiedDate}`);
}

  render() {

    return (
      <div className="mainPage">
        <Toolbar />
        <div className='col-sm-12 contactsScreen'>
          <div className='container'>
          <div className='topSection d-flex flex-wrap'>
            <div className='leftSection'>
              <h3>CONTACTS</h3>
            </div>
            <div className='rightSection'>
              <button type='button' className='addContacts' onClick={() => this.setState({ shown: !this.state.shown })}>
                Add Contacts +
              <input class='uploadDoc' type="file" name="avatar" onChange={this.handleChange} accept='.csv' />
              </button>
             {
               this.state.shown? <a href='/'>Download sample</a>:''
             }
            </div>
          </div>
          <hr />
        {
          this.state.shown ? '' :  <div class='d-flex'>
          <vr /><h3 class='contactHeader'>New Contacts</h3>
            </div>
        }
          <div className='mainSection'>
          <div>{this.state.shown ? 
           <div className="content">
          <div className='profileIcon'>
            <img className='profileImage' src='img/profile-picture.png' />
          </div>
          <div className='text-nowrap contents'>
          <h3>No Contacts</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
          </div>
        </div> : 
         <div className="content csvScreen text-nowrap">
           <div class='firstPart'>
             <h5>Contacts Added Successfully</h5>
             <i class="fa fa-check-circle" aria-hidden="true"></i>
             </div>
             <div class='secondPart'>
             <i class="fa fa-check-circle" aria-hidden="true"></i>
             <h5>Total 500 contact imported <span>( 40 existing Contacts )</span></h5>
               </div>
              <div>
              <button type='button' className='downloadCSV'>
                Download CSV
              </button>
                </div>
       </div>}</div>
          </div>
          </div>
        </div>
      </div>
    );
  }
}

export default contacts;
