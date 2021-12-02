import { RECEIVE_CURRENT_POST, REMOVE_CURRENT_POST } from "../actions/post_actions";

const currentPostReducer = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_CURRENT_POST:
      return action.post;
    case REMOVE_CURRENT_POST:
      return {};
    default:
      return state;
  }
};

export default currentPostReducer;