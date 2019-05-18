import React, { Component } from "react";
import SlideHeader from "../../components/SlideHeader";
import Wrapper from "../../components/Wrapper";
import TrailCard from "../../components/TrailCard";
import Footer from "../../components/Footer";
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
