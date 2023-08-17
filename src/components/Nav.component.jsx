import React, { useContext, useEffect, useState } from "react"
import { styled } from "styled-components"
import { Link, useNavigate, useLocation } from "react-router-dom"

import SearchBar from "./SearchBar/index.jsx"
import { AuthContext } from "../context/auth.context.jsx"
import SearchBar from "./SearchBar/index.jsx"

function Nav() {
  // const navigate = useNavigate()

  // const { auth, logout } = useContext(AuthContext)

  // const [isLogged, setIsLogged] = useState(false)
  // const handleSignOut = (e) => {
  //   e.preventDefault()
  //   navigate("/")
  //   logout()
  // }

  // useEffect(() => {
  //   setIsLogged(auth.length > 0)
  // }, [auth])

  function SignOutLink() {
    return (
      // <StyledLink to="/" onClick={handleSignOut}>
      <StyledLink to="/">Signout</StyledLink>
    )
  }

  return (
    <NavContainer>
      <NavLeft>
        <Linkr>linkr</Linkr>
      </NavLeft>

      <NavMid>
        <SearchBar/>
      </NavMid>

      <NavRight>
        {/* BOTÃO PARA SIGNOUT */}
        <SignOutLink />
      </NavRight>
    </NavContainer>
  )


}

const NavContainer = styled.div`
  font-family: "Lato";
  font-weight: 500;
  font-size: 40px;
  width: 100%;

  height: 65px;
  top: 0px;
  left: 0px;
  position: fixed;
  z-index: 5;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  box-shadow: 1px 1px 6px 4px #6d6d6d2e;
  background-color: #151515;
  color: white;
  a {
    width: fit-content;
    margin-left: 10px;

    text-decoration: none;
    padding: 5px 10px;
    display: flex;
    align-items: center;
  }
  @media screen and (max-width: 768px) {
    a {
      font-size: 12px;
      margin-left: 1px;
      padding: 2px 5px;
    }
  }
  input::placeholder {
    color: white;
    opacity: 1;
  }
`

const NavLeft = styled.div`
  width: fit-content;
  left: 0;
  margin-left: 16px;
  flex-direction: row;
  justify-content: start;
`
const NavMid = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

const NavRight = styled.div`
  width: fit-content;
  height: 100%;
  right: 0;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`
const StyledLink = styled(Link)`
  text-decoration: none;
  padding: 5px 10px;
  display: flex;
  align-items: center;
`

const Linkr = styled.div`
  font-family: "Passion One";
  letter-spacing: 3px;
`

const SearchUsers = styled.input`
  font-family: "Lato";
  font-size: 16px;
  padding: 5px;
  border: none;
  background-color: transparent;
  border-style: solid;
  border: darkgray;
  color: white;
  
`

export default Nav
