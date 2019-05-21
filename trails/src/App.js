import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Landing from './pages/Landing';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Passport from './pages/Passport';
import TrailsInfo from './pages/TrailsInfo';
import API from './utils/API'


class App extends Component {

  // state = {
  //   data: [],
  //   userSearch: ""
  // };

  // componentDidMount() {
  //   this.callBackendAPI();
  // };

  // callBackendAPI = () => {

  //   API.getUser(this.state.userSearch)
  //     .then(res => this.setState({ data: res.data }))
  //     .catch(err => console.log(err));
  // };

  render() {
    return (
      <Router>
          <Route exact path="/" component={Landing} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/passport" component={Passport} />
          <Route exact path="/info" component={TrailsInfo} />
          {/* <p className="App-intro">{this.state.data}</p> */}
      </Router>
    );
  }
}


export default App;
