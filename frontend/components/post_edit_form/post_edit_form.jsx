import React from "react";
import { Link } from "react-router-dom";

class PostEditForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.post;
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    e.stopPropagation();
    this.props.processForm(this.state)
      .then(() => this.setState({ body: '' }))
      .then(() => this.props.handleToggle());
  }

  handleChange(type) {
    return e => this.setState({ [type]: e.target.value });
  }

  render() {
    return (
      <div className='width-fix'>
        <div className='post-edit-width-fix'>
          <div className='highlight-box'>
            <textarea className='comment-text-box' onChange={this.handleChange('body')} maxLength='40000' value={this.state.body} placeholder='Text (optional)' rows="10" ></textarea>
            <div className='markdown-footer'>
              <button onClick={this.props.handleToggle} className='bubble-button'>Cancel</button>
              <button onClick={this.handleSubmit} className='bubble-button filled-blue'>Save</button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default PostEditForm;