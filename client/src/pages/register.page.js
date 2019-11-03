import React, { useState } from 'react';
import { connect } from 'react-redux';
import { signup } from '../reducer/auth.reducer';
const RegisterPage = ({ signupUser }) => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const registerUser = async () => {
    const res = await signupUser({email, password});
    if (res){
      console.log('user', res);
    }
  }

  return (
    <div>
      
      <input placeholder='Email' type='email' value={email} onChange={(e) => {
        setEmail(e.target.value);
      }}/>
      <input placeholder='Password' type='password' value={password} onChange={(e) => {          
        setPassword(e.target.value);
      }}/>
      <button onClick={() => registerUser()}>Sign Up</button>
    </div>
  )
}

const mapDispatchToProps = (dispatch) => ({
  signupUser: (user) => dispatch(signup(user))
})

export default connect(mapDispatchToProps)(RegisterPage);