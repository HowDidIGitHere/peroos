import { connect } from "react-redux";
import HomePage from "./home_page";
import { getPersonalFeed } from "../../actions/post_actions";
import { withRouter } from "react-router";

const mapStateToProps = state => ({
  currentUserId: state.session.currentUserId,
  personalFeed: state.entities.posts
});

const mapDispatchToProps = dispatch => ({
  getPersonalFeed: page => dispatch(getPersonalFeed(page))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(HomePage));