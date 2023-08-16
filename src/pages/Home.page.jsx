import React from "react"
import { styled } from "styled-components"

import UserPostForm from "../components/UserPostForm.component"
import TimelinePosts from "../components/TimelinePostList.component.jsx"
import TrendingTags from "../components/TrendingTags.component"

function Home() {
  return (
      <HomePageContainer>
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
  justify-content: start;
  /* background-color: antiquewhite; */
`

const SideBarContainer = styled.div`
  display: flex;
  justify-content: start;
  align-items: start;
  /* background-color: aqua; */
`

const TimelineContainer = styled.div`
/* background-color: aquamarine; */
`

export default Home
