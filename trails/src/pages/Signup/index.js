import React, { Component } from "react";
import API from "../../utils/API"
import Parallax from "../../components/Parallax";
import Wrapper from "../../components/Wrapper";
import Footer from "../../components/Footer";

class Signup extends Component {

  state = {
    userName: "",
    email: "",
    password: ""
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
  // When the form is submitted, prevent its default behavior, get recipes update the recipes state
  event.preventDefault();
  API.getRecipes(this.state.)
      .then(res => this.setState({ recipes: res.data }))
      .catch(err => console.log(err));
  };

  render() {
      return (
        <React.Fragment>
          <Parallax />
          <Wrapper>
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
          </Wrapper>
          <Footer />
        </React.Fragment>
      );
    }
  }

export default Signup;