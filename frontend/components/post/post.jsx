import React from "react";
import { Link } from "react-router-dom";

class Post extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.getCurrentPost();
  }

  render() {
    const { body, media, list } = this.props.currentPost;
    const postContent = body ? body : (media ? media : list);
    return (
      <div className='post-container'>
        <div>
          <div className='post-sticky-header'>
            <div className='post-sticky-header-content'>
              <div className='post-sticky-header-title'>
                <div>
                  <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="file-alt" className="svg-inline--fa fa-file-alt fa-w-12" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                    <path fill="currentColor" d="M288 248v28c0 6.6-5.4 12-12 12H108c-6.6 0-12-5.4-12-12v-28c0-6.6 5.4-12 12-12h168c6.6 0 12 5.4 12 12zm-12 72H108c-6.6 0-12 5.4-12 12v28c0 6.6 5.4 12 12 12h168c6.6 0 12-5.4 12-12v-28c0-6.6-5.4-12-12-12zm108-188.1V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V48C0 21.5 21.5 0 48 0h204.1C264.8 0 277 5.1 286 14.1L369.9 98c9 8.9 14.1 21.2 14.1 33.9zm-128-80V128h76.1L256 51.9zM336 464V176H232c-13.3 0-24-10.7-24-24V48H48v416h288z"></path>
                  </svg>
                </div>
                <div>
                  <p>
                    title mctitleface
                  </p>
                </div>
              </div>
              <div>
                <button>
                  <p>&times;</p>
                  <p>Close</p>
                </button>
              </div>
            </div>
          </div>
          <div className='post-body-content'>
            <div className='post-body-main'>
              <div className='card'>
                <div>
                  <div className='vote-counter'>
                    <div>
                      <button>
                        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" xmlns="http://www.w3.org/1999/xlink" enableBackground="new 0 0 512 512">
                          <g>
                            <path d="m184.5,460.1h137.3v-223.1c0-11.3 9.1-20.4 20.3-20.4h69.3l-155.8-156.5-155.7,156.5h64.2c11.2,0 20.3,9.1 20.3,20.4v223.1h0.1zm157.5,40.9h-177.9c-11.2,0-20.3-9.1-20.3-20.4v-223.1h-92.9c-19.9,0-25.2-23.9-14.4-34.9l204.8-205.9c7.6-7.7 21.1-7.7 28.7,1.06581e-14l204.7,205.9c12.6,12.7 5.4,34.9-14.4,34.9h-98v223.1c0.1,11.3-9,20.4-20.3,20.4z"/>
                          </g>
                        </svg>
                      </button>
                      <div>
                        <p>0</p>
                      </div>
                      <button>
                        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" xmlns="http://www.w3.org/1999/xlink" enableBackground="new 0 0 512 512">
                          <g>
                            <path d="m100.3,294.1l155.7,155.9 155.7-155.8h-69.3c-11.2,0-20.3-9.1-20.3-20.3v-222.2h-137.3v222.1c0,11.2-9.1,20.3-20.3,20.3h-64.2zm141.3,199l-204.6-204.9c-5.8-5.8-7.5-14.6-4.4-22.2 3.1-7.6 10.5-12.6 18.8-12.6h92.9v-222.1c0-11.2 9.1-20.3 20.3-20.3h177.9c11.2,0 20.3,9.1 20.3,20.3v222.1h98c8.2,0 15.6,5 18.8,12.6 3.1,7.6 1.4,16.3-4.4,22.2l-204.8,204.9c-10.5,10.4-18.2,10.6-28.8,0z"/>
                          </g>
                        </svg>
                      </button>
                    </div>
                  </div>
                  <div>
                    
                  </div>
                  <div></div>
                  <div></div>
                  <div></div>
                </div>
              </div>
            </div>
            <div className='post-body-aside'>
              
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Post;