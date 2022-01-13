import React from "react";
import { Link } from "react-router-dom";
import CommentContainer from "../comments/comment_container";
import CreateCommentFormContainer from "../comment_form/create_comment_form_container";
import CommunityAbout from "../community_page/community_about";
import PleaseSignInToCommentContainer from "../login_prompt_comment/please_sigin_to_comment_container";
import PostEditFormContainer from "../post_edit_form/post_edit_form_container";
import FooterCard from "../sidebar/footer_card";

class Post extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 0,
      count: 0,
      editToggle: false
    }
    this.handleCountInc = this.handleCountInc.bind(this);
    this.handleCountDec = this.handleCountDec.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
  }

  handleEdit(e) {
    // console.log(!this.state.editToggle);
    this.setState({ editToggle: !this.state.editToggle })
  }

  handleDelete(e) {
    // this.props.deleteComment(this.props.comment.id);
    this.props.deletePost().then(() => this.props.history.push(`/${this.props.match.params.communityTitle}`));
  }

  handleCountInc() {
    this.setState({ count: this.state.count + 1 });
  }

  handleCountDec() {
    this.setState({ count: this.state.count - 1 });
  }

  componentDidMount() {
    this.props.getAllComments();
    this.props.getCommunity();
    this.props.getCurrentPost();
    window.onscroll = (e) => {
      if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight - 20) {
        this.setState({ page: this.state.page + 1 }, () => this.props.getEvenMoreComments(this.state.page).then(() => this.setState({ count: this.props.count + 1 })))
      }
    }
  }

  componentWillUnmount() {
    this.props.removeCurrentPost();
    // .then(() => this.setState({ count: this.props.count - 1 }))
  }

  render() {
    if (!this.props.community || !this.props.currentPost) {
      return '...loading'
    }
    return (
      <div className='post-con'>
        <div>
          <div className='post-sticky-header'>
            <div className='post-sticky-header-content'>
              <div className='post-sticky-header-title'>
                <div>
                  <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="file-alt" className="svg-inline--fa fa-file-alt fa-w-12" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                    <path fill="currentColor" d="M288 248v28c0 6.6-5.4 12-12 12H108c-6.6 0-12-5.4-12-12v-28c0-6.6 5.4-12 12-12h168c6.6 0 12 5.4 12 12zm-12 72H108c-6.6 0-12 5.4-12 12v28c0 6.6 5.4 12 12 12h168c6.6 0 12-5.4 12-12v-28c0-6.6-5.4-12-12-12zm108-188.1V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V48C0 21.5 21.5 0 48 0h204.1C264.8 0 277 5.1 286 14.1L369.9 98c9 8.9 14.1 21.2 14.1 33.9zm-128-80V128h76.1L256 51.9zM336 464V176H232c-13.3 0-24-10.7-24-24V48H48v416h288z"></path>
                  </svg>
                </div>
                <div>
                  <p>
                    {this.props.currentPost.title}
                  </p>
                </div>
              </div>
              <div>
                <Link to={`/${this.props.community.sub}`}>
                  <p>&times;</p>
                  <p>Close</p>
                </Link>
              </div>
            </div>
          </div>
          <div className='post-body-content'>
            <div className='post-body-main'>
              <div className='card'>
                <div>
                  <div className='vote-counter'>
                    <div>
                      <button className="upvote" onClick={() => this.props.voteOnCurrentPost({ upvote: true, parent_id: this.props.match.params.postId, parent_type: 'Post'})}>
                        <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="arrow-up" className="svg-inline--fa fa-arrow-up fa-w-14" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                          <path fill="currentColor" d="M34.9 289.5l-22.2-22.2c-9.4-9.4-9.4-24.6 0-33.9L207 39c9.4-9.4 24.6-9.4 33.9 0l194.3 194.3c9.4 9.4 9.4 24.6 0 33.9L413 289.4c-9.5 9.5-25 9.3-34.3-.4L264 168.6V456c0 13.3-10.7 24-24 24h-32c-13.3 0-24-10.7-24-24V168.6L69.2 289.1c-9.3 9.8-24.8 10-34.3.4z"></path>
                        </svg>
                      </button>
                      <div>
                        <p>{this.props.currentPost.vote_count}</p>
                      </div>
                      <button className="downvote" onClick={() => this.props.voteOnCurrentPost({ upvote: false, parent_id: this.props.match.params.postId, parent_type: 'Post'})}>
                        <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="arrow-down" className="svg-inline--fa fa-arrow-down fa-w-14" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                          <path fill="currentColor" d="M413.1 222.5l22.2 22.2c9.4 9.4 9.4 24.6 0 33.9L241 473c-9.4 9.4-24.6 9.4-33.9 0L12.7 278.6c-9.4-9.4-9.4-24.6 0-33.9l22.2-22.2c9.5-9.5 25-9.3 34.3.4L184 343.4V56c0-13.3 10.7-24 24-24h32c13.3 0 24 10.7 24 24v287.4l114.8-120.5c9.3-9.8 24.8-10 34.3-.4z"></path>
                        </svg>
                      </button>
                    </div>
                  </div>
                  <div className='post-content-posted-by'>
                    <div>
                      <Link to={`/${this.props.community.sub}`}>p/{this.props.community.sub}</Link>
                    </div>
                    <span>•</span>
                    <div>
                      <div>
                        <p>Posted by <Link to={`/`} className='username-link-highlight'>u/{this.props.currentPost.poster}</Link> {this.props.currentPost.post_date}</p>
                      </div>
                    </div>
                  </div>
                  <div className='post-content-title'>
                    <div>
                      <h1>{this.props.currentPost.title}</h1>
                    </div>
                  </div>
                  {
                    this.state.editToggle ? (
                      <div>
                        <PostEditFormContainer post={this.props.currentPost} handleToggle={this.handleEdit} />
                      </div>
                    ) : (
                      <div className='post-content-body-sec'>
                        <div>
                          <p>{this.props.currentPost.body}</p>
                        </div>
                      </div>
                    )
                  }
                  <div className='post-footer-sec'>
                    <div>
                      <Link to={`/${this.props.currentPost.community}/comments/${this.props.currentPost.id}`}>
                        <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="comment-alt" className="svg-inline--fa fa-comment-alt fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                          <path fill="currentColor" d="M448 0H64C28.7 0 0 28.7 0 64v288c0 35.3 28.7 64 64 64h96v84c0 7.1 5.8 12 12 12 2.4 0 4.9-.7 7.1-2.4L304 416h144c35.3 0 64-28.7 64-64V64c0-35.3-28.7-64-64-64zm16 352c0 8.8-7.2 16-16 16H288l-12.8 9.6L208 428v-60H64c-8.8 0-16-7.2-16-16V64c0-8.8 7.2-16 16-16h384c8.8 0 16 7.2 16 16v288z"></path>
                        </svg>
                        <p>{this.props.currentPost ? (isNaN(this.props.currentPost.comments_count + this.state.count) ? 0 : this.props.currentPost.comments_count + this.state.count) : 0} Comments</p>
                      </Link>
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
                      {
                        this.props.currentPost.poster_id === this.props.currentUserId ? (
                          <div className='post-edit-button'>
                            <button onClick={this.handleEdit}>
                              <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="edit" className="svg-inline--fa fa-edit fa-w-18" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="currentColor" d="M402.3 344.9l32-32c5-5 13.7-1.5 13.7 5.7V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V112c0-26.5 21.5-48 48-48h273.5c7.1 0 10.7 8.6 5.7 13.7l-32 32c-1.5 1.5-3.5 2.3-5.7 2.3H48v352h352V350.5c0-2.1.8-4.1 2.3-5.6zm156.6-201.8L296.3 405.7l-90.4 10c-26.2 2.9-48.5-19.2-45.6-45.6l10-90.4L432.9 17.1c22.9-22.9 59.9-22.9 82.7 0l43.2 43.2c22.9 22.9 22.9 60 .1 82.8zM460.1 174L402 115.9 216.2 301.8l-7.3 65.3 65.3-7.3L460.1 174zm64.8-79.7l-43.2-43.2c-4.1-4.1-10.8-4.1-14.8 0L436 82l58.1 58.1 30.9-30.9c4-4.2 4-10.8-.1-14.9z"></path></svg>
                              <p>Edit</p>
                            </button>
                          </div>
                        ) : null
                      }
                      {
                        this.props.currentPost.poster_id === this.props.currentUserId ? (
                          <div className='post-delete-button'>
                            <button onClick={this.handleDelete}>
                              <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="trash-alt" className="svg-inline--fa fa-trash-alt fa-w-14" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M268 416h24a12 12 0 0 0 12-12V188a12 12 0 0 0-12-12h-24a12 12 0 0 0-12 12v216a12 12 0 0 0 12 12zM432 80h-82.41l-34-56.7A48 48 0 0 0 274.41 0H173.59a48 48 0 0 0-41.16 23.3L98.41 80H16A16 16 0 0 0 0 96v16a16 16 0 0 0 16 16h16v336a48 48 0 0 0 48 48h288a48 48 0 0 0 48-48V128h16a16 16 0 0 0 16-16V96a16 16 0 0 0-16-16zM171.84 50.91A6 6 0 0 1 177 48h94a6 6 0 0 1 5.15 2.91L293.61 80H154.39zM368 464H80V128h288zm-212-48h24a12 12 0 0 0 12-12V188a12 12 0 0 0-12-12h-24a12 12 0 0 0-12 12v216a12 12 0 0 0 12 12z"></path></svg>
                              <p>Delete</p>
                            </button>
                          </div>
                        ) : null
                      }
                      {/* <div className='post-ellipses-button'>
                        <button>
                          <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="circle" className="svg-inline--fa fa-circle fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z"></path></svg>
                          <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="circle" className="svg-inline--fa fa-circle fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z"></path></svg>
                          <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="circle" className="svg-inline--fa fa-circle fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z"></path></svg>
                        </button>
                      </div> */}
                    </div>
                  </div>

                </div>

                <a id='comments'></a>
                <div className='post-comment-form'>
                  {
                    this.props.currentUserId ? <CreateCommentFormContainer handleCountInc={this.handleCountInc} /> : <PleaseSignInToCommentContainer />
                  }
                </div>
                <div className='post-comments-list'>
                  <ul>
                    {
                      this.props.comments ? this.props.comments.map((comment, idx) => (
                        <CommentContainer key={`post-${this.props.currentPost.id}-${idx}-${comment.id}`} comment={comment} op={comment.commenter_id === this.props.currentPost.poster_id} currentUserId={this.props.currentUserId} handleCountDec={this.handleCountDec} />
                      )) : null
                    }
                    <div id='end'></div>
                  </ul>
                </div>
              </div>
            </div>
            <div className='post-body-aside'>
              <CommunityAbout match={this.props.match} community={this.props.community} currentUserId={this.props.currentUserId} />
              {/* <ModeratorsCard community={this.props.community} /> */}
              <FooterCard />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Post;