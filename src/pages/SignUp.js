import React, {Component} from "react";
import {connect} from "react-redux";
import PropTypes from "prop-types";
import {signUp} from "../redux/modules/auth";

class SignUp extends Component {
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
    this.props.signUp(this.email, this.password);
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
        <button onClick={this.onSignInButtonClick}>Sign Up</button>
        <div className="link-message"> already signed up? <a href="#sign_in" onClick={() => jump("sign_in")}>sign in
          here</a></div>
        <style>{`
        .container {
           width: 20vw;
           display: flex;
           flex-direction: column;
           margin: auto;
           padding-top: 5rem;
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
        
        .link-message {
          margin-top: 2rem;
          font-size: 0.8rem;
        }
        a {
          display: block;
          font-size: 1.2rem;
        }
      `}</style>
      </div>
    );
  }
}

SignUp.propTypes = {
  jump: PropTypes.func,
  signUp: PropTypes.func
};
const mapDispatchToProps = (dispatch) => {
  return {
    signUp: (email, password) => dispatch(signUp({email, password}))
  };
};
export default connect(null, mapDispatchToProps)(SignUp);
