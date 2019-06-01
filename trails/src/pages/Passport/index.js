import React, { Component } from "react";
import { Redirect } from 'react-router-dom'
import API from "../../utils/API"
import Parallax from "../../components/Parallax";
import Wrapper from "../../components/Wrapper";
import Footer from "../../components/Footer";
import TrailCard from "../../components/TrailCard";
import "./style.css";

class Passport extends Component {

  state = {
    username: "dummyData",
    savedArr: ["7001635","7002742","7000108","7002175","7000130", "7000130", "7004226", "7002439", "7011192", "7004682" ],
    trails: [],
    redirect: false,
    clickedTrail: ""
  }

  componentDidMount() {
    this.loadSavedTrails();
    // this.handleUserData();
  }

  loadSavedTrails = () => {
    let idStr = this.state.savedArr.join(',');

    fetch(`https://www.hikingproject.com/data/get-trails-by-id?ids=${idStr}&key=200440393-24756b1a160e4136ab4606caf960655b`)
    .then(res => res.json())
    .then(json => {
      this.setState({
        trails: json.trails,
      });
    });
  };

  handleInfoReq = () => {
    console.log('handInfo function initiated');
    console.log(this.prop);
    // this.setState({
    //   clickedTrail: id
    // })
  }

  setRedirect = () => {
    this.setState({
      redirect: true
    })
  }

  renderRedirect = () => {
    console.log("renderRedirect initiating");
    if (this.state.redirect) {
      return <Redirect to={{
        pathname: '/info',
        state: { idReq: this.state.clickedTrail }
    }} />
    }
  }

  render() {
    return (
      <React.Fragment>
        {this.renderRedirect()}
        <Parallax />
          <div className="custom-title center">
            <h1>Saved Hikes</h1>
          </div>
          {/* <div className="sub-title center">
            <h5>wished hikes</h5>
          </div> */}
        <Wrapper>
          {this.state.trails.map(trails => (
            <TrailCard
              id={trails.id}
              key={trails.id}
              name={trails.name}
              image={trails.imgSmallMed}
              location={trails.location}
            >
            {/* <div className="info-req" onClick={this.setRedirect}>Save this trail +</div> */}
            </TrailCard>
          ))}
        </Wrapper>
        <Footer />
      </React.Fragment>
    );
  }
}

export default Passport;
