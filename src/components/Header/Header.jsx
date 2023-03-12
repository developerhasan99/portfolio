import styled from "@emotion/styled";
import { useContext } from "react";
import Context from "../../context/context";
import Container from "../common/container";
import Logo from "./logo";
import NavLinks from "./nav-links";
import NavToggler from "./NavToggler";

const Nav = styled.nav`
  padding: 20px 0;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  transition: 0.3s;
  z-index: 999;
  ${({ isSticky }) =>
    isSticky &&
    `background-color: #040810;
    padding: 5px 0;`}
  @media (max-width: 767px) {
    padding: 10px 0;
  }
`;

const Header = () => {
  const { state } = useContext(Context);

  return (
    <Nav isSticky={state.isSticky}>
      <Container
        maxWidth="1200px"
        style={{ display: "flex", justifyContent: "space-between" }}
      >
        <Logo />
        <NavLinks />
        <NavToggler />
      </Container>
    </Nav>
  );
};

export default Header;
