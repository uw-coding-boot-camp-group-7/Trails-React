import React, { Component } from "react";
import Parallax from "../../components/Parallax";
import Wrapper from "../../components/Wrapper";
import Footer from "../../components/Footer";
import TrailCard from "../../components/TrailCard";
import "./style.css";

class Passport extends Component {

  state = {
    username: "dummyData",
    userSaved: ["7001635","7002742","7000108","7002175","7000130"],
    trails: []

  }

  componentDidMount() {
    this.loadSavedTrails();
  }

  loadSavedTrails = () => {
    let idStr = this.state.userSaved.join(',');

    fetch(`https://www.hikingproject.com/data/get-trails-by-id?ids=${idStr}&key=200440393-24756b1a160e4136ab4606caf960655b`)
    .then(res => res.json())
    .then(json => {
      this.setState({
        trails: json.trails,
      });
    });
  };

  render() {
    return (
      <React.Fragment>
        <Parallax />
          <div className="passport-title center">
            <h1>{this.state.username}</h1>
          </div>
          <div className="sub-title center">
            <h5>wished hikes</h5>
          </div>
        <Wrapper>
          {this.state.trails.map(trails => (
            <TrailCard
              id={trails.id}
              key={trails.id}
              name={trails.name}
              image={trails.imgSmallMed}
              location={trails.location}
            />
          ))}
        </Wrapper>
        <Footer />
      </React.Fragment>
    );
  }
}

export default Passport;
