import React, { Component } from "react";
import Parallax from "../Parallax";
import Wrapper from "../Wrapper";
import Footer from "../Footer";

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
