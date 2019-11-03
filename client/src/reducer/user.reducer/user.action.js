const FETCH_CURR_USER = 'FETCH_CURR_USER';
const FETCH_CURR_USER_SUCCESS = 'FETCH_CURR_USER_SUCCESS';
const FETCH_CURR_USER_FAIL = 'FETCH_CURR_USER_FAIL';

export default {
  FETCH_CURR_USER,
  FETCH_CURR_USER_FAIL,
  FETCH_CURR_USER_SUCCESS
}

const doFetchCurrUser = (token) => ({
  type: FETCH_CURR_USER,
  payload:{
    token
  }
});

const doFetchCurrUserFail = message => ({
  type: FETCH_CURR_USER_FAIL,
  payload:{
    message
  }
});

const doFetchCurrUserSuccess = (user) => ({
  type: FETCH_CURR_USER_SUCCESS,
  payload:{
    user
  }
});

export {
  doFetchCurrUser,
  doFetchCurrUserFail,
  doFetchCurrUserSuccess
}