import styled from "styled-components";
import { Link } from "react-router-dom";
const Originals = (props) => {
  return (
    <Container>
      <Head>
        <h1>STUDENT PROJECTS</h1>
      </Head>
      <Content>
        <Card>
          <Wrap>
            <Link to="#">
              <img src="/project_images/arduino.avif" alt="" />
            </Link>
          </Wrap>
          <Name>
            <h3>Arduino based smart phone controlled robot</h3>
          </Name>
        </Card>
        <Card2>
          <Wrap>
            <Link to="#">
              <img src="/project_images/fire_extinguisher.jpeg" alt="" />
            </Link>
          </Wrap>
          <Name>
            <h3>Fire Extinguisher Robot</h3>
          </Name>
        </Card2>
        <Card3>
          <Wrap>
            <Link to="#">
              <img src="/project_images/gesture.jpeg" alt="" />
            </Link>
          </Wrap>
          <Name>
            <h3>Wireless Gesture Contro</h3>
          </Name>
        </Card3>
        <Card4>
          <Wrap>
            <Link to="#">
              <img src="/project_images/homeautomation.jpg" alt="" />
            </Link>
          </Wrap>
          <Name>
            <h3>Home Automation</h3>
          </Name>
        </Card4>
        <Card>
          <Wrap>
            <Link to="#">
              <img src="/project_images/hospital.jpg" alt="" />
            </Link>
          </Wrap>
          <Name>
            <h3>Hospital Sanitizing Robot</h3>
          </Name>
        </Card>
        <Card2>
          <Wrap>
            <Link to="#">
              <img src="/project_images/irrigation.jpeg" alt="" />
            </Link>
          </Wrap>
          <Name>
            <h3>Automatic Irrigation</h3>
          </Name>
        </Card2>
        <Card3>
          <Wrap>
            <Link to="#">
              <img src="/project_images/linefollower.jpeg" alt="" />
            </Link>
          </Wrap>
          <Name>
            <h3>Line Follower Robot</h3>
          </Name>
        </Card3>
        <Card4>
          <Wrap>
            <Link to="#">
              <img src="/project_images/obstacle.JPG" alt="" />
            </Link>
          </Wrap>
          <Name>
            <h3>Obstacle Avoidance Robot</h3>
          </Name>
        </Card4>
        <Card>
          <Wrap>
            <Link to="#">
              <img src="/project_images/PickandPlaceRobot.png" alt="" />
            </Link>
          </Wrap>
          <Name>
            <h3>Pick and Place Robot</h3>
          </Name>
        </Card>
        <Card2>
          <Wrap>
            <Link to="#">
              <img src="/project_images/rat_trap.jpg" alt="" />
            </Link>
          </Wrap>
          <Name>
            <h3>Rat Trap Model</h3>
          </Name>
        </Card2>
        <Card3>
          <Wrap>
            <Link to="#">
              <img src="/project_images/RF-controlled.jpg" alt="" />
            </Link>
          </Wrap>
          <Name>
            <h3>RF Remote Control</h3>
          </Name>
        </Card3>
        <Card4>
          <Wrap>
            <Link to="#">
              <img src="/project_images/soccer.jpeg" alt="" />
            </Link>
          </Wrap>
          <Name>
            <h3>Soccer Robot</h3>
          </Name>
        </Card4>
        <Head2 ><h3>More...</h3></Head2>
      </Content>
    </Container>
  );
};

const Container = styled.div`
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
  padding: 1vw;
  margin: 1vh;
  color: white;
`;
const Head2 = styled(Head)`
  padding:0;
  margin:0;
  display: flex;
  justify-content: end;
`
const Content = styled.div`
  display: grid;
  grid-gap: 30px;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 50px;
  @media (max-width: 768px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
  margin-bottom: 10vh;
`;
const Wrap = styled.div`
  img {
    width:20vw;
    height: 20vh;
    align-items: center;
    justify-content: center;
    display:flex;
  }
  height: 10vh;
  border-radius: 10px;
  padding-top:10vh;
  box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
    rgb(0 0 0/73%) 0px 16px 10px -10px;
  cursor: pointer;
  position: relative;
  border: 3px solid rgba(249, 249, 249, 0.1);
  img {
    inset: 0px;
    display: block;
    border-radius: 10px;
    object-fit: cover;
    position: absolute;
    opacity: 1;
    transition: opacity 500ms ease-in-out 0s;
    width: 100%;
    z-index: 1;
    top: 0;
  }
  
`;

const Name = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color:white;
`

const Card = styled.div`
  padding: 10px;
  border-radius: 10px;
  box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px,
    rgb(0 0 0 / 72%) 0px 30px 22px -10px;
  &:hover {
    box-shadow: rgb(255 255 255 / 69%) 0px 26px 30px -10px,
      rgb(255 255 255/73%) 0px 16px 10px -10px;
    transform: scale(1.05);
    border-color: rgba(249, 249, 249, 0.8);
    background-color: rgb(249, 249, 249, 0.5);
  }
  transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
`;

const Card2 = styled(Card)`
  &:hover {
    box-shadow: rgb(255 0 110 / 69%) 0px 26px 30px -10px,
      rgb(255 0 110/73%) 0px 16px 10px -10px;
    background-color: rgb(255, 0, 110, 0.3);
  }
`;
const Card3 = styled(Card)`
  &:hover {
    box-shadow: rgb(251 86 7 / 69%) 0px 26px 30px -10px,
      rgb(251 86 7/73%) 0px 16px 10px -10px;
    background-color: rgb(251, 86, 7, 0.3);
  }
`;
const Card4 = styled(Card)`
  &:hover {
    box-shadow: rgb(255 190 11 / 69%) 0px 26px 30px -10px,
      rgb(255 190 11/73%) 0px 16px 10px -10px;
    background-color: rgb(255, 190, 11, 0.3);
  }
`;

export default Originals;
