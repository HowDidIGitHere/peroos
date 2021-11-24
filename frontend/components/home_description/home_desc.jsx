import React from 'react';
import { Link } from 'react-router-dom';

const HomeDesc = props => {
  return (
    <div className='home-description'>
      <p>Your personal Peroos frontpage. Come here to check in with your favorite communities.</p>
      <Link className='bubble-button filled-blue' to='/submit'>Create Post</Link>
      {/* // Create Community */}
      <button className='bubble-button create-community-button' onClick={() => props.openModal('createCommunity')}>Create Community</button>
    </div>
  )
}

export default HomeDesc;