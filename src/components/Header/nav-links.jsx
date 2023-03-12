import styled from "@emotion/styled";
import { useContext } from "react";
import context from "../../context/context";
import LinkItem from "./LinkItem";
import NavCloser from "./NavCloser";

const Ul = styled.ul`
  margin: 0;
  padding: 0;
  list-style-type: none;
  display: flex;
  transition: 0.4s ease-in-out;
  @media (max-width: 767px) {
    position: fixed;
    display: block;
    top: 0;
    right: ${(props) => (props.isMobileNav ? "0" : "-250px")};
    bottom: 0;
    width: 250px;
    background-color: #f0f0f0;
    padding-top: 8px;
  }
`;

function NavLinks() {
  const { state } = useContext(context);

  return (
    <Ul isMobileNav={state.isMobileNav}>
      <NavCloser />
      <LinkItem text="About" />
      <LinkItem text="Experience" />
      <LinkItem text="Passion" />
      <LinkItem text="Works" />
      <LinkItem text="Contact" />
    </Ul>
  );
}

export default NavLinks;
