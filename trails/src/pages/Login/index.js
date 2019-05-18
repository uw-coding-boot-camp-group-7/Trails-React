import React, { Component } from "react";
import API from "../../utils/API";
import Parallax from "../../components/Parallax";
import { Input, FormBtn } from '../../components/Forms';
import "./style.css";

class Login extends Component {

  state = {
    user: [],
    email: "",
    password: ""
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    // // If user in database, push user to auth function and redirect to passports
    //   API.getUser()
    //     .then(res => this.setState({ user: res.data }))
    //     .catch(err => console.log(err));
    //   // else, return to login; alert user not found
    // } 
  };

  render() {
    return (
      <React.Fragment>
        <Parallax />
          <div className="console-back">
            <div className="console">

              <form id="login-frm">
                <Input  
                name="email" 
                type="email" 
                className="form-control" 
                placeholder="Email"
                value={this.state.recipeSearch}
                onChange = {this.handleInputChange} 
                />
                <Input 
                name="password" 
                type="password" 
                className="form-control" 
                placeholder="Password" 
                value={this.state.recipeSearch}
                onChange = {this.handleInputChange} 
                />
                <FormBtn 
                  type="submit" 
                  className="btn btn-default custom-btn" 
                  disabled = {!(this.state.email && this.state.password)}
                  onClick = {this.handleFormSubmit} 
                  >Log in
                </FormBtn>
                {/* Redirect to signup */}
                {/* <p style={{float:"right"}}>Or create an account <a style={styles.hyperlink} onClick={() => handleFormChange("Signup")}>here</a></p> */}
              </form>

            </div>
        </div>
        {/* <Footer /> */}
      </React.Fragment>
    );
  }
}

export default Login;
