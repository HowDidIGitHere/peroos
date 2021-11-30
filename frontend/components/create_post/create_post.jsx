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
        community_id: this.props.match.params
      }
    }
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.props.getCommunity();
  }

  handleChange(type) {
    return e => {
      let tempPost = Object.assign({}, this.state.post);
      tempPost[type] = e.target.value;
      this.setState({ 
        post: tempPost
      });
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    e.stopPropagation();
    // let tempPost = Object.assign({}, this.state.post);
    // tempPost[community_id] = this.props.community.id;
    console.log(this.state.post);
    // this.props.createPost(tempPost);
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
                      <textarea onChange={this.handleChange('title')} maxLength='300' value={this.state.post.title} placeholder='Title' rows='1'></textarea>
                      <div>
                        {this.state.post.title.length}/300
                      </div>
                    </div>
                  </div>
                  <div className='create-post-form-input-optional'>
                    <div>
                      <textarea onChange={this.handleChange('body')} maxLength='40000' value={this.state.post.body} placeholder='Text (optional)' rows="10" ></textarea>
                    </div>
                  </div>
                </div>
                <div className='create-post-form-send'>
                  {/* <div className='create-post-form-flair'>

                  </div> */}
                  <hr/>
                  <div className='create-post-form-send-buttons'>
                    <div>
                      <Link to='/'><button className='bubble-button'>CANCEL</button></Link>
                      <button onClick={this.handleSubmit} className='bubble-button filled-blue'>POST</button>
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