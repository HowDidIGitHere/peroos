import { combineReducers } from "redux";
import communitiesErrorsReducer from "./communities_errors_reducer";
import sessionErrorsReducer from "./session_errors_reducer";
import postsErrorsReducer from "./posts_errors_reducer";
import commentsErrorsReducer from "./comments_errors_reducer";

const errorsReducer = combineReducers({
  session: sessionErrorsReducer,
  postForm: postsErrorsReducer,
  commentForm: commentsErrorsReducer,
  communityForm: communitiesErrorsReducer
});

export default errorsReducer;