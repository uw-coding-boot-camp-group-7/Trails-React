import React, { Component } from "react";
import StillHeader from "../StillHeader";
import Wrapper from "../Wrapper";
import TrailCard from "../TrailCard";
import Footer from "../Footer";
import examples from "../../default.json";


class TrailsInfo extends Component {

  state = {
    examples
  }

  render() {
    return (
      <React.Fragment>
        <StillHeader />
        <Wrapper>
          <h1>Trail Info page</h1>
        </Wrapper>
        <Footer />
      </React.Fragment>
    );
  }
}

export default TrailsInfo;
