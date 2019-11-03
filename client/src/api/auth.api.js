import myVar from '../config';
const login = async (email, password) => {
  console.log('call api', email, password);
  console.log('API', myVar.API_URL);
  const res = await fetch(`${myVar.API_URL}/api/users/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      email,
      password
    })
  });
  const data = await res.json();
  return data;
}

const signup = async (user) => {
  console.log('user from api', user);
  const res = await fetch(`${myVar.API_URL}/api/users/register`, {
    method: 'POST',
    headers:{
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(user)
  });
  const data = await res.json();
  return data;
}

export default {
  login,
  signup
}
