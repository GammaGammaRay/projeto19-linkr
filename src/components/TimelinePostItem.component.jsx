import React from "react"
import { styled } from "styled-components"

import LinkPost from "./LinkPost.component"

function TimelinePostItem() {
  const authorImagePlaceholder =
    "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTfeiK25FERClFs4W7YW5U9uN3EgWX1istoqeFeN_IPFLBGOvaC"

  return (
    <TimelinePost>
      <TimeLinePostLeft>
        <AuthorImage src={authorImagePlaceholder} />
      </TimeLinePostLeft>
      <TimeLinePostRight>
        <h2>Juvenal Juvêncio</h2>
        <p>
          Lorem ipsum dolor est bla bla bla etc etc e tals Muito maneiro esse
          tutorial de Material UI com React, deem uma olhada!
        </p>
        <LinkPost/>
      </TimeLinePostRight>
    </TimelinePost>
  )
}

const TimelinePost = styled.div`
  font-family: "Lato";
  color: white;

  width: 100%;
  height: fit-content;
  min-height: 210px;

  display: flex;
  flex-direction: row;

  border-radius: 16px;
  background-color: #171717;
  margin: 12px 0 12px 0;
  padding: 10px;
`

const TimeLinePostLeft = styled.div`
  width: 20%;

  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
`
const TimeLinePostRight = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  h2 {
    font-size: 26px;
    font-weight: 00;
  }
  p {
    margin-top: 12px;
    margin-bottom: 12px;
    font-size: 17px;
    color: #b7b7b7;
  }
`

const AuthorImage = styled.img`
  width: 90%;
  max-width: 80px;
  min-width: 50px;
  aspect-ratio: 1/1;
  object-fit: cover;
  border-radius: 100%;
`

export default TimelinePostItem
