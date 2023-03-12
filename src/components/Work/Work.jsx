import styled from "@emotion/styled";
import Container from "../common/container";
import SectionHeader from "../common/section-header";
import WorkGallery from "./work-gallery";

function Work() {
  const Section = styled.section`
    padding: 100px 0 80px;
  `;

  return (
    <Section id="works">
      <Container maxWidth="1200px" style={{ textAlign: "center" }}>
        <SectionHeader
          heading="What I've Done"
          description="All Latest Creative Works In Web."
        />
        <WorkGallery />
      </Container>
    </Section>
  );
}

export default Work;
