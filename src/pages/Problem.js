import React, {Component} from "react";
import {connect} from "react-redux";
import Navbar from "../components/navbar";
import Loading from "../components/Loading";

class Problem extends Component {
  render() {
    const {problem} = this.props;
    if (!problem) {
      return <Loading/>
    }
    const {name, author, statement} = problem;

    return (<div>
      <Navbar/>
      <h1>Problem: {name}</h1>
      <div>
        <div>{statement}</div>

      </div>
    </div>)
  }
}

const mapStateToProps = (state) => ({
  problem: state.problems.list.find(p => p.id === state.problems.current)
})
;
const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Problem);
