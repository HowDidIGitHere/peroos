import { RECEIVE_CURRENT_POST, RECEIVE_EDITED_POST, REMOVE_CURRENT_POST } from "../actions/post_actions";

const currentPostReducer = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_CURRENT_POST:
      return action.post;
    case REMOVE_CURRENT_POST:
      return {};
    case RECEIVE_EDITED_POST:
      return Object.assign({}, action.post)
    default:
      return state;
  }
};

export default currentPostReducer;