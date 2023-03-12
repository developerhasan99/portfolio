import styled from "@emotion/styled";
import FadeIn from "react-fade-in/lib/FadeIn";
import { useEffect, useState, useRef } from "react";
import Button from "../common/Button";
import Col from "../common/Col";

const Div = styled.div`
  position: relative;
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  display: flex;
  gap: 10px;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.7);
  cursor: pointer;
  transition: 0.3s;
  opacity: 0;
  &:hover {
    opacity: 1;
  }
`;

const Img = styled.img`
  width: 100%;
  height: auto;
`;

const H3 = styled.h3`
  font-weight: 300;
  text-transform: uppercase;
  font-size: 12px;
  letter-spacing: 1px;
  word-spacing: 3px;
  margin-bottom: 3rem;
`;

function WorkItem({ src, title, github, site }) {
  const cardRef = useRef();
  const [isVisible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries, observer) => {
        if (entries[0].isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.7,
      }
    );
    observer.observe(cardRef.current);
  }, []);
  return (
    <Col width="33.333333%">
      <FadeIn transitionDuration={700} visible={isVisible}>
        <Div ref={cardRef}>
          <Img src={src} alt={title} />
          <Overlay>
            {github && (
              <Button target={"_blank"} href={github}>
                Github
              </Button>
            )}
            {site && (
              <Button target={"_blank"} href={site}>
                Site
              </Button>
            )}
          </Overlay>
        </Div>
        <H3>{title}</H3>
      </FadeIn>
    </Col>
  );
}

export default WorkItem;
