import React from "react";
import { Link } from "react-router-dom";
import NotFoundPage from "../not_found/not_found";

class CommunityPage extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.getCommunity();
  }

  render() {
    {
      return this.props.community ? (
        <div>
          <div className='community-header'>
            {/* <img>BANNER</img> */}
            <span className='community-banner-placeholder'></span>
            <div className='community-text-panel'>
              <div className='community-header-text'>
                {/* <img/>ICON */}
                <div className='community-name'>
                  <div>
                    <h1 className='community-title'>{this.props.community.sub}</h1>
                    <h2>p/{this.props.community.sub}</h2>
                  </div>
                  {/* add onclick to follow */}
                  <button className='bubble-button filled-blue'>Join</button>
                </div>
              </div>
              <div>
                <Link to='#'>Posts</Link>
              </div>
            </div>
          </div>
          {/* <Feed/> */}
          {/* {this.props.community ? (this.props.currentUserId === this.props.community.creator_id ? <h1>Hello!</h1> : <h1>Goodbye!</h1>) : ''} */}
          
        </div>
      ) : <NotFoundPage />
    }
  }
}

export default CommunityPage;