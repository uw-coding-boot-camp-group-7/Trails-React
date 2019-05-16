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
    this.callBackendAPI()
    .then(res => this.setState({ data: res.express }))
    .catch(err => console.log(err));
  };

  callBackendAPI = async () => {
    
    const response = await API.getUser();
    const body = await response.json();

    if (response.status !== 200) {
      throw Error(body.message)
    }
    return body
  };

  render() {
    return (
      <Router>
          <Route exact path="/" component={Landing} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/passport" component={Passport} />
          <Route exact path="/info" component={TrailsInfo} />
      </Router>
    );
  }
}


export default App;
