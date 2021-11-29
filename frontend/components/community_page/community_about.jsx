import React from "react";

const CommunityAbout = (props) => {
  return (
    <div className='about-community card aside-card'>
      <div className='about-community-header'>
        <h2>About Community</h2>
        {/* <svg>ICON</svg> */}
      </div>
      <div className='about-community-description'>
        {
          props.community.about ? (
            <p>{props.community.about}</p>
          ) : (
            <p>Nothing Here</p>
          )
        }
        <div className='user-tracker'>
          <span>
            <h2>{props.community.follower_count}</h2>
            <p>Followers</p>
          </span>
          {/* <span>
            
          </span> */}
        </div>
        <hr/>
        <div className='community-cake-tracker'>
          <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="birthday-cake" class="svg-inline--fa fa-birthday-cake fa-w-14" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
            <path fill="currentColor" d="M448 384c-28.02 0-31.26-32-74.5-32-43.43 0-46.825 32-74.75 32-27.695 0-31.454-32-74.75-32-42.842 0-47.218 32-74.5 32-28.148 0-31.202-32-74.75-32-43.547 0-46.653 32-74.75 32v-80c0-26.5 21.5-48 48-48h16V112h64v144h64V112h64v144h64V112h64v144h16c26.5 0 48 21.5 48 48v80zm0 128H0v-96c43.356 0 46.767-32 74.75-32 27.951 0 31.253 32 74.75 32 42.843 0 47.217-32 74.5-32 28.148 0 31.201 32 74.75 32 43.357 0 46.767-32 74.75-32 27.488 0 31.252 32 74.5 32v96zM96 96c-17.75 0-32-14.25-32-32 0-31 32-23 32-64 12 0 32 29.5 32 56s-14.25 40-32 40zm128 0c-17.75 0-32-14.25-32-32 0-31 32-23 32-64 12 0 32 29.5 32 56s-14.25 40-32 40zm128 0c-17.75 0-32-14.25-32-32 0-31 32-23 32-64 12 0 32 29.5 32 56s-14.25 40-32 40z"></path>
          </svg>
          <p>Created {props.community.cake_date}</p>
        </div>
      </div>
    </div>
  )
}

export default CommunityAbout;