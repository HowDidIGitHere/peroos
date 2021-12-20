import * as SearchAPIutil from "../util/search_api_util";

// action types
export const RECEIVE_SEARCH_RESULTS = "RECEIVE_SEARCH_RESULTS";
export const RECEIVE_SEARCH_ERRORS = "RECEIVE_ERRORS";

// actions
export const receiveSearchResults = results => ({
  type: RECEIVE_SEARCH_RESULTS,
  results
});

export const receiveErrors = errors => ({
  type: RECEIVE_SEARCH_ERRORS,
  errors
});

// thunk action creators
export const getSearchResults = query => dispatch => (
  SearchAPIutil.getSearchResults(query)
    .then(results => dispatch(receiveSearchResults(results)))
    .fail(errors => dispatch(receiveErrors(errors)))
);
