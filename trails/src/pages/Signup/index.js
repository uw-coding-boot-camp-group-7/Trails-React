import React, { Component } from "react";
import API from "../../utils/API"
import Parallax from "../../components/Parallax";
import Wrapper from "../../components/Wrapper";
import Footer from "../../components/Footer";

class Signup extends Component {

  state = {
    users: [],
    username: "",
    email: "",
    password: "",
    password2: ""
  }

  handleInputChange = event => {
      // Destructure the name and value properties off of event.target
      // Update the appropriate state
      const { name, value } = event.target;
      this.setState({
          [name]: value
      });
  };

  handleFormSubmit = event => {
    console.log('in form submit')
    event.preventDefault();
    if (this.state.username && this.state.password) {
      console.log('in handleFormSubmit');
      API.createUser({
        username: this.state.username,
        password: this.state.password,
        email: this.state.email
      })
      .then("../trails/build/index.html").catch(err => console.log(err));
    }
  };

  render() {
      return (
        <React.Fragment>
          <Parallax />
          <Wrapper>
            <form id="signup-frm">
                <div className="form-group">
                    <input  
                    value= {this.state.username}
                    onChange= {this.handleInputChange}
                    name="username"
                    type="username" 
                    className="form-control" 
                    id="username-input" 
                    placeholder="Username" 
                    />
                </div>
                <div className="form-group">
                    <input  
                    value= {this.state.email}
                    onChange= {this.handleInputChange}
                    name="email"
                    type="email" 
                    className="form-control" 
                    id="email-input" 
                    placeholder="Email" 
                    />
                </div>
                <div className="form-group">
                    <input 
                    value= {this.state.password}
                    onChange= {this.handleInputChange}
                    name="password"
                    type="password" 
                    className="form-control" 
                    id="password-input" 
                    placeholder="Password" 
                    />
                </div>
                <div className="form-group">
                    <input 
                    value= {this.state.password2}
                    onChange= {this.handleInputChange}
                    name="password2"
                    type="password" 
                    className="form-control" 
                    id="confirm-input" 
                    placeholder="Confirm your password" 
                    />
                </div>
                <button onClick={this.handleFormSubmit} type="submit" className="btn btn-default custom-btn" id="signup">Sign up</button>
            </form>
          </Wrapper>
          <Footer />
        </React.Fragment>
      );
    }
  }

export default Signup;