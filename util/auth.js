import axios from 'axios';

const API_KEY = 'AIzaSyCcVKO60qprZIPN1FuJp_FBv3B-e7sOUHI';

async function authenticate(mode, email, password) {
  const url = `https://identitytoolkit.googleapis.com/v1/accounts:${mode}?key=${API_KEY}`;

  const response = await axios.post(url, {
    email: email,
    password: password,
    returnSecureToken: true,
  });

  const { idToken, localId } = response.data;

  return { idToken, localId };
}

export function createUser(email, password) {
  return authenticate('signUp', email, password);
}

export function login(email, password) {
  return authenticate('signInWithPassword', email, password);
}