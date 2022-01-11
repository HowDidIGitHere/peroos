import { connect } from "react-redux";
import { deleteComment, removeVoteOnComment, voteOnComment } from "../../actions/comment_actions";
import Comment from "./comment";

const mapDispatchToProps = dispatch => ({
  deleteComment: commentId => dispatch(deleteComment(commentId)),
  voteOnComment: vote => dispatch(voteOnComment(vote)),
  removeVoteOnComment: vote => dispatch(removeVoteOnComment(vote))
});

export default connect(null, mapDispatchToProps)(Comment);