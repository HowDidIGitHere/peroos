import * as VoteAPIutil from '../util/vote_api_util';

export const RECEIVE_CURRENT_USER_VOTES = 'RECEIVE_CURRENT_USER_VOTES';

export const receiveCurrentUserVotes = votes => ({
  type: RECEIVE_CURRENT_USER_VOTES,
  votes
});

export const getCurrentUserVotes = () => dispatch => (
  VoteAPIutil.getAllVotes()
    .then(votes => dispatch(receiveCurrentUserVotes(votes)))
);