import React from 'react';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user);
  }

  renderErrors() {
    return(
      <ul>
        {
          Array.isArray(this.props.errors) ? 
            this.props.errors.map((error, i) => (
              <li key={`error-${i}`}>
                {error}
              </li>
            )) :
          ''
        }
      </ul>
    );
  }

  render() {
    return (
      <div>
        <h4>{this.props.formType}</h4>
        {
          this.props.formType === 'Login' ? 
          (<p>By continuing, you agree to our <a href='#'>User Agreement</a> and <a href='#'>Privacy Policy</a>.</p>) : 
          (<p>By continuing, you are setting up a Peroos account and agree to our <a href='#'>User Agreement</a> and <a href='#'>Privacy Policy</a>.</p>)
        }
        {/* Google OAuth and Apple Auth */}
        <br/>
        <form onSubmit={this.handleSubmit}>
          <div>
            <br/>
            <label>Username:
              <input type="text"
                value={this.state.username}
                onChange={this.update('username')}
              />
            </label>
            <br/>
            <label>Password:
              <input type="password"
                value={this.state.password}
                onChange={this.update('password')}
              />
            </label>
            <br/>
            <input className="session-submit" type="submit" value={this.props.formType} />
          </div>
        </form>
        {this.renderErrors()}
        {
          this.props.formType === 'Login' ? 
          (<p>New to Peroos? {this.props.otherForm}</p>) :
          (<p>Already a Perooser? {this.props.otherForm}</p>)
        }
      </div>
    );
  }
}

export default SessionForm;
