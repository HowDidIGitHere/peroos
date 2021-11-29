import React from "react";
import { Link } from "react-router-dom";
import FooterCard from "../sidebar/footer_card";
import PostingToCard from "./posting_to_peroos_card";

class CreatePost extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      post: {
        title: '',
        body: '',
        media: '',
        link: '',
        community_id: undefined
      }
    }
  }

  handleChange(type) {
    return e => this.setState({ 
      post: { [type]: e.currentTarget.value }
    });
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
              {/* <div className='community-selection-tab'>
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
              </div> */}
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
                      <textarea onChange={this.handleChange('title')} maxLength='300' placeholder='Title' rows='1'>{this.state.post.title}</textarea>
                      <div>
                        {this.state.post.title.length}/300
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
                  {/* <div className='create-post-form-flair'>

                  </div> */}
                  <hr/>
                  <div className='create-post-form-send-buttons'>
                    <div>
                      <Link to='/'>CANCEL</Link>
                      <button>POST</button>
                    </div>
                  </div>
                </div>
                {/* <div className='create-post-form-footer'>
                  
                </div> */}
              </div>
            </div>
          </div>
          <div className='content-sidebar'>
            <div className='sidebar-cards-container'>
              <PostingToCard />
              <FooterCard />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default CreatePost;