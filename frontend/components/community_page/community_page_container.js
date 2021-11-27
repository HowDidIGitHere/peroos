import { connect } from "react-redux";
import { withRouter } from "react-router";
import { getCommunity } from "../../actions/community_actions";
import CommunityPage from "./community_page";

const mapStateToProps = (state, ownProps) => ({
  communityTitle: ownProps.match.params.communityTitle,
  currentUserId: state.session.currentUserId,
  community: state.entities.communities[ownProps.match.params.communityTitle]
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  getCommunity: () => dispatch(getCommunity(ownProps.match.params.communityTitle)),
  // follow: () => dispatch()
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CommunityPage));