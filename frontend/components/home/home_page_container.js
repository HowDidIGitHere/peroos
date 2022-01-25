import { connect } from "react-redux";
import HomePage from "./home_page";
import { editPost, getEvenMoreFeedPosts, getPersonalFeed } from "../../actions/post_actions";
import { withRouter } from "react-router";
import { getCurrentUserVotes, removeVote, updateVote, vote } from "../../actions/vote_actions";
import { openModal } from "../../actions/modal_actions";

const mapStateToProps = state => ({
  currentUserId: state.session.currentUserId,
  currentUserVotes: state.entities.currentUserVotes,
  personalFeed: state.entities.posts
});

const mapDispatchToProps = dispatch => ({
  getPersonalFeed: page => dispatch(getPersonalFeed(page)),
  getEvenMoreFeedPosts: page => dispatch(getEvenMoreFeedPosts(page)),
  getCurrentUserVotes: () => dispatch(getCurrentUserVotes()),
  openModal: modal => dispatch(openModal(modal)),
  vote: v => dispatch(vote(v)),
  updateVote: v => dispatch(updateVote(v)),
  removeVote: v => dispatch(removeVote(v)),
  editPost: post => dispatch(editPost(post))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(HomePage));