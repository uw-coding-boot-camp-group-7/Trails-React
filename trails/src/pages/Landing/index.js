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
    longitude: -122.3321,
    lattitude: 47.6062,
    trails: []
  }

  componentDidMount() {
    this.loadTrails();
  }

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  }

  handleSearchSubmit = event => {
    if(event.key == 'Enter'){
      if (this.state.search !== "") {
        fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${this.state.search}&bounds=34.172684,-118.604794|34.236144,-118.500938&key=AIzaSyADwTKftdeqrk5jC1DSCZJLk9nkGi_aJk0`)
        .then(res => res.json())
        .then(json => {
          this.setState({
            longitude: json.results[0].geometry.location.lng,
            lattitude: json.results[0].geometry.location.lat,
            search: ""
          });
          this.loadTrails();
        });
      }
    }
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

  saveTrail = () => {

  }

  render() {
    return (
      <React.Fragment>
        <SlideHeader>
          <Nav>
            <li><a href="/passport">Passport</a></li>  
            <li><a href="/login">Log in</a></li>  
            <li><a href="/signup">Sign up</a></li>  
          </Nav>
          <Searchbar 
            name="search" 
            value={this.state.search}
            onChange = {this.handleInputChange}
            onKeyPress={this.handleSearchSubmit} 
          />
        </SlideHeader>
        <Wrapper>
          {this.state.trails.map(trails => (
            <TrailCard
              id={trails.id}
              key={trails.id}
              name={trails.name}
              image={trails.imgSmallMed}
              location={trails.location}
              onClick={this.saveTrail}
            />
          ))}
        </Wrapper>
        <Footer />
      </React.Fragment>
    );
  }
}

export default Landing;
