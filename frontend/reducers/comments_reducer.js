import {
  RECEIVE_ALL_COMMENTS,
  RECEIVE_COMMENT,
  REMOVE_COMMENT
} from '../actions/comment_actions';
import { RECEIVE_ALL_COMMUNITIES } from '../actions/community_actions';

const commentsReducer = (state = null, action) => {
  let nextState;

  switch (action.type) {
    case RECEIVE_ALL_COMMUNITIES:
      nextState = state ? state.concat(action.comments) : action.comments;
      return nextState;
    case RECEIVE_COMMENT:
      nextState = state ? state.concat(action.comments) : action.comments;
      return nextState;
    // case REMOVE_COMMENT:

    default:
      return state;
  }
};

export default commentsReducer;