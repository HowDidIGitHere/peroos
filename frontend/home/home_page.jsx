import React from "react";
import HomeDesc from "../components/home_description/home_desc";
import FooterCard from "../components/sidebar/footer_card";

class HomePage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='community-content'>
        <div className='main-community-page'>
          <div className='temp card'>
            PLACEHOLDER CARDS
          </div>
          <div className='temp card'>
            PLACEHOLDER CARDS
          </div>
          <div className='temp card'>
            PLACEHOLDER CARDS
          </div>
        </div>
        <div className='sidebar-community-page'>
          {/* <CommunityAbout community={this.props.community}/> */}
          {/* <ModeratorsCard community={this.props.community} /> */}
          <HomeDesc />
          <FooterCard />
        </div>
      </div>
    )
  }
}

export default HomePage;