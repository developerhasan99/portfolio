import styled from "@emotion/styled";
import Tldr from "./tldr";
import Container from "../common/container";

const Section = styled.section`
  padding-top: 90px;
  padding-bottom: 100px;
  background-color: #f0f0f0;
`;

const H2 = styled.h2`
  text-transform: uppercase;
  margin: 0 0 30px;
  font-family: "Lato", sans-serif;
  font-weight: 300;
`;

const ProfileImg = styled.img`
  border-radius: 50%;
`;

function About() {
  return (
    <Section id="about">
      <Container maxWidth="650px" style={{ textAlign: "center" }}>
        <H2>A Little Bit About Me</H2>
        <ProfileImg src="./profile-pic.jpg" alt="Profile Pic" width={170} />
        <p>
          Hey! My name is Mehedi Hasan and I'm a UX Enthusiast with skills in
          Front-End and WordPress Development. Since beginning my journey as a
          freelance designer nearly 4 years ago, I've done remote work for
          agencies, consulted for startups, and collaborated with talented
          people to create digital products for both business and consumer use.
        </p>
        <p>
          When I'm not on the computer, I enjoy reading books, swimming, and
          petting animals.
        </p>
        <Tldr />
      </Container>
    </Section>
  );
}

export default About;
