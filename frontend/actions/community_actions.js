import * as CommunityAPIutil from '../util/community_api_util';
import { receiveCurrentUser } from './session_actions';

// action types
export const RECEIVE_ALL_COMMUNITIES = 'RECEIVE_ALL_COMMUNITIES';
export const RECEIVE_COMMUNITY = 'RECEIVE_COMMUNITY';
export const REMOVE_COMMUNITY = 'REMOVE_COMMUNITY';
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';

// actions
export const receiveAllCommunities = communities => ({
  type: RECEIVE_ALL_COMMUNITIES,
  communities
});

export const receiveCommunity = community => ({
  type: RECEIVE_COMMUNITY,
  community
});

export const removeCommunity = community => ({
  type: REMOVE_COMMUNITY,
  communityId
});

export const receiveErrors = errors => ({
  type: RECEIVE_ERRORS,
  errors
});

// thunk action creators
export const getAllCommunities = () => dispatch => (
  CommunityAPIutil.getAllCommunities()
    .then(communitites => dispatch(receiveAllCommunities(communitites)))
    .fail(errors => dispatch(receiveErrors(errors)))
);

export const getCommunity = communityId => dispatch => (
  CommunityAPIutil.getCommunity(communityId)
    .then(community => dispatch(receiveCommunity(community)))
    .fail(errors => dispatch(receiveErrors(errors)))
);

export const createCommnity = community => dispatch => (
  CommunityAPIutil.createCommnity(community)
    .then(community => dispatch(receiveCommunity(community)))
    .fail(errors => dispatch(receiveErrors(errors)))
);

export const editCommunity = community => dispatch => (
  CommunityAPIutil.editCommunity(community)
    .then(community => dispatch(receiveCurrentUser(community)))
    .fail(errors => dispatch(receiveErrors(errors)))
);

export const deleteCommunity = communityId => dispatch => (
  CommunityAPIutil.deleteCommunity(communityId)
    .then(community => dispatch(removeCommunity(community)))
    .fail(errors => dispatch(receiveErrors(errors)))
);