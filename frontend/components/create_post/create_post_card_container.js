import { connect } from "react-redux";
import { withRouter } from "react-router";
import CreatePostCard from "./create_post_card";

const mapStateToProps = (state, ownProps) => ({
  currentUser: state.entities.users[state.session.currentUserId]
});

const mapDispatchToProps = dispatch => ({
  
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CreatePostCard));