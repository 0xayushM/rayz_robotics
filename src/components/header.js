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
    @media (max-width:768px) {
      width:10vw;
      height:10vw;
    }
  }
  @media (max-width:768px) {
    padding:0px;
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
    @media (max-width:768px) {
      padding:5px;
    }
    span {
      color: rgb(249, 249, 249);
      font-size: 15px;
      letter-spacing: 3px;
      line-height: 1.08;
      font-weight: bold;
      padding: 2px 0px;
      white-space: nowrap;
      position: relative;
      @media (max-width:768px) {
        font-size:2.2vw ;
      }
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
  @media (max-width:768px) {
    font-size:2vw;
    padding:2vw;
  }
`;
