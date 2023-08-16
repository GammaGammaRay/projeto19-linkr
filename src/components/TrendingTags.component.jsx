import React from "react"
import { styled } from "styled-components"

function TrendingTags() {
  return (
    <TrendingTagsContainer>
      <h2>trending</h2>
      <HorizontalLine />
      <TrendingTagsContainer>
        #queroFerias<br/>
        #mandaPix<br/>
        #queroFerias<br/>
        #mandaPix<br/>
        #queroFerias<br/>
        #mandaPix<br/>
        #queroFerias<br/>
        #mandaPix<br/>
      </TrendingTagsContainer>
    </TrendingTagsContainer>
  )
}

const TrendingTagsContainer = styled.div`
  font-family: "Oswald";
  color: white;
  line-height: 1.2rem;

  position: sticky;
  top: 50px;
  width: 100%;
  min-width: 200px;
  background-color: #171717;

  border-radius: 16px;
  background-color: #171717;
  margin: 12px 0 12px 0;
  box-sizing: border-box;
  padding: 10px;

  left: 0;


  h2{
    font-size: 27px;
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
