import styled from "@emotion/styled";
import { useContext } from "react";
import context from "../../context/context";

const Button = styled.button`
  cursor: pointer;
  border: 0;
  background: transparent;
  display: none;
  @media (max-width: 767px) {
    display: block;
  }
`;

function NavToggler() {
  const { handleMobileNav } = useContext(context);

  return (
    <Button onClick={handleMobileNav}>
      <img src="./menu.svg" alt="Menu" />
    </Button>
  );
}

export default NavToggler;
