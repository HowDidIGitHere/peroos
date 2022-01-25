import { connect } from "react-redux";
import { withRouter } from "react-router";
import { getAllComments, getEvenMoreComments } from "../../actions/comment_actions";
import { followCommunity, getCommunity, unfollowCommunity } from "../../actions/community_actions";
import { openModal } from "../../actions/modal_actions";
import { deletePost, editPost, getCurrentPost, removeCurrentPost} from "../../actions/post_actions";
import { getCurrentUserVotes, removeVote, updateVote, vote } from "../../actions/vote_actions";
import Post from "./post";

const mapStateToProps = (state, ownProps) => ({
  currentUserId: state.session.currentUserId,
  community: state.entities.communities[ownProps.match.params.communityTitle],
  currentPost: state.entities.currentPost,
  comments: state.entities.comments,
  currentUserVotes: state.entities.currentUserVotes
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  getCommunity: () => dispatch(getCommunity(ownProps.match.params.communityTitle)),
  getCurrentPost: () => dispatch(getCurrentPost(ownProps.match.params.postId)),
  removeCurrentPost: () => dispatch(removeCurrentPost(ownProps.match.params.postId)),
  getAllComments: page => dispatch(getAllComments(ownProps.match.params.postId, page)),
  getEvenMoreComments: page => dispatch(getEvenMoreComments(ownProps.match.params.postId, page)),
  editPost: post => dispatch(editPost(post)),
  deletePost: () => dispatch(deletePost(ownProps.match.params.postId)),
  vote: v => dispatch(vote(v)),
  updateVote: v => dispatch(updateVote(v)),
  removeVote: v => dispatch(removeVote(v)),
  getCurrentUserVotes: () => dispatch(getCurrentUserVotes()),
  openModal: type => dispatch(openModal(type)),
  follow: follow => dispatch(followCommunity(follow)),
  unfollow: follow => dispatch(unfollowCommunity(follow))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Post));