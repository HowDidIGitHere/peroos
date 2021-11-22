import React from "react";


const Nav = (props) => {
  const loggedOut = () => (
    <div>
      {/* Search Bar */}
      <p>{props.currentUser}</p>
      <button onClick={() => props.openModal('login')}>Log In</button>
      <button onClick={() => props.openModal('signup')}>Sign Up</button>
      {/* button for settings */}
    </div>
  )

  const loggedIn = () => (
    <div>
      <p>{props.currentUser.username}</p>
      {/* button for settings */}
    </div>
  )

  return props.currentUser ? loggedIn() : loggedOut();
}

export default Nav;