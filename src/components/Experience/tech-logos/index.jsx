import styled from "@emotion/styled";
import ListItem from "./item";

const List = styled.ul`
  margin: 0 -12px;
  padding: 0;
  list-style-type: none;
  display: flex;
  flex-wrap: wrap;
`;

function TechLogoListItemst() {
  return (
    <List>
      <ListItem src="./tech-logos/html-svgrepo-com.svg" alt={"HTML"} />
      <ListItem src="./tech-logos/css3-svgrepo-com.svg" alt="CSS" />
      <ListItem
        src="./tech-logos/js-official-svgrepo-com.svg"
        alt="JavaScript"
      />
      <ListItem src="./tech-logos/sass-svgrepo-com.svg" alt="SASS" />
      <ListItem Img src="./tech-logos/less-svgrepo-com.svg" alt="Less" />
      <ListItem
        src="./tech-logos/tailwind-svgrepo-com.svg"
        alt="Tailwind Css"
      />
      <ListItem src="./tech-logos/bootstrap-svgrepo-com.svg" alt="Bootstrap" />
      <ListItem
        src="./tech-logos/material-ui-svgrepo-com.svg"
        alt="Material Ui"
      />
      <ListItem src="./tech-logos/react-svgrepo-com.svg" alt="React Js" />
      <ListItem src="./tech-logos/next-js-svgrepo-com.svg" alt="Next Js" />
      <ListItem
        src="./tech-logos/nodejs-icon-logo-svgrepo-com.svg"
        alt="Node Js"
      />
      <ListItem src="./tech-logos/express-svgrepo-com.svg" alt="Express Js" />
      <ListItem src="./tech-logos/mongodb-svgrepo-com.svg" alt="Mongo DB" />
      <ListItem src="./tech-logos/php-1-logo-svgrepo-com.svg" alt="PHP" />
      <ListItem src="./tech-logos/mysql-svgrepo-com.svg" alt="MySQL" />
      <ListItem src="./tech-logos/wordpress-svgrepo-com.svg" alt="WordPress" />
      <ListItem src="./tech-logos/github-svgrepo-com.svg" alt="Github" />
      <ListItem src="./tech-logos/linux-tux-svgrepo-com.svg" alt="Linux" />
    </List>
  );
}

export default TechLogoListItemst;
