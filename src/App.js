import React, {Component} from 'react';
import {connect} from "react-redux";
import {jump} from "./redux/modules/route";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Home from "./pages/Home";
import Problem from "./pages/Problem";
import NotFound from "./pages/NotFound";

const ROUTES = {
  "sign_in": SignIn,
  "sign_up": SignUp,
  "home": Home,
  "problem": Problem
};

class App extends Component {
  render() {
    const Content = ROUTES[this.props.path] || NotFound;
    return (
      <div className="App">
        <Content jump={this.props.jump}/>
        <style>{`
        .App {
          background-color: #282c34;
          height: 100vh;
          color: white;
          top: 0;
        }
        `}</style>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({path: state.route.path});
const mapDispatchToProps = (dispatch) => ({jump: (to) => dispatch(jump(to))});
export default connect(mapStateToProps, mapDispatchToProps)(App);
