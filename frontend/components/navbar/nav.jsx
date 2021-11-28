import React from "react";

const Nav = (props) => {
  const loggedOut = () => (
    <div className='right-nav'>
      {/* Search Bar */}
      <button className='bubble-button' onClick={() => props.openModal('login')}>Log In</button>
      <button className='bubble-button filled-blue' onClick={() => props.openModal('signup')}>Sign Up</button>
      <button className='setting-button'>
        <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="user" className="svg-inline--fa fa-user fa-w-14 silhouette" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
          <path fill="currentColor" d="M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4z"></path>
        </svg>
        <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="chevron-down" className="svg-inline--fa fa-chevron-down fa-w-14 chevron" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
          <path fill="currentColor" d="M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z"></path>
        </svg>
      </button>
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