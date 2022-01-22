import * as VoteAPIutil from '../util/vote_api_util';

export const RECEIVE_CURRENT_USER_VOTES = 'RECEIVE_CURRENT_USER_VOTES';
export const RECEIVE_CURRENT_USER_VOTE = 'RECEIVE_CURRENT_USER_VOTE';
export const REMOVE_CURRENT_USER_VOTE = 'REMOVE_CURRENT_USER_VOTE';

export const receiveCurrentUserVotes = votes => ({
  type: RECEIVE_CURRENT_USER_VOTES,
  votes
});

export const receiveCurrentUserVote = vote => ({
  type: RECEIVE_CURRENT_USER_VOTE,
  vote
});

export const removeCurrentUserVote = vote => ({
  type: REMOVE_CURRENT_USER_VOTE,
  vote
});

export const getCurrentUserVotes = () => dispatch => (
  VoteAPIutil.getAllVotes()
    .then(votes => dispatch(receiveCurrentUserVotes(votes)))
);

// votes
export const vote = vote => dispatch => (
  VoteAPIutil.vote(vote)
    .then(vote => dispatch(receiveCurrentUserVote(vote)))
);

export const updateVote = vote => dispatch => (
  VoteAPIutil.updateVote(vote)
    .then(vote => dispatch(receiveCurrentUserVote(vote)))
);

export const removeVote = vote => dispatch => (
  VoteAPIutil.removeVote(vote)
    .then(vote => dispatch(removeCurrentUserVote(vote)))
);
