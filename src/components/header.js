import React from "react";
import styled from "styled-components";
const Header = (props) => {
  
  return (
    <Nav>
      <a href="/" id="logo">
        <img src="/images/logo.png" alt="RayZ-Robotics" />
      </a>
      <NavMenu>
        <a href="/home">
          <span>HOME</span>
        </a>
        <a href="/courses">
          <span>COURSES</span>
        </a>
        <a href="/about">
          <span>ABOUT</span>
        </a>
        <a href="/projects">
          <span>PROJECTS</span>
        </a>
        {/* <a href="/trends">
          <span>TRENDS</span>
        </a> */}
      </NavMenu>
      <Login>
        <a href="/join">Join us</a>
      </Login>
    </Nav>
  );
};

export default Header;

const Nav = styled.nav`
  position: fixed;
  top: 0;
  padding: 50px;
  right: 0;
  left: 0;
  height: 10vh;
  background-image: linear-gradient(to right, #210746, #420e8b);
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
    rgb(0 0 0/73%) 0px 16px 10px -10px;
  padding: 0 30px;
  letter-spacing: 14px;
  z-index: 3;
  #logo {
    padding: 0;
    width: 60px;
    margin: 3vh;
    margin-left: 3vw;
    max-height: 70px;
    font-size: 0;
    display: inline-block;
    cursor: pointer;
    img {
      display: block;
      width: 100%;
      border-radius: 10px;
      height: 50px;
    }
  }
`;

const NavMenu = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  a {
    display: flex;
    align-items: center;
    padding: 0 12px;
    span {
      color: rgb(249, 249, 249);
      font-size: 15px;
      letter-spacing: 3px;
      line-height: 1.08;
      font-weight: bold;
      padding: 2px 0px;
      white-space: nowrap;
      position: relative;

      &:before {
        background-color: rgb(249, 249, 249);
        border-radius: 0px 0px 4px 4px;
        bottom: -6px;
        content: "";
        height: 2px;
        left: 0px;
        opacity: 0;
        position: absolute;
        right: 0px;
        transform-origin: left center;
        transform: scaleX(0);
        transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
        visibility: hidden;
        width: auto;
      }
    }
    &:hover {
      span:before {
        transform: scaleX(1);
        visibility: visible;
        opacity: 1 !important;
      }
    }
  }
  @media (max-width: 1030px) {
    display: none;
  }
`;
const Login = styled.a`
  background-color: #8338ec;
  padding: 8px 16px;
  color: white;
  a {
    color: white;
  }
  margin-right: 3vw;
  letter-spacing: 1.5px;
  border: 1px solid #f9f9f9;
  border-radius: 4px;
  transition: 0.2s;
  cursor: pointer;
  &:hover {
    transition: 0.2s;
    background-color: #f9f9f9;
    a {
      transition: 0.2s;
      color: #8338ec;
    }
    opacity: 0.85;
    border-color: transparent;
  }
`;
const UserImg = styled.img`
  height: 100%;
  margin-right: 3vw;
`;
const Dropdown = styled.div`
  position: absolute;
  top: 6.5vh;
  right: 0px;
  background: #a4c3a2;
  border: 1px solid rgba(151, 151, 151, 0.34);
  border-radius: 4px;
  box-shadow: rgb(0 0 0/ 50%) 0px 0px 18px 0px;
  padding: 10px;
  font-size: 14px;
  letter-spacing: 3px;
  width: 100px;
  opacity: 0;
  span {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
const SignOut = styled.div`
  position: relative;
  height: 48px;
  width: 48px;
  display: flex;
  cursor: pointer;
  align-items: center;
  justify-content: center;
  ${UserImg} {
    border-radius: 50%;
    width: 100%;
    height: 100%;
  }
  &:hover {
    ${Dropdown} {
      opacity: 0.8;
      color: #8338ec;
      font-weight: bold;
      transition-duration: 1s;
    }
  }
`;