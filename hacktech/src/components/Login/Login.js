import React from "react";
import "./Login.css";

function Login() {
  return (
      <div className="login-body">
        <div className="row">
          <div className="col-md-4"></div>
          <div className="col-md-4">
            <h1>Login Page</h1>
          </div>
          <div className="col-md-4"></div>
        </div>

        <div className="row">
          <div className="col-md-4"></div>
          <div className="col-md-4">
             <form id="form-login">
              <div className="form-group">
                <label for="email">Email</label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  name="email"
                  aria-describedby="emailHelp"
                  placeholder="Enter email"
                />
              </div>
              <div className="form-group">
                <label for="password">Password</label>
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  name="password"
                  placeholder="Password"
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

export default Login;
