import {
  RECEIVE_SEARCH_RESULTS,
  RECEIVE_SEARCH_ERRORS
} from "../actions/search_actions";

const searchErrorsReducer = (state = null, action) => {
  switch (key) {
    case RECEIVE_SEARCH_RESULTS:
      return null;
    case RECEIVE_SEARCH_ERRORS:
      return action.errors.responseJSON;
    default:
      return state;
  }
};

export default searchErrorsReducer;