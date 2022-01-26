import React from "react";
import HomeDescContainer from "../home_description/home_desc_container";
import FooterCard from "../sidebar/footer_card";
import CreatePostCardContainer from "../create_post/create_post_card_container";
import PostCard from "../post_card/post_card";

class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 0,
      loadedRightInfo: false
    }
  }

  componentDidMount() {
    this.props.getPersonalFeed()
      .then(() => {
        if (this.props.currentUserId !== null) {
          this.props.getCurrentUserVotes()
            .then(() => this.setState({ loadedRightInfo: true }));
        }
      });
    window.onscroll = (e) => {
      if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
        this.setState({ page: this.state.page + 1 }, () => this.props.getEvenMoreFeedPosts(this.state.page).then(() => console.log(this.state.page)))
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
    return (
      <div className='community-content'>
        <div className='main-community-page'>
          {this.props.currentUserId ? <CreatePostCardContainer /> : null}
          {
            this.props.personalFeed && this.state.loadedRightInfo ? (
              <ul>
                {
                  this.props.personalFeed.map((post, idx) => (
                    <PostCard 
                      key={`post-personal-${idx}`} 
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
                    />
                  ))
                }
              </ul>
            ) : null
          }
        </div>
        <div className='sidebar-community-page'>
          {/* <CommunityAbout community={this.props.community}/> */}
          {/* <ModeratorsCard community={this.props.community} /> */}
          {/* {this.props.currentUserId ? <HomeDescContainer /> : null} */}
          <HomeDescContainer /> 
          <FooterCard />
        </div>
      </div>
    )
  }
}

export default HomePage;