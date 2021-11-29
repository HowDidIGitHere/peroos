import React from "react";
import { Link } from "react-router-dom";

const ModeratorsCard = props => {
  return (
    <div className='card aside-card'>
      <div>
        <h2>Moderator</h2>
      </div>
      <div>
        <ul>
          {
            props.community.moderators.map((mod, idx) => (
              <li key={`mod-${idx}`}>
                <Link key to={`/user/${mod.username}`}>u/{mod.username}</Link>
              </li>
            ))
          }
        </ul>
      </div>
    </div>
  )
}

export default ModeratorsCard;