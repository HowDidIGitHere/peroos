import { RECEIVE_CURRENT_USER_VOTES } from '../actions/vote_actions'

const currentUserVotesReducer = (state = {}, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_CURRENT_USER_VOTES:
      return action.votes;
    default:
      return state;
  }
}

export default currentUserVotesReducer;