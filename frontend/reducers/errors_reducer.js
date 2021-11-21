import { combineReducers } from "redux";
import sessionErrorsReducer from "./session_errors_reducer";

const errorsReducer = combineReducers({
  session: sessionErrorsReducer,
  // postForm: postFormErrorsReducer,
  // commentForm: commentFormErrorsReducer,
  // communityForm: communityFormErrorsReducer
});

export default errorsReducer;