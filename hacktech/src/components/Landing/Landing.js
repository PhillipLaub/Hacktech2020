import React, { useState } from "react";
import "./Landing.css";
import Results from '../Results/Results'



function Landing() {

const [search, setSearch] = useState("");
  
  const handleSubmit = (evt) => {
      evt.preventDefault();
      // ALERTING ON EACH SEARCH FOR TESTING
      alert(`Submitting Search ${search}`)
      
  }


  return (
      <div className="landing-body">
          <div className="row">
              <div className="col-md-2"><div className="search-body">
      <div className="row">
        <div className="col-md-1"></div>
        <div className="col-md-10">
          <div className="row">
            <form onSubmit={handleSubmit} className="search-body">
              <label className="search-title left">
                Search:
                <input
                  type="text"
                  value={search}
                  onChange={e => setSearch(e.target.value)}
                />
              </label>
                <input type="submit" value="Submit" />
            </form>
              <div className="col-md-12">
                <h3 className="search-title left">Search</h3>
              </div>
          </div>

          <div className="row">
            <div className="col-md-12">
              <h4 className="left">Filters</h4>
            </div>
          </div>

          <div className="row">
            <div className="col-md-12">
              <div className="checkbox left">
                <label>
                  <input type="checkbox" value=""/>
                  Option 1
                </label>
              </div>
              <div className="checkbox left">
                <label>
                  <input type="checkbox" value="" />
                  Option 2
                </label>
              </div>
            </div>
          </div>
        </div>

        <div className="col-md-1"></div>
      </div>
    </div></div>
              <div className="col-md-10">
                  <div className="row">
                      <div className="col-md-4"></div>
                      <div className="col-md-4"><h2 className="welcome">Welcome!</h2></div>
                      <div className="col-md-4"></div>
                  </div>
                  <div className="row">
                    <div className="col-md-1"></div>
                    <div className="col-md-10">
                        <Results />
                    </div>
                    <div className="col-md-1"></div>
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
