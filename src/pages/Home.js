import React, {Component} from "react";
import {connect} from "react-redux";

class Home extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (<div>
      <h1>Home</h1>
      <style jsx>{`
        .container {
        
        }
      `}</style>
    </div>)
  }
}

export default connect(null, null)(Home);
