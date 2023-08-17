import React, { useEffect, useState } from "react"
import { styled } from "styled-components"
import { Link, useNavigate } from "react-router-dom"
import useAuth from "../hooks/useAuth";
import arrow from "../assets/images/icons/arrow.png"

function Nav() {
  
  const navigate = useNavigate()
  const { token, logout } = useAuth();


  const [isLogged, setLogged] = useState();
  const [isHidden, setHidden] = useState(true); // logout button.
  
  const handleSignOut = (e) => {
    e.preventDefault()
    navigate("/")
    logout()
  }

  useEffect(() => {
    setLogged(token)
  }, [token])

  if(!isLogged) return <></> // If is not logged, dont show navbar.

  return (
    <NavContainer>
      <NavLeft>
        <Linkr>linkr</Linkr>
      </NavLeft>
    <NavMid>
        <SearchBar/>
      </NavMid>
      <NavRight $isHidden={isHidden}>
        <div>
          <img alt="Open close icon" onClick={() => setHidden(!isHidden)} src={arrow}/>  
          <img alt="User profile" src={arrow}/>
          <StyledLink $isHidden={isHidden} to="/" onClick={handleSignOut}>
            Signout
          </StyledLink>
        </div>
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

  padding-top: 15px;
  
  position: relative;

  div {
    display: flex;
    justify-content: center;
    align-items: flex-end;
    gap: 16px;
    padding: 0px 10px;

    img:nth-of-type(1) {
      transform: ${(props) => props.$isHidden ? "rotateX(180deg)" : "none"};
      cursor: pointer;
      width: 16px;
    }

  }
`
const StyledLink = styled(Link)`
  position: absolute;
  bottom: -20px;
  right: 0px;
  text-decoration: none;
  padding: 10px 100px;
  visibility: ${(props) => props.$isHidden ? "hidden" : "visible"};
  align-items: center;

  background-color: #151515;
  border-radius: 0px 0px 0px 8px;
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
