import { RECEIVE_CURRENT_POST } from "../actions/post_actions";

const currentPostReducer = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_CURRENT_POST:
      return action.post;
    default:
      return state;
  }
};

export default currentPostReducer;