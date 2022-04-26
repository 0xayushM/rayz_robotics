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
                Name:
              </label>
                <input type="text" name="name" />
          </Form>
          <Form>
              <label>
                D.O.B.:
              </label>
                <input type="date" name="date_of_birth" />
            </Form>
          <Form>
              <label>
                Class:
              </label>
                <input type="text" name="name" />
            </Form>
          <Form>
              <label>
                Contact:
              </label>
                <input type="text" name="name" />
              </Form>
          <Form>
              <label>
                Email:
              </label>
                <input type="text" name="name" />
            </Form>
          <Form>
              <label>
                Course:
              </label>
                <input type="text" name="name" />
            </Form>
          <Form>
              <label>
                Place:
              </label>
              <input type="text" name="name" />
              </Form>
          <Form>
              <label>
                School:
              </label>
                <input type="text" name="name" />
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
  padding: 0px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

const Form = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  color: white;
  border: none;
  padding: 5vh 2vw;
  width:70vw;
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
    width: 40vw;
    border: none;
    border-bottom: 2px solid white;
    @media (max-width:768px) {
      width: 70vw;
      padding:10px;
    }
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