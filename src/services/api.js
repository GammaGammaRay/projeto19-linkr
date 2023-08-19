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


async function fetchHashtagPosts(id, auth) {
  try {
    const response = await axios.get(`/hashtags/${id}`)
    return response.data
  } catch (error) {
    throw error
  }
}

async function fetchTrendingHashtags(id, auth) {
  try {
    const response = await axios.get(`/hashtags/${id}`)
    return response.data
  } catch (error) {
    throw error
  }
function signIn(payload) {
  const promisse = axios.post(`${API_URL}/signin`, payload);

  return promisse;
}

function signUp(payload) {
  const promisse = axios.post(`${API_URL}/signup`, payload);

  return promisse;
}
}

const api = {
  searchUsers,
  fetchTrendingHashtags,
  fetchHashtagPosts,
  signIn,
  signUp,
};

export default api;