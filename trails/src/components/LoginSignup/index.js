import React from "react";
import "./style.css";

function LoginSignup(props) {
    return (
   
      <div>
        <h2>Sign Up Form</h2>
        <form>
          <div className="form-group">
            <label for="exampleInputEmail1">Email address</label>
            <input 
              type="email" 
              className="form-control" 
              id="email-input" 
              placeholder="Email" 
            />
          </div>
          <div className="form-group">
            <label for="exampleInputPassword1">Password</label>
            <input 
              type="password" 
              className="form-control" 
              id="password-input" 
              placeholder="Password" 
            />
          </div>
          <button type="submit" className="btn btn-default">Sign Up</button>
        </form>
        <br />
        <p>Or log in <a href="/login">here</a></p>
      </div>

    );
}

export default LoginSignup;