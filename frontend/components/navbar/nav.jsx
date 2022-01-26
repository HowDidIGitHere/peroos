import React from "react";

class Nav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dropdownToggle: false
    }
    this.handleToggle = this.handleToggle.bind(this);
  }

  handleToggle(e) {
    e.preventDefault();
    this.setState({ dropdownToggle: !this.state.dropdownToggle })
  }

  render() {
    let userColor;
    if (this.props.currentUser) {
      userColor = {
        color: this.props.currentUser.color
      };
    }

    const loggedOut = () => (
      <div className='right-nav'>
        {/* Search Bar */}
        <button className='bubble-button' onClick={() => this.props.openModal('login')}>Log In</button>
        <button className='bubble-button filled-blue' onClick={() => this.props.openModal('signup')}>Sign Up</button>
        {/* <div>
          <button className='setting-button' onClick={this.handleToggle}>
            <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="user" className="svg-inline--fa fa-user fa-w-14 silhouette" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
              <path fill="currentColor" d="M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4z"></path>
            </svg>
            <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="chevron-down" className="svg-inline--fa fa-chevron-down fa-w-14 chevron" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
              <path fill="currentColor" d="M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z"></path>
            </svg>
          </button>
          {
            this.state.dropdownToggle ? (
              <div className='user-dropdown-menu'>
                <button onClick={() => {
                  this.setState({ dropdownToggle: !this.state.dropdownToggle })
                  this.props.openModal('login');
                }}>Log In / Sign Up</button>
              </div>
            ) : ''
          }
        </div> */}
      </div>
    )
  
    const loggedIn = () => (
      <div className='header-user-dropdown'>
        <div>
          <button onClick={this.handleToggle}>
            <span className='header-user-button-sec'>
              <span>
                {/* <div>
                  UserImg
                </div> */}
                <span className='left-side-user-info'>
                  <span>
                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="user-circle" style={userColor} className="svg-inline--fa fa-user-circle fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512">
                      <path fill="currentColor" d="M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm0 96c48.6 0 88 39.4 88 88s-39.4 88-88 88-88-39.4-88-88 39.4-88 88-88zm0 344c-58.7 0-111.3-26.6-146.5-68.2 18.8-35.4 55.6-59.8 98.5-59.8 2.4 0 4.8.4 7.1 1.1 13 4.2 26.6 6.9 40.9 6.9 14.3 0 28-2.7 40.9-6.9 2.3-.7 4.7-1.1 7.1-1.1 42.9 0 79.7 24.4 98.5 59.8C359.3 421.4 306.7 448 248 448z"></path>
                    </svg>
                  </span>
                  <span>
                    <p>{this.props.currentUser.username}</p>
                    <span>
                      <p>
                        <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="bahai" className="svg-inline--fa fa-bahai fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                          <path fill="currentColor" d="M496.25 202.52l-110-15.44 41.82-104.34c6.67-16.64-11.6-32.18-26.59-22.63L307.44 120 273.35 12.82C270.64 4.27 263.32 0 256 0c-7.32 0-14.64 4.27-17.35 12.82l-34.09 107.19-94.04-59.89c-14.99-9.55-33.25 5.99-26.59 22.63l41.82 104.34-110 15.43c-17.54 2.46-21.68 26.27-6.03 34.67l98.16 52.66-74.48 83.54c-10.92 12.25-1.72 30.93 13.29 30.93 1.31 0 2.67-.14 4.07-.45l108.57-23.65-4.11 112.55c-.43 11.65 8.87 19.22 18.41 19.22 5.15 0 10.39-2.21 14.2-7.18l68.18-88.9 68.18 88.9c3.81 4.97 9.04 7.18 14.2 7.18 9.54 0 18.84-7.57 18.41-19.22l-4.11-112.55 108.57 23.65c17.36 3.76 29.21-17.2 17.35-30.49l-74.48-83.54 98.16-52.66c15.64-8.39 11.5-32.2-6.04-34.66zM338.51 311.68l-51.89-11.3 1.97 53.79L256 311.68l-32.59 42.49 1.96-53.79-51.89 11.3 35.6-39.93-46.92-25.17 52.57-7.38-19.99-49.87 44.95 28.62L256 166.72l16.29 51.23 44.95-28.62-19.99 49.87 52.57 7.38-46.92 25.17 35.61 39.93z"></path>
                        </svg>
                        {this.props.currentUser.karma} karma
                      </p>
                    </span>
                  </span>
                </span>
              </span>
              <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="chevron-down" className="svg-inline--fa fa-chevron-down fa-w-14 chevron" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                <path fill="currentColor" d="M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z"></path>
              </svg>
            </span>
          </button>
          {
            this.state.dropdownToggle ? (
              <div className='user-dropdown-menu'>
                {/* <div className='logout-line'></div> */}
                <div>
                  <hr/>
                  <button onClick={() => this.props.logout().then(() => this.setState({ dropdownToggle: !this.state.dropdownToggle }))} className='logout-button-cont'>
                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="sign-out-alt" className="svg-inline--fa fa-sign-out-alt fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M497 273L329 441c-15 15-41 4.5-41-17v-96H152c-13.3 0-24-10.7-24-24v-96c0-13.3 10.7-24 24-24h136V88c0-21.4 25.9-32 41-17l168 168c9.3 9.4 9.3 24.6 0 34zM192 436v-40c0-6.6-5.4-12-12-12H96c-17.7 0-32-14.3-32-32V160c0-17.7 14.3-32 32-32h84c6.6 0 12-5.4 12-12V76c0-6.6-5.4-12-12-12H96c-53 0-96 43-96 96v192c0 53 43 96 96 96h84c6.6 0 12-5.4 12-12z"></path></svg>
                    <p>Log Out</p>
                  </button>
                </div>
              </div>
            ) : ''
          }
        </div>
      </div>
    )
  
    return this.props.currentUser ? loggedIn() : loggedOut();

  }

}

export default Nav;