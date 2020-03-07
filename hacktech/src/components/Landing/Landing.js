import React from "react";
import "./Landing.css";
import Search from "../Search/Search";



function Landing() {
  return (
      <div className="landing-body">
          <div className="row">
              <div className="col-md-3"><Search /></div>
              <div className="col-md-9">
                  <div className="row">
                      <div className="col-md-4"></div>
                      <div className="col-md-4"><h2 className="welcome">Welcome to the page (Landing Page)</h2></div>
                      <div className="col-md-4"></div>
                  </div>
                  <div className="row">
                      <div className="col-md-4"></div>
                      <div className="col-md-4"></div>
                      <div className="col-md-4"></div>
                  </div>
                  <div className="row">
                      <div className="col-md-12"></div>
                  </div>
              </div>
          </div>
        
     
        
      </div>
  );
}


export default Landing;
