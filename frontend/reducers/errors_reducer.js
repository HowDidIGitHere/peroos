import { combineReducers } from "redux";
import communitiesErrorsReducer from "./communities_errors_reducer";
import sessionErrorsReducer from "./session_errors_reducer";

const errorsReducer = combineReducers({
  session: sessionErrorsReducer,
  // postForm: postFormErrorsReducer,
  // commentForm: commentFormErrorsReducer,
  communityForm: communitiesErrorsReducer
});

export default errorsReducer;