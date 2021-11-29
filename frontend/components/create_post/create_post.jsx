import React from "react";

class CreatePost extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      
    }
  }

  render() {
    return (
      <div>
        <div className='peroos-content-page'>
          <div className='content-section'>
            <div>
              <div className='create-post-draft-cont'>
                <a>
                  Create a post
                </a>
                {/* <button>DRAFTS<span>ICON</span></button> */}
              </div>
              <div className='community-selection-tab'>
                <div>
                  <div>
                    <span>

                    </span>
                    <div>
                      <input/>
                    </div>
                    <svg>

                    </svg>
                  </div>
                </div>
              </div>
              <div className='create-post-form'>
                <div className='create-post-form-type-tabs'>
                  <div>
                    <button>Post</button>
                    <button>Images & Video</button>
                    <button>Link</button>
                    <button>Poll</button>
                  </div>
                </div>
                <div className='create-post-form-input'>
                  <div className='create-post-form-input-title'>
                    <div>
                      <textarea maxLength='300' placeholder='Title' rows='1'></textarea>
                      <div>
                        0/300
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className='create-post-form-input-optional'>
                      <div>
                        <div className='create-post-form-input-markdown-modes'>

                        </div>
                        <div className='create-post-form-input-optional-textbox'>
                          <div>
                            <div>
                              
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='create-post-form-send'>
                  
                </div>
                <div className='create-post-form-footer'>
                  
                </div>
              </div>
            </div>
          </div>
          <div className='content-sidebar'>

          </div>
        </div>
      </div>
    )
  }
}

export default CreatePost;