import React from "react";
import { Link } from "react-router-dom";

class PostCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 0,
      count: 0,
      upvotes: this.props.post.upvotes,
      downvotes: this.props.post.downvotes,
      upvoteActive: false,
      downvoteActive: false,
      signedOut: this.props.isSignedOut,
    };
    this.handleCommunityRedirect = this.handleCommunityRedirect.bind(this);
    this.handleUpvote = this.handleUpvote.bind(this);
    this.handleDownvote = this.handleDownvote.bind(this);
  }

  // componentDidMount() {

  // }

  componentDidUpdate(prevProps, prevSate) {
    if (prevProps.currentUserVotes !== this.props.currentUserVotes) {
      if (this.props.currentUserVotes[`Post${this.props.post.id}`]) {
        if (this.props.currentUserVotes[`Post${this.props.post.id}`].upvote) {
          this.setState({
            upvoteActive: true,
            downvoteActive: false,
            signedOut: false
          });
        } else {
          this.setState({
            upvoteActive: false,
            downvoteActive: true,
            signedOut: false
          });
        }
      } else {
        this.setState({
          upvoteActive: false,
          downvoteActive: false,
          signedOut: false
        });
      }
    }
    if (prevProps.currentUserId !== this.props.currentUserId) {
      this.setState({
        upvoteActive: false,
        downvoteActive: false,
        signedOut: true
      });
    }

  }

  handleUpvote() {
    if (this.state.downvoteActive) {
      // this.setUpvote();
      // this.setDownvote();
      this.setState({
        upvoteActive: !this.state.upvoteActive,
        upvotes: this.state.upvoteActive
          ? this.state.upvotes - 1
          : this.state.upvotes + 1,
        downvoteActive: !this.state.downvoteActive,
        downvotes: this.state.downvoteActive
          ? this.state.downvotes - 1
          : this.state.downvotes + 1
      }, () => {
        // downvote -> upvote
        this.props.updateVote({ id: this.props.currentUserVotes[`Post${this.props.post.id}`].id, upvote: true, parent_type: 'Post', parent_id: this.props.post.id })
          .then(() => this.props.editPost(Object.assign({}, this.props.post, { upvotes: this.state.upvotes, downvotes: this.state.downvotes })))
      });
    } else {
      this.setState({
        upvoteActive: !this.state.upvoteActive,
        upvotes: this.state.upvoteActive
          ? this.state.upvotes - 1
          : this.state.upvotes + 1
      }, () => {
        if (this.state.upvoteActive) {
          // no vote -> upvote
          this.props.vote({ upvote: true, parent_type: 'Post', parent_id: this.props.post.id })
            .then(() => this.props.editPost(Object.assign({}, this.props.post, { upvotes: this.state.upvotes, downvotes: this.state.downvotes })));
        } else {
          // upvote -> no vote
          this.props.removeVote({ id: this.props.currentUserVotes[`Post${this.props.post.id}`].id, parent_type: 'Post', parent_id: this.props.post.id })
            .then(() => this.props.editPost(Object.assign({}, this.props.post, { upvotes: this.state.upvotes, downvotes: this.state.downvotes })));
        }
      });
    }
  }

  handleDownvote() {
    if (this.state.upvoteActive) {
      // this.setDownvote();
      // this.setUpvote();
      this.setState({
        downvoteActive: !this.state.downvoteActive,
        downvotes: this.state.downvoteActive
          ? this.state.downvotes - 1
          : this.state.downvotes + 1,
        upvoteActive: !this.state.upvoteActive,
        upvotes: this.state.upvoteActive
          ? this.state.upvotes - 1
          : this.state.upvotes + 1
      }, () => {
        // upvote -> downvote
        this.props.updateVote({ id: this.props.currentUserVotes[`Post${this.props.post.id}`].id, upvote: false, parent_type: 'Post', parent_id: this.props.post.id })
          .then(() => this.props.editPost(Object.assign({}, this.props.post, { upvotes: this.state.upvotes, downvotes: this.state.downvotes })));
      }); 
    } else {
      this.setState({
        downvoteActive: !this.state.downvoteActive,
        downvotes: this.state.downvoteActive
          ? this.state.downvotes - 1
          : this.state.downvotes + 1
      }, () => {
        // no vote -> downvote
        if (this.state.downvoteActive) {
          // no vote -> downvote
          this.props.vote({ upvote: false, parent_type: 'Post', parent_id: this.props.post.id })
            .then(() => this.props.editPost(Object.assign({}, this.props.post, { upvotes: this.state.upvotes, downvotes: this.state.downvotes })));
        } else {
          // downvote -> no vote
          this.props.removeVote({ id: this.props.currentUserVotes[`Post${this.props.post.id}`].id, parent_type: 'Post', parent_id: this.props.post.id })
            .then(() => this.props.editPost(Object.assign({}, this.props.post, { upvotes: this.state.upvotes, downvotes: this.state.downvotes })));
        }
      });
    }
  }

  handleCommunityRedirect(e) {
    e.stopPropagation();
    e.preventDefault();
    this.props.history.push(`/${this.props.post.community}`);
  }

  // handleUserRedirect(e) {
  //   e.stopPropagation();
  //   e.preventDefault();
  //   this.props.history.push(`#`);
  // }

  render() {
    const { body, media, list } = this.props.post;
    const postContent = body ? body : (media ? media : list);

    const communityColor = this.props.community ? {
      display: 'none'
    } : {
      color: this.props.post.community_color ? this.props.post.community_color : '#1a6dcd'
    }
  
    return (
      <Link to={`/${this.props.post.community}/comments/${this.props.post.id}`}>
        <div className='card post-card post-card-border'>
          <div className='post-content'>
            <div className='vote-counter'>
              <div>
                <button 
                  className={this.state.upvoteActive ? "upvote red_vote_button" : "upvote"}
                  onClick={(e) => {
                    e.stopPropagation();
                    e.preventDefault();
                    if (this.state.signedOut) {
                      return this.props.openModal('login');
                    } else {
                      return this.handleUpvote();
                      // this.props.voteOnPost({ upvote: true, parent_id: this.props.post.id, parent_type: 'Post' })
                    }
                  }}
                >
                  <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="arrow-up" className="svg-inline--fa fa-arrow-up fa-w-14" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                    <path fill="currentColor" d="M34.9 289.5l-22.2-22.2c-9.4-9.4-9.4-24.6 0-33.9L207 39c9.4-9.4 24.6-9.4 33.9 0l194.3 194.3c9.4 9.4 9.4 24.6 0 33.9L413 289.4c-9.5 9.5-25 9.3-34.3-.4L264 168.6V456c0 13.3-10.7 24-24 24h-32c-13.3 0-24-10.7-24-24V168.6L69.2 289.1c-9.3 9.8-24.8 10-34.3.4z"></path>
                  </svg>
                </button>
                <div>
                  <p
                    className={this.state.upvoteActive
                      ? "vote-count red_vote_button"
                      : (this.state.downvoteActive
                        ? "vote-count blue_vote_button"
                        : "vote-count")}
                  >
                    {this.state.upvotes - this.state.downvotes}
                  </p>
                </div>
                <button 
                  className={this.state.downvoteActive ? "downvote blue_vote_button" : "downvote"} 
                  onClick={(e) => {
                    e.stopPropagation();
                    e.preventDefault();
                    if (this.state.signedOut) {
                      return this.props.openModal('login');
                    } else {
                      return this.handleDownvote();
                      // this.props.voteOnPost({ upvote: false, parent_id: this.props.post.id, parent_type: 'Post' })
                    }
                  }}
                >
                  <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="arrow-down" className="svg-inline--fa fa-arrow-down fa-w-14" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                    <path fill="currentColor" d="M413.1 222.5l22.2 22.2c9.4 9.4 9.4 24.6 0 33.9L241 473c-9.4 9.4-24.6 9.4-33.9 0L12.7 278.6c-9.4-9.4-9.4-24.6 0-33.9l22.2-22.2c9.5-9.5 25-9.3 34.3.4L184 343.4V56c0-13.3 10.7-24 24-24h32c13.3 0 24 10.7 24 24v287.4l114.8-120.5c9.3-9.8 24.8-10 34.3-.4z"></path>
                  </svg>
                </button>
              </div>
            </div>
            <div className='post-content-body'>
              <div className='posted-by'>
                <div>
                  <svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="product-hunt" style={communityColor} style={communityColor} className="sub-icon svg-inline--fa fa-product-hunt fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                    <path fill="currentColor" d="M326.3 218.8c0 20.5-16.7 37.2-37.2 37.2h-70.3v-74.4h70.3c20.5 0 37.2 16.7 37.2 37.2zM504 256c0 137-111 248-248 248S8 393 8 256 119 8 256 8s248 111 248 248zm-128.1-37.2c0-47.9-38.9-86.8-86.8-86.8H169.2v248h49.6v-74.4h70.3c47.9 0 86.8-38.9 86.8-86.8z"></path>
                  </svg>
                  <div>
                    <p><span className='please-underline' onClick={this.handleCommunityRedirect}>p/{this.props.post.community}</span> • Posted by u/{this.props.post.poster} {this.props.post.post_date}</p>
                    {/* <span onClick={this.handleUserRedirect} className='username-link-highlight'>u/{this.props.post.poster}</span> {this.props.post.post_date}*/}
                  </div>
                </div>
              </div>
              <div className='post-title-sec'>
                <div>
                  {/* <Link to={`/${this.props.post.community}/comments/${this.props.post.id}`}> */}
                    <h1>{this.props.post.title}</h1>
                  {/* </Link> */}
                </div>
              </div>
              {
                postContent ? (
                  <div className='post-body-sec'>
                    <div>
                      <div>
                        {postContent}
                      </div>
                    </div>
                  </div>
                ) : null
              }
              <div className='post-footer-sec'>
                <div>
                  {/* <Link to={`/${this.props.post.community}/comments/${this.props.post.id}`}> */}
                  <div className='post-comment-count-button'>
                    <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="comment-alt" className="svg-inline--fa fa-comment-alt fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                      <path fill="currentColor" d="M448 0H64C28.7 0 0 28.7 0 64v288c0 35.3 28.7 64 64 64h96v84c0 7.1 5.8 12 12 12 2.4 0 4.9-.7 7.1-2.4L304 416h144c35.3 0 64-28.7 64-64V64c0-35.3-28.7-64-64-64zm16 352c0 8.8-7.2 16-16 16H288l-12.8 9.6L208 428v-60H64c-8.8 0-16-7.2-16-16V64c0-8.8 7.2-16 16-16h384c8.8 0 16 7.2 16 16v288z"></path>
                    </svg>
                    <p>{this.props.post.comments_count} Comments</p>
                  </div>
                  {/* </Link> */}
                  <div className='post-share-button'>
                    <button>
                      <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="share" className="svg-inline--fa fa-share fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                        <path fill="currentColor" d="M503.691 189.836L327.687 37.851C312.281 24.546 288 35.347 288 56.015v80.053C127.371 137.907 0 170.1 0 322.326c0 61.441 39.581 122.309 83.333 154.132 13.653 9.931 33.111-2.533 28.077-18.631C66.066 312.814 132.917 274.316 288 272.085V360c0 20.7 24.3 31.453 39.687 18.164l176.004-152c11.071-9.562 11.086-26.753 0-36.328z"></path>
                      </svg>
                      <p>Share</p>
                    </button>
                  </div>
                  <div className='post-save-button'>
                    <button>
                      <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="bookmark" className="svg-inline--fa fa-bookmark fa-w-12" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                        <path fill="currentColor" d="M336 0H48C21.49 0 0 21.49 0 48v464l192-112 192 112V48c0-26.51-21.49-48-48-48zm0 428.43l-144-84-144 84V54a6 6 0 0 1 6-6h276c3.314 0 6 2.683 6 5.996V428.43z"></path>
                      </svg>
                      <p>Save</p>
                    </button>
                  </div>
                  {/* <div className='post-ellipses-button'>
                    <button>
                      <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="ellipsis-h" class="svg-inline--fa fa-ellipsis-h fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                        <path fill="currentColor" d="M328 256c0 39.8-32.2 72-72 72s-72-32.2-72-72 32.2-72 72-72 72 32.2 72 72zm104-72c-39.8 0-72 32.2-72 72s32.2 72 72 72 72-32.2 72-72-32.2-72-72-72zm-352 0c-39.8 0-72 32.2-72 72s32.2 72 72 72 72-32.2 72-72-32.2-72-72-72z"></path>
                      </svg>
                      <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="circle" className="svg-inline--fa fa-circle fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z"></path></svg>
                      <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="circle" className="svg-inline--fa fa-circle fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z"></path></svg>
                      <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="circle" className="svg-inline--fa fa-circle fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z"></path></svg>
                    </button>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </Link>
    )
  }
}

export default PostCard;