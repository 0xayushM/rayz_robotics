import React from "react";
import styled from "styled-components";

const courses = (props) => {
  return (
    <Container>
      <Head>
        <h1>COURSES</h1>
      </Head>
      <Section>
        <Cards>
          <img src="/images/bgimage.webp" alt="" />
          <Content>
            <h2>Basic</h2>
            <p>2 days Basic Robotics workshop with hands-on project</p>
            <h3>
              Course fee-<span>₹ 1000</span> ₹ 300
            </h3>
          </Content>
        </Cards>
        <Cardstwo>
          <Content>
            <h2>Intermediate</h2>
            <p>7 days Intermediate Robotics workshop with hands-on project</p>
            <h3>
              Course fee-<span>₹ 5000</span> ₹ 2000
            </h3>
          </Content>
          <img src="/images/bgimage.webp" alt="" />
        </Cardstwo>
        <Cardsthree>
          <img src="/images/bgimage.webp" alt="" />
          <Content>
            <h2>Advance</h2>
            <p>
              1 Month Advance Robotics workshop with one to one guidance and
              multiple hands-on project
            </p>
            <h3>
              Course fee-<span>₹ 20,000</span> ₹ 8000
            </h3>
          </Content>
        </Cardsthree>
        <Cardsfour>
          <Content>
            <h2>Summer Camp</h2>
            <p>
              15 days Summer Camp with Robotics Learning and Competition and
              with multiple hands-on project
            </p>
            <h3>
              Course fee-<span>₹ 20,000</span> ₹ 10,000
            </h3>
          </Content>
          <img src="/images/bgimage.webp" alt="" />
        </Cardsfour>
      </Section>
    </Container>
  );
};

export default courses;

const Container = styled.main`
  align-items: center;
  justify-content: center;
  text-align: center;
  position: relative;
  min-height: 70vh;
  overflow-x: hidden;
  display: block;
  top: 72px;
  padding: 0 5vw;
  background-color: rgb(0, 0, 0, 0.5);
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
  padding: 2vh 0 2vh 2vh;
  margin:0;
  color: white;
`;
const Section = styled.div`
  margin: -10vh 10vh 5vw 5vw;
  padding: 5vh;
  color: white;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
`;
const Cards = styled.div`
  display: flex;
  box-shadow: rgb(255 255 255 / 69%) 0px 26px 30px -10px,
    rgb(255 255 255/73%) 0px 16px 10px -10px;
  flex-direction: row;
  padding: 5vh;
  margin: 5vh 0;
  border-radius: 10px;
  justify-content: space-around;
  transition: 0.5s;
  &:hover {
    background-color: rgb(255, 255, 255, 0.3);
    transform: scale(1.05);
    transition: 0.5s;
  }
  img {
    border-radius: 10px;
    width: 50%;
    box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
      rgb(0 0 0/73%) 0px 16px 10px -10px;
  }
`;
const Content = styled.div`
  justify-content:center;
  display:flex;
  flex-direction: column;
  width: 50%;
  text-align: left;
  margin:0 5vh;
  span {
    text-decoration: line-through;
  }
`
const Cardstwo = styled(Cards)`
  box-shadow: rgb(255 0 110 / 69%) 0px 26px 30px -10px,
  rgb(255 0 110/73%) 0px 16px 10px -10px;
  &:hover {
      background-color: rgb(255, 0, 110, 0.3);
    }
    `;
const Cardsthree = styled(Cards)`
  box-shadow: rgb(251 86 7 / 69%) 0px 26px 30px -10px,
  rgb(251 86 7/73%) 0px 16px 10px -10px;
  &:hover {
    background-color: rgb(251,86,7, 0.3);
  }
  `;
const Cardsfour = styled(Cards)`
  box-shadow: rgb(255 190 11 / 69%) 0px 26px 30px -10px,
  rgb(255 190 11/73%) 0px 16px 10px -10px;
  &:hover {
    background-color: rgb(255,190,11, 0.3);
  }
`;