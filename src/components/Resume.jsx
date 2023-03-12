import styled from "@emotion/styled";
import Button from "./common/Button";

const Section = styled.section`
  background-image: url(./andrew-neel-cckf4TsHAuw-unsplash.jpg);
  background-size: cover;
  background-attachment: fixed;
`;

const Inner = styled.div`
  padding: 80px 15px;
  text-align: center;
  background-color: rgba(0, 0, 0, 0.7);
`;

const H2 = styled.h2`
  color: #fff;
  text-transform: uppercase;
  margin: 0 0 30px;
  font-weight: 300;
  letter-spacing: 1px;
`;

function Resume() {
  return (
    <Section>
      <Inner>
        <H2>Check out my résumé!</H2>
        <Button target="_blank" href="./resume.pdf">
          Grab A Copy
        </Button>
      </Inner>
    </Section>
  );
}

export default Resume;
