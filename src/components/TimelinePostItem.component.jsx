import React, { useRef, useState } from "react";
import { styled } from "styled-components";
import LinkPost from "./LinkPost.component";
import { LikeComponent } from "./Post.Components/Like.component";
import { EditOrDelete } from "./Post.Components/EditOrDelete";

import userIcon from "../assets/images/icons/userIcon.jpeg";
import useAuth from "../hooks/useAuth";
import { Link } from "react-router-dom";

export default function TimelinePostItem({post}) {
  const {description, link, userName} = post;
  const { auth } = useAuth();
  const imageUrl = auth.profileUrl;
  
  const textRef = useRef(null);
  const [isLiked, setIsLiked] = useState(false);
  const [toggle, setToggle] = useState(false);
  const [editing, setEditing] = useState(false);
  const [textValue, setTextValue] = useState("");
  const handleEditClick = () => {
    setEditing(!editing);
  };
  
  const handleKey = (e) => {
    console.log(e);
    if (e.keyCode === 27) return setEditing(!editing);
    if (e.keyCode !== 13) return;
    
    setTextValue(textRef.current.value);
    setEditing(false);
  };
  
  const convertHashtagsToLinks = (text) => {
    return text.replace(/#(\w+)/g, '<StyledLink to="/hashtag/$1">#$1</Link>');
  };

  const descriptionConvertedHashtags = convertHashtagsToLinks(description);

  return (
    <TimelinePost>
      <TimeLinePostLeft>
        <AuthorImage src={!imageUrl ? userIcon : imageUrl} />

        {/* < LikeComponent
            isLiked={isLiked}
            setIsLiked={setIsLiked}
        /> */}
      </TimeLinePostLeft>

      <TimeLinePostRight>
        {/* <EditOrDelete

            textRef={textRef}
            toggle={toggle}
            setToggle={setToggle}
            handleEditClick={handleEditClick}
        /> */}
        <h2 data-test="username">{userName}</h2>

        {/* {editing ? (
              <>
                <textarea
                    ref={textRef} 
                    defaultValue={textValue}
                    className="description" 
                    onKeyDown={(e) => handleKey(e)}            
                    style={{
                          fontFamily: "Arial, sans-serif",
                          fontSize: "14px",
                          padding: "10px",
                          border: "1px solid #ccc",
                          borderRadius: "4px",
                          width: "100%",
                          height: "100%"
                    }}
                  />
                </>
  
            ) : (<>
              <p>{textValue}</p></>
            )} */}

        <p data-test="description">{convertHashtagsToLinks(descriptionConvertedHashtags)}</p>
        <LinkPost />
      </TimeLinePostRight>
    </TimelinePost>
  );
}

const TimelinePost = styled.div`
  font-family: "Lato";
  color: white;
  line-height: 1.6em;
  width: 100%;
  height: fit-content;
  min-height: 210px;
  display: flex;
  flex-direction: row;
  border-radius: 16px;
  background-color: #171717;
  padding: 10px;
  margin-bottom: 20px;
  //border: 1px solid red;
`;

const TimeLinePostLeft = styled.div`
  width: 10%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
`;
const TimeLinePostRight = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  position: relative;
  h2 {
    line-height: 1.1em;
    font-size: 26px;
    font-weight: 500;
  }
  p {
    font-size: 12px;
    margin-top: 12px;
    margin-bottom: 12px;
    font-size: 20px;
    color: #b7b7b7;
  }
  .description {
    background-color: white;
    border-radius: 12px;
    height: 10%;
    width: 96.6%;

    margin: 6% 0;
  }
`;

const AuthorImage = styled.img`
  width: 100%;
  aspect-ratio: 1/1;
  object-fit: cover;
  border-radius: 100%;
`;

const StyledLink = styled(Link)`
  font-weight: 700;
  cursor: pointer;
`