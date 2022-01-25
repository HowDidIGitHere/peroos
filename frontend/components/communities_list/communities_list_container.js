import { connect } from "react-redux";
import CommunitiesList from "./communities_list";
import { followCommunity, getAllCommunities, unfollowCommunity } from "../../actions/community_actions";
import { openModal } from "../../actions/modal_actions";

const mapStateToProps = state => {
  let tempComs = Object.values(state.entities.communities);
  tempComs.sort((a, b) => {
    return b.follower_count - a.follower_count
  });

  return {
    allCommunities: tempComs,
    currentUserId: state.session.currentUserId
  }
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  getAllCommunities: () => dispatch(getAllCommunities()),
  follow: f => dispatch(followCommunity(f)),
  unfollow: f => dispatch(unfollowCommunity(f)),
  openModal: modal => dispatch(openModal(modal))
});

export default connect(mapStateToProps, mapDispatchToProps)(CommunitiesList);