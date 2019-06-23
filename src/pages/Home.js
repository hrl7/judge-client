import React, {Component} from "react";
import {connect} from "react-redux";
import Navbar from "../components/navbar";
import ProblemList from "../components/ProblemList";

class Home extends Component {

  render() {
    return (<div className="container">
      <Navbar/>
      <h1>Home</h1>
      <ProblemList/>
      <style jsx>{`
        .container {
           
        }
      `}</style>
    </div>)
  }
}

export default connect(null, null)(Home);
