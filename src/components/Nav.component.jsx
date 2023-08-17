import React, { useEffect, useState } from "react"
import { styled } from "styled-components"
import { Link, useNavigate } from "react-router-dom"
import useAuth from "../hooks/useAuth";
import arrow from "../assets/images/icons/arrow.png"
import { IoIosArrowUp } from "react-icons/io"

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
      <NavRight $isHidden={isHidden}>
        <div>
          <IoIosArrowUp alt="Open close icon" onClick={() => setHidden(!isHidden)} />
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
  height: 40px;
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
`

const NavLeft = styled.div`
  width: fit-content;
  left: 0;
  margin-left: 16px;
  flex-direction: row;
  justify-content: start;
`
const NavRight = styled.div`
  width: fit-content;
  height: 100%;
  right: 0;
  
  position: relative;
  padding: 0px 15px;

  div {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 16px;

    svg {
      transform: ${(props) => props.$isHidden ? "rotateX(180deg)" : "none"};
      cursor: pointer;
      width: 32px;
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

export default Nav
