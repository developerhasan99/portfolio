import styled from "@emotion/styled";
import Container from "../common/container";
import SectionHeader from "../common/section-header";
import Row from "../common/row";
import ServiceCard from "./service-cared";

const Section = styled.section`
  padding: 100px 0 80px;
  background-color: #f0f0f0;
`;

function Passion() {
  return (
    <Section id="passion">
      <Container maxWidth="1200px" style={{ textAlign: "center" }}>
        <SectionHeader
          heading="Passion"
          description="Check out my services that will suit your needs."
        />
        <Row>
          <ServiceCard
            img="./service-icons/design.svg"
            alt="Design"
            heading="Design"
            description="I value simple content structure, clean design patterns, and
            thoughtful interactions."
          />
          <ServiceCard
            img="./service-icons/development.svg"
            alt="Development"
            heading="Development"
            description="I like to code things from scratch, and enjoy bringing ideas to
            life in the browser."
          />
          <ServiceCard
            img="./service-icons/implementation.svg"
            alt="Implementation"
            heading="Implementation"
            description="I will convert any kind of html or figma design to wordpress or
            create a website from scratch."
          />
        </Row>
      </Container>
    </Section>
  );
}

export default Passion;
