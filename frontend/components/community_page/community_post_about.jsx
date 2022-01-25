import React from "react";
import { Link } from "react-router-dom";

const CommunityPostAbout = (props) => {
  return (
    <div className='about-community card aside-card'>
      <div className='about-community-header added-space-for-post-about-header'>
        {/* <h2>About Community</h2>s */}
        {/* <svg>ICON</svg> */}
      </div>
      <div className='about-community-sub-name'>
        {
          props.community.sub ? (
            <Link to={`/${props.community.sub}`}>
              {/* <span className='border-circle'>
                <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="eye" className="sub-icon svg-inline--fa fa-eye fa-w-18" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                  <path fill="currentColor" d="M288 144a110.94 110.94 0 0 0-31.24 5 55.4 55.4 0 0 1 7.24 27 56 56 0 0 1-56 56 55.4 55.4 0 0 1-27-7.24A111.71 111.71 0 1 0 288 144zm284.52 97.4C518.29 135.59 410.93 64 288 64S57.68 135.64 3.48 241.41a32.35 32.35 0 0 0 0 29.19C57.71 376.41 165.07 448 288 448s230.32-71.64 284.52-177.41a32.35 32.35 0 0 0 0-29.19zM288 400c-98.65 0-189.09-55-237.93-144C98.91 167 189.34 112 288 112s189.09 55 237.93 144C477.1 345 386.66 400 288 400z"></path>
                </svg>
                <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="eye" className="sub-icon svg-inline--fa fa-eye fa-w-18" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                  <path fill="currentColor" d="M288 144a110.94 110.94 0 0 0-31.24 5 55.4 55.4 0 0 1 7.24 27 56 56 0 0 1-56 56 55.4 55.4 0 0 1-27-7.24A111.71 111.71 0 1 0 288 144zm284.52 97.4C518.29 135.59 410.93 64 288 64S57.68 135.64 3.48 241.41a32.35 32.35 0 0 0 0 29.19C57.71 376.41 165.07 448 288 448s230.32-71.64 284.52-177.41a32.35 32.35 0 0 0 0-29.19zM288 400c-98.65 0-189.09-55-237.93-144C98.91 167 189.34 112 288 112s189.09 55 237.93 144C477.1 345 386.66 400 288 400z"></path>
                </svg>
              </span> */}
              {/* <span className='border-circle'> */}
                <svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="product-hunt" className="sub-icon svg-inline--fa fa-product-hunt fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                  <path fill="currentColor" d="M326.3 218.8c0 20.5-16.7 37.2-37.2 37.2h-70.3v-74.4h70.3c20.5 0 37.2 16.7 37.2 37.2zM504 256c0 137-111 248-248 248S8 393 8 256 119 8 256 8s248 111 248 248zm-128.1-37.2c0-47.9-38.9-86.8-86.8-86.8H169.2v248h49.6v-74.4h70.3c47.9 0 86.8-38.9 86.8-86.8z"></path>
                </svg>
              {/* </span> */}
              <span>{`p/${props.community.sub}`}</span>
            </Link>
          ) : null
        }
      </div>
      <div className='about-community-description'>
        {
          props.community.about ? (
            <p>{props.community.about}</p>
          ) : (
            <p>Nothing Here...</p>
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
          {/* <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="birthday-cake" class="svg-inline--fa fa-birthday-cake fa-w-14" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
            <path fill="currentColor" d="M448 384c-28.02 0-31.26-32-74.5-32-43.43 0-46.825 32-74.75 32-27.695 0-31.454-32-74.75-32-42.842 0-47.218 32-74.5 32-28.148 0-31.202-32-74.75-32-43.547 0-46.653 32-74.75 32v-80c0-26.5 21.5-48 48-48h16V112h64v144h64V112h64v144h64V112h64v144h16c26.5 0 48 21.5 48 48v80zm0 128H0v-96c43.356 0 46.767-32 74.75-32 27.951 0 31.253 32 74.75 32 42.843 0 47.217-32 74.5-32 28.148 0 31.201 32 74.75 32 43.357 0 46.767-32 74.75-32 27.488 0 31.252 32 74.5 32v96zM96 96c-17.75 0-32-14.25-32-32 0-31 32-23 32-64 12 0 32 29.5 32 56s-14.25 40-32 40zm128 0c-17.75 0-32-14.25-32-32 0-31 32-23 32-64 12 0 32 29.5 32 56s-14.25 40-32 40zm128 0c-17.75 0-32-14.25-32-32 0-31 32-23 32-64 12 0 32 29.5 32 56s-14.25 40-32 40z"></path>
          </svg> */}

          <svg viewBox="0 0 22 22" xmlns="http://www.w3.org/2000/svg">
            <g>
                <path fill="none" d="M0 0h24v24H0z"/>
                <path fillRule="nonzero" d="M15.5 2a3.5 3.5 0 0 1 3.437 4.163l-.015.066a4.502 4.502 0 0 1 .303 8.428l-1.086 6.507a1 1 0 0 1-.986.836H6.847a1 1 0 0 1-.986-.836l-1.029-6.17a3 3 0 0 1-.829-5.824L4 9a6 6 0 0 1 8.574-5.421A3.496 3.496 0 0 1 15.5 2zM9 15H6.86l.834 5H9v-5zm4 0h-2v5h2v-5zm4.139 0H15v5h1.305l.834-5zM10 5C7.858 5 6.109 6.684 6.005 8.767L6 8.964l.003.17a2 2 0 0 1-1.186 1.863l-.15.059A1.001 1.001 0 0 0 5 13h12.5a2.5 2.5 0 1 0-.956-4.81l-.175.081a2 2 0 0 1-2.663-.804l-.07-.137A4 4 0 0 0 10 5zm5.5-1a1.5 1.5 0 0 0-1.287.729 6.006 6.006 0 0 1 1.24 1.764c.444-.228.93-.384 1.446-.453A1.5 1.5 0 0 0 15.5 4z"/>
            </g>
          </svg>

          <p>Created {props.community.cake_date}</p>
        </div>
        {
          props.currentUserId ? (
            <div className='hidden-create-post-button'>
              <div>
                {
                  props.currentUserId ? 
                  (props.community.followed_by_current_user ? (
                    <button className='bubble-button' onClick={() => props.unfollow({ community_id: props.community.id })}>Joined</button>
                  ) : (
                    <button className='bubble-button filled-blue' onClick={() => props.follow({ community_id: props.community.id })}>Join</button>
                  )) : (
                    <button className='bubble-button filled-blue' onClick={() => props.openModal('login')}>Join</button>
                  )
                }
                {/* <Link to={`/${props.match.params.communityTitle}/submit`} className='bubble-button filled-blue'>Create Post</Link> */}
              </div>
            </div>
          ) : null
        }
      </div>
    </div>
  )
}

export default CommunityPostAbout;