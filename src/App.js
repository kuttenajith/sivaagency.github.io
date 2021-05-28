import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import homePage from './UserManagement/contacts';
import campaigns from './UserManagement/campaigns';
import lists from './UserManagement/lists';
import './App.css'
import contacts from './UserManagement/contacts';

export default class App extends Component {

  render() {
    return (
      <div className="rootdiv">
        <Router>
          <Switch>
            <Route exact path="/" component={contacts} />
            <Route exact path="/campaigns" component={campaigns} />
            <Route exact path="/lists" component={lists} />
          </Switch>
        </Router>
      </div>
    )
  }
}