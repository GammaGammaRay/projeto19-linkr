import React from "react"
import { styled } from "styled-components"

function TrendingTags() {
  return (
    <TrendingTagsContainer>
      <h2>trending</h2>
      <HorizontalLine />
      <TrendingTagsContainer>
        <p>#queroFerias</p>
        <p>#mandaPix</p>
        <p>#queroFerias</p>
        <p>#mandaPix</p>
        <p>#queroFerias</p>
        <p>#mandaPix</p>
        <p>#queroFerias</p>
        <p>#mandaPix</p>
      </TrendingTagsContainer>
    </TrendingTagsContainer>
  )
}

const TrendingTagsContainer = styled.div`
  color: white;
  line-height: 1.2rem;
  position: sticky;
  top: 180px;
  width: 100%;
  min-width: 200px;
  background-color: #171717;
  border-radius: 16px;
  background-color: #171717;
  box-sizing: border-box;
  padding: 8px;
  left: 0;

  h2{
    font-weight: 700;
    font-size: 27px;
    margin-left: 8px;
    font-family: "Oswald";
  }

  p{
    font-family: "Lato";
    font-weight: 700;
    font-size: 19px;
    margin-bottom: 8px;
    margin-top: 15px;
  }
`

const HorizontalLine = styled.div`
  margin-top: 10px;
  background-color: #333333;
  width: 120%;
  margin-left: -10px;
  box-sizing: border-box;
  height: 2px;
`

export default TrendingTags
