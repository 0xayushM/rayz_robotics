import React from "react";
import styled from "styled-components";

const Why = (props) => {
  return (
    <SectionWhy>
      <ContentWhy>
        <>
          <Heading2>
            <h1>Why Robotics for students?</h1>
            <p>
              With the rapid growth of technology under Industry 4.0, the
              education is also being upgraded to Education 4.0 which means most
              of the future jobs will be related to Artificial intelligence(AI),
              Machine Learning (ML) and Robotics. The current level of education
              taught in schools needs to be upgraded by bringing more practical
              exposure to the students. Robotics is way by which students can
              develop the skills of problem solving, practical approach to
              challenges and give a shape to their creativity.
            </p>
          </Heading2>
        </>
        <img src="/images/course2.jpg" alt="" />
      </ContentWhy>
    </SectionWhy>
  );
};

export default Why;

const SectionWhy = styled.div`
  color: white;
  width: 85%;
  border-radius: 10px;
  margin: 5vh 5vw;
`;
const ContentWhy = styled.div`
  display: flex;
  margin-bottom: 0px;
  padding: 0;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  img {
    width: 40vw;
    height: 50vh;
    margin: 20px;
    border-radius: 10px;
    box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
      rgb(0 0 0/73%) 0px 16px 10px -10px;
  }
`;
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
  }
`;
