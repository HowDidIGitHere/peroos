import { 
  RECEIVE_CURRENT_USER,
  RECEIVE_ERRORS
} from '../actions/session_actions'

const sessionErrorsReducer = (state = null, action) => {
  
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return null;
    case RECEIVE_ERRORS:
      return action.errors.responseJSON;
    default:
      return state;
  }
}

export default sessionErrorsReducer;