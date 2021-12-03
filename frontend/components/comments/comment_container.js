import { connect } from "react-redux";
import { deleteComment } from "../../actions/comment_actions";
import Comment from "./comment";

const mapDispatchToProps = dispatch => ({
  deleteComment: commentId => dispatch(deleteComment(commentId))
});

export default connect(null, mapDispatchToProps)(Comment);