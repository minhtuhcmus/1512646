import React, { useState } from 'react';
import { connect } from 'react-redux';
import { signup } from '../reducer/auth.reducer';
const RegisterPage = ({ signupUser }) => {

  const [username, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const registerUser = () => signupUser({username, password});

  return (
    <div>
      <input placeholder='Username' type='text' value={username} onChange={(e) => {
        setEmail(e.target.value);
      }}/>
      <input placeholder='Password' type='password' value={password} onChange={(e) => {          
        setPassword(e.target.value);
      }}/>
      <button onClick={() => registerUser()}>Sign Up</button>
    </div>
  )
}

const mapStateToProps = (state) => ({

});

const mapDispatchToProps = (dispatch) => ({
  signupUser: (user) => dispatch(signup(user))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RegisterPage);