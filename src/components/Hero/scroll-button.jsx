import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";

const A = styled.a`
  margin: 120px 0 80px;
  border: 0;
  display: inline-block;
  background-color: transparent;
  cursor: pointer;
`;

const bounce = keyframes`
  from, 20%, 53%, 80%, to {
    transform: translate3d(0,0,0);
  }

  40%, 43% {
    transform: translate3d(0, -30px, 0);
  }

  70% {
    transform: translate3d(0, -15px, 0);
  }

  90% {
    transform: translate3d(0,-4px,0);
  }
`;

const MouseImg = styled.img`
  animation: ${bounce} 1s ease infinite;
`;

function ScrollButton() {
  return (
    <A href="#about">
      <MouseImg src="./scroll-down.svg" width={20} alt="scroll down!" />
    </A>
  );
}

export default ScrollButton;
