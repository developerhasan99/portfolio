import styled from "@emotion/styled";

const A = styled.a`
  cursor: pointer;
  display: flex;
  align-items: center;
`;

const H2 = styled.h2`
  color: #fff;
  font-size: 18px;
  text-transform: uppercase;
  letter-spacing: 3px;
  margin: 0 0 0 10px;
  font-weight: 300;
  @media (max-width: 767px) {
    display: none;
  }
`;

function Logo() {
  return (
    <A href="/">
      <img src="./logo.svg" alt="M" width={24} />
      <H2>Mehedi Hasan</H2>
    </A>
  );
}

export default Logo;
