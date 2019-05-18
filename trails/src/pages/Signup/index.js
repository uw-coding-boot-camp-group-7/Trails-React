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
  API.getRecipes(this.state.recipeSearch)
      .then(res => this.setState({ recipes: res.data }))
      .catch(err => console.log(err));
  };

  render() {
      return (
        <React.Fragment>
          <Parallax />
          <Wrapper>
            <h1>Sign-up Page</h1>
          </Wrapper>
          <Footer />
        </React.Fragment>
      );
    }
  }

export default Signup;