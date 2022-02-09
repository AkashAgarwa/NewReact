import './App.css';
import Navbar from './component/Navbar';
import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";

import Sales from './component/Sales'
import VaultAppRoles from './component/VaultAppRoles';
import ServiceAccounts from './component/ServiceAccounts';
import IAMServiceAccounts from './component/IAMServiceAccounts';
import AzureActiveDirectory from './component/AzureActiveDirectory';

export default function App() {
  return (
    <>
  
    <Router>
      <div>
    <Navbar/>
    <Switch>
          <Route exact path="/">
            <Sales />
          </Route>
          <Route exact path="/VaultAppRoles">
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
