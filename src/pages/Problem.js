import React, {Component} from "react";
import {connect} from "react-redux";
import Navbar from "../components/navbar";
import Loading from "../components/Loading";

import {REPL, Lexer, Parser} from "scheme-interpreter";

class Problem extends Component {
  constructor(props) {
    super(props);
    this.repl = new REPL();
    this.state = {
      src: "",
      results: []
    };
    this.handleEdit = this.handleEdit.bind(this);
    this.run= this.run.bind(this);
  }

  handleEdit(e) {
    this.setState({src: e.target.value});
  }

  run(e) {
    this.repl.run(this.state.src);
    this.setState({results: [...this.state.results, this.repl.print()]});
  }

  render() {
    const {problem} = this.props;
    if (!problem) {
      return <Loading/>
    }
    const {name, author, statement} = problem;

    return (<div>
      <Navbar/>
      <h1>Problem: {name}</h1>
      <div>{statement} by <span>{author.email}</span></div>
      <div className="playground-container">
        <div className="editor-container">
          <h2>Editor</h2>
          <button onClick={this.run}>run</button>
          <textarea onChange={this.handleEdit}/>
        </div>
        <div className="repl-container">
          <h2>Result</h2>
          <pre>
          {this.state.results.join("\n")}
          </pre>
        </div>
      </div>
      <style jsx>{`
        .playground-container {
           display: flex;
           justify-content: space-around;
        } 
        
        .playground-container > div {
          display: flex;
          flex-direction: column;
          width: 100%;
        }
        
      `}</style>
    </div>)
  }
}

const mapStateToProps = (state) => ({
    problem: state.problems.list.find(p => p.id === state.problems.current)
  })
;
const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Problem);
