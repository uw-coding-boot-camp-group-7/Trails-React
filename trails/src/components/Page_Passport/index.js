import React, { Component } from "react";
import Parallax from "../Parallax";
import Wrapper from "../Wrapper";
import TrailCard from "../TrailCard";
import Footer from "../Footer";
import examples from "../../default.json";


class Passport extends Component {

  state = {
    examples
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
