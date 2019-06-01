import React, { Component } from "react";
import { Redirect } from 'react-router-dom'
import API from "../../utils/API";
import Parallax from "../../components/Parallax";
import { Input, FormBtn } from '../../components/Forms';
import "./style.css";

class Login extends Component {

  state = {
    redirect: false,
    user: [],
    email: "",
    password: "",
    errors: {}
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

  setRedirect = () => {
    this.setState({
      redirect: true
    })
  }

  renderRedirect = () => {
    console.log("renderRedirect initiating");
    if (this.state.redirect) {
      return <Redirect to={{
        pathname: '/passport',
        state: { email: this.state.email }
    }} />
    }
  }

  render() {
    return (
      <React.Fragment>
        {this.renderRedirect()}
        <Parallax />
          <div className="console-back">
            <div className="console">

              <form id="login-frm">
                <Input  
                name="email" 
                type="email" 
                className="form-control" 
                placeholder="Email"
                value={this.state.email}
                onChange = {this.handleInputChange} 
                />
                <Input 
                name="password" 
                type="password" 
                className="form-control" 
                placeholder="Password" 
                value={this.state.password}
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
                {/* <button onClick={this.setRedirect}>redirect test</button> */}
              </form>
                <p style={{float:"right"}}>Or create an account <a href="/signup">here</a></p>

            </div>
        </div>
        {/* <Footer /> */}
      </React.Fragment>
    );
  }
}

export default Login;