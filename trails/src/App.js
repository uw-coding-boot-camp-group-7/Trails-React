import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import logo from './logo.svg';
import Landing from './components/Page_Landing';
import Login from './components/Page_Login';
import Passport from './components/Page_Passport';
import TrailsInfo from './components/Page_TrailsInfo';
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
