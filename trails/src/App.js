import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
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
          <Route exact path="/" component={Landing} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/passport" component={Passport} />
          <Route exact path="/info" component={TrailsInfo} />
          <p className="App-intro">{this.state.data}</p>
      </Router>
    );
  }
}


export default App;
