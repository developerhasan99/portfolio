import styled from "@emotion/styled";
import SocialLink from "./SocialLink";

const Ul = styled.ul`
  margin: 1.5rem 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  gap: 7px;
  justify-content: center;
`;

function SocialLinks() {
  return (
    <Ul>
      <SocialLink
        link="https://www.facebook.com/developerhasan99/"
        icon="./network/facebook.svg"
        alt="Facebook"
      />
      <SocialLink
        link="https://twitter.com/devhasan99"
        icon="./network/twitter.svg"
        alt="Twitter"
      />
      <SocialLink
        link="https://www.linkedin.com/in/mehedihasan347/"
        icon="./network/linkedin.svg"
        alt="Linkedin"
      />
      <SocialLink
        link="https://instagram.com/developerhasan99/"
        icon="./network/instagram.svg"
        alt="Instagram"
      />
      <SocialLink
        link="https://github.com/developerhasan99"
        icon="./network/github.svg"
        alt="Github"
      />
      <SocialLink
        link="https://codepen.io/developerhasan99"
        icon="./network/codepen.svg"
        alt="Codepen"
      />
    </Ul>
  );
}

export default SocialLinks;
