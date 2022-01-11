import { connect } from "react-redux";
import { removeVoteOnPost, voteOnPost } from "../../actions/post_actions";
import PostCard from "./post_card";

// const mapStateToProps = state => ({

// });

const mapDispatchToProps = dispatch => ({
  voteOnPost: vote => dispatch(voteOnPost(vote)),
  removeVoteOnPost: vote => dispatch(removeVoteOnPost(vote))
});

export default connect(null, mapDispatchToProps)(PostCard);