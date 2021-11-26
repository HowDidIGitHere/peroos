import { 
  RECEIVE_ALL_COMMUNITIES,
  RECEIVE_COMMUNITY,
  REMOVE_COMMUNITY
} from '../actions/community_actions';

const communitiesReducer = (state = {}, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_ALL_COMMUNITIES:
      return action.communities;
    case RECEIVE_COMMUNITY:
      let nextState = Object.assign({}, state);
      nextState[action.community.id] = action.community;
      return nextState;
    case REMOVE_COMMUNITY:
      let nextState = Object.assign({}, state);
      delete nextState[action.community.id];
      return nextState;
    default:
      return state;
  }
};

export default communitiesReducer;