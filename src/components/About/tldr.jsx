import styled from "@emotion/styled";

const Div = styled.div`
  padding: 1rem;
  background-color: #fff;
  border-radius: 5px;
`;

const H3 = styled.h3`
  font-weight: 300;
  text-transform: uppercase;
  letter-spacing: 2px;
  word-spacing: 7px;
  line-height: 1.5;
`;

const TList = styled.ul`
  margin: 0;
  padding: 0;
  list-style-type: none;
  display: flex;
  justify-content: space-between;
`;

const TlItem = styled.li`
  padding: 15px;
`;

const H4 = styled.h4`
  font-weight: 300;
  font-size: 14px;
  text-transform: capitalize;
  letter-spacing: 0.5px;
`;

function Tldr() {
  return (
    <Div>
      <H3>TL;DR? Self Proclamations:</H3>
      <TList>
        <TlItem>
          <img
            src="./tldr-icons/web-design-svgrepo-com.svg"
            width={50}
            height={50}
            alt="Ui/UX"
          />
          <H4>UX Enthusiast</H4>
        </TlItem>
        <TlItem>
          <img
            src="./tldr-icons/code-svgrepo-com.svg"
            width={50}
            height={50}
            alt="Web Dev"
          />
          <H4>Web Developer</H4>
        </TlItem>
        <TlItem>
          <img
            src="./tldr-icons/reading-svgrepo-com.svg"
            width={50}
            height={50}
            alt="Reading"
          />
          <H4>Books Lover</H4>
        </TlItem>
      </TList>
    </Div>
  );
}

export default Tldr;
