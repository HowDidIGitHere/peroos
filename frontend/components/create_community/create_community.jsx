import React from "react";

class CreateCommunityForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      sub: '',
      creator_id: this.props.sessionId
    }
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const community = Object.assign({}, this.state);
    this.props.processForm(community).then(this.props.closeModal());
  }
  
  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  render() {
    return (
      <div>
        <span onClick={() => this.props.closeModal()}>&times;</span>
        <h1>Create a community</h1>
        <h2>Name</h2>
        <p>Community names including capitalization cannot be changed.</p>
        
        <form onSubmit={this.handleSubmit}>
          <div className='input-group'>
            <input type='text' onChange={this.update('sub')} maxLength="21" required />
            <span className='highlight'></span>
            <span className='bar'></span>
            <label>Community</label>
          </div>

          <p>{21 - this.state.sub.length} Characters remaining</p>

          <button className='bubble-button'>Cancel</button>
          <button className='bubble-button filled-blue' type='submit'>Create Community</button>
        </form>
      </div>
    )
  }
}

export default CreateCommunityForm;