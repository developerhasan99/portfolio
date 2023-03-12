import styled from "@emotion/styled";
import { useContext } from "react";
import context from "../../context/context";

const Li = styled.li`
  text-align: right;
  display: none;
  @media (max-width: 767px) {
    display: block;
  }
`;

const Button = styled.button`
  border: 0;
  margin: 5px;
  background-color: transparent;
`;

function NavCloser() {
  const { handleMobileNav } = useContext(context);

  return (
    <Li>
      <Button onClick={handleMobileNav}>
        <img src="./x.svg" alt="X" />
      </Button>
    </Li>
  );
}

export default NavCloser;
