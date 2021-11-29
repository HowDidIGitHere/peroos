import React from "react";

const PostingToCard = props => {
  return (
    <div className='card aside-card'>
      <div className='posting-to-content'>
        <div>
          {/* <img/>ICON */}
          <h1>Posting to Peroos</h1>
        </div>
        <ol>
          <li>Remember the human</li>
          <li>Behave like you would in real life</li>
          <li>Look for the original source of content</li>
          <li>Search for duplicates before posting</li>
          <li>Read the community's rules</li>
        </ol>
      </div>
    </div>
  )
} 

export default PostingToCard;