import React from "react";

const PostCard = props => {
  return (
    <div className='card post-card post-card-border'>
      <div className='post-content'>
        {/* <div className='vote-counter'>

        </div> */}
        <div className='post-content-body'>
          <div className='posted-by'>
            {props.post.title}
          </div>
          <div>

          </div>
          <div>
            
          </div>
          <div>
            
          </div>
        </div>
      </div>
    </div>
  )
}

export default PostCard;