import React, { Component } from "react";
import SlideHeader from "../SlideHeader";
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
        <SlideHeader />
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
