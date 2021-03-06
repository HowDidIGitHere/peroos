import { RECEIVE_SEARCH_RESULTS } from "../actions/search_actions";

const searchReducer = (state = null, action) => {
  // Object.freeze(state);

  switch (action.type) {
    case RECEIVE_SEARCH_RESULTS:
      return Object.assign({}, action.results);
    default:
      return null;
  }
};

export default searchReducer;