import styled from "@emotion/styled";

const Div = styled.div`
  padding: 0 15px;
  ${(props) => `
        width: ${props.width ? props.width : "50%"};
        flex: 0 0 ${props.width ? props.width : "50%"};
  `}
  @media (max-width: 767px) {
    width: 100%;
    flex: 0 0 100%;
  }
`;

function Col({ children, width, style }) {
  return (
    <Div style={style} width={width}>
      {children}
    </Div>
  );
}

export default Col;
