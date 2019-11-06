import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Redirect, useHistory, Link } from 'react-router-dom';
import { login } from '../reducer/auth.reducer';
import { Cookies } from 'react-cookie';
import { Form, Button, Col, Row, FormControl } from 'react-bootstrap'
const LoginPage = ({ isLogining, loginUser, isAuthenticated, error }) => {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  
  const handleLogin = () => loginUser(username, password);

  const history = useHistory();
  const cookies = new Cookies();  

  return (
    <>
    {
      cookies.get('CURR_USER') ?
      history.push('/')
      :
      (
        <div className='login-root'>
      <Form as={Col} md={12} className='login-root-form'>
        <h1>CARONLINE</h1>
        <Form.Group as={Row} >
          <Form.Control className='login-root-username' placeholder='Username' type='text' value={username} onChange={(e) => {
            setUsername(e.target.value);
          }}/>
        </Form.Group>

        <Form.Group as={Row}>
          <Form.Control className='login-root-password' placeholder='Password' type='password' value={password} onChange={(e) => {          
            setPassword(e.target.value);
          }}/>
        </Form.Group>

        <Form.Group as={Row}>
          <Button block className='login-root-button' disabled={isLogining} onClick={() => handleLogin()}>Sign In</Button>
        </Form.Group>
        <span>Do not have an account? </span>
        <Link to='/signup'>Sign Up</Link>
      </Form>
      </div>
      )
    }
      
    </>
  )
}

const mapStateToProps = (state) => ({
  isLogining: state.authReducer.isLogining,
  error: state.authReducer.error,
  isAuthenticated: state.authReducer.isAuthenticated
}); 

const mapDispatchToProps = (dispatch) => ({
  loginUser: (username, password) => dispatch(login(username, password))
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginPage);