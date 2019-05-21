import React, { Component } from "react";
import SlideHeader from "../../components/SlideHeader";
import Wrapper from "../../components/Wrapper";
import TrailCard from "../../components/TrailCard";
import Footer from "../../components/Footer";
import Nav from "../../components/Nav";
import Searchbar from "../../components/Searchbar";

class Landing extends Component {

  state = {
    search: "",
    // longitude: "",
    // lattitude: "",
    trails: [],
    lattitude:"47.6062",
    longitude:"-122.3321"

  }
  // https://www.hikingproject.com/data/get-trails?lat=40.0274&lon=-105.2519&maxDistance=10&key=200440393-24756b1a160e4136ab4606caf960655b

  componentDidMount() {
    this.loadTrails();
  }

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleSearchSubmit = event => {
    fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${this.state.search}&bounds=34.172684,-118.604794|34.236144,-118.500938&key=AIzaSyADwTKftdeqrk5jC1DSCZJLk9nkGi_aJk0`)
    .then(res => res.json())
    .then(json => {
      this.setState({
        longitude: json[0].geometry.location.lng,
        lattitude: json[0].geometry.location.lat,
      });
    }).then(this.loadTrails());
  }

  loadTrails = () => {
    fetch(`https://www.hikingproject.com/data/get-trails?lat=${this.state.lattitude}&lon=${this.state.longitude}&maxDistance=30&maxResults=15&sort=distance&key=200440393-24756b1a160e4136ab4606caf960655b`)
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
        <SlideHeader>
          <Nav />
          <Searchbar />
        </SlideHeader>
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

export default Landing;
