import { combineReducers } from "redux";
import communitiesReducer from "./communities_reducer";
import usersReducer from "./users_reducer";
import postsReducer from "./posts_reducer";
import currentPostReducer from "./current_post_reducer";
import commentsReducer from "./comments_reducer";
import searchReducer from "./search_reducer";

const entitiesReducer = combineReducers({
  users: usersReducer,
  communities: communitiesReducer,
  // follows: followsReducer,
  posts: postsReducer,
  currentPost: currentPostReducer,
  comments: commentsReducer,
  searchResults: searchReducer,
  // votes: votesReducer,
  // saves: savesReducer
});

export default entitiesReducer;