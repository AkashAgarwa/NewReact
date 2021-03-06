import React  from 'react';
import './NavBar.css'
import {useLocation, Link } from 'react-router-dom';
import {Option} from '../Images/OptionIcon.jpg'
export default function Navbar()
{

  const mystyle={
    fontFamily: "Helvetica",
    fontSize: "13px",
    color: "#fff",
    textDecoration: "none",
 
  }
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
  <div className={splitLocation[1]==="" ? "navBox activeNav" : "navBox"}><Link  to="/" style={mystyle}><span>Safes</span> </Link></div>
  <div className={splitLocation[1]==="VaultAppRoles" ? "navBox activeNav" : "navBox"}><Link to="/VaultAppRoles/hello" style={mystyle}><span>Vault AppRoles</span></Link></div>
  <div className={splitLocation[1]==="ServiceAccounts" ? "navBox activeNav" : "navBox"}><Link to="/ServiceAccounts" style={mystyle}><span>Service Accounts</span></Link></div>
  <div className={splitLocation[1]==="IAMServiceAccounts" ? "navBox activeNav" : "navBox"}><Link to="/IAMServiceAccounts" style={mystyle}><span>IAM Service Accounts</span></Link></div>
  <div className={splitLocation[1]==="AzureActiveDirectory" ? "navBox activeNav" : "navBox"}><Link to="/AzureActiveDirectory" style={mystyle}><span>Azure Active Directory</span></Link></div>
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