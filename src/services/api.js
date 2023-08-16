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

function signIn(auth, payload) {
  const promisse = axios.post(`${API_URL}/signin`, payload, tokenProvider(auth));

  return promisse;
}

function signUp(auth, payload) {
  const promisse = axios.post(`${API_URL}/signup`, payload, tokenProvider(auth));

  return promisse;
}

const api = {
  searchUsers,
  signIn,
  signUp,
};

export default api;