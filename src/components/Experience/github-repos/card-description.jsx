import styled from "@emotion/styled";

const Description = styled.p`
  margin: 18px 0;
  font-size: 14px;
  font-weight: 400;
`;

function CardDescription({ description }) {
  return (
    <Description>
      {description
        ? description
        : "A GitHub repository created by Mehedi Hasan."}
    </Description>
  );
}

export default CardDescription;
