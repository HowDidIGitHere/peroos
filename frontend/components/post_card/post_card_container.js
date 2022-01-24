import { connect } from "react-redux";
import { editPost } from "../../actions/post_actions";
import { getCurrentUserVotes, removeVote, updateVote, vote } from "../../actions/vote_actions";
import PostCard from "./post_card";

// const mapStateToProps = state => ({

// });

const mapDispatchToProps = dispatch => ({
  vote: v => dispatch(vote(v)),
  updateVote: v => dispatch(updateVote(v)),
  removeVote: v => dispatch(removeVote(v)),
  editPost: post => dispatch(editPost(post)),
  // getCurrentUserVotes: () => dispatch(getCurrentUserVotes())
});

export default connect(null, mapDispatchToProps)(PostCard);