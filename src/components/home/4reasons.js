import React from "react";
import styled from 'styled-components';

const Reasons = (props) => {
    return (
      <Section3>
        <>
          <Heading3>
            <h1>Reasons to choose</h1>
          </Heading3>
          <Content3>
            <Cards>
              <>
                <Head>Skill development</Head>
                <p>
                  Creativity of the child increases like team spirit, Problem
                  Solving skills, Presentation skills and Competetive skill .
                </p>
              </>
            </Cards>
            <Cardstwo>
              <Head>Affordable price</Head>
              <p>
                We offer all our courses at the lowest prices that are
                affordable for every student. We also provide all the necessary
                equipment. Our main aim is to make this thing known to all the
                students and create a spark in them.
              </p>
            </Cardstwo>
            <Cardsthree>
              <Head>Exciting Gifts</Head>
              <p>
                We also provide some attractive gifts and prizes to the students
                who show some extraordinary effort. We also provide sponsorship
                to students who are winners of our robo competitions to
                participate in IIT Bombay Mood Indigo.
              </p>
            </Cardsthree>
          </Content3>
        </>
      </Section3>
    );
}

export default Reasons;

const Head = styled.div`
  font-size: 1.5vw;
  font-weight: bold;
  @media (max-width:768px) {
    font-size: 4vw;
  }
`;
const Heading3 = styled.div`
  justify-content: center;
  display: flex;
  padding: 2vh;
  padding-bottom: 5vh;
  font-size: 1.3vw;
  z-index: 1;
  padding: 5vh 5vh 5vw 5vw;
  letter-spacing: 2px;
  h1 {
    padding: 0;
    margin: 0;
    @media (max-width: 768px) {
      font-size: 6vw;
    }
  }
  font-size: 1.3vw;
  a {
    color: #8338ec;
  }
  p {
    font-size: 1.5vw;
    @media (max-width: 768px) {
      font-size: 3vw;
    }
  }
`;

const Section3 = styled.div`
  color: white;
  width: 85%;
  border-radius: 10px;
  margin: 5vh 5vw;
`;
const Content3 = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  width: 100%;
  border-radius: 10px;
  img {
    width: 40vw;
    padding: 5vh 3vw;
    background-color: #3a86ff;
    box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
      rgb(0 0 0/73%) 0px 16px 10px -10px;
    border-radius: 10px;
  }
  margin-bottom: 3vh;
  margin-top: 0px;
  @media (max-width:768px) {
    flex-direction: column;
    width:90%;
  }
`;
const Cards = styled.div`
  padding: 3vw;
  width: 16vw;
  color: white;
  background-image: linear-gradient(to right, #66002c, #ff006e);
  border-radius: 10px;
  box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
    rgb(0 0 0/73%) 0px 16px 10px -10px;
  cursor: pointer;
  border: 3px solid transparent;
  transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
  &:hover {
    box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px,
      rgb(0 0 0 / 72%) 0px 30px 22px -10px;
    transform: scale(1.05);
    border-color: white;
    /* border: 3px solid white; */
  }
  display: flex;
  flex-direction: column;
  p {
    font-size:1.5vw;
  }
  @media (max-width:768px) {
    width:100%;
    margin:10px 0;
    p {
      font-size:3vw;
    }
  }
`;

const Cardstwo = styled(Cards)`
  background-image: linear-gradient(to right, #ff884d,#ffbe0b);
`;

const Cardsthree = styled(Cards)`
  background-image: linear-gradient(to right,#cc0000, #fb5607);
`;
