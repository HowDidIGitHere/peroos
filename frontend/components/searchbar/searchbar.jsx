import React from "react";
import { Link } from "react-router-dom";

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchQuery: ''
    }
    this.handleSearch = this.handleSearch.bind(this);
    this.handleDropdown = this.handleDropdown.bind(this);
  }


  handleDropdown(toggle) {
    const dropdown = document.getElementsByClassName('search-dropdown')[0]
    if (toggle) {
      dropdown.style.display = 'none';
    } else {
      dropdown.style.display = 'block';
    }
  }

  handleSearch(e) {
    this.setState({ searchQuery: e.target.value }, () => this.props.getSearchResults(this.state));
  }

  render() {
    return (
      <div className='search-bar-nav' >
        <form autoComplete="off" role='search'>
          <label>
            <div>
              <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="search" className="svg-inline--fa fa-search fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <path fill="currentColor" d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"></path>
              </svg>
            </div>
          </label>
          <input 
            type='search' 
            placeholder='Search Peroos' 
            onChange={this.handleSearch} 
            onFocus={() => this.handleDropdown(false)} 
            onBlur={(e) => {
              if (!(e.relatedTarget && e.relatedTarget.classList[0] === 'search-background-highlight')) {
                this.handleDropdown(true);
              }
            }} 
            value={this.state.searchQuery} 
          />
        </form>
        <div className='search-dropdown'>
          <ul>
            {
              this.props.searchResults ? (
                this.state.searchQuery === '' ? (
                  <div className='empty-search-bar'>
                    <div>
                      <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="search" className="svg-inline--fa fa-search fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                        <path fill="currentColor" d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"></path>
                      </svg>
                    </div>
                    <p>Look for a community!</p>
                  </div>
                ) : (
                Object.values(this.props.searchResults).length === 0 ? (
                  <div className='empty-search-bar'>
                    <div>
                      <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="frown-open" className="svg-inline--fa fa-frown-open fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512">
                        <path fill="currentColor" d="M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm0 448c-110.3 0-200-89.7-200-200S137.7 56 248 56s200 89.7 200 200-89.7 200-200 200zm-48-248c0-17.7-14.3-32-32-32s-32 14.3-32 32 14.3 32 32 32 32-14.3 32-32zm128-32c-17.7 0-32 14.3-32 32s14.3 32 32 32 32-14.3 32-32-14.3-32-32-32zm-80 112c-35.6 0-88.8 21.3-95.8 61.2-2 11.8 9 21.5 20.5 18.1 31.2-9.6 59.4-15.3 75.3-15.3s44.1 5.7 75.3 15.3c11.4 3.5 22.5-6.3 20.5-18.1-7-39.9-60.2-61.2-95.8-61.2z"></path>
                      </svg>
                    </div>
                    <p>We couldn't find anything...</p>
                  </div>
                ) : (
                Object.values(this.props.searchResults).map((res, idx) => {
                  const resColor = {
                    color: res.color ? res.color : '#1a6dcd'
                  };
                  return (
                    <li key={`search-result-${idx}`} className='my-community-choice-list-item'>
                      <Link to={`/${res.sub}`}
                        onClick={(e) => {
                          e.preventDefault();
                          e.stopPropagation();
                          this.handleDropdown(true);
                          this.setState({ searchQuery: '' }, () => this.props.history.push(`/${res.sub}`))
                        }} 
                        className='search-background-highlight'
                      >
                        <span className='my-community-choice-list-item-icon'>
                          <svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="product-hunt" style={resColor} className="community-sub-icon svg-inline--fa fa-product-hunt fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                            <path fill="currentColor" d="M326.3 218.8c0 20.5-16.7 37.2-37.2 37.2h-70.3v-74.4h70.3c20.5 0 37.2 16.7 37.2 37.2zM504 256c0 137-111 248-248 248S8 393 8 256 119 8 256 8s248 111 248 248zm-128.1-37.2c0-47.9-38.9-86.8-86.8-86.8H169.2v248h49.6v-74.4h70.3c47.9 0 86.8-38.9 86.8-86.8z"></path>
                          </svg>
                        </span>
                        <span className='my-community-choice-list-item-info ellipses'>
                          <p>
                            {res.sub}
                          </p>
                          <p>
                            {res.follower_count} follower{res.follower_count !== 1 ? 's' : ''}
                          </p>
                        </span>
                      </Link>
                    </li>
                  )
                })))) : (
                  <div className='empty-search-bar'>
                    <div>
                      <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="search" className="svg-inline--fa fa-search fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                        <path fill="currentColor" d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"></path>
                      </svg>
                    </div>
                    <p>Look for a community!</p>
                  </div>
                )
            }
          </ul>
        </div>
      </div>
    )
  }
}

export default SearchBar;