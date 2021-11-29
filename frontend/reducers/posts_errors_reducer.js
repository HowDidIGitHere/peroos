import {
  RECEIVE_POST,
  RECEIVE_POST_ERRORS
} from '../actions/post_actions';

const postsErrorsReducer = (state = null, action) => {

  switch (action.type) {
    case RECEIVE_POST:
      return null;
    case RECEIVE_POST_ERRORS:
      return action.errors.responseJSON;
    default:
      return state;
  }
};

export default postsErrorsReducer;