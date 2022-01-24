import { connect } from "react-redux";
import { deleteComment, editComment } from "../../actions/comment_actions";
import { openModal } from "../../actions/modal_actions";
import { removeVote, updateVote, vote } from "../../actions/vote_actions";
import Comment from "./comment";

const mapDispatchToProps = dispatch => ({
  editComment: comment => dispatch(editComment(comment)),
  deleteComment: commentId => dispatch(deleteComment(commentId)),
  vote: v => dispatch(vote(v)),
  updateVote: v => dispatch(updateVote(v)),
  removeVote: v => dispatch(removeVote(v)),
  openModal: type => dispatch(openModal(type))
});

export default connect(null, mapDispatchToProps)(Comment);