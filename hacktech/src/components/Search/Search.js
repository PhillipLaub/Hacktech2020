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
              <h3 className="search-title">Search Section</h3>
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
                    Search
                  </button>
                </div>
              </div>
            </div>
          </div>

<div className="row">
    <div className="col-md-12"><h4>Filters</h4></div>
</div>

<div className="row">
    <div className="col-md-12">
    <div className="checkbox">
  <label><input type="checkbox" value=""/>Option 1</label>
</div>
<div className="checkbox">
  <label><input type="checkbox" value=""/>Option 2</label>
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
