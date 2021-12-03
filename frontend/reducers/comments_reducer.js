import {
  RECEIVE_EVEN_MORE_COMMENTS,
  RECEIVE_ALL_COMMENTS,
  RECEIVE_COMMENT,
  REMOVE_COMMENT,
  RECEIVE_EDITED_COMMENT
} from '../actions/comment_actions'

const commentsReducer = (state = null, action) => {
  let nextState;
  const newState = [];

  switch (action.type) {
    case RECEIVE_ALL_COMMENTS:
      return action.comments;
    case RECEIVE_EVEN_MORE_COMMENTS:
      nextState = state ? state.concat(action.comments) : action.comments;
      return nextState;
    case RECEIVE_COMMENT:
      return state ? [action.comment].concat(state) : [action.comment] 
    case REMOVE_COMMENT:
      for (let i = 0; i < state.length; i++) {
        if (state[i].id !== action.commentId) {
          newState.push(state[i]);
        }
      }
      return newState;
    case RECEIVE_EDITED_COMMENT:
      for (let i = 0; i < state.length; i++) {
        if (state[i].id !== action.comment.id) {
          newState.push(state[i]);
        } else {
          newState.push(action.comment);
        }
      }
      return newState;
      // return state.map(comment => {
      //   return comment.id === action.comment.id ? action.comment : comment;
      // });
    default:
      return state;
  }
};

export default commentsReducer;