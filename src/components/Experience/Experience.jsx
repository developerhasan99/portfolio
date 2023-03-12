import styled from "@emotion/styled";
import Container from "../common/container";
import SectionHeader from "../common/section-header";
import GithubRepos from "./github-repos";
import TechLogoList from "./tech-logos";

const Section = styled.section`
  padding: 100px 0 80px;
  background: #fff;
`;

const H4 = styled.h4`
  margin: 1.5rem 0;
  line-height: 1.5;
  word-spacing: 2px;
  font-weight: 300;
`;

function Experience() {
  return (
    <Section id="experience">
      <Container maxWidth="992px">
        <SectionHeader
          heading="Experience"
          description={[
            "I've been doing web development for about 4 years now, and I'm always eager to",
            <br key="randidforbr" />,
            "learn more in this fast paced industry",
          ]}
        />
        <H4>Some technologies I have worked with:</H4>
        <TechLogoList />
        <H4>My recent GitHub repositories:</H4>
        <GithubRepos />
      </Container>
    </Section>
  );
}

export default Experience;
