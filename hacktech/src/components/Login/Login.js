import React from "react";
import "./Login.css";



function Login() {
  return (
      <div className="login-body">
          <div className="row">
              <div className="col-md-4"></div>
              <div className="col-md-4"><h1>Login Page</h1></div>
              <div className="col-md-4"></div>
          </div>

          <div className="row">
              <div className="col-md-4"></div>
              <div className="col-md-4">
        
              <form>
  <div className="form-group">
    <label for="exampleInputEmail1">Email</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
  </div>
  <div className="form-group">
    <label for="exampleInputPassword1">Password</label>
    <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password"/>
  </div>

  <button type="submit" className="btn btn-primary">Submit</button>
</form>
                  
              </div>
              <div className="col-md-4"></div>
          </div>

     
        
      </div>
  );
}


export default Login;
