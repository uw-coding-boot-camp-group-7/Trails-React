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
                <label for="exampleInputEmail1"></label>
                <input  
                type="email" 
                className="form-control" 
                id="email-input" 
                placeholder="Email" 
                />
              </div>
              <div className="form-group">
                <label for="exampleInputPassword1"></label>
                <input 
                type="password" 
                className="form-control" 
                id="password-input" 
                placeholder="Password" 
                />
              </div>
              <button type="submit" className="btn btn-default login-btn">Log in</button>
            </form>
            <p style={{float:"right"}}>Or create an account <a href="/login">here</a></p>
          </div>
        </div>
        {/* <Footer /> */}
      </React.Fragment>
    );
  }
}

export default Login;
