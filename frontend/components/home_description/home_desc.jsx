import React from 'react';
import { Link } from 'react-router-dom';

const HomeDesc = props => {
  return (
    <div>
      <Link to='/submit'>Create Post</Link>
      {/* // Create Community */}
      <button className='create-community-button' onClick={() => props.openModal('createCommunity')}>Create Community</button>
    </div>
  )
}

export default HomeDesc;