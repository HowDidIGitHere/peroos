import { connect } from "react-redux";
import { editPost } from "../../actions/post_actions";
import PostEditForm from "./post_edit_form";

const mapStateToProps = state => ({
  currentUser: state.entities.users[state.session.currentUserId],
  formType: 'edit'
});

const mapDispatchToProps = dispatch => ({
  processForm: post => dispatch(editPost(post))
});

export default connect(mapStateToProps, mapDispatchToProps)(PostEditForm);