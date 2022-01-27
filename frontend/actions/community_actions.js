import * as CommunityAPIutil from '../util/community_api_util';
import * as FollowAPIutil from '../util/follow_api_util';

// action types
export const RECEIVE_ALL_COMMUNITIES = 'RECEIVE_ALL_COMMUNITIES';
export const RECEIVE_COMMUNITY = 'RECEIVE_COMMUNITY';
export const REMOVE_COMMUNITY = 'REMOVE_COMMUNITY';
export const RECEIVE_COMMUNITY_ERRORS = 'RECEIVE_COMMUNITY_ERRORS';

// actions
export const receiveAllCommunities = communities => ({
  type: RECEIVE_ALL_COMMUNITIES,
  communities
});

export const receiveCommunity = community => ({
  type: RECEIVE_COMMUNITY,
  community
});

export const removeCommunity = communityTitle => ({
  type: REMOVE_COMMUNITY,
  communityTitle
});

export const receiveErrors = errors => ({
  type: RECEIVE_COMMUNITY_ERRORS,
  errors
});

// thunk action creators
export const getFollowedCommunities = () => dispatch => (
  CommunityAPIutil.getFollowedCommunities()
    .then(communities => dispatch(receiveAllCommunities(communities)))
    .fail(errors => dispatch(receiveErrors(errors)))
);

export const getAllCommunities = () => dispatch => (
  CommunityAPIutil.getAllCommunities()
    .then(communitites => dispatch(receiveAllCommunities(communitites)))
    .fail(errors => dispatch(receiveErrors(errors)))
);

export const getCommunity = communityTitle => dispatch => (
  CommunityAPIutil.getCommunity(communityTitle)
    .then(community => dispatch(receiveCommunity(community)))
    .fail(errors => dispatch(receiveErrors(errors)))
);

export const createCommunity = community => dispatch => (
  CommunityAPIutil.createCommnity(community)
    .then(community => dispatch(receiveCommunity(community)))
    .fail(errors => dispatch(receiveErrors(errors)))
);

export const editCommunity = community => dispatch => (
  CommunityAPIutil.editCommunity(community)
    .then(community => dispatch(receiveCommunity(community)))
    .fail(errors => dispatch(receiveErrors(errors)))
);

export const deleteCommunity = communityTitle => dispatch => (
  CommunityAPIutil.deleteCommunity(communityTitle)
    .then(community => dispatch(removeCommunity(community)))
    .fail(errors => dispatch(receiveErrors(errors)))
);

export const followCommunity = follow => dispatch => (
  FollowAPIutil.follow(follow)
    .then(community => dispatch(receiveCommunity(community)))
);

export const unfollowCommunity = follow => dispatch => (
  FollowAPIutil.unfollow(follow)
    .then(community => dispatch(receiveCommunity(community)))
);