import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import YouTubeIcon from "@mui/icons-material/YouTube";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import React from "react";
import styled from "styled-components";

const Footer = (props) => {
    return (
      <Container>
        <About>
          <h2>About</h2>
          <p>
            Since inception in 2021, RayZ Robotics has built an ecosystem of
            over 30,000 children aged between 7-17 across India, since we
            started in 2021. It's about time we pull students out of the rat
            race and teach them how to think instead of what to think!
          </p>
        </About>
        <Connect>
          <h2>Connect</h2>
          <h4>
            Email : <a href="mailto:support@rayz.co.in">support@rayz.co.in</a>
          </h4>
          <h4>
            Contact : <span> +91 93022 92875</span>
          </h4>
        </Connect>
        <Social>
          <h2>Follow Us</h2>
          <a
            href={"https://www.facebook.com/"}
            target="_blank"
            rel="noreferrer"
          >
            <FacebookIcon />
          </a>
          <a
            href={"https://www.instagram.com/"}
            target="_blank"
            rel="noreferrer"
          >
            <InstagramIcon />
          </a>
          <a href={"https://www.twitter.com/"} target="_blank" rel="noreferrer">
            <TwitterIcon />
          </a>
          <a href={"https://www.youtube.com/"} target="_blank" rel="noreferrer">
            <YouTubeIcon />
          </a>
          <a
            href={"https://www.linkedin.com/"}
            target="_blank"
            rel="noreferrer"
          >
            <LinkedInIcon />
          </a>
          <h4>© 2021 RayZ ROBOTIC.</h4>
        </Social>
      </Container>
    );
}

export default Footer;

const Container = styled.footer`
  background-image: linear-gradient(to right, #210746, #420e8b);
  display: flex;
  flex-direction: row;
  padding: 5vh 5vw;
  margin-top:9vh;
  @media (max-width:768px) {
    flex-direction: column;
  }
`;

const About = styled.div`
    max-width:30vw;
    color:white;
    padding:0 5vw 0 2.5vw;
    @media (max-width:768px) {
      max-width:100%;
    }
`
const Connect = styled.div`
  max-width: 30vw;
  color: white;
  padding: 0 2.5vw 0 2.5vw;
  a,
  span {
    font-weight: lighter;
    color: white;
  }
  @media (max-width: 768px) {
    max-width: 100%;
  }
`;

const Social = styled.div`
    color:white;
    padding:0 2.5vw 0 5vw;
    a {
        color:white;
        padding:1vw;
    }
    
`