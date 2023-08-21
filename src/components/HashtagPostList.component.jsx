import React, { useEffect, useState } from "react";
import TimelinePostItem from "./TimelinePostItem.component";
import useAuth from "../hooks/useAuth";
import axios from "axios";

function HashtagPosts({tagName}) {
  

  const API_URL = process.env.API_URL || "http://localhost:5000";

  const { token } = useAuth();
  const config = { headers: { Authorization: `Bearer ${token}` } };

  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [emptyPage, setEmptyPage] = useState(false);

  console.log(tagName);

  useEffect(() => {
    axios
      .get(`${API_URL}/hashtag/${tagName}`, config)
      .then((res) => {
        if (Array.isArray(res.data.results)) {
          setPosts(res.data);
          setLoading(false);
        } else {
          // console.error(res.data);
          setError(true);
          setLoading(false);
          alert(
            "An error occurred while trying to fetch the posts, please refresh the page"
          );
        }
      })
      .catch((err) => {
        // console.error(err);
        setError(true);
        setLoading(false);
        alert(
          "An error occurred while trying to fetch the posts, please refresh the page"
        );
      });
  }, []);

  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>Error loading posts</p>
      ) : (
        posts.map((post) => <TimelinePostItem key={post.id} post={post} />)
      )}
    </div>
  );
}

export default HashtagPosts;