import React, { Component } from "react";
import Parallax from "../../components/Parallax";
import { LoginForm, SignupForm } from '../../components/Forms';
import "./style.css";

class Login extends Component {

  state = {
    currentForm: 'Login'
  };

  handleFormChange = form => {
    this.setState({ currentForm: form });
  };

  renderForm = () => {
    switch (this.state.currentForm) {
      case "Login":
        return <LoginForm handleFormChange={this.handleFormChange}/>;
      case "Signup":
        return <SignupForm handleFormChange={this.handleFormChange} />;
      default:
        return <LoginForm handleFormChange={this.handleFormChange} />;
    }
  }

  render() {
    return (
      <React.Fragment>
        <Parallax />
        <div className="console-back">
          <div className="console">

          {this.renderForm()}

          </div>
        </div>
        {/* <Footer /> */}
      </React.Fragment>
    );
  }
}

export default Login;
