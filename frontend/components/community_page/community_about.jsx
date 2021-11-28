import React from "react";

const CommunityAbout = (props) => {
  return (
    <div className='about-community card'>
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
          {/* <svg>CAKE ICON</svg> */}
          <p>Created {props.community.cake_date}</p>
        </div>
      </div>
    </div>
  )
}

export default CommunityAbout;