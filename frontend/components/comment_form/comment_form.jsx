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
    console.log(this.state)
    this.props.processForm(this.state);
  }

  handleChange(type) {
    return e => this.setState({ [type]: e.target.value });
  }

  render() {
    return (
      <div>
        <div>
          <div className='user-link-container'>
            <p>Comment as <Link to='#' className='user-link'>{this.props.currentUser.username}</Link></p>
          </div>
          <div className='highlight-box'>
            <textarea className='comment-text-box' onChange={this.handleChange('content')} maxLength='40000' value={this.state.content} placeholder='What are your thoughts?' rows="10" ></textarea>
            <div className='markdown-footer'>
              <button onClick={this.handleSubmit} className='bubble-button filled-blue'>Comment</button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default CommentForm;