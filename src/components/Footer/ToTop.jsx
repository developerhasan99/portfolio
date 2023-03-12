import styled from "@emotion/styled";
import { useState } from "react";

const Button = styled.button`
  border: 0;
  background-color: transparent;
  cursor: pointer;
`;

const Caption = styled.p`
  color: #fff;
  font-size: 10px;
  margin: 0;
  opacity: ${(props) => (props.isHover ? `1` : `0`)};
  transition: 0.3s ease-in-out;
`;

function ToTop() {
  const [isHover, setHover] = useState(false);

  const handleMouseEnter = (e) => {
    setHover(true);
  };

  const handleMouseLeave = (e) => {
    setHover(false);
  };

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <Button
      onClick={handleClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <img width={60} src="./rocket.png" alt="Back to Top" />
      <Caption isHover={isHover}>Beam me up, Scotty!</Caption>
    </Button>
  );
}

export default ToTop;
