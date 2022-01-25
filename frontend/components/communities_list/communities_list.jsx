import React from "react";
import { Link } from "react-router-dom";
import FooterCard from "../sidebar/footer_card";

class CommunitiesList extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.getAllCommunities();
  }

  render() {

    return (
      <div>
        <div className='communities-list-header'>
          <div className='communities-list-header-content'>
            <h1>Top Communities</h1>
            <p>Browse Peroos' most popular communities.</p>
          </div>
        </div>

        <div className='community-content'>
          <div className='main-community-page'>
            <div className='communities-listing'>
              <div className='communities-list-ex'>
                <h2>Top Communities</h2>
                <p>Followers</p>
              </div>
              <ol className='communities-list-entries'>
                {
                  this.props.allCommunities ? this.props.allCommunities.map((community, idx) => {
                    const communityColor = {
                      color: community.color ? community.color : '#1a6dcd'
                    }

                    return (
                      <li key={`com-${idx}`}>
                        <Link to={`/${community.sub}`}>
                          <span className='community-list-item'>
                            <h1>{idx + 1}</h1>
                            <span className="sub-list-icon">
                              <svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="product-hunt" style={communityColor} className="svg-inline--fa fa-product-hunt fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                <path fill="currentColor" d="M326.3 218.8c0 20.5-16.7 37.2-37.2 37.2h-70.3v-74.4h70.3c20.5 0 37.2 16.7 37.2 37.2zM504 256c0 137-111 248-248 248S8 393 8 256 119 8 256 8s248 111 248 248zm-128.1-37.2c0-47.9-38.9-86.8-86.8-86.8H169.2v248h49.6v-74.4h70.3c47.9 0 86.8-38.9 86.8-86.8z"></path>
                              </svg>
                            </span>
                            <h1>p/{community.sub}</h1>
                          </span>
                          <span>
  
                            <p>{community.follower_count}</p>
                          </span>
                        </Link>
                      </li>
                    )
                  }) : ''
                }
              </ol>
            </div>
          </div>
          <div className='sidebar-community-page'>
            {/* <CommunityAbout community={this.props.community}/> */}
            {/* <ModeratorsCard community={this.props.community} /> */}
            <FooterCard />
          </div>
        </div>


        {/* <div className='communities-list-content'>
        </div> */}
      </div>

    )
  }
}

export default CommunitiesList;