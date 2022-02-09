import React  from 'react';
import './NavBar.css'
import { useHistory ,useLocation, Link } from 'react-router-dom';
export default function Navbar(){

  const mystyle={
    fontFamily: "Helvetica",
    fontSize: "13px",
    color: "#fff",
    textDecoration: "none",
 
  }
  const currentRoute = useHistory().location.pathname.toLowerCase();
  const location = useLocation();
  const { pathname } = location;
  const splitLocation = pathname.split("/");

  return (
 <>
<div style={{
  boxShadow: "0 5px 25px 0 rgba(226, 0, 116, 0.5)",
    MozBoxShadow: "0 5px 25px 0 rgba(226, 0, 116, 0.5)",
    WebkitBoxShadow:"0 5px 25px 0 rgba(226, 0, 116, 0.5)",
    position: "relative",
    zIndex: "10"}}>
<nav >
<div className='LeftNavBar'><div className='titleBar'>
<span className='title'>T-VAULT</span>
  </div>
  <div className='navBarOptionBox'>
  <div className={splitLocation[1]=="" ? "navBox active" : "navBox"}><Link  to="/" style={mystyle}><span>Safes</span></Link></div>
  <div className={splitLocation[1]=="VaultAppRoles" ? "navBox active" : "navBox"}><Link to="/VaultAppRoles" style={mystyle}><span>Vault AppRoles</span></Link></div>
  <div className={splitLocation[1]=="ServiceAccounts" ? "navBox active" : "navBox"}><Link to="/ServiceAccounts" style={mystyle}><span>Service Accounts</span></Link></div>
  <div className={splitLocation[1]=="IAMServiceAccounts" ? "navBox active" : "navBox"}><Link to="/IAMServiceAccounts" style={mystyle}><span>IAM Service Accounts</span></Link></div>
  <div className={splitLocation[1]=="AzureActiveDirectory" ? "navBox active" : "navBox"}><Link to="/AzureActiveDirectory" style={mystyle}><span>Azure Active Directory</span></Link></div>
  </div>
  </div>
  <div className="rightNavBar"> <div className="navDocument"><span><i className="fa fa-file-text-o" style={{fontSize:"0.7rem"}}></i>  Documentation</span></div>
  <div className="navUserName"><span>(Admin)David.R</span></div>
  </div>
</nav>
</div>
</>

  );
}