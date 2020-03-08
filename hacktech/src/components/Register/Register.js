import React from "react";
import "./Register.css";

function Register() {
  return (
    <div className="register-body">
      <div className="row">
        <div className="col-md-4"></div>
        <div className="col-md-4">
          <h1>Register Page</h1>
        </div>
        <div className="col-md-4"></div>
      </div>
      <div className="row">
        <div className="col-md-4"></div>
        <div className="col-md-4">
          <form id="form-register">
            <div className="form-group">
              <label for="name">Name</label>
              <input
                type="name"
                className="form-control"
                id="name"
                name="name"
                placeholder="Enter your name"
              />
            </div>
            <div className="form-group">
              <label for="email">Email</label>
              <input
                type="email"
                className="form-control"
                id="email"
                name="email"
                aria-describedby="emailHelp"
                placeholder="Enter your email"
              />
            </div>
            <div className="form-group">
              <label for="password">Password</label>
              <input
                type="password"
                className="form-control"
                id="password"
                name="password"
                placeholder="Enter your password"
              />
            </div>

            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
        <div className="col-md-4"></div>
      </div>
    </div>
  );
}

export default Register;
