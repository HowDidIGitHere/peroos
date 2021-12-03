import React from 'react';
import { Link } from 'react-router-dom';

const HomeDesc = props => {
  return (
    <div className='card aside-card'>
      <div className='home-description'>
        <h2>Home</h2>
        {
          props.currentUserId ? (
            <p>Your personal Peroos frontpage. Come here to check in with your favorite communities.</p>
          ) : (
            <p>Welcome to Peroos! Take a look around the great communities we have here.</p>
          )
        }
        {
          props.currentUserId ? (
            <Link className='bubble-button' to='/communities'>Communities</Link>
          ) : (
            <Link className='bubble-button filled-blue' to='/communities'>Communities</Link>
          )
        }
        {
          props.currentUserId ? (
            <Link className='bubble-button filled-blue' to='/submit'>Create Post</Link>
          ) : null
        }
        {
          props.currentUserId ? (
            <button className='bubble-button create-community-button' onClick={() => props.openModal('createCommunity')}>Create Community</button>
          ) : null
        }
      </div>
    </div>
  )
}

export default HomeDesc;