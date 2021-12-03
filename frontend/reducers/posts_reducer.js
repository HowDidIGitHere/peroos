import {
  RECEIVE_FEED_POSTS,
  RECEIVE_EVEN_MOVE_POSTS,
  RECEIVE_ALL_POSTS,
  RECEIVE_POST,
  REMOVE_POST,
  RECEIVE_EDITED_POST
} from '../actions/post_actions';

const postsReducer = (state = null, action) => {
  // Object.freeze(state);
  // let nextState = Object.assign({}, state);
  let nextState;
  const newState = [];

  switch (action.type) {
    case RECEIVE_ALL_POSTS:
      return action.posts;
    case RECEIVE_FEED_POSTS:
      return action.posts;
    case RECEIVE_EVEN_MOVE_POSTS:
      nextState = state ? state.concat(action.posts) : action.posts;
      return nextState;
    case RECEIVE_POST: 
      // nextState = state ? state : [];
      // nextState.unshift(action.post)
      // return nextState;
      return state ? [action.post].concat(state) : [action.post] 
    case REMOVE_POST:
      // delete nextState[action.post.id];
      // return nextState;
      if (!state) {
        return state;
      }
      for (let i = 0; i < state.length; i++) {
        if (state[i].id !== action.postId) {
          newState.push(state[i]);
        }
      }
      return newState;
    case RECEIVE_EDITED_POST:
      if (!state) {
        return state;
      }
      for (let i = 0; i < state.length; i++) {
        if (state[i].id !== action.post.id) {
          newState.push(state[i]);
        } else {
          newState.push(action.post);
        }
      }
      return newState;
    default:
      return state;
  }
};

export default postsReducer;
