import { connect } from "react-redux";
import { withRouter } from "react-router";
import { editCommunity, followCommunity, getCommunity, unfollowCommunity } from "../../actions/community_actions";
import { openModal } from "../../actions/modal_actions";
import { editPost, getAllPosts, getEvenMoreComPosts } from "../../actions/post_actions";
import { getCurrentUserVotes, removeVote, updateVote, vote } from "../../actions/vote_actions";
import CommunityPage from "./community_page";

const mapStateToProps = (state, ownProps) => ({
  currentUserId: state.session.currentUserId,
  currentUserVotes: state.entities.currentUserVotes,
  community: state.entities.communities[ownProps.match.params.communityTitle],
  posts: state.entities.posts
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  getCurrentUserVotes: () => dispatch(getCurrentUserVotes()),
  getCommunity: () => dispatch(getCommunity(ownProps.match.params.communityTitle)),
  follow: follow => dispatch(followCommunity(follow)),
  unfollow: follow => dispatch(unfollowCommunity(follow)),
  openModal: modal => dispatch(openModal(modal)),
  getAllPosts: (communityId, page) => dispatch(getAllPosts(communityId, page)),
  getEvenMoreComPosts: (communityId, page) => dispatch(getEvenMoreComPosts(communityId, page)),
  vote: v => dispatch(vote(v)),
  updateVote: v => dispatch(updateVote(v)),
  removeVote: v => dispatch(removeVote(v)),
  editPost: post => dispatch(editPost(post)),
  editCommunity: community => dispatch(editCommunity(community))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CommunityPage));