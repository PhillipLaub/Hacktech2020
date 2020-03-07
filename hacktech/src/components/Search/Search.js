import React from "react";
import "./Search.css";

function Search() {
  return (
    <div className="search-body">
      <div className="row">
        <div className="col-md-1"></div>
        <div className="col-md-10">
          <div className="row">
            <div className="col-md-12">
              <h3 className="search-title left">Search</h3>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <div className="input-group mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter search term"
                  aria-label="Enter seach term"
                  aria-describedby="button-addon2"
                />
                <div className="input-group-append">
                  <button
                    className="btn btn-outline-secondary"
                    type="button"
                    id="button-addon2"
                  >
                    Submit
                  </button>
                </div>
              </div>
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
    </div>
  );
}

export default Search;
