import React, {Component} from 'react';
import {connect} from "react-redux";
import {signOut} from "../redux/modules/auth";

class Navbar extends Component {
  render() {
    const { signOut } = this.props;
    return (<nav>
      <ul>
        <button onClick={signOut}>Sign Out</button>
      </ul>
    </nav>)
  }
}

const mapDispatchToProps = (dispatch) => ({
  signOut: () => dispatch(signOut())
});

export default connect(null, mapDispatchToProps)(Navbar);
