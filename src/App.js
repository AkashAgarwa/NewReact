import './App.css';
import Navbar from './component/NavBar/Navbar';
import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Main from './component/Main/Main'
import VaultAppRoles from './component/VaultPages/VaultAppRoles';
import ServiceAccounts from './component/VaultPages/ServiceAccounts';
import IAMServiceAccounts from './component/VaultPages/IAMServiceAccounts';
import AzureActiveDirectory from './component/VaultPages/AzureActiveDirectory';

export default function App() {
  return (
    <>
  
    <Router>
      <div>
    <Navbar/>
    <Switch>
          <Route exact path="/">
            <Main />
          </Route>
          <Route exact path="/VaultAppRoles/:name">
            <VaultAppRoles />
          </Route>
          <Route exact path="/ServiceAccounts">
            < ServiceAccounts />
          </Route>
          <Route exact path="/IAMServiceAccounts">
            < IAMServiceAccounts />
          </Route> <Route exact path="/AzureActiveDirectory">
            < AzureActiveDirectory />
          </Route>
          
        </Switch>
      </div>
    </Router>
    </>
  );
}
