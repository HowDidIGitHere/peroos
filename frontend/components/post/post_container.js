import { connect } from "react-redux";
import { withRouter } from "react-router";
import { getAllComments, getEvenMoreComments } from "../../actions/comment_actions";
import { getCommunity } from "../../actions/community_actions";
import { getCurrentPost, removeCurrentPost} from "../../actions/post_actions";
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
  getEvenMoreComments: page => dispatch(getEvenMoreComments(ownProps.match.params.postId, page))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Post));