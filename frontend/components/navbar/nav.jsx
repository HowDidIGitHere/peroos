import React from "react";
import { Link } from "react-router-dom";

class Nav extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const loggedOut = () => (
      <div>
        {/* Search Bar */}
        <button onClick={() => this.props.openModal('login')}>Log In</button>
        <button onClick={() => this.props.openModal('signup')}>Sign Up</button>
        {/* button for settings */}
      </div>
    )

    const loggedIn = () => (
      <div>

        {/* button for settings */}
      </div>
    )

    return this.props.currentUser ? loggedIn() : loggedOut();
  }
}

export default Nav;