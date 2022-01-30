import React from "react";
import { Link } from "react-router-dom";

class FollowedCommunitiesList extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.getFollowedCommunities();
  }

  render() {
    if (this.props.followedCommunities && this.props.followedCommunities.length > 0) {
      return (
        <div className='card aside-card'>
          <div className='mod-communities-card'>
            <h1>
              Check on the communities you Followed!
            </h1>
          </div>
          <ul className='mod-communities-card-list'>
            {
              this.props.followedCommunities ? 
              this.props.followedCommunities.map((community, idx) => {
                if (community.creator_id !== this.props.currentUserId) {
                  const communityColor = {
                    color: community.color ? community.color : '#1a6dcd'
                  };
                  return (
                    <li key={`followed-community-${idx}`} className='my-community-choice-list-item'>
                      <Link to={`/${community.sub}`}>
                        <span className='my-community-choice-list-item-icon'>
                          <svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="product-hunt" style={communityColor} className="community-sub-icon svg-inline--fa fa-product-hunt fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                            <path fill="currentColor" d="M326.3 218.8c0 20.5-16.7 37.2-37.2 37.2h-70.3v-74.4h70.3c20.5 0 37.2 16.7 37.2 37.2zM504 256c0 137-111 248-248 248S8 393 8 256 119 8 256 8s248 111 248 248zm-128.1-37.2c0-47.9-38.9-86.8-86.8-86.8H169.2v248h49.6v-74.4h70.3c47.9 0 86.8-38.9 86.8-86.8z"></path>
                          </svg>
                        </span>
                        <span className='my-community-choice-list-item-info ellipses'>
                          <p>
                            p/{community.sub}
                          </p>
                          <p>
                            {community.follower_count} follower{community.follower_count !== 1 ? 's' : ''}
                          </p>
                        </span>
                      </Link>
                    </li>
                  )
                }
              })
              : null
            }
          </ul>
        </div>
      );
    } else {
      return null;
    }
  }
}

export default FollowedCommunitiesList;