import styled from "@emotion/styled";
import { Children } from "react";

const A = styled.a`
  display: inline-block;
  color: #fff;
  cursor: pointer;
  border: 2px solid #ccc;
  padding: 10px 30px;
  transition: 0.1s;
  &:hover {
    padding: 10px 40px;
    background-color: rgba(254, 254, 254, 0.2);
  }
`;

function Button({ children, target, href }) {
  return (
    <A target={target} href={href}>
      {children}
    </A>
  );
}

export default Button;
