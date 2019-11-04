import { Cookies } from 'react-cookie';

import { authApi } from '../../api';
import { doRegister,
  doRegisterFail,
  doRegisterSuccess,
  doClearResult,
  doLogin,
  doLoginFail,
  doLoginSuccess 
} from './auth.action';

const cookies = new Cookies();

export const login = (username, password) => async dispatch => {
  dispatch(doLogin());
  const res = await authApi.login(username, password);
  if(res.user){
    cookies.set('MY_TOKEN', res.token);
    cookies.set('CURR_USER', res.user);
    dispatch(doLoginSuccess(res.user)); 
  }
  else{
    dispatch(doLoginFail(res.message));
  }
}

export const signup = (user) => async dispatch => {
  dispatch(doRegister());
  const res = await authApi.signup(user);
  if(res.user){
    cookies.set('CURR_USER', res.user)
    dispatch(doRegisterSuccess(res.user));
  }
  else{
    dispatch(doRegisterFail(res.message));
  }
}