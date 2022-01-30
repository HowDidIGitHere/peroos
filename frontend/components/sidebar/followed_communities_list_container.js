import { connect } from 'react-redux';
import React from 'react';
import { withRouter } from 'react-router-dom';
import { getFollowedCommunities, getModCommunities } from '../../actions/community_actions';
import FollowedCommunitiesList from './followed_communities_list';

const mapStateToProps = state => {
  const followedCommunities = Object.values(state.entities.communities).filter(com => {
    if (com.creator_id !== state.session.currentUserId) {
      return com;
    }
  });
  return ({
    followedCommunities,
    currentUserId: state.session.currentUserId
  })
};

const mapDispatchToProps = dispatch => ({
  // getModCommunities: () => dispatch(getModCommunities()),
  getFollowedCommunities: () => dispatch(getModCommunities())
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(FollowedCommunitiesList));