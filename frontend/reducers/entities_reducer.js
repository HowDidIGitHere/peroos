import { combineReducers } from "redux";
import communitiesReducer from "./communities_reducer";
import usersReducer from "./users_reducer";
import postsReducer from "./posts_reducer";
import currentPostReducer from "./current_post_reducer";

const entitiesReducer = combineReducers({
  users: usersReducer,
  communities: communitiesReducer,
  // follows: followsReducer,
  posts: postsReducer,
  currentPost: currentPostReducer,
  // comments: commentsReducer,
  // votes: votesReducer,
  // saves: savesReducer
});

export default entitiesReducer;