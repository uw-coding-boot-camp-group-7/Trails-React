import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import logo from './logo.svg';
import LoginSignup from './components/LoginSignup';
import Landing from './components/Landing';
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
          <Route exact path="/login" component={LoginSignup} />
          <Route exact path="/" component={Landing} />
      </Router>
    );
  }
}


export default App;
