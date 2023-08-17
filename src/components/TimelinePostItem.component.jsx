import React, { useState } from "react"
import { styled } from "styled-components"
import LinkPost from "./LinkPost.component"
import { LikeComponent } from "./Post.Components/Like.component"
import { EditOrDelete } from "./Post.Components/EditOrDelete"



export default function TimelinePostItem() {
  const[isLiked, setIsLiked] = useState(false); 
  const [toggle, setToggle] = useState(false);


  const authorImagePlaceholder =
    "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTfeiK25FERClFs4W7YW5U9uN3EgWX1istoqeFeN_IPFLBGOvaC"

  return (
    <TimelinePost>

      <TimeLinePostLeft>

        <AuthorImage src={authorImagePlaceholder} />

        < LikeComponent
            isLiked={isLiked}
            setIsLiked={setIsLiked}
        />

      </TimeLinePostLeft>

      <TimeLinePostRight>
        <EditOrDelete
            toggle={toggle}
            setToggle={setToggle}
        />
        <h2>Juvenal Juvêncio</h2>
        <p>
          Lorem ipsum dolor est bla bla bla etc etc e tals Muito maneiro esse
          tutorial de Material UI com React, deem uma olhada!
        </p>
        <LinkPost />
      </TimeLinePostRight>

    </TimelinePost>
  )
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
`

const TimeLinePostLeft = styled.div`
  width: 10%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
`
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
`

const AuthorImage = styled.img`
  width: 100%;
  aspect-ratio: 1/1;
  object-fit: cover;
  border-radius: 100%;
`

