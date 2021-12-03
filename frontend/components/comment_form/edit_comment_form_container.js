import { connect } from "react-redux";
import { editComment } from "../../actions/comment_actions";
import CommentForm from "./comment_form";

const mapStateToProps = state => ({
  currentUser: state.entities.users[state.session.currentUserId],
  formType: 'edit'
});

const mapDispatchToProps = dispatch => ({
  processForm: comment => dispatch(editComment(comment))
});

export default connect(mapStateToProps, mapDispatchToProps)(CommentForm);