import React from "react";

const styles = {
    hyperlink: {
        color: "#01850b",
        textDecoration: "underline"
    }
}

function LoginForm(props) {
  return (
    <form id="login-frm">
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
        <p style={{float:"right"}}>Or create an account <a style={styles.hyperlink} onClick={() => props.handleFormChange("Signup")}>here</a></p>
    </form>
  );
}

function SignupForm(props) {
    return (
      <form id="signup-frm">
          <div className="form-group">
              <input  
              type="username" 
              className="form-control" 
              id="username-input" 
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
              id="confirm-input" 
              placeholder="Confirm your password" 
              />
          </div>
          <button type="submit" className="btn btn-default custom-btn" id="signup">Sign up</button>
          <p style={{float:"right"}}>Back to <a style={styles.hyperlink} onClick={() => props.handleFormChange("Login")}>login</a></p>
          </form>
  
    );
}

export { LoginForm, SignupForm };