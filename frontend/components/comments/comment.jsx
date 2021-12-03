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
                        <button>
                          <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" xmlns="http://www.w3.org/1999/xlink" enableBackground="new 0 0 512 512">
                            <g>
                              <path d="m184.5,460.1h137.3v-223.1c0-11.3 9.1-20.4 20.3-20.4h69.3l-155.8-156.5-155.7,156.5h64.2c11.2,0 20.3,9.1 20.3,20.4v223.1h0.1zm157.5,40.9h-177.9c-11.2,0-20.3-9.1-20.3-20.4v-223.1h-92.9c-19.9,0-25.2-23.9-14.4-34.9l204.8-205.9c7.6-7.7 21.1-7.7 28.7,1.06581e-14l204.7,205.9c12.6,12.7 5.4,34.9-14.4,34.9h-98v223.1c0.1,11.3-9,20.4-20.3,20.4z"/>
                            </g>
                          </svg>
                        </button>
                        <div>
                          <p>Vote</p>
                        </div>
                        <button>
                          <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" xmlns="http://www.w3.org/1999/xlink" enableBackground="new 0 0 512 512">
                            <g>
                              <path d="m100.3,294.1l155.7,155.9 155.7-155.8h-69.3c-11.2,0-20.3-9.1-20.3-20.3v-222.2h-137.3v222.1c0,11.2-9.1,20.3-20.3,20.3h-64.2zm141.3,199l-204.6-204.9c-5.8-5.8-7.5-14.6-4.4-22.2 3.1-7.6 10.5-12.6 18.8-12.6h92.9v-222.1c0-11.2 9.1-20.3 20.3-20.3h177.9c11.2,0 20.3,9.1 20.3,20.3v222.1h98c8.2,0 15.6,5 18.8,12.6 3.1,7.6 1.4,16.3-4.4,22.2l-204.8,204.9c-10.5,10.4-18.2,10.6-28.8,0z"/>
                            </g>
                          </svg>
                        </button>
                      </div>
                    </div>
                    <div className='comment-buttons'>
                        <div className='post-footer-sec'>
                          <div>
                            <Link to={`/`}>
                              <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="comment-alt" className="svg-inline--fa fa-comment-alt fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                <path fill="currentColor" d="M448 0H64C28.7 0 0 28.7 0 64v288c0 35.3 28.7 64 64 64h96v84c0 7.1 5.8 12 12 12 2.4 0 4.9-.7 7.1-2.4L304 416h144c35.3 0 64-28.7 64-64V64c0-35.3-28.7-64-64-64zm16 352c0 8.8-7.2 16-16 16H288l-12.8 9.6L208 428v-60H64c-8.8 0-16-7.2-16-16V64c0-8.8 7.2-16 16-16h384c8.8 0 16 7.2 16 16v288z"></path>
                              </svg>
                              <p>Reply</p>
                            </Link>
                            <div className='post-share-button'>
                              <button>
                                {/* <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="share" className="svg-inline--fa fa-share fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                  <path fill="currentColor" d="M503.691 189.836L327.687 37.851C312.281 24.546 288 35.347 288 56.015v80.053C127.371 137.907 0 170.1 0 322.326c0 61.441 39.581 122.309 83.333 154.132 13.653 9.931 33.111-2.533 28.077-18.631C66.066 312.814 132.917 274.316 288 272.085V360c0 20.7 24.3 31.453 39.687 18.164l176.004-152c11.071-9.562 11.086-26.753 0-36.328z"></path>
                                </svg> */}
                                <p>Share</p>
                              </button>
                            </div>
                            <div className='post-save-button'>
                              <button>
                                {/* <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="bookmark" className="svg-inline--fa fa-bookmark fa-w-12" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                                  <path fill="currentColor" d="M336 0H48C21.49 0 0 21.49 0 48v464l192-112 192 112V48c0-26.51-21.49-48-48-48zm0 428.43l-144-84-144 84V54a6 6 0 0 1 6-6h276c3.314 0 6 2.683 6 5.996V428.43z"></path>
                                </svg> */}
                                <p>Save</p>
                              </button>
                            </div>
                              {
                                this.props.comment.commenter_id === this.props.currentUserId ? (
                                  <div className='post-edit-button'>
                                    <button onClick={this.handleEdit}>
                                      <p>Edit</p>
                                    </button>
                                  </div>
                                ) : null
                              }
                              {
                                this.props.comment.commenter_id === this.props.currentUserId ? (
                                  <div className='post-delete-button'>
                                    <button onClick={this.handleDelete}>
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