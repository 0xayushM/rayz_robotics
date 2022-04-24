import React from "react";
import styled from "styled-components";

const about = (props) => {
  return (
    <Container>
      <Card>
        <Head>
          <h1>ABOUT US</h1>
        </Head>
        <Section>
          <img src="/images/bgimage.webp" alt="" />
          <p>
            Robotics is the intersection of science, engineering and technology
            that produces machines, called robots, that substitute for (or
            replicate) human actions. Pop culture has always been fascinated
            with robots. R2-D2. Optimus Prime. WALL-E. These over-exaggerated,
            humanoid concepts of robots usually seem like a caricature of the
            real thing...or are they more forward thinking than we realize?
            Robots are gaining intellectual and mechanical capabilities that
            don’t put the possibility of a R2-D2-like machine out of reach in
            the future.
          </p>
        </Section>
      </Card>
      <Card>
        <Head>
          <h1>How RayZ Robotics will help?</h1>
        </Head>
        <Section>
          <p>
            The robotics industry worldwide keeps innovating, combining
            artificial intelligence and vision and other sensory technologies,
            according to Analytics Insight magazine. The magazine noted that
            newer iterations of robots are easier to set up and program than
            their predecessors. RayZ Robotics labs offer school and college
            students an opportunity to learn robotics by hands pn practice by
            building robots which tend to solve problems of the society. Beside
            becoming a certified roboteer, the students also get various
            opportunities to display their robots at Tech-Fest held by IIT or
            Robotics-Communities at state or national level.
          </p>
          <img src="/images/bgimage.webp" alt="" />
        </Section>
      </Card>
      <Card>
        <Head>
          <h1>Vision?</h1>
        </Head>
        <Section>
          <img src="/images/bgimage.webp" alt="" />
          <p>
            RayZ Robotics seeks to inspire the next generation of great minds by
            allowing them unprecedented access to space at the high school and
            middle school level. By making the benefits and resources of the
            space program tangible to students, Zero Robotics hopes to cultivate
            an appreciation of science, technology, engineering and math through
            healthy, immersive, collaborative competition. Another major goal of
            Zero Robotics is to lead young minds to see the concept of working
            in space as "normal", allowing imaginations to go beyond the
            boundaries of rocket science RayZ Robotics, following a
            mentor-driven model, brings students together with professionals
            while they complete a full engineering problem: designing,
            implementing, and operating their response to the RayZ Robotics
            challenges.RayZ Robotics seeks to be a permanent link between
            students and the industry leaders that work on the forefront of
            science and engineering. These students will in turn become the
            future leaders to push this frontier forward.
          </p>
        </Section>
      </Card>
      <Card>
        <Head>
          <h1>Mission</h1>
        </Head>
        <Section>
          <p>
            RayZ Robotics hopes to provide a unique, challenging learning
            environment that inspires young minds to apply and sharpen their
            science, technology, engineering, and math skills. Through a series
            of competitions starting virtually online and aboard the
            International Space Station, students exercise their creative
            problem-solving skills and take on real world design problems. With
            the latest robot technologies, RayZ Robotics provides students
            worldwide with a testbed to carry out space experiments. All RayZ
            Robotics competitions are tied in some way to actual research. By
            using crowdsourcing and other technologies, one day RayZ Robotics
            aims to substantively involve students in the design and testing
            process for Robots software.
          </p>
          <img src="/images/bgimage.webp" alt="" />
        </Section>
      </Card>
    </Container>
  );
};

export default about;

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
  padding-bottom: 5vh;
  background-color: rgb(0, 0, 0, 0.5);
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
  margin:1vh;
  color: white;
`;

const Section = styled.div`
  padding: 2vh 5vw;
  color: white;
  border-radius: 10px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  img {
    width: 30vw;
    margin: 2vw;
    box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
      rgb(0 0 0/73%) 0px 16px 10px -10px;
    border-radius: 10px;
  }
`;
const Card = styled.div`
  display: flex;
  box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
    rgb(0 0 0/73%) 0px 16px 10px -10px;
  flex-direction: column;
  padding: 5vh;
  /* background-color: rgb(0,0,0,0.5); */
  border-radius: 10px;
  justify-content: space-around;
  transition: 0.5s;
  margin: 5vh;
`;
