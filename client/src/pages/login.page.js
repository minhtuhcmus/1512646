import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Redirect, useHistory } from 'react-router-dom';
import { login } from '../reducer/auth.reducer';
import { Cookies } from 'react-cookie';

const LoginPage = ({ isLogin, loginUser, isAuthenticated, error }) => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  const handleLogin = () => loginUser(email, password);

  const history = useHistory();
  const cookies = new Cookies();  

  return (
    <>
    {
      cookies.get('CURR_USER') ?
      history.push('/')
      :
      (<div>
        <input placeholder='Email' type='email' value={email} onChange={(e) => {
          setEmail(e.target.value);
        }}/>
        <input placeholder='Password' type='password' value={password} onChange={(e) => {          
          setPassword(e.target.value);
        }}/>
        <button disabled={isLogin} onClick={() => handleLogin()}>Sign In</button>
      </div>)
    }
      
    </>
  )
}

const mapStateToProps = (state) => ({
  isLogin: state.authReducer.isLogin,
  error: state.authReducer.error,
  isAuthenticated: state.authReducer.isAuthenticated
}); 

const mapDispatchToProps = (dispatch) => ({
  loginUser: (email, password) => dispatch(login(email, password))
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginPage);