import React from "react";
import styled from 'styled-components';

const RayZ = (props) => {
    return (
      <Section1>
        <Content1>
          <Heading>
            <Head>
              <h1>RayZ ROBOTICS</h1>
            </Head>
          </Heading>
          <img src="/images/bgimage.webp" alt="" />
        </Content1>
      </Section1>
    );
}

export default RayZ;

const Head = styled.div`
  padding: 1vw;
  padding-left: 0;
`;

const Heading = styled.div`
  z-index: 1;
  padding: 5vh 3vw;
  font-size: 2.5vw;
  color: white;
  letter-spacing: 2px;
  h1 {
    padding: 0;
    margin: 0;
    font-family: "Acme", sans-serif;
    @media (max-width:768px) {
      font-size: 8vw;
    }
  }
`;
const Section1 = styled.div`
  color: white;
  width: 85%;
  border-radius: 10px;
  margin: 10vh 5vw;
`;
const Content1 = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  img {
    width: 40vw;
    background-color: #3a86ff;
    box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
      rgb(0 0 0/73%) 0px 16px 10px -10px;
    border-radius: 10px;
    @media (max-width:768px) {
      display:none;
    }
  }
`;
