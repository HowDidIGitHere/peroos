import * as CommunityAPIutil from '../util/community_api_util';
import { receiveCurrentUser } from './session_actions';

// action types
export const RECEIVE_ALL_COMMUNITIES = 'RECEIVE_ALL_COMMUNITIES';
export const RECEIVE_COMMUNITY = 'RECEIVE_COMMUNITY';
export const REMOVE_COMMUNITY = 'REMOVE_COMMUNITY';
export const RECEIVE_COMMUNITY_ERRORS = 'RECEIVE_COMMUNITY_ERRORS';

export const RECEIVE_FOLLOW = 'RECEIVE_FOLLOW';
export const REMOVE_FOLLOW = 'REMOVE_FOLLOW';

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


export const receiveFollow = follow => ({

});

export const removeFollow = followId => ({

});

// thunk action creators
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
    .then(community => dispatch(receiveCurrentUser(community)))
    .fail(errors => dispatch(receiveErrors(errors)))
);

export const deleteCommunity = communityTitle => dispatch => (
  CommunityAPIutil.deleteCommunity(communityTitle)
    .then(community => dispatch(removeCommunity(community)))
    .fail(errors => dispatch(receiveErrors(errors)))
);