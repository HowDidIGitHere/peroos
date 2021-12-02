import React from "react";

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
              <p>{this.props.comment.commenter}</p>
              {this.props.op ? <p className='op'>OP</p> : null}
              <p>{this.props.comment.comment_date}</p>
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