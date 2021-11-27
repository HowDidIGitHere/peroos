import React from "react";

class CommunityPage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div className='communities-header'>
          {/* <img>BANNER</img> */}
          {this.props.communityTitle}
        </div>
        {/* <Feed/> */}
        {/* {this.props.currentUserId === this.props.community.creator_id ? <ModCommunityAside /> : <CommunityAside />} */}
      </div>
    )
  }
}

export default CommunityPage;