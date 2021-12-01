import { connect } from "react-redux";
import HomePage from "./home_page";
import { getPersonalFeed } from "../actions/post_actions";

const mapStateToProps = state => ({
  currentUserId: state.session.currentUserId,
  personalFeed: state.entities.posts
});

const mapDispatchToProps = dispatch => ({
  getPersonalFeed: page => dispatch(getPersonalFeed(page))
});

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);