import React, { Component } from "react";
import Slide from "../Slide";
import Wrapper from "../Wrapper";
import TrailCard from "../TrailCard";
import Footer from "../Footer";
import examples from "../../default.json";


class Landing extends Component {

  state = {
    examples
  }

  render() {
    return (
      <React.Fragment>
        <Slide />
        <Wrapper>
          {this.state.examples.map(examples => (
            <TrailCard
              id={examples.id}
              key={examples.id}
              name={examples.name}
              image={examples.image}
              location={examples.location}
            />
          ))}
        </Wrapper>
        <Footer />
      </React.Fragment>
    );
  }
}

export default Landing;
