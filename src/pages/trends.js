import React from "react";
import styled from "styled-components";

const Trends = (props) => {
  return <Container>Trends</Container>;
};

export default Trends;

const Container = styled.main`
  align-items: center;
  justify-content: center;
  text-align: center;
  position: relative;
  min-height: 70vh;
  overflow-x: hidden;
  display: block;
  top: 72px;
  background-color: rgb(0, 0, 0, 0.5);
  padding: 0 5vw;
  padding-bottom: 5vh;
  &:after {
    background: url("/images/background.jpeg") no-repeat center center fixed;
    background-color: black;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
    content: "";
    position: absolute;
    inset: 0px;
    opacity: 1;
    z-index: -1;
  }
`;

const Head = styled.div`
  padding: 1vw;
  padding-left: 0;
  color: white;
`;
