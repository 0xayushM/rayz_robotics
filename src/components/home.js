import styled from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import RayZ from "./home/1rayZ";
import What from "./home/2what";
import Reasons from "./home/4reasons";
import StudStories from "./home/5student";
import Testimony from "./home/6testimonies";
import Why from "./home/7why";
import Does from "./home/8does";
import Gallery from "./home/9gallery";

const home = (props) => {

  return (
    <Container>
      <Gallery/>
      <RayZ/>
      <What/>
      <Reasons/>
      <Does/>
      <StudStories/>
      <Testimony/>
      <Why/>
    </Container>
  );
};

const Container = styled.main`
  align-items: center;
  justify-content: center;
  text-align: center;
  position: relative;
  min-height: 65vh;
  overflow-x: hidden;
  display: block;
  top: 72px;
  padding: 0 5vw;
  padding-bottom: 5vh;
  background-color: rgb(0,0,0,0.5);
  &:after {
    background: url("/images/background.jpeg") no-repeat center center fixed;
    background-color: black;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
    width: 100%;
    content: "";
    position: absolute;
    inset: 0px;
    opacity: 1;
    z-index: -1;
  }
`;

export default home;
