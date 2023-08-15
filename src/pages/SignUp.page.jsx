import React from "react"
import LinkrTitle from "../components/LinkrTitle.component"
import { styled } from "styled-components"

function SignUp() {
  return (
    <SignUpContainer>
      <LinkrTitle />
      <FormContainer></FormContainer>
    </SignUpContainer>
  )
}

const FormContainer = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  height: 100vh;
  min-width: 400px;
  width: 40%;
  max-width: 500px;
  background-color: #333333;
  @media screen and (max-width: 768px) {
    width: 100%;
    max-width: 100%;
    /* position: inherit; */
    bottom: 0;
    top: auto;
    right: auto;
    height: 80vh;
  }
`

const SignUpContainer = styled.div`
  display: flex;
  flex-direction: row;
  @media screen and (max-width: 768px) {
    flex-direction: column;
    justify-content: start;
    margin-bottom: 200px;
  }
`

export default SignUp
