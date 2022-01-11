import { connect } from "react-redux";
import { withRouter } from "react-router";
import { getAllComments, getEvenMoreComments } from "../../actions/comment_actions";
import { getCommunity } from "../../actions/community_actions";
import { deletePost, editPost, getCurrentPost, removeCurrentPost, removeVoteOnCurrentPost, voteOnCurrentPost} from "../../actions/post_actions";
import Post from "./post";

const mapStateToProps = (state, ownProps) => ({
  currentUserId: state.session.currentUserId,
  community: state.entities.communities[ownProps.match.params.communityTitle],
  currentPost: state.entities.currentPost,
  comments: state.entities.comments
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  getCommunity: () => dispatch(getCommunity(ownProps.match.params.communityTitle)),
  getCurrentPost: () => dispatch(getCurrentPost(ownProps.match.params.postId)),
  removeCurrentPost: () => dispatch(removeCurrentPost(ownProps.match.params.postId)),
  getAllComments: page => dispatch(getAllComments(ownProps.match.params.postId, page)),
  getEvenMoreComments: page => dispatch(getEvenMoreComments(ownProps.match.params.postId, page)),
  editPost: post => dispatch(editPost(post)),
  deletePost: () => dispatch(deletePost(ownProps.match.params.postId)),
  voteOnCurrentPost: vote => dispatch(voteOnCurrentPost(vote)),
  removeVoteOnCurrentPost: vote => dispatch(removeVoteOnCurrentPost(vote))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Post));