import React from "react";

class CreateCommunity extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      sub: ''
    }
  }
  
  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  render() {
    return (
      <div>
        <h1>Create a community</h1>
        <h2>Name</h2>
        <p>Community names including capitalization cannot be changed.</p>
        
        <form onSubmit={}>
          <div className='input-group'>
            <input type='text' onChange={this.update('sub')} maxlength="21" required />
            <span className='highlight'></span>
            <span className='bar'></span>
            <label>Community</label>
          </div>

          <p>{21 - this.state.sub.length} Characters remaining</p>

          <button className='bubble-button filled-blue' type='submit'>Create Community</button>
        </form>
      </div>
    )
  }
}

export default CreateCommunity;