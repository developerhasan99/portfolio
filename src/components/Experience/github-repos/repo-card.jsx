import styled from "@emotion/styled";
import CardDescription from "./card-description";
import CardCaption from "./card-caption";

import FadeIn from "react-fade-in";
import { useEffect, useRef, useState } from "react";

const Card = styled.a`
  display: block;
  padding: 1rem;
  border: rgba(0, 0, 0, 0.1) 1px solid;
  border-radius: 5px;
  height: 100%;
`;

const CardHeading = styled.h4`
  margin-top: 0;
  margin-bottom: 10px;
  color: #0969da;
  font-size: 18px;
  word-break: break-all;
`;

function RepoCard({ html_url, name, description, language, updated_at }) {
  const [isVisible, setIsVisible] = useState(false);

  const cardRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries, observer) => {
        if (entries[0].isIntersecting) {
          setIsVisible(entries[0].isIntersecting);
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
    <FadeIn visible={isVisible} transitionDuration={1000}>
      <Card href={html_url} ref={cardRef}>
        <CardHeading>{name}</CardHeading>
        <CardDescription description={description} />
        <CardCaption language={language} updated_at={updated_at} />
      </Card>
    </FadeIn>
  );
}

export default RepoCard;
