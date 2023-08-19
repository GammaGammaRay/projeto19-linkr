import React from "react";
import styled from "styled-components";
import { useState, useEffect } from "react";
import reactStringReplace from "react-string-replace";

export default function PostForm() {
  const [url, setUrl] = useState("");
  const [description, setDescription] = useState("");
  const [publishing, setPublishing] = useState(false);
  const [hashtagStyle, setHashtagStyle] = useState({
    fontWeight: 700,
    fontSize: "30px",
    color: "#1877f2", // Default color
  });

  const authorImagePlaceholder =
    "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTfeiK25FERClFs4W7YW5U9uN3EgWX1istoqeFeN_IPFLBGOvaC";



  return (
    <PostContainer>
      <ImageBox>
        <UserImage src={authorImagePlaceholder} />
      </ImageBox>

      <PublishBox>
        <h2>What are you going to share today?</h2>

        <FormContainer>
          <input
            data-test="link"
            className="url"
            type="text"
            placeholder="http://..."
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            disabled={publishing}
          />
          <PostText
            data-test="description"
            placeholder="What are you publishing?"
            className="description"
            type="text"
            value={reactStringReplace(description, /(#\w+)/g, (match, i) => <Hashtag key={i}> {match}</Hashtag>)}
            onChange={(e) => setDescription(e.target.value)}
            disabled={publishing}
          >
            {console.log(reactStringReplace(description, /(#\w+)/g, (match, i) => <Hashtag key={i} style={{color:'#4ac4ac'}}> {match}</Hashtag>))}
          </PostText>

          <button
            data-test="publish-btn"
            disabled={publishing}
          >
            {publishing ? "Publishing..." : "Publish"}
          </button>
        </FormContainer>
      </PublishBox>
    </PostContainer>
  );
}

const PostContainer = styled.div`
  font-family: "Lato";
  font-weight: 300;
  font-size: 20px;
  color: #707070;
  width: 100%;
  height: fit-content;
  min-height: 210px;
  display: flex;
  flex-direction: row;
  border-radius: 16px;
  background-color: white;
  padding: 10px;
  margin-bottom: 30px;
`;

const ImageBox = styled.div`
  width: 10%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
`;

const UserImage = styled.img`
  width: 90%;
  aspect-ratio: 1/1;
  object-fit: cover;
  border-radius: 100%;
`;

const PublishBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 10px;

  h2 {
    font-family: "Lato";
    font-weight: 300;
    font-size: 20px;
    color: #707070;
    line-height: 24px;
    margin-bottom: 15px;
  }
`;

const FormContainer = styled.form`
  border: none;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  align-items: end;
  input {
    font-family: "Lato";
    font-weight: 300;
    font-size: 20px;
    background-color: #efefef;
    height: 30px;
  }
  input::placeholder {
    font-family: "Lato";
    font-weight: 300;
    color: #949494;
  }
  :focus {
    outline: none;
    border: 1px solid transparent; 
    box-shadow: 0px 0px 3px 1px #b7b7b7; 
  }
  button {
    background-color: #1877f2;
    border-radius: 5px;
    width: 112px;
    font-family: Lato;
    font-weight: 700;
    font-size: 14px;
    line-height: 16px;
    
     }
`

const PostText = styled.textarea`
  width: 100%;
  height: 66px;
  resize: vertical;
  border-radius: 16px;
  border: none;
  background-color: #efefef;
  min-height: 100px;
  box-sizing: border-box;
  padding: 10px;
  font-family: "Lato";
  font-weight: 300;
  font-size: 16px;
  position: relative;
`;

const Hashtag = styled.span`
  font-weight: 700;
  font-size: 30px;
`;
