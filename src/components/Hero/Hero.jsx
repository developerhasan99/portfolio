import styled from "@emotion/styled";
import { useContext } from "react";
import FadeIn from "react-fade-in";
import context from "../../context/context";
import Container from "../common/container";
import ScrollButton from "./scroll-button";

const Section = styled.section`
  background-image: url(./john-towner-JgOeRuGD_Y4-unsplash.jpg);
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  background-repeat: no-repeat;
  background-color: #000;
`;

const Inner = styled.div`
  background-color: rgba(0, 0, 0, 0.5);
  padding: 120px 0 70px 0;
`;

const H1 = styled.h1`
  color: #fff;
  text-transform: uppercase;
  font-size: calc(2vh + 2vw + 2vmin);
  letter-spacing: 5px;
  margin-bottom: 1.5rem;
  font-weight: 300;
`;

function Hero() {
  const { heroRef } = useContext(context);

  return (
    <Section>
      <Inner>
        <Container
          maxWidth="1200px"
          style={{ textAlign: "center", paddingTop: "120px" }}
        >
          <FadeIn transitionDuration={1000}>
            <H1 ref={heroRef}>Hi, I'm Mehedi Hasan</H1>
            <p style={{ color: "#fff" }}>
              Design and code nicely simple things, And I love what I do.
            </p>
          </FadeIn>
          <ScrollButton />
        </Container>
      </Inner>
    </Section>
  );
}

export default Hero;
