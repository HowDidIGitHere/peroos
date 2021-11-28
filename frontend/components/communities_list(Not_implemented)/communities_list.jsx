import React from "react";
import { Link } from "react-router-dom";

class CommunitiesList extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.getAllCommunities();
  }

  render() {

    return (
      <div>
        <div className='communities-list-header'>
          <div className='communities-list-header-content'>
            <h1>Top Communities</h1>
            <p>Browse Peroos' most popular communities.</p>
          </div>
        </div>

        <div className='communities-list-content'>
          <div className='communities-listing'>
            <div className='communities-list-ex'>
              <h2>Top Communities</h2>
              <p>Followers</p>
            </div>
            <ol className='communities-list-entries'>
              {
                this.props.allCommunities ? this.props.allCommunities.map((community, idx) => (
                  <li key={`com-${idx}`}>
                    <Link to={`/${community.sub}`}>
                      <span className='community-list-item'>
                        <h1>{idx + 1}</h1>
                        {/* <img/>COMMUNITY ICON */}
                        <h1>{community.sub}</h1>
                      </span>
                      <p>{community.followers.length}</p>
                    </Link>
                  </li>
                )) : ''
              }
            </ol>
          </div>
        </div>
      </div>

    )
  }
}

export default CommunitiesList;