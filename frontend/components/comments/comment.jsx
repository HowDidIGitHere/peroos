import React from "react";
import { Link } from "react-router-dom";
import CreateCommentFormContainer from "../comment_form/create_comment_form_container";
import EditCommentFormContainer from "../comment_form/edit_comment_form_container";

class Comment extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      editToggle: false
    }
    this.handleDelete = this.handleDelete.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
  }

  handleEdit(e) {
    console.log(!this.state.editToggle);
    this.setState({ editToggle: !this.state.editToggle })
  }

  handleDelete(e) {
    this.props.deleteComment(this.props.comment.id).then(() => this.props.handleCountDec());
  }

  render() {
    return (
      <div>
        <div className='comment-thread'>

        </div>
        <div className='comment-list-item-container'>
          <div className='comment-user-icon-container'>
            <Link to='/' className='comment-user-icon'>
              <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="user-circle" className="svg-inline--fa fa-user-circle fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512">
                <path fill="currentColor" d="M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm0 96c48.6 0 88 39.4 88 88s-39.4 88-88 88-88-39.4-88-88 39.4-88 88-88zm0 344c-58.7 0-111.3-26.6-146.5-68.2 18.8-35.4 55.6-59.8 98.5-59.8 2.4 0 4.8.4 7.1 1.1 13 4.2 26.6 6.9 40.9 6.9 14.3 0 28-2.7 40.9-6.9 2.3-.7 4.7-1.1 7.1-1.1 42.9 0 79.7 24.4 98.5 59.8C359.3 421.4 306.7 448 248 448z"></path>
              </svg>
            </Link>
          </div>
          <div className='comment-list-item'>
            <div className='comment-list-item-commenter'>
              <div>
                <span><Link to='#'>{this.props.comment.commenter}</Link></span>
                {this.props.op ? <span className='op'>OP</span> : null}
                <span className='dot'><p>•</p></span>
                <span>{this.props.comment.comment_date}</span>
              </div>
            </div>
            {
              this.state.editToggle ? (
                <div className='comment-edit-cont'>
                  <div className='comment-line'></div>
                  <EditCommentFormContainer comment={this.props.comment} handleToggle={this.handleEdit} />
                </div>
              ) : (
                <div>
                  <div className='comment-list-item-content'>
                    <div>
                      <p>{this.props.comment.content}</p>
                    </div>
                  </div>
                  <div className='comment-list-item-footer'>
                    <div>
                      <div className='comment-vote-counter'>
                        <button 
                          className="upvote" 
                          onClick={() => {
                            
                            this.props.voteOnComment({ upvote: true, parent_id: this.props.comment.id, parent_type: 'Comment'})
                          }}>
                          <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="arrow-up" className="svg-inline--fa fa-arrow-up fa-w-14" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                            <path fill="currentColor" d="M34.9 289.5l-22.2-22.2c-9.4-9.4-9.4-24.6 0-33.9L207 39c9.4-9.4 24.6-9.4 33.9 0l194.3 194.3c9.4 9.4 9.4 24.6 0 33.9L413 289.4c-9.5 9.5-25 9.3-34.3-.4L264 168.6V456c0 13.3-10.7 24-24 24h-32c-13.3 0-24-10.7-24-24V168.6L69.2 289.1c-9.3 9.8-24.8 10-34.3.4z"></path>
                          </svg>
                        </button>
                        <div>
                          <p>Vote</p> {/* vote counter needs to be implemented */}
                        </div>
                        <button className="upvote" onClick={() => this.props.voteOnComment({ upvote: false, parent_id: this.props.comment.id, parent_type: 'Comment'})}>
                          <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="arrow-down" className="svg-inline--fa fa-arrow-down fa-w-14" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                            <path fill="currentColor" d="M413.1 222.5l22.2 22.2c9.4 9.4 9.4 24.6 0 33.9L241 473c-9.4 9.4-24.6 9.4-33.9 0L12.7 278.6c-9.4-9.4-9.4-24.6 0-33.9l22.2-22.2c9.5-9.5 25-9.3 34.3.4L184 343.4V56c0-13.3 10.7-24 24-24h32c13.3 0 24 10.7 24 24v287.4l114.8-120.5c9.3-9.8 24.8-10 34.3-.4z"></path>
                          </svg>
                        </button>
                      </div>
                    </div>
                    <div className='comment-buttons'>
                      <div className='post-footer-sec'>
                        <div>
                          {/* <Link to={`/`}>
                            <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="comment-alt" className="svg-inline--fa fa-comment-alt fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                              <path fill="currentColor" d="M448 0H64C28.7 0 0 28.7 0 64v288c0 35.3 28.7 64 64 64h96v84c0 7.1 5.8 12 12 12 2.4 0 4.9-.7 7.1-2.4L304 416h144c35.3 0 64-28.7 64-64V64c0-35.3-28.7-64-64-64zm16 352c0 8.8-7.2 16-16 16H288l-12.8 9.6L208 428v-60H64c-8.8 0-16-7.2-16-16V64c0-8.8 7.2-16 16-16h384c8.8 0 16 7.2 16 16v288z"></path>
                            </svg>
                            <p>Reply</p>
                          </Link> */}
                          {/* <div className='post-share-button'>
                            <button>
                              <p>Share</p>
                            </button>
                          </div> */}
                          {/* <div className='post-save-button'>
                            <button>
                              <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="bookmark" className="svg-inline--fa fa-bookmark fa-w-12" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                                <path fill="currentColor" d="M336 0H48C21.49 0 0 21.49 0 48v464l192-112 192 112V48c0-26.51-21.49-48-48-48zm0 428.43l-144-84-144 84V54a6 6 0 0 1 6-6h276c3.314 0 6 2.683 6 5.996V428.43z"></path>
                              </svg>
                              <p>Save</p>
                            </button>
                          </div> */}
                            {
                              this.props.comment.commenter_id === this.props.currentUserId ? (
                                <div className='post-edit-button'>
                                  <button onClick={this.handleEdit}>
                                    <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="edit" className="svg-inline--fa fa-edit fa-w-18" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="currentColor" d="M402.3 344.9l32-32c5-5 13.7-1.5 13.7 5.7V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V112c0-26.5 21.5-48 48-48h273.5c7.1 0 10.7 8.6 5.7 13.7l-32 32c-1.5 1.5-3.5 2.3-5.7 2.3H48v352h352V350.5c0-2.1.8-4.1 2.3-5.6zm156.6-201.8L296.3 405.7l-90.4 10c-26.2 2.9-48.5-19.2-45.6-45.6l10-90.4L432.9 17.1c22.9-22.9 59.9-22.9 82.7 0l43.2 43.2c22.9 22.9 22.9 60 .1 82.8zM460.1 174L402 115.9 216.2 301.8l-7.3 65.3 65.3-7.3L460.1 174zm64.8-79.7l-43.2-43.2c-4.1-4.1-10.8-4.1-14.8 0L436 82l58.1 58.1 30.9-30.9c4-4.2 4-10.8-.1-14.9z"></path></svg>
                                    <p>Edit</p>
                                  </button>
                                </div>
                              ) : null
                            }
                            {
                              this.props.comment.commenter_id === this.props.currentUserId ? (
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
                  </div>
                </div>
              )
            }
          </div>
        </div>
      </div>
    )
  }
}

export default Comment;