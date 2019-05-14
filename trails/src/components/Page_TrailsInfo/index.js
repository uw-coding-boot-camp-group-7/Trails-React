import React, { Component } from "react";
import StillHeader from "../StillHeader";
import Wrapper from "../Wrapper";
import Footer from "../Footer";


class TrailsInfo extends Component {

  state = {

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
