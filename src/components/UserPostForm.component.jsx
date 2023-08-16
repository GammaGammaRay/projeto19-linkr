import React from "react"
import { styled } from "styled-components"

function PostForm() {
  const profileImg =
    "https://revistacontinente.com.br/image/view/news/image/3933/mobile"

  return (
      <UserPostFormContainer>
        <UserPostLeft>
          <UserImage src={profileImg} />
        </UserPostLeft>
        <UserPostRight>
          <h2>What are you going to share today?</h2>

          <StyledForm>
            <input placeholder="http://..." />
            <PostText />
          </StyledForm>
        </UserPostRight>
      </UserPostFormContainer>
  )
}

const UserPostFormContainer = styled.div`
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
  margin: 12px 0 0 0;
  padding: 10px;
`

const UserPostLeft = styled.div`
  width: 20%;

  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
`
const UserPostRight = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 10px;
  h2 {
    font-size: 26px;
    font-weight: 00;
  }
`

const UserImage = styled.img`
  width: 90%;
  max-width: 80px;
  min-width: 50px;
  aspect-ratio: 1/1;
  object-fit: cover;
  border-radius: 100%;
`

const StyledForm = styled.form`
  border: none;
  margin-top: 12px;
  input {
    font-family: "Lato";
    font-weight: 300;
    font-size: 20px;
    background-color: #efefef;
    height: 10px;
  }
  input::placeholder {
    font-family: "Lato";
    font-weight: 300;
    color: #949494;
  }
  :focus {
    outline: none;
    border: 1px solid transparent; /* Set border to transparent */
    box-shadow: 0px 0px 3px 1px #b7b7b7; /* Optionally, add a subtle shadow */
  }
`

const PostText = styled.textarea`
  width: 100%;
  height: 150px;
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
`

export default PostForm
