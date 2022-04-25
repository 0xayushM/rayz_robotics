
import React from "react";
import styled from "styled-components";

const Does = (props) => {
  return (
    <SectionWhy>
      <ContentWhy>
        <>
          <img src="/images/course3.jpg" alt="" />
          <Heading2>
            <h1>Does our education system prepare us?</h1>
            <p>
              The current education system demands practical approach to
              subjects rather than only theory. It is required to provide Hands
              on experience of the theoretical concepts. Practical project based
              approach not only helps a student apply the theory, it also
              develops the problem solving skills among students. The stereotype
              theoretical education methodologies needs a change to prepare
              children for the future. Students need to be motivated to do
              physical exercises and play outdoor sports rather than playing
              games on cell phones and computers.
            </p>
          </Heading2>
        </>
      </ContentWhy>
    </SectionWhy>
  );
};

export default Does;

const SectionWhy = styled.div`
  color: white;
  width: 85%;
  border-radius: 10px;
  margin: 10vh 5vw;
`;
const ContentWhy = styled.div`
  display: flex;
  margin-top: 2vh;
  margin-bottom: 0px;
  padding: 0;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  img {
    width: 40vw;
    height: 50vh;
    border-radius: 10px;
    box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
      rgb(0 0 0/73%) 0px 16px 10px -10px;
      @media (max-width:768px) {
        display: none;
      }
  }
`;
const Heading2 = styled.div`
  z-index: 1;
  padding: 5vh 5vh 5vw 5vw;
  letter-spacing: 2px;
  h1 {
    padding: 0;
    margin: 0;
    @media (max-width: 768px) {
      font-size:5vw;
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
