import { RECEIVE_CURRENT_USER_VOTE, RECEIVE_CURRENT_USER_VOTES, REMOVE_CURRENT_USER_VOTE } from '../actions/vote_actions'

const currentUserVotesReducer = (state = {}, action) => {
  Object.freeze(state);
  let nextState = Object.assign({}, state);

  switch (action.type) {
    case RECEIVE_CURRENT_USER_VOTES:
      return action.votes;
    case RECEIVE_CURRENT_USER_VOTE:
      nextState[`${action.vote.parent_type}${action.vote.parent_id}`] = action.vote;
      return nextState;
    case REMOVE_CURRENT_USER_VOTE:
      delete nextState[`${action.vote.parent_type}${action.vote.parent_id}`];
      return nextState;
    default:
      return state;
  }
}

export default currentUserVotesReducer;