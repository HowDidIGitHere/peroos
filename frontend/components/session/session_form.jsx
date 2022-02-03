import React from 'react';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      errors: null
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
    let user;
    if (this.props.formType === 'Sign up') {
      const randBetween = (min, max) => min + Math.floor(Math.random() * (max - min + 1));
      const r = randBetween(0, 255);
      const g = randBetween(0, 255);
      const b = randBetween(0, 255);
      user = Object.assign({}, { username: this.state.username, password: this.state.password }, { color: `rgb(${r},${g},${b})` });
    } else {
      user = Object.assign({}, { username: this.state.username, password: this.state.password });
    }
    this.props.processForm(user)
      .then(() => {
        this.setState({ errors: null }, this.props.closeModal())
      })
      .fail(res => {
        const elementPass = document.getElementById('password');
        if (this.props.formType !== 'Sign up' || res.responseJSON.includes('Username has already been taken')) {
          const elementUser = document.getElementById('username');
          elementUser.style.borderColor = 'red';
        }
        elementPass.style.borderColor = 'red';
        this.setState({ errors: res.responseJSON })
      });
  }

  demoLogin() {
    const demo = { username: 'thePerooser', password: 'justPeroosing' };
    this.props.processForm(demo).then(() => {
      this.setState({ errors: null }, this.props.closeModal())
    });
  }

  renderErrors() {
    return (
      <ul>
        {
          Array.isArray(this.state.errors) ?
            this.state.errors.map((error, i) => (
              <li key={`error-${i}`}>
                <p style={{color: 'red'}}>{error}</p>
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
            // (<p>By continuing, you agree to our <a className='std-link' href='#'>User Agreement</a> and <a className='std-link' href='#'>Privacy Policy</a>.</p>) :
            (<p>By continuing, you agree to have a wonderful time and be a pleasant human being.</p>) :
            (<p>By continuing, you are setting up a Peroos account and agree to smile and spread cheer to those around you.</p>)
            // (<p>By continuing, you are setting up a Peroos account and agree to our <a className='std-link' href='#'>User Agreement</a> and <a className='std-link' href='#'>Privacy Policy</a>.</p>)
        }
        {/* Google OAuth and Apple Auth */}
        <form onSubmit={this.handleSubmit}>
          <div>

            <div className='input-group'>
              <input id='username' type='text' onChange={this.update('username')} onFocus={(e) => e.target.style.borderColor = 'rgba(0, 0, 0, 0.2)'} required />
              <span className='highlight'></span>
              <span className='bar'></span>
              <label>Username</label>
            </div>

            <div className='input-group'>
              <input id='password' type='password' onChange={this.update('password')} onFocus={(e) => e.target.style.borderColor = 'rgba(0, 0, 0, 0.2)'} required />
              <span className='highlight'></span>
              <span className='bar'></span>
              <label>Password</label>
            </div>

            <button className='bubble-button filled-blue' type='submit'>{this.props.formType}</button>
          </div>
        </form>
        {this.renderErrors()}
        {/* {
          this.props.formType === 'Login' ? (
          <div className='forgor'>
            <p>
              Forgot your <button>username</button> or <button>password</button>?
            </p>
          </div>) : null
        } */}
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
