import styled from "@emotion/styled";

const Wrapper = styled.div`
  text-align: center;
  margin-bottom: 2.5rem;
`;

const H2 = styled.h2`
  text-transform: uppercase;
  margin: 0 0 30px;
  font-family: "Lato", sans-serif;
  font-weight: 300;
`;

function SectionHeader({ heading, description }) {
  return (
    <Wrapper>
      <H2>{heading}</H2>
      <p>{description}</p>
    </Wrapper>
  );
}

export default SectionHeader;
