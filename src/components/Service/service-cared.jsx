import styled from "@emotion/styled";
import { useEffect, useRef, useState } from "react";
import FadeIn from "react-fade-in";
import Col from "../common/Col";

const Card = styled.div`
  background-color: #fff;
  padding: 2rem 1rem;
  border-radius: 5px;
  margin-bottom: 2rem;
`;

const H3 = styled.h4`
  margin: 1.5rem 0;
  line-height: 1.5;
  word-spacing: 2px;
  font-weight: 300;
  font-size: 18px;
`;

function ServiceCard({ img, alt, heading, description }) {
  const [isVisible, setIsVisible] = useState(false);

  const cardRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries, observer) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
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
        <Card ref={cardRef}>
          <img src={img} width={60} alt={alt} />
          <H3>{heading}</H3>
          <p style={{ marginBottom: "0.5rem" }}>{description}</p>
        </Card>
      </FadeIn>
    </Col>
  );
}

export default ServiceCard;
