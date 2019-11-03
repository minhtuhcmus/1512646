import { combineReducers } from 'redux';
// import authReducer from './auth.reducer';
// import userReducer from './user.reducer';
import { authReducer } from './auth.reducer';

const rootReducer = combineReducers({
  // authReducer,
  // userReducer,
  authReducer
});

export default rootReducer;