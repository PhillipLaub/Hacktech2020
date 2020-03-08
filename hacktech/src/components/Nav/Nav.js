import React from "react";
import "./Nav.css";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <div>
      <div className="nav-body">
        <div className="row ">
          <div className="col-md-5 align-self-center"><Link to="/"><h1 className="logo">Yo What The . Tech</h1></Link></div>
          <div className="col-md-3"></div>
          <div className="col-md-4 align-self-center">
          <ul id="links" className="nav-links">
                <Link to="/">
                  <li className="link">HOME</li>
                </Link>
                <Link to="/login">
                  <li id="loginButton" className="link">LOGIN</li>
                </Link> 
                <Link to="/register">
                  <li id="registerButton" className="link">REGISTER</li>
                </Link> 
                
              </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Nav;
