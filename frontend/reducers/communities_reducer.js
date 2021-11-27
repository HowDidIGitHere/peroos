import { 
  RECEIVE_ALL_COMMUNITIES,
  RECEIVE_COMMUNITY,
  REMOVE_COMMUNITY
} from '../actions/community_actions';

const communitiesReducer = (state = {}, action) => {
  Object.freeze(state);
  let nextState = Object.assign({}, state);

  switch (action.type) {
    case RECEIVE_ALL_COMMUNITIES:
      return action.communities;
    case RECEIVE_COMMUNITY:
      nextState[action.community.sub] = action.community;
      return nextState;
    case REMOVE_COMMUNITY:
      delete nextState[action.communityTitle];
      return nextState;
    default:
      return state;
  }
};

export default communitiesReducer;