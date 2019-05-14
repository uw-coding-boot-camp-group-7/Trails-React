import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import LoginSignup from './components/LoginSignup';
import logo from './logo.svg';
import './App.css';
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

  // callBackendAPI = async () => {
  //   const response = await API.getUser();
  //   console.log(response);
  //   const body = await response.json();
  //   if (response.status !== 200) {
  //     throw Error(body.message)
  //   }
  //   return body
  // };

  render() {
    return (
      <Router>
        <div className="App">
          <header className="App header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to Trails</h1>

            <p className="App-intro">{this.state.data}</p>
          </header>
          <Route exact path="/login" component={LoginSignup} />
        </div>
      </Router>
    );
  }
}


export default App;
