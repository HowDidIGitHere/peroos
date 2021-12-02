import { connect } from "react-redux";
import { withRouter } from "react-router";
import { createComment } from "../../actions/comment_actions";
import CommentForm from "./comment_form";

const mapStateToProps = (state, ownProps) => ({
  comment: {
    content: '',
    commenter_id: state.session.currentUserId,
    post_id: ownProps.match.params.postId,
    // parent_comment_id: 1
  },
  currentUser: state.entities.users[state.session.currentUserId]
});

const mapDispatchToProps = dispatch => ({
  processForm: comment => dispatch(createComment(comment))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CommentForm));