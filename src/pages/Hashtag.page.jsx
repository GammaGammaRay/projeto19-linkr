import React from "react";
import HashtagPosts from "../components/HashtagPostList.component";
import { useParams } from "react-router-dom";

function Hashtag() {
  const { tagName } = useParams();
  console.log(tagName);
  return <HashtagPosts tagName={tagName} />;
}

export default Hashtag;
