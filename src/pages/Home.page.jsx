import React from "react"
import { styled } from "styled-components"

import UserPostForm from "../components/UserPostForm.component"
import TimelinePosts from "../components/TimelinePostList.component.jsx"
import TrendingTags from "../components/TrendingTags.component"
import Nav from "../components/Nav.component"

function Home() {
  return (
    <HomePageContainer>
      <Nav />
      <TimelineContainer>
        <UserPostForm />
        <TimelinePosts />
      </TimelineContainer>
      <SideBarContainer>
        <TrendingTags />
      </SideBarContainer>
    </HomePageContainer>
  )
}

const HomePageContainer = styled.div`
  width: 80%;

  display: flex;
  flex-direction: row;
  justify-content: space-between;

  margin-top: 40px;
`

const SideBarContainer = styled.div`
  flex: 1;
  margin-left: 30px;
  display: flex;
  justify-content: space-between;
  align-items: start;
`

const TimelineContainer = styled.div`
  width: 75%;
`

export default Home
