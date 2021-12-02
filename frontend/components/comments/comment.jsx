import React from "react";
import { Link } from "react-router-dom";

class Comment extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div className='comment-thread'>

        </div>
        <div className='comment-list-item-container'>
          <div className='comment-user-icon-container'>
            <Link to='/' className='comment-user-icon'>
              <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="user-circle" class="svg-inline--fa fa-user-circle fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512">
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
            <div className='comment-list-item-content'>
              <div>
                <p>{this.props.comment.content}</p>
              </div>
            </div>
            <div className='comment-list-item-footer'>
              <div>

              </div>
              <div>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Comment;