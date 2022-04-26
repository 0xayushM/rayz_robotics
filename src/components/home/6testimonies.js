import styled from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const Testimony = (props) => {
  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };
  return (
    <Container>
      <Head>
        <h1>Testimonies</h1>
      </Head>
      <Carousel {...settings}>
        <Wrap>
          <Section2>
            <Content2>
              <img src="/testimonies/Ashiq.jpg" alt="" class="Ashiq"/>
              <Heading2>
                <h1>M. Ashiq </h1>
                <h3>Continental Automotive</h3>
                <p>
                  Robotics prepare children for a technological future. As we
                  are seeing our society is becoming increasingly
                  technologically driven. Being computer literate is now
                  mandatory in many fields, and increasingly we are seeing 3D
                  printing, drones and advanced machinery are being more and
                  more common in various working environments.
                </p>
              </Heading2>
            </Content2>
          </Section2>
        </Wrap>
        <Wrap>
          <Section2>
            <Content2>
              <img src="/testimonies/Gaurav.jpg" alt="" class='gaurav'/>
              <Heading2>
                <h1>Gaurav Kumar </h1>
                <h3>Research Scholar, University of Valencia, Spain</h3>
                <p>
                  We are living in 21st century and now robotics is not some
                  future technology. Starting from small things like needle to
                  something huge like aeroplane, everything is now being
                  manufactured in industries on production line. Machines have
                  replaced humans almost in every sector. They should learn the
                  codings and physics behind the robotics, which will not only
                  help them to grab ample amount of opportunity in this field
                  but also help them develop their logical ability and teamwork
                  skills required in robotics.
                </p>
              </Heading2>
            </Content2>
          </Section2>
        </Wrap>
        <Wrap>
          <Section2>
            <Content2>
              <img src="/testimonies/Sawan.jpg" alt="" class='sawan'/>
              <Heading2>
                <h1>Sawan Ambedkar </h1>
                <h3>Mercedes Benz</h3>
                <p>
                  Robotics improves self confidence. Imagine a Child of age 9 or
                  10 years making a machine that works on their command and
                  instruction. Wouldn't that be amazing? Assembling a robot
                  boosts self confidence and self esteem. If children learn
                  about their potential at an early age, it will help them grow
                  in professional world also.
                </p>
              </Heading2>
            </Content2>
          </Section2>
        </Wrap>
        <Wrap>
          <Section2>
            <Content2>
              <img src="/testimonies/Shashank.jpg" alt="" class='shashank'/>
              <Heading2>
                <h1>Shashank Gupta</h1>
                <h3>Research Scholar, IIT Delhi</h3>
                <p>
                  With the evolvement of current technology, education system
                  should also upgrade itself to prepare the children for future
                  world. Knowledge of Robotics in school would be the simple and
                  enjoyable way of introducing the technology among young minds.
                  Robotics is subject that helps school children to enhance
                  their problem-solving ability, build critical thinking, and
                  apply creative ideas to do cool stuffs by hand-on learning
                  activities.
                </p>
              </Heading2>
            </Content2>
          </Section2>
        </Wrap>
      </Carousel>
    </Container>
  );
};

const Container = styled.div``;
const Head = styled.div`
  padding: 1vw;
  margin: 1vh;
  color: white;
  font-size: larger;
`;
const Carousel = styled(Slider)`
  margin-top: 20px;
  & > button {
    opacity: 0;
    height: 100%;
    width: 5vw;
    z-index: 1;
    transition: opacity 0.2s ease 0s;
    &:hover {
      opacity: 1;
      transition: opacity 0.2s ease 0s;
    }
  }
  ul li button {
    &:before {
      font-size: 10px;
      color: rgb(150, 158, 171);
    }
  }
  li.slick-active button:before {
    color: white;
  }
  .slick-list {
    overflow: initial;
  }
  .slick-prev {
    left: -75px;
  }
  .slick-next {
    right: -75px;
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
      font-size: 5vw;
    }
  }
  font-size: 1.3vw;
  a {
    color: #8338ec;
  }
  h3 {
    @media (max-width:768px) {
      font-size:3.5vw;
    }
  }
  p {
    font-size: 1.5vw;
    @media (max-width: 768px) {
      font-size: 3vw;
    }
  }
`;

const Section2 = styled.div`
  color: white;
  width: 85%;
  border-radius: 10px;
  margin: 8vh 5vw;
  padding:2vw;
  box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
    rgb(0 0 0/73%) 0px 16px 10px -10px;
  background-color: rgb(0,0,0,0.6);
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
    max-height:40vh;
    /* background-color: #3a86ff; */
    background-image: linear-gradient(to right, #400080, #3a86ff);
    box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
      rgb(0 0 0/73%) 0px 16px 10px -10px;
    border-radius: 10px;
  }
  .Ashiq {
    width:50vw;
  }
  .sawan {
    width:35vw;
  }
  @media (max-width:768px) {
    flex-direction: column;
  }
`;
const Wrap = styled.div`
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  margin-top:-5vh;
`;

export default Testimony;
