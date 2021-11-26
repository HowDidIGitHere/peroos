import {
  RECEIVE_ALL_COMMUNITIES,
  RECEIVE_COMMUNITY,
  REMOVE_COMMUNITY,
  RECEIVE_ERRORS
} from '../actions/community_actions';

const communitiesErrorsReducer = (state = null, action) => {

  switch (action.type) {
    case RECEIVE_ALL_COMMUNITIES:
      return null;
    case RECEIVE_COMMUNITY:
      return null;
    case REMOVE_COMMUNITY:
      return null;
    case RECEIVE_ERRORS:
      return action.errors.responseJSON;
    default:
      return state;
  }
}

export default communitiesErrorsReducer;