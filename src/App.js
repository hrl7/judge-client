import React, {Component} from 'react';
import {connect} from "react-redux";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Home from "./pages/Home";
import './App.css';

import {jump} from "./redux/modules/route";

const ROUTES = {
  "sign_in": SignIn,
  "sign_up": SignUp,
  "home": Home,
};

class App extends Component {
  render() {
    const Content = ROUTES[this.props.path];
    return (
      <div className="App">
        <Content jump={this.props.jump}/>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({path: state.route.path});
const mapDispatchToProps = (dispatch) => ({jump: (to) => dispatch(jump(to))});
export default connect(mapStateToProps, mapDispatchToProps)(App);
