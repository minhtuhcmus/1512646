import userAction from './user.action';

const INITIAL_STATE = {
  user: undefined,
  isFetchingCurrUser: false
}

const applyFetchCurrUser = (state, action) => ({
  ...state,
  isFetchingCurrUser: true 
});

const applyFetchCurrUserSuccess = (state, action) => ({
  ...state,
  isFetchingCurrUser: false,
  user: action.payload.user
});

const applyFetchCurrUserFail = (state, action) => ({
  ...state,
  isFetchingCurrUser: false 
})

