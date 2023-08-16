import React from "react"
import { styled } from "styled-components"

function LinkPost() {
  const linkImagePlaceholder =
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQR71nuAXwsp7cDILq-93prI73gJhYQ02dEIMDxtG44eA&s"

  return (
    <LinkPostContainer>
      <LinkPostContainerLeft>
        <h2>Como aplicar o Material UI em um projeto React</h2>
        <p>
          Hey! I have moved this tutorial to my personal blog. Same content, new
          location. Sorry about making you click through to another page.
        </p>
        <p>https://medium.com/@pshrmn/a-simple-react-router</p>
      </LinkPostContainerLeft>
      <LinkPostContainerRight>
        <LinkPostImage src={linkImagePlaceholder} />
      </LinkPostContainerRight>
    </LinkPostContainer>
  )
}

const LinkPostContainer = styled.div`
  width: 100%;
  border-radius: 11px;
  border: 1px solid #4d4d4d;
  display: flex;
  flex-direction: row;
  
`
const LinkPostContainerRight = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`
const LinkPostContainerLeft = styled.div`
  width: 100%;
  box-sizing: border-box;
  padding: 16px;
`

const LinkPostImage = styled.img`
width: 100%;
  height: 100%;
  object-fit: cover;
  border-top-right-radius: 11px;
  border-bottom-right-radius: 11px;
`

export default LinkPost
