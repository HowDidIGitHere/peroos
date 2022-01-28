import React from "react";
import { Link } from "react-router-dom";

class CommunityAbout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      community: this.props.community,
      toggleEdit: false
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    e.stopPropagation();
    const tempCom = Object.assign({}, this.state.community);
    this.props.editCommunity(tempCom)
      .then(() => this.setState({ toggleEdit: !this.state.toggleEdit }));
  }

  handleChange(e) {
    const tempCom = Object.assign({}, this.state.community)
    tempCom['about'] = e.target.value;
    this.setState({
      community: tempCom
    });
  }

  render() {
    return (
      <div className='about-community card aside-card'>
        <div className='about-community-header'>
          <h2>About Community</h2>
          {/* <svg>ICON</svg> */}
        </div>
        <div className='about-community-description'>
          {
            this.props.community.creator_id === this.props.currentUserId ? (
              this.state.toggleEdit ? (
                <form className='community-edit-form'>
                  <textarea 
                    type='text' 
                    maxLength='500' 
                    id='community-edit-text-box' 
                    placeholder='Add a description' 
                    value={this.state.community.about} 
                    onChange={this.handleChange} 
                    onInput={(e) => {
                      e.target.style.height = '5px'; 
                      e.target.style.height = (e.target.scrollHeight - 12) + 'px'; 
                    }}
                    onFocus={(e) => {
                      e.target.style.height = '5px'; 
                      e.target.style.height = (e.target.scrollHeight - 12) + 'px'; 
                    }}
                  />
                  <span className='community-edit-text-box-footer'>
                    <p className='community-edit-text-box-count'>
                      {500 - this.state.community.about.length} Characters remaining
                    </p>
                    <span className='community-edit-text-box-leave'>
                      <p 
                        onClick={(e) => { 
                          e.preventDefault(); 
                          e.stopPropagation(); 
                          this.setState({ toggleEdit: !this.state.toggleEdit });
                        }}
                      >
                        Cancel
                      </p>
                      <p onClick={this.handleSubmit}>
                        Save
                      </p>
                    </span>
                  </span>
                </form>
              ) : (
                <div 
                  className='about-community-description-about owner' 
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    this.setState({ toggleEdit: !this.state.toggleEdit }, () => {
                      document.getElementById('community-edit-text-box').focus();
                    });
                  }}
                >
                  <p>{this.props.community.about}</p>
                  <div className='edit-icon-about'>
                    <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="edit" className="svg-inline--fa fa-edit fa-w-18" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                      <path fill="currentColor" d="M402.3 344.9l32-32c5-5 13.7-1.5 13.7 5.7V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V112c0-26.5 21.5-48 48-48h273.5c7.1 0 10.7 8.6 5.7 13.7l-32 32c-1.5 1.5-3.5 2.3-5.7 2.3H48v352h352V350.5c0-2.1.8-4.1 2.3-5.6zm156.6-201.8L296.3 405.7l-90.4 10c-26.2 2.9-48.5-19.2-45.6-45.6l10-90.4L432.9 17.1c22.9-22.9 59.9-22.9 82.7 0l43.2 43.2c22.9 22.9 22.9 60 .1 82.8zM460.1 174L402 115.9 216.2 301.8l-7.3 65.3 65.3-7.3L460.1 174zm64.8-79.7l-43.2-43.2c-4.1-4.1-10.8-4.1-14.8 0L436 82l58.1 58.1 30.9-30.9c4-4.2 4-10.8-.1-14.9z"></path>
                    </svg>
                  </div>
                </div>
              )) : (
              <div className='about-community-description-about'>
                <p>{this.props.community.about}</p>
              </div>
            )
          }
          <div className='user-tracker'>
            <span>
              <h2>{this.props.community.follower_count}</h2>
              <p>Followers</p>
            </span>
            {/* <span>
              
            </span> */}
          </div>
          <hr/>
          <div className='community-cake-tracker'>
            {/* <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="birthday-cake" class="svg-inline--fa fa-birthday-cake fa-w-14" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
              <path fill="currentColor" d="M448 384c-28.02 0-31.26-32-74.5-32-43.43 0-46.825 32-74.75 32-27.695 0-31.454-32-74.75-32-42.842 0-47.218 32-74.5 32-28.148 0-31.202-32-74.75-32-43.547 0-46.653 32-74.75 32v-80c0-26.5 21.5-48 48-48h16V112h64v144h64V112h64v144h64V112h64v144h16c26.5 0 48 21.5 48 48v80zm0 128H0v-96c43.356 0 46.767-32 74.75-32 27.951 0 31.253 32 74.75 32 42.843 0 47.217-32 74.5-32 28.148 0 31.201 32 74.75 32 43.357 0 46.767-32 74.75-32 27.488 0 31.252 32 74.5 32v96zM96 96c-17.75 0-32-14.25-32-32 0-31 32-23 32-64 12 0 32 29.5 32 56s-14.25 40-32 40zm128 0c-17.75 0-32-14.25-32-32 0-31 32-23 32-64 12 0 32 29.5 32 56s-14.25 40-32 40zm128 0c-17.75 0-32-14.25-32-32 0-31 32-23 32-64 12 0 32 29.5 32 56s-14.25 40-32 40z"></path>
            </svg> */}
  
            <svg viewBox="0 0 22 22" xmlns="http://www.w3.org/2000/svg">
              <g>
                  <path fill="none" d="M0 0h24v24H0z"/>
                  <path fillRule="nonzero" d="M15.5 2a3.5 3.5 0 0 1 3.437 4.163l-.015.066a4.502 4.502 0 0 1 .303 8.428l-1.086 6.507a1 1 0 0 1-.986.836H6.847a1 1 0 0 1-.986-.836l-1.029-6.17a3 3 0 0 1-.829-5.824L4 9a6 6 0 0 1 8.574-5.421A3.496 3.496 0 0 1 15.5 2zM9 15H6.86l.834 5H9v-5zm4 0h-2v5h2v-5zm4.139 0H15v5h1.305l.834-5zM10 5C7.858 5 6.109 6.684 6.005 8.767L6 8.964l.003.17a2 2 0 0 1-1.186 1.863l-.15.059A1.001 1.001 0 0 0 5 13h12.5a2.5 2.5 0 1 0-.956-4.81l-.175.081a2 2 0 0 1-2.663-.804l-.07-.137A4 4 0 0 0 10 5zm5.5-1a1.5 1.5 0 0 0-1.287.729 6.006 6.006 0 0 1 1.24 1.764c.444-.228.93-.384 1.446-.453A1.5 1.5 0 0 0 15.5 4z"/>
              </g>
            </svg>
  
            <p>Created {this.props.community.cake_date}</p>
          </div>
          {
            this.props.currentUserId ? (
              <div className='hidden-create-post-button'>
                <div>
                  <Link to={`/${this.props.match.params.communityTitle}/submit`} className='bubble-button filled-blue'>Create Post</Link>
                </div>
              </div>
            ) : null
          }
        </div>
      </div>
    )
  }
}

export default CommunityAbout;