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
          <h1>Top Communities</h1>
          <p>Browse Peroos' most popular communities.</p>
        </div>

        <ol>
          {
            this.props.allCommunities ? this.props.allCommunities.map((community, idx) => (
              <li key={`com-${idx}`}>
                <Link to={`/${community.sub}`}>{community.sub}</Link>
              </li>
            )) : ''
          }
        </ol>
      </div>

    )
  }
}

export default CommunitiesList;