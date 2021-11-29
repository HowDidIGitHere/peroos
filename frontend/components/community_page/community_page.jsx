import React from "react";
import { Link } from "react-router-dom";
import CreatePostCardContainer from "../create_post/create_post_card_container";
import NotFoundPage from "../not_found/not_found";
import FooterCard from "../sidebar/footer_card";
import CommunityAbout from "./community_about";

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
                  {
                    this.props.currentUserId ?
                    (this.props.community.followed_by_current_user ? (
                      <button className='bubble-button' onClick={() => this.props.unfollow({ community_id: this.props.community.id })}>Joined</button>
                    ) : (
                      <button className='bubble-button filled-blue' onClick={() => this.props.follow({ community_id: this.props.community.id })}>Join</button>
                    )) : (
                      <button className='bubble-button filled-blue' onClick={() => this.props.openModal('login')}>Join</button>
                    )
                  }
                  
                </div>
              </div>
              <div>
                <Link to='#'>Posts</Link>
              </div>
            </div>
          </div>
          {/* <Feed/> */}
          {/* {this.props.community ? (this.props.currentUserId === this.props.community.creator_id ? <h1>Hello!</h1> : <h1>Goodbye!</h1>) : ''} */}
          <div className='community-content'>
            <div className='main-community-page'>
              <CreatePostCardContainer />
              <div className='temp card post-card'>
                PLACEHOLDER CARDS
              </div>
            </div>
            <div className='sidebar-community-page'>
              <CommunityAbout community={this.props.community}/>
              {/* <ModeratorsCard community={this.props.community} /> */}
              <FooterCard />
            </div>
          </div>
        </div>
      ) : <NotFoundPage />
    }
  }
}

export default CommunityPage;