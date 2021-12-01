import { connect } from "react-redux";
import { withRouter } from "react-router";
import { getCurrentPost } from "../../actions/post_actions";
import Post from "./post";

const mapStateToProps = (state, ownProps) => ({
  currentPost: state.entities.currentPost
  // comments: Object.values(state.entities.comments)
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  getCurrentPost: () => dispatch(getCurrentPost(ownProps.match.params.postId)),
  // getAllComments: () => dispatch(getAllComments(ownProps.match.params.postId))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Post));