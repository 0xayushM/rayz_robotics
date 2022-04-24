import React from "react";
import styled from 'styled-components';

const StudStories = (props) => {
    return (
      <StudentStories>
        <>
          <Heading3>
            <h1>Student Stories</h1>
          </Heading3>
          <Content3>
            <CardsStud>
              <Head>Dev Chatterjee</Head>
              <Part>
                <img src="/images/Dev.jpg" alt="" />
                <p>
                  In the workshop, I have learnd so many things. It was the best
                  time. I have learned how to make a remote control car. It was
                  an excellent experience. The instructors were excellent,
                  supportive and friendly by nature. Thank you for an excellent
                  training session. It was a god learning opportunity. Thank you
                  so much for giving us that amazing time.
                </p>
              </Part>
            </CardsStud>
            <CardsStudtwo>
              <Head>Simran Mangre</Head>
              <Part>
                <img src="/images/Simran.jpg" alt="" />
                <p>
                  The training was exellent and it was very knowledgable, caring
                  an supportive instrutors. Thank you for an excellent training
                  session. I learned making remote control car which was very
                  fascinating and a good learning opportunity it was. Thank you
                  so much for giving us amazing time.
                </p>
              </Part>
            </CardsStudtwo>
          </Content3>
          <Content3>
            <CardsStudthree>
              <Head>Jyoti Agarwal</Head>
              <Part>
                <img src="/images/Jyoti.jpg" alt="" />
                <p>
                  It was really amazing and helpful session. We found many
                  things and the main thing is that the friendly environment
                  created by you for us. I was not having any knowledge of
                  robotics. But after this session I learned many things that
                  too with hands-on projects.
                </p>
              </Part>
            </CardsStudthree>
            <CardsStudfour>
              <Head>Muskan</Head>
              <Part>
                <img src="/images/Muskan.jpg" alt="" />
                <p>
                  Overall a very informative training session. I learned a lot
                  of new things which will help me in future in my career.
                </p>
              </Part>
            </CardsStudfour>
          </Content3>
        </>
      </StudentStories>
    );
}

export default StudStories;

const StudentStories = styled.div`
  color: white;
  width: 85%;
  border-radius: 10px;
  margin: 5vh 5vw;
`;

const Head = styled.div`
  font-size: 1.5vw;
  font-weight: bold;
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
  }
  font-size: 1.3vw;
  a {
    color: #8338ec;
  }
  p {
    font-size: 1.5vw;
  }
`;
const Part = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  
  p {
    color: white;
  }
`;


const Content3 = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  width: 100%;
  border-radius: 10px;
  margin-bottom: 3vh;
  margin-top: 0px;
`;

const CardsStud = styled.div`
  display: flex;
  margin:2vh;
  width:40vw;
  border-radius: 10px;
  flex-direction: column;
  place-content: center;
  justify-content: center;
  text-align: center;
  padding: 2vw;
  box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
    rgb(0 0 0/73%) 0px 16px 10px -10px;
  background-image: linear-gradient(to right, #66002c, #ff006e);
  img {
    transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
    margin: 2vh;
    width: 10vw;
    padding: 0px;
    border-radius: 10px;
    border: 10px solid #ff006e;
    box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
      rgb(0 0 0/73%) 0px 16px 10px -10px;
  }
  transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
  &:hover {
    transform: scale(1.05);
  }
`;

const CardsStudtwo = styled(CardsStud)`
  img {
    border: 10px solid #ffbe0b;
  }
  background-image: linear-gradient(to right, #ff884d, #ffbe0b);
`;
const CardsStudthree = styled(CardsStud)`
  img {
    border: 10px solid #fb5607;
  }
  background-image: linear-gradient(to right, #cc0000, #fb5607);
`;

const CardsStudfour = styled(CardsStud)`
  img {
    border: 10px solid #00e600;
  }
  background-image: linear-gradient(to right, #009900,#00e600);
`;
