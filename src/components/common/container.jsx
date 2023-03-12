import styled from "@emotion/styled";

const Div = styled.div`
  margin: auto;
  padding: 0 15px;
  max-width: ${(props) => (props.maxWidth ? props.maxWidth : "1200px")};
`;

function Container(props) {
  return (
    <Div
      maxWidth={props.maxWidth}
      className={props.className && props.className}
      style={props.style && props.style}
    >
      {props.children}
    </Div>
  );
}

export default Container;
