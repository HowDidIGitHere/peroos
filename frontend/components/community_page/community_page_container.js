import { connect } from "react-redux";
import { withRouter } from "react-router";
import { followCommunity, getCommunity, unfollowCommunity } from "../../actions/community_actions";
import { openModal } from "../../actions/modal_actions";
import CommunityPage from "./community_page";

const mapStateToProps = (state, ownProps) => ({
  currentUserId: state.session.currentUserId,
  community: state.entities.communities[ownProps.match.params.communityTitle]
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  getCommunity: () => dispatch(getCommunity(ownProps.match.params.communityTitle)),
  follow: follow => dispatch(followCommunity(follow)),
  unfollow: follow => dispatch(unfollowCommunity(follow)),
  openModal: modal => dispatch(openModal(modal))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CommunityPage));