import React, { Component } from "react";
import "./style.css";
import Parallax from "../Parallax";
import Wrapper from "../Wrapper";
import Footer from "../Footer";

class Login extends Component {


  render() {
    return (
      <React.Fragment>
        <Parallax />
        <div className="console-back">
          <div className="console">

            <form>
              <div className="form-group">
                <input  
                type="email" 
                className="form-control" 
                id="email-input" 
                placeholder="Email" 
                />
              </div>
              <div className="form-group">
                <input 
                type="password" 
                className="form-control" 
                id="password-input" 
                placeholder="Password" 
                />
              </div>
              <button type="submit" className="btn btn-default custom-btn" id="login">Log in</button>
            </form>
            <p style={{float:"right"}}>Or create an account <a href="/login">here</a></p>

            <form>
              <div className="form-group">
                <input  
                type="username" 
                className="form-control" 
                id="email-input" 
                placeholder="Username" 
                />
              </div>
              <div className="form-group">
                <input  
                type="email" 
                className="form-control" 
                id="email-input" 
                placeholder="Email" 
                />
              </div>
              <div className="form-group">
                <input 
                type="password" 
                className="form-control" 
                id="password-input" 
                placeholder="Password" 
                />
              </div>
              <div className="form-group">
                <input 
                type="password" 
                className="form-control" 
                id="password-input" 
                placeholder="Confirm your password" 
                />
              </div>
              <button type="submit" className="btn btn-default custom-btn" id="signup">Sign up</button>
            </form>
            
          </div>
        </div>
        {/* <Footer /> */}
      </React.Fragment>
    );
  }
}

export default Login;
