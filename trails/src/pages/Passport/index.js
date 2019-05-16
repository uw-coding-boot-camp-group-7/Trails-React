import React, { Component } from "react";
import Parallax from "../../components/Parallax";
import Wrapper from "../../components/Wrapper";
import Footer from "../../components/Footer";

class Passport extends Component {

  state = {

  }

  render() {
    return (
      <React.Fragment>
        <Parallax />
        <Wrapper>
          <h1>Passport page</h1>
        </Wrapper>
        <Footer />
      </React.Fragment>
    );
  }
}

export default Passport;
