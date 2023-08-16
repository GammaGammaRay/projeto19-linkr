import React, { useRef } from "react"
import LinkrTitle from "../components/LinkrTitle.component"
import { styled } from "styled-components"
import axios from "axios";

function SignIn() {
  
  const username = useRef();
  const profileUrl = useRef();
  const email = useRef();
  const password = useRef();
  
  function submit () {

    const data = {
      email: email.current.value,
      password: password.current.value,
      username: username.current.value,
      profileUrl: profileUrl.current.value
    };
    
    axios.get()

  }


  return (
    <SignInContainer>
      <LinkrTitle />
        <FormContainer>
            <form onClick={submit}>
              <label htmlFor="email">email</label>
              <input name="email" type="email" placeholder="e-mail" ref={email} />
    
              <label htmlFor="password">password</label>
              <input name="password" type="password" placeholder="password" ref={password} />

              <label htmlFor="username">username</label>
              <input name="username" type="text" placeholder="username" ref={username} /> 
    
              <label htmlFor="profileUrl">picture url</label>
              <input name="profileUrl" type="text" placeholder="picture url" ref={profileUrl} />
    
              <button type="submit"/>
            </form>
        </FormContainer>
    </SignInContainer>
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
    bottom: 0;
    top: auto;
    right: auto;
    height: 80vh;
  }
`

const SignInContainer = styled.div`
background-color: #151515;
width: 100%;
  display: flex;
  flex-direction: row;
  @media screen and (max-width: 768px) {
    flex-direction: column;
    justify-content: start;
    margin-bottom: 200px;
  }
`

export default SignIn
