import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import { signup } from '../reducer/auth.reducer';
import { Form, Button, Col, Row, FormControl } from 'react-bootstrap'

const RegisterPage = ({ signupUser, isRegisting }) => {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const history = useHistory();
  
  const registerUser = () => {
    signupUser({username, password});
    history.push('/login');
  }

  return (
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
          <Button block className='login-root-button' disabled={isRegisting} onClick={() => registerUser()}>Sign Up</Button>
        </Form.Group>
      </Form>
    </div>
  )
}

const mapStateToProps = (state) => ({
  isRegisting: state.authReducer.isRegisting
});

const mapDispatchToProps = (dispatch) => ({
  signupUser: (user) => dispatch(signup(user))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RegisterPage);