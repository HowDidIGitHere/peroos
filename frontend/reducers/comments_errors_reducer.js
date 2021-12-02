import {
  RECEIVE_ALL_COMMENTS,
  RECEIVE_COMMENT,
  RECEIVE_COMMENT_ERRORS
} from '../actions/comment_actions';

const commentsErrorsReducer = (state = null, action) => {
  switch (action.type) {
    case RECEIVE_ALL_COMMENTS:
      return null;
    case RECEIVE_COMMENT:
      return null;
    case RECEIVE_COMMENT_ERRORS:
      return action.errors.responseJSON;
    default:
      return state;
  }
};

export default commentsErrorsReducer;