import styled from "@emotion/styled";
import Container from "../common/container";
import ToTop from "./ToTop";
import SocialLinks from "./SocialLinks";

const Section = styled.footer`
  padding: 50px 0;
  background-color: #050810;
`;

const Contents = styled.div`
  text-align: center;
`;

const Credit = styled.p`
  color: #fff;
  margin: 0;
  font-size: 14px;
`;

function Footer() {
  return (
    <Section>
      <Container>
        <Contents>
          <ToTop />
          <SocialLinks />
          <Credit>&copy; Mehedi Hasan 2022</Credit>
        </Contents>
      </Container>
    </Section>
  );
}

export default Footer;
