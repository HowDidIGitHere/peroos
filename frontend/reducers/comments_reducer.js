import {
  RECEIVE_ALL_COMMENTS,
  RECEIVE_COMMENT,
  REMOVE_COMMENT
} from '../actions/comment_actions'

const commentsReducer = (state = null, action) => {
  let nextState;

  switch (action.type) {
    case RECEIVE_ALL_COMMENTS:
      nextState = state ? state.concat(action.comments) : action.comments;
      return nextState;
    case RECEIVE_COMMENT:
      nextState = state ? state : [];
      nextState.unshift(action.comment)
      return nextState;
    // case REMOVE_COMMENT:

    default:
      return state;
  }
};

export default commentsReducer;