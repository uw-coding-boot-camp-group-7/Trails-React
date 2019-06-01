import React, { Component } from "react";
import StillHeader from "../../components/StillHeader";
import Wrapper from "../../components/Wrapper";
import Footer from "../../components/Footer";

class TrailsInfo extends Component {

  state = {
    id: "",
    name: "",
    image: "",
    location: ""

  }

  render() {
    return (
      <React.Fragment>
        <StillHeader />
        <Wrapper>
          <h1>Trail Info page</h1>
          {/* <button onClick={this.checkRedirect()}>test me</button> */}
        </Wrapper>
        <Footer />
      </React.Fragment>
    );
  }
}

export default TrailsInfo;

// {this.props.example}