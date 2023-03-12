import styled from "@emotion/styled";

const Li = styled.li`
  padding: 12px;
`;

const Img = styled.img`
  filter: grayscale(1);
  transition: 0.3s;
  &:hover {
    filter: none;
  }
`;

function ListItem({ src, alt }) {
  return (
    <Li>
      <Img src={src} width={30} alt={alt} />
    </Li>
  );
}

export default ListItem;
