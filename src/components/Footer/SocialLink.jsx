import styled from "@emotion/styled";

const A = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 40px;
  width: 40px;
  border-radius: 5px;
  transition: 0.3s ease-in-out;
  background-color: rgba(170, 170, 170, 0.1);
  &:hover {
    background-color: rgba(170, 170, 170, 0.2);
  }
`;

function SocialLink({ link, icon, alt }) {
  return (
    <li>
      <A target="_blank" href={link} title={alt}>
        <img src={icon} alt={alt} />
      </A>
    </li>
  );
}

export default SocialLink;
