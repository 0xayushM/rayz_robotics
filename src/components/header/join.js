import React from "react";
import styled from 'styled-components';
const Join = (props) => {
    return (
      <Container>
        <Head>
          <h1>JOIN US</h1>
        </Head>
        <Section>
          <Form>
              <label>
                First Name:
                <input type="text" name="name" />
              </label>
              </Form>
          <Form>
              <label>
                Last Name:
                <input type="text" name="name" />
              </label>
            </Form>
          <Form>
              <label>
                Date of Birth:
                <input type="date" name="date_of_birth" />
              </label>
            </Form>
          <Form>
              <label>
                Class:
                <input type="text" name="name" />
              </label>
            </Form>
          <Form>
              <label>
                Contact No:
                <input type="text" name="name" />
              </label>
              </Form>
          <Form>
              <label>
                Email Address:
                <input type="text" name="name" />
              </label>
            </Form>
          <Form>
              <label>
                Place:
                <input type="text" name="name" />
              </label>
              </Form>
          <Form>
              <label>
                School:
                <input type="text" name="name" />
              </label>
          </Form>
          <Button>
            <form>
              <input type="submit"></input>
            </form>
          </Button>
        </Section>
      </Container>
    );
}

const Head = styled.div`
  padding: 1vw;
  padding-left: 0;
  color:white;
`;
const Section = styled.div`
  background-color: rgb(0, 0, 0, 0.6);
  padding:0px 20%;
`;

const Form = styled.div`
  display: flex;
  color: white;
  border: none;
  padding: 5vh 5vw;
  width:40vw;
  label {
    margin: 2vh;
  }
  input {
    overflow: hidden;
    background-color: transparent;
    outline-style: none;
    padding: 1vh;
    margin: 0 1vh;
    color: white;
    border: none;
    border-bottom: 2px solid white;
  }
`;
const Button = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-bottom: 5vh;
  input {
    padding: 1vh 1vw;
    background-color: rgb(249, 249, 249, 0.6);
    transition: 250ms;
    border-radius: 5px;
    &:hover {
      background-color: rgb(249, 249, 249, 1);
      transition: 250ms;
      transform: scale(1.05);
    }
  }
`;

const Container = styled.main`
  text-align: center;
  position: relative;
  min-height: 65vh;
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
    width: 100%;
    content: "";
    position: absolute;
    inset: 0px;
    opacity: 1;
    z-index: -1;
  }
`;

export default Join;