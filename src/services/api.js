import axios from "axios";

const API_URL = process.env.API_URL || "http://localhost:5000";

function tokenProvider(auth) {
  return {
    headers: {
      Authorization: `Bearer ${auth}`,
    },
  };
}

function searchUsers(auth, string) {
  const promise = axios.get(`${API_URL}/users/search/${string}`, tokenProvider(auth));

  return promise;
}

async function signIn(auth, payload) {
  const token = await axios.post(`${API_URL}/signin`, payload, tokenProvider(auth));

  return token;
}

async function signUp(auth, payload) {
  const token = await axios.post(`${API_URL}/signup`, payload, tokenProvider(auth));

  return token;
}

const api = {
  searchUsers,
  signIn,
  signUp,
};

export default api;