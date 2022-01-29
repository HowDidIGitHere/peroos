import React from "react";
import { Link } from "react-router-dom";
import CreatePostCardContainer from "../create_post/create_post_card_container";
import NotFoundPage from "../not_found/not_found";
import PostCard from "../post_card/post_card";
import FooterCard from "../sidebar/footer_card";
import CommunityAbout from "./community_about";
import CommunityEditCardContainer from "./community_edit_card_container";

class CommunityPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 0,
      loadedRightInfo: false
    }
  }

  componentDidMount() {
    this.props.getCommunity()
      .then(() => (
        this.props.getAllPosts(this.props.community.id)
          .then(() => {
            if (this.props.currentUserId !== null) {
              this.props.getCurrentUserVotes()
                // .then(() => this.setState({ loadedRightInfo: true }));
            } else {
              // this.setState({ loadedRightInfo: true })
            }
            this.setState({ loadedRightInfo: true })
          })
      ));
    window.onscroll = (e) => {
      if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
        this.props.getEvenMoreComPosts(this.props.community.id, this.state.page + 1)
          .then(this.setState({ page: this.state.page + 1 }))
        // this.setState({ page: this.state.page + 1 }, () => this.props.getEvenMoreComPosts(this.props.community.id, this.state.page))
      }
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.currentUserId !== this.props.currentUserId) {
      if (this.props.currentUserId !== null) {
        this.props.getCurrentUserVotes();
      }
    }
  }

  render() {

    if (this.props.community && this.props.currentUserVotes) {
    // if (this.state.loadedRightInfo) {
      const communityColor = {
        color: this.props.community.color ? this.props.community.color : '#1a6dcd'
      };
      return (
        <div>
          <div className='community-header'>
            {/* <img>BANNER</img> */}
            <span className='community-banner-placeholder'></span>
            <div className='community-text-panel'>
              <div className='community-header-text'>
                {/* <img/>ICON */}
                <span className='community-header-sub-icon'>
                  <svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="product-hunt" style={communityColor} className="community-sub-icon svg-inline--fa fa-product-hunt fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                    <path fill="currentColor" d="M326.3 218.8c0 20.5-16.7 37.2-37.2 37.2h-70.3v-74.4h70.3c20.5 0 37.2 16.7 37.2 37.2zM504 256c0 137-111 248-248 248S8 393 8 256 119 8 256 8s248 111 248 248zm-128.1-37.2c0-47.9-38.9-86.8-86.8-86.8H169.2v248h49.6v-74.4h70.3c47.9 0 86.8-38.9 86.8-86.8z"></path>
                  </svg>
                </span>
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
              {/* <div>
                <Link to='#'>Posts</Link>
              </div> */}
            </div>
          </div>
          <div className='community-content'>
            <div className='main-community-page'>
              {this.props.currentUserId ? <CreatePostCardContainer /> : null}
              {
                this.props.posts && this.state.loadedRightInfo ? (
                  <ul>
                    {
                      this.props.posts.map((post, idx) => (
                        <PostCard 
                          key={`post-${this.props.community.id}-${idx}`} 
                          history={this.props.history} 
                          post={post} 
                          currentUserId={this.props.currentUserId} 
                          isSignedOut={this.props.currentUserId ? false : true} 
                          openModal={this.props.openModal} 
                          currentUserVotes={this.props.currentUserVotes} 
                          vote={this.props.vote} 
                          updateVote={this.props.updateVote} 
                          removeVote={this.props.removeVote} 
                          editPost={this.props.editPost} 
                          community={this.props.community}
                        />
                      ))
                    }
                  </ul>
                ) : <div className="loader"></div>
              }
            </div>
            <div className='sidebar-community-page'>
              <CommunityEditCardContainer />
              <CommunityAbout match={this.props.match} community={this.props.community} currentUserId={this.props.currentUserId} editCommunity={this.props.editCommunity} />
              {/* <ModeratorsCard community={this.props.community} /> */}
              <FooterCard />
            </div>
          </div>
        </div>
      )
    } else {
      return "...loading"
    }
  }
}

export default CommunityPage;