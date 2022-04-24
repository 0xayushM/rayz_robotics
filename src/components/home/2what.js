import React from "react";
import styled from 'styled-components';

const What = (props) => {
    return (
      <Section2>
        <Content2>
          <img src="/images/ambassador.jpeg" alt="" />
          <>
            <Heading2>
              <h1>What is RayZ Robotics?</h1>
              <p>
                Rayz robotics labs offer school and college students an
                oppurtunity to learn robotics and make a change in a imagine
                kids building robots which solve the problems of million people.
                <br />
                Besides becoming a certified roboteer ,the students also gets an
                oppurtunity to display their robots in tech fest of various IIT
                /Communities and at national and international level. ...
                <a href="/about">more</a>
              </p>
            </Heading2>
          </>
        </Content2>
      </Section2>
    );
}

export default What;


const Heading2 = styled.div`
  z-index: 1;
  padding: 5vh 5vh 5vw 5vw;
  letter-spacing: 2px;
  h1 {
    padding: 0;
    margin: 0;
  }
  font-size: 1.3vw;
  a {
    color: #8338ec;
  }
  p {
    font-size: 1.5vw;
    text-align: justify;
  }
`;

const Section2 = styled.div`
  color: white;
  width: 85%;
  border-radius: 10px;
  margin: 8vh 5vw;

`;

const Content2 = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-around;
  width: 100%;
  border-radius: 10px;
  img {
    width: 25vw;
    /* background-color: #3a86ff; */
    background-image: linear-gradient(to right, #400080, #3a86ff);
    box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
      rgb(0 0 0/73%) 0px 16px 10px -10px;
    border-radius: 10px;
  }
`;