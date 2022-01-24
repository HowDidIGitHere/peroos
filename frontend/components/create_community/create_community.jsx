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
    this.props.processForm(community)
      .then(res => {
        this.props.follow({ community_id: res.community.id })
          .then(res => this.props.history.push(`/${res.community.sub}`));
        this.props.closeModal();
      })
      .fail(() => console.log('Oh no'));
  }
  
  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  render() {
    return (
      <div className='create-community-content'>
        <div>
          <h1>
            Create a community
            <span onClick={() => this.props.closeModal()}>&times;</span>
          </h1>
          <div className='create-community-name-input'>
            <div className='create-community-name-sec'>
              <h2>Name</h2>
              <p>Community names including capitalization cannot be changed.</p>
            </div>

            <div className='create-community-input-sec'>
              <h2>p/</h2>
              <input type='text' onChange={this.update('sub')} maxLength="21" required />
              <p>{21 - this.state.sub.length} Characters remaining</p>
            </div>
          </div>
          <div className='create-community-errors'>
            <ul>
              {
                this.props.errors 
                ? this.props.errors.map((error, idx) => {
                  return <li key={`community-creation-error-${idx}`} >{error}</li>
                }) 
                : null
              }
            </ul>
            {/* <span>{this.props.errors ? this.props.errors : null}</span> */}
          </div>
          <div className='create-community-footer'>
            <button className='bubble-button' onClick={() => this.props.closeModal()}>Cancel</button>
            <button className='bubble-button filled-blue' onClick={this.handleSubmit}>Create Community</button>
          </div>
        </div>
      </div>
    )
  }
}

export default CreateCommunityForm;