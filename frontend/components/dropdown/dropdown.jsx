import React from 'react';
import { Link } from 'react-router-dom'

export default class DropdownDOM extends React.Component {
  constructor(props) {
    super(props);
    this.state = { show: false };
    this.dropdownDiv = React.createRef();
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    this.documentListener = e => {
      if (!this.dropdownDiv.current.contains(e.target)) {
        this.setState({ show: false });
      } 
    }
    
    document.addEventListener('click', this.documentListener, true);
  }

  componentWillUnmount() {
    document.removeEventListener('click', this.documentListener, true);
  }

  handleClick(e) {
    this.setState({ show: !this.state.show });
  }

  render() {
    return (
      <div className='dropdown-outer' onClick={this.handleClick} ref={this.dropdownDiv}>
        <button>DOM Dropdown</button>
        {
          this.state.show ? (
            <div className='dropdown-inner'>
              <ul>
                <li><Link to='blue'>Go To Blue (Link component)</Link></li>
                <li><Link to='red'>Go To Red (Link component)</Link></li>
              </ul>
            </div>
          ) : null
        }
      </div>
    )
  }
}