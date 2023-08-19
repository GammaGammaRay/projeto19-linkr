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
}

const api = {
  searchUsers,
  fetchTrendingHashtags,
  fetchHashtagPosts
};

export default api;