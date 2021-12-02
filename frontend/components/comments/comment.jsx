import React from "react";
import { Link } from "react-router-dom";

class Comment extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='comment-list-item-container'>
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
            
          </div>
          <div className='comment-list-item-footer'>
            
          </div>
        </div>
      </div>
    )
  }
}

export default Comment;