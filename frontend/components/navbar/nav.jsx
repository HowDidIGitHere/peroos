import React from "react";

const Nav = (props) => {
  const loggedOut = () => (
    <div>
      {/* Search Bar */}
      <button className='bubble-button' onClick={() => props.openModal('login')}>Log In</button>
      <button className='bubble-button filled-blue' onClick={() => props.openModal('signup')}>Sign Up</button>
      <button className='setting-button'>👤</button>
      {/* button for settings */}
    </div>
  )

  const loggedIn = () => (
    <div>
      <div className='header-user-dropdown'>
        <button>
          <span className='header-user-button-sec'>
            <span>
              {/* <div>
                UserImg
              </div> */}
              <span>
                <p>{props.currentUser.username}</p>
                <span>
                  {/* <img/>ICON */}
                  <p>187 karma</p>
                </span>
              </span>
            </span>
            {/* <img/>DOWN ARROW */}
          </span>
        </button>
        <div className='user-dropdown-menu'>
          <h1>Hello World</h1>
          <button onClick={() => props.logout()}>LOG OUT</button>
        </div>
        {/* button for settings */}
      </div>
    </div>
  )

  return props.currentUser ? loggedIn() : loggedOut();
}

export default Nav;