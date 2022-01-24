import React from "react";
import { Link } from "react-router-dom";

class CommentForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.comment;
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    e.stopPropagation();
    this.props.processForm(this.state)
      .then(res => this.setState({ content: '' }, () => {
        if (this.props.formType === 'create') {
          this.props.vote({ upvote: true, parent_type: 'Comment', parent_id: res.comment.id });
        }
      }))
      .then(() => this.props.handleToggle ? this.props.handleToggle() : this.props.handleCountInc());
  }

  handleChange(type) {
    return e => this.setState({ [type]: e.target.value });
  }

  render() {
    return (
      <div className='width-fix'>
        <div>
          <div id='sad' className='user-link-container'>
            <p>Comment as <Link to='#' className='user-link'>{this.props.currentUser.username}</Link></p>
          </div>
          <div className='highlight-box'>
            <textarea className='comment-text-box' onChange={this.handleChange('content')} maxLength='40000' value={this.state.content} placeholder='What are your thoughts?' rows="10" ></textarea>
              {
                this.props.formType === 'create' ? (
                  <div className='markdown-footer'>
                    <button onClick={this.handleSubmit} className='bubble-button filled-blue'>Comment</button>
                  </div>
                ) : (
                  <div className='markdown-footer'>
                    <button onClick={this.props.handleToggle} className='bubble-button'>Cancel</button>
                    <button onClick={this.handleSubmit} className='bubble-button filled-blue'>Save Edits</button>
                  </div>
                )
              }
          </div>
        </div>
      </div>
    )
  }
}

export default CommentForm;