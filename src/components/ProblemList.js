import React, {Component} from 'react';
import {connect} from "react-redux";
import ProblemListItem from "./ProblemListItem";
import {setProblem} from "../redux/modules/problems";
import {jump} from "../redux/modules/route";

class ProblemList extends Component {
  render() {
    const {problems, select} = this.props;
    return (<div>
      <h1>Latest Problems</h1>
      <ol>
        {problems.map(p => (<ProblemListItem key={p.id} onClick={select} {...p} />))}
      </ol>
    </div>)
  }
}

const mapStateToProps = (state) => ({problems: state.problems.list});
const mapDispatchToProps = (dispatch) => ({
  select: (id) => {
    dispatch(setProblem(id));
    dispatch(jump("problem"));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(ProblemList);
