import React from "react";
import HomeDescContainer from "../components/home_description/home_desc_container";
import FooterCard from "../components/sidebar/footer_card";
import CreatePostCardContainer from "../components/create_post/create_post_card_container";

class HomePage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='community-content'>
        <div className='main-community-page'>
          <CreatePostCardContainer />
        </div>
        <div className='sidebar-community-page'>
          {/* <CommunityAbout community={this.props.community}/> */}
          {/* <ModeratorsCard community={this.props.community} /> */}
          <HomeDescContainer />
          <FooterCard />
        </div>
      </div>
    )
  }
}

export default HomePage;