import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Landing from './pages/Landing';
import Login from './pages/Login';
import Passport from './pages/Passport';
import TrailsInfo from './pages/TrailsInfo';
import API from './utils/API'


class App extends Component {

  state = {
    data: null
  };

  componentDidMount() {
    this.callBackendAPI();
  };

  callBackendAPI = () => {
    API.getUser()
      .then(res =>
        this.setState({ data: res.data })
      );
  };

  render() {
    return (
      <Router>
          {/* <p className="App-intro">{this.state.data}</p> */}
          <Route exact path="/" component={Landing} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/passport" component={Passport} />
          <Route exact path="/info" component={TrailsInfo} />
      </Router>
    );
  }
}


export default App;
