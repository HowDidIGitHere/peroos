import { connect } from "react-redux";
import { withRouter } from "react-router";
import { followCommunity, getCommunity, getFollowedCommunities, unfollowCommunity } from "../../actions/community_actions";
import CreatePost from "./create_post";
import { createPost } from '../../actions/post_actions'
import { openModal } from "../../actions/modal_actions";
import { getSearchResults } from "../../actions/search_actions";

const mapStateToProps = (state, ownProps)=> {
  if (ownProps.match.params.communityTitle) {
    return {
      community: state.entities.communities[ownProps.match.params.communityTitle],
      myCommunities: Object.values(state.entities.communities),
      errors: state.errors.postForm,
      searchResults: state.entities.searchResults
    };
  } else {
    return {
      myCommunities: Object.values(state.entities.communities),
      errors: state.errors.postForm,
      searchResults: state.entities.searchResults
    };
  }

};

const mapDispatchToProps = (dispatch, ownProps) => ({
  getFollowedCommunities: () => dispatch(getFollowedCommunities()),
  getCommunity: () => dispatch(getCommunity(ownProps.match.params.communityTitle)),
  createPost: post => dispatch(createPost(post)),
  follow: f => dispatch(followCommunity(f)),
  unfollow: f => dispatch(unfollowCommunity(f)),
  openModal: type => dispatch(openModal(type)),
  getSearchResults: query => dispatch(getSearchResults(query))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CreatePost));