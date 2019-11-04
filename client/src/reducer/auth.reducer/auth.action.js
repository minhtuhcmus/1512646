const LOGIN = 'LOGIN';
const LOGIN_FAIL = 'LOGIN_FAIL';
const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
const REGISTER = 'REGISTER';
const REGISTER_FAIL = 'REGISTER_FAIL';
const REGISTER_SUCCESS = 'REGISTER_SUCCESS';
const CLEAR_RESULT = 'CLEAR_RESULT';
const LOGOUT = 'LOGOUT';

export default {
  LOGIN,
  LOGIN_FAIL,
  LOGIN_SUCCESS,
  REGISTER,
  REGISTER_FAIL,
  REGISTER_SUCCESS,
  CLEAR_RESULT,
  LOGOUT
}

const doClearResult = () => ({
  type: CLEAR_RESULT
});

const doLogout = () => ({
  type: LOGOUT,
  payload:{
  }
});

const doLogin = (username, password) => ({
  type: LOGIN,
  payload:{
    username,
    password
  }
})

const doLoginSuccess = (user) => ({
  type: LOGIN_SUCCESS,
  payload:{
    user
  }
});

const doLoginFail = message => ({
  type: LOGIN_FAIL,
  payload: {
    message
  }
});

const doRegister = (username, password) => ({
  type: REGISTER,
  payload:{
    username,
    password
  }
})

const doRegisterSuccess = (user) => ({
  type: REGISTER_SUCCESS,
  payload:{
    user
  }
});

const doRegisterFail = message => ({
  type: REGISTER_FAIL,
  payload: {
    message
  }
});

export {
  doRegister,
  doRegisterFail,
  doRegisterSuccess,
  doClearResult,
  doLogin,
  doLoginFail,
  doLoginSuccess
}