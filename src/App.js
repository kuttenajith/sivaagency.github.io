import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import homePage from './UserManagement/login';
import aboutUs from './UserManagement/about_us';
import quality from './UserManagement/quality';
import delivery from './UserManagement/delivery';
import contactUs from './UserManagement/contact_us';
import Export from './UserManagement/export';
import './App.css'

export default class App extends Component {

  render() {
    return (
      <div className="rootdiv">
        <Router>
          <Switch>
            <Route exact path="/" component={homePage} />
            <Route exact path="/aboutus" component={aboutUs} />
            <Route exact path="/quality" component={quality} />
            <Route exact path="/delivery" component={delivery} />
            <Route exact path="/contactUs" component={contactUs} />
            <Route exact path="/export" component={Export} />
          </Switch>
        </Router>

      </div>
    )
  }
}