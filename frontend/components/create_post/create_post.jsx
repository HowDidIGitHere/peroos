import React from "react";
import { Link } from "react-router-dom";
import CommunityPostAbout from "../community_page/community_post_about";
import FooterCard from "../sidebar/footer_card";
import PostingToCard from "./posting_to_peroos_card";

class CreatePost extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.location.state ? this.props.location.state : {
      post: {
        title: '',
        body: '',
        media: '',
        link: '',
        community_id: undefined
      },
      toggleCommunityChoice: false,
      communityChoice: this.props.match.params.communityTitle ? `p/${this.props.match.params.communityTitle}` : '',
      errors: null
    }
    this.handleSearch = this.handleSearch.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDropdown = this.handleDropdown.bind(this);
    this.handleCommunityChoiceChange = this.handleCommunityChoiceChange.bind(this);
  }

  componentDidMount() {
    this.props.getFollowedCommunities()
      .then(() => {
        if (this.props.match.params.communityTitle) {
          this.props.getCommunity()
            .then(response => this.setState({ post: Object.assign({}, this.state.post, { community_id: response.community.id }) }))
            // .fail(res => console.log(res));
        }
      })
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.match.params.communityTitle !== this.props.match.params.communityTitle) {
      // console.log("Changed match params")
    }
  }

  handleSearch(e) {
    this.setState({ searchQuery: e.target.value }, () => this.props.getSearchResults(this.state));
  }

  handleDropdown() {
    document.getElementById('community-selection-input').focus();
    this.setState({
      toggleCommunityChoice: !this.state.toggleCommunityChoice
    });
  }

  handleCommunityChoiceChange(e) {
    let tempCommunityChoice = e.target.value;
    if (!this.state.toggleCommunityChoice) {
      this.setState({
        communityChoice: tempCommunityChoice,
        toggleCommunityChoice: true
      }, () => {
        let tempTemp;
        if (tempCommunityChoice.split('').slice(0, 2).join('') === 'p/') {
          tempTemp = tempCommunityChoice.split('').slice(2).join('')
        } else {
          tempTemp = tempCommunityChoice
        }
        this.props.getSearchResults({ searchQuery: tempTemp })
      });
    } else {
      this.setState({
        communityChoice: tempCommunityChoice
      }, () => {
        let tempTemp;
        if (tempCommunityChoice.split('').slice(0, 2).join('') === 'p/') {
          tempTemp = tempCommunityChoice.split('').slice(2).join('')
        } else {
          tempTemp = tempCommunityChoice
        }
        this.props.getSearchResults({ searchQuery: tempTemp })
      });
    }
  }

  handleCommunityChoiceSubmit(sub) {
    return e => {
      e.stopPropagation();
      e.preventDefault();
      let tempSub;
      if (sub.split('').slice(0, 2).join('') === 'p/') {
        tempSub = sub;
      } else {
        tempSub = `p/${sub}`;
      }
      this.setState({
        communityChoice: tempSub,
        toggleCommunityChoice: !this.state.toggleCommunityChoice
      }, () => {
        document.getElementById('community-selection-input').focus();
        this.props.history.push({ pathname: `/${this.state.communityChoice.split('').slice(2).join('')}/submit`, state: this.state});
        // this.props.history.replace({ pathname: `/${this.state.communityChoice.split('').slice(2).join('')}/submit` }, Object.assign({}, this.state));
      });
    }
  }

  handleChange(type) {
    return e => {
      let tempPost = Object.assign({}, this.state.post);
      tempPost[type] = e.target.value;
      this.setState({ 
        post: tempPost
      });
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    e.stopPropagation();
    // let tempPost = Object.assign({}, this.state.post);
    // tempPost[community_id] = this.props.community.id;
    this.props.createPost(this.state.post)
      .then(() => this.props.history.push(`/${this.props.match.params.communityTitle}`))
      .fail(res => {
        this.setState({ errors: res.responseJSON });
      });
  }
  
  renderErrors() {
    return (
      <ul>
        {
          Array.isArray(this.props.errors) ?
            this.props.errors.map((error, i) => (
              <li key={`error-${i}`}>
                <p style={{color: 'red'}}>{error}</p>
              </li>
            )) :
            ''
        }
      </ul>
    );
  }

  render() {
    return (
      <div>
        <div className='peroos-content-page'>
          <div className='content-section'>
            <div>
              <div className='create-post-draft-cont'>
                <a>
                  Create a post
                </a>
                {/* <button>DRAFTS<span>ICON</span></button> */}
              </div>
              <div className='community-selection-tab'>
                <div>
                  <form autoComplete="off" role='search'>
                    <label>
                      <div>
                        <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="search" className="svg-inline--fa fa-search fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                          <path fill="currentColor" d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"></path>
                        </svg>
                      </div>
                    </label>
                    <input id='community-selection-input' type='text' placeholder='Choose a community' onClick={this.handleDropdown} onChange={this.handleCommunityChoiceChange} value={this.state.communityChoice}/>
                    <div onClick={this.handleDropdown}>
                      <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="chevron-down" className="svg-inline--fa fa-chevron-down fa-w-14 chevron" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                        <path fill="currentColor" d="M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z"></path>
                      </svg>
                    </div>
                  </form>
                </div>
              </div>

              {
                this.state.toggleCommunityChoice ? (
                  <div className='community-selection-dropdown'>
                    <div>
                      {
                        // this.state.communityChoice.length > 0 ? (
                        this.props.searchResults && this.state.communityChoice.length > 0 ? (
                          <div>
                            <h1>OTHERS</h1>
                            <ul className='my-communities'>
                              {
                                Object.values(this.props.searchResults).map((res, idx) => {
                                  const resColor = {
                                    color: res.color ? res.color : '#1a6dcd'
                                  };
                                  return (
                                    <li key={`followed-community-${idx}`} className='my-community-choice-list-item'>
                                      <Link to='#' onClick={this.handleCommunityChoiceSubmit(res.sub)}>
                                        <span className='my-community-choice-list-item-icon'>
                                          <svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="product-hunt" style={resColor} className="community-sub-icon svg-inline--fa fa-product-hunt fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                            <path fill="currentColor" d="M326.3 218.8c0 20.5-16.7 37.2-37.2 37.2h-70.3v-74.4h70.3c20.5 0 37.2 16.7 37.2 37.2zM504 256c0 137-111 248-248 248S8 393 8 256 119 8 256 8s248 111 248 248zm-128.1-37.2c0-47.9-38.9-86.8-86.8-86.8H169.2v248h49.6v-74.4h70.3c47.9 0 86.8-38.9 86.8-86.8z"></path>
                                          </svg>
                                        </span>
                                        <span className='my-community-choice-list-item-info'>
                                          <p>
                                            p/{res.sub}
                                          </p>
                                          <p>
                                            {res.follower_count} follower{res.follower_count !== 1 ? 's' : ''}
                                          </p>
                                        </span>
                                      </Link>
                                    </li>
                                  );
                                })
                              }
                            </ul>
                          </div>
                        ) : (
                          <div>
                            <h1>MY COMMUNITIES</h1>
                            <ul className='my-communities'>
                              {
                                this.props.myCommunities.map((community, idx) => {
                                  if (!this.props.match.params.communityTitle || community.sub !== this.props.match.params.communityTitle || community.followed_by_current_user) {
                                    const communityColor = {
                                      color: community.color ? community.color : '#1a6dcd'
                                    };
                                    return (
                                      <li key={`followed-community-${idx}`} className='my-community-choice-list-item'>
                                        <Link to='#' onClick={this.handleCommunityChoiceSubmit(community.sub)}>
                                          <span className='my-community-choice-list-item-icon'>
                                            <svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="product-hunt" style={communityColor} className="community-sub-icon svg-inline--fa fa-product-hunt fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                              <path fill="currentColor" d="M326.3 218.8c0 20.5-16.7 37.2-37.2 37.2h-70.3v-74.4h70.3c20.5 0 37.2 16.7 37.2 37.2zM504 256c0 137-111 248-248 248S8 393 8 256 119 8 256 8s248 111 248 248zm-128.1-37.2c0-47.9-38.9-86.8-86.8-86.8H169.2v248h49.6v-74.4h70.3c47.9 0 86.8-38.9 86.8-86.8z"></path>
                                            </svg>
                                          </span>
                                          <span className='my-community-choice-list-item-info'>
                                            <p>
                                              p/{community.sub}
                                            </p>
                                            <p>
                                              {community.follower_count} follower{community.follower_count !== 1 ? 's' : ''}
                                            </p>
                                          </span>
                                        </Link>
                                      </li>
                                    );
                                  }
                                })
                              }
                            </ul>
                          </div>
                        )
                      }
                    </div>
                  </div>
                ) : null
              }

              <div className='create-post-form'>
                <div className='create-post-form-type-tabs'>
                  <div>
                    <button>
                      <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="file-alt" className="svg-inline--fa fa-file-alt fa-w-12" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                        <path fill="currentColor" d="M288 248v28c0 6.6-5.4 12-12 12H108c-6.6 0-12-5.4-12-12v-28c0-6.6 5.4-12 12-12h168c6.6 0 12 5.4 12 12zm-12 72H108c-6.6 0-12 5.4-12 12v28c0 6.6 5.4 12 12 12h168c6.6 0 12-5.4 12-12v-28c0-6.6-5.4-12-12-12zm108-188.1V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V48C0 21.5 21.5 0 48 0h204.1C264.8 0 277 5.1 286 14.1L369.9 98c9 8.9 14.1 21.2 14.1 33.9zm-128-80V128h76.1L256 51.9zM336 464V176H232c-13.3 0-24-10.7-24-24V48H48v416h288z"></path>
                      </svg>
                      Post
                    </button>
                    {/* <button>Images & Video</button>
                    <button>Link</button>
                    <button>Poll</button> */}
                  </div>
                </div>
                <div className='create-post-form-input'>
                  <div className='create-post-form-input-title'>
                    <div>
                      {/* {this.renderErrors()} */}
                      <textarea onChange={this.handleChange('title')} maxLength='300' value={this.state.post.title} placeholder='Title' rows='1'></textarea>
                      <div>
                        {this.state.post.title.length}/300
                      </div>
                    </div>
                  </div>
                  <div className='create-post-form-input-optional'>
                    <div>
                      <textarea onChange={this.handleChange('body')} maxLength='40000' value={this.state.post.body} placeholder='Text (optional)' rows="10" ></textarea>
                    </div>
                  </div>
                </div>
                <div className='create-post-form-send'>
                  {/* <div className='create-post-form-flair'>

                  </div> */}
                  <hr/>
                  <div className='create-post-form-send-buttons'>
                    <div>
                      <Link to='/'><button className='bubble-button'>CANCEL</button></Link>
                      {
                        this.props.match.params.communityTitle ? (
                          <button onClick={this.handleSubmit} className='bubble-button filled-blue'>POST</button>
                        ) : (
                          <button /* onClick={this.handleSubmit} */ title='Please Choose a Community for Your Post!' className='bubble-button grey-out'>POST</button>
                        )
                      }
                    </div>
                  </div>
                </div>
                {/* <div className='create-post-form-footer'>
                  
                </div> */}
              </div>
            </div>
          </div>
          <div className='content-sidebar'>
            <div className='sidebar-cards-container'>
              {
                this.props.match.params.communityTitle && this.props.community ? <CommunityPostAbout follow={this.props.follow} unfollow={this.props.unfollow} openModal={this.props.openModal} match={this.props.match} community={this.props.community} currentUserId={this.props.currentUserId} /> : null
              }
              <PostingToCard />
              <FooterCard />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default CreatePost;