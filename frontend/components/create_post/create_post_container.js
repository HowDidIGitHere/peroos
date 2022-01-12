import { connect } from "react-redux";
import { withRouter } from "react-router";
import { getCommunity } from "../../actions/community_actions";
import CreatePost from "./create_post";
import { createPost, voteOnPost } from '../../actions/post_actions'

const mapStateToProps = (state, ownProps)=> ({
  community: state.entities.communities[ownProps.match.params.communityTitle]
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  getCommunity: () => dispatch(getCommunity(ownProps.match.params.communityTitle)),
  createPost: post => dispatch(createPost(post)),
  voteOnPost: vote => dispatch(voteOnPost(vote))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CreatePost));