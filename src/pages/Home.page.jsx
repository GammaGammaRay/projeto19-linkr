import React from "react"
import { styled } from "styled-components"
import UserPostForm from "../components/UserPostForm.component"
import TimelinePosts from "../components/TimelinePostList.component.jsx"
import TrendingTags from "../components/TrendingTags.component"
import Nav from "../components/Nav.component"
import { ConfirmDelete } from "../components/ConfirmDelete"


export default function Home() {
  return (
    <HomePageContainer>
    <Nav />

    <TimelineContainer>
      <h1>timeline</h1>
      <UserPostForm />
      <TimelinePosts />
      <TimelinePosts />
    </TimelineContainer>

    <SideBarContainer>
      <TrendingTags />
    </SideBarContainer>

  </HomePageContainer>
  )
}

const HomePageContainer = styled.div`
  width: 70%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 40px;
`

const SideBarContainer = styled.div`
  flex: 1;
  margin-left: 40px;
  display: flex;
  justify-content: space-between;
  align-items: start;
`

const TimelineContainer = styled.div`
  width: 75%;

  h1{
    font-weight: 700;
    font-size: 43px;
    line-height: 63px;
    margin-bottom: 30px;
    margin-top: 50px;
  }
`
