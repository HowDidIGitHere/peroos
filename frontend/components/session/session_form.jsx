import React from 'react';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.demoLogin = this.demoLogin.bind(this);
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user)
      .then(() => this.props.closeModal())
      .fail(() => console.log('Oh no'));
  }

  demoLogin() {
    const demo = { username: 'thePerooser', password: 'justPeroosing' };
    this.props.processForm(demo).then(this.props.closeModal());
  }

  renderErrors() {
    return (
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
      <div className='session-modal'>
        <div className='session-modal-x'>
          <span onClick={() => this.props.closeModal()}>&times;</span>
        </div>
        <h4>{this.props.formType}</h4>
        {
          this.props.formType === 'Login' ?
            (<p>By continuing, you agree to our <a className='std-link' href='#'>User Agreement</a> and <a className='std-link' href='#'>Privacy Policy</a>.</p>) :
            (<p>By continuing, you are setting up a Peroos account and agree to our <a className='std-link' href='#'>User Agreement</a> and <a className='std-link' href='#'>Privacy Policy</a>.</p>)
        }
        {/* Google OAuth and Apple Auth */}
        <form onSubmit={this.handleSubmit}>
          <div>

            <div className='input-group'>
              <input type='text' onChange={this.update('username')} required />
              <span className='highlight'></span>
              <span className='bar'></span>
              <label>Username</label>
            </div>

            <div className='input-group'>
              <input type='password' onChange={this.update('password')} required />
              <span className='highlight'></span>
              <span className='bar'></span>
              <label>Password</label>
            </div>

            <button className='bubble-button filled-blue' type='submit'>{this.props.formType}</button>
          </div>
        </form>
        {/* {this.renderErrors()} */}
        {
          this.props.formType === 'Login' ? (
          <div className='forgor'>
            <p>
              Forgot your <button>username</button> or <button>password</button>?
            </p>
          </div>) : null
        }
        {
          this.props.formType === 'Login' ?
            (
              <div>
                <p>New to Peroos? {this.props.otherForm}</p>
                <p>Just looking around? <button className='std-link thick-font' onClick={this.demoLogin}>DEMO LOGIN</button></p>
              </div>
            ) :
            (
              <div>
                <p>Already a Perooser? {this.props.otherForm}</p>
              </div>
            )
        }
      </div>
    );
  }
}

export default SessionForm;
