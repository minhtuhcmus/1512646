import myVar from '../config';
const login = async (username, password) => {
  const res = await fetch(`${myVar.API_URL}/api/users/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      username,
      password
    })
  });
  const data = await res.json();
  return data;
}

const signup = async (user) => {
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
