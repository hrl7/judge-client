import React, {Component} from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {signIn} from "../redux/modules/auth";

class SignIn extends Component {
  constructor(props) {
    super(props);
    this.email = "";
    this.password = "";

    this.onEmailChange = this.onEmailChange.bind(this);
    this.onPasswordChange = this.onPasswordChange.bind(this);
    this.onSignInButtonClick = this.onSignInButtonClick.bind(this);
  }

  onEmailChange(e) {
    this.email = e.target.value
  }

  onPasswordChange(e) {
    this.password = e.target.value
  }

  onSignInButtonClick() {
    this.props.signIn(this.email, this.password);
  }

  render() {
    const {jump} = this.props;
    return (
      <div className="container">
        <div className="row">
          <div>email:</div>
          <input type="email" onChange={this.onEmailChange}/>
        </div>
        <div className="row">
          <div>password:</div>
          <input type="password" onChange={this.onPasswordChange}/>
        </div>
        <button onClick={this.onSignInButtonClick}>Sign In</button>
        <a href="#sign_up" onClick={() => jump("sign_up")}>sign up</a>
        <style>{`
        .container {
           width: 20vw;
           display: flex;
           flex-direction: column;
        }
        
        .row {
           width: 100%;
           display: flex;
           flex-direction: row;
           justify-content: space-between;
           margin-bottom: 1rem;
        }
        
        input {
          display: block;
        }
        
        button {
          font-size: 1.5rem; 
          padding: 0.5rem;
          border-radius: 5px;
        }
      `}</style>
      </div>
    );
  }
}

SignIn.propTypes = {
  jump: PropTypes.func,
  signIn: PropTypes.func
};

const mapDispatchToProps = (dispatch) => {
  return {
    signIn: (email, password) => dispatch(signIn(email, password))
  };
};
export default connect(null, mapDispatchToProps)(SignIn);
