import { connect } from 'react-redux';
import React from 'react';
import { withRouter } from 'react-router-dom';
import MyCommunitiesList from './my_communities_list';
import { getModCommunities } from '../../actions/community_actions';

const mapStateToProps = state => ({
  modCommunities: Object.values(state.entities.communities),
  currentUserId: state.session.currentUserId
});

const mapDispatchToProps = dispatch => ({
  getModCommunities: () => dispatch(getModCommunities()),
  // getModCommunities: () => dispatch(getFollowedCommunities())
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(MyCommunitiesList));