import styled from "styled-components";

const Line = ({ ...props }) => {
  return <LineStyled {...props}></LineStyled>;
};

const LineStyled = styled.div`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  margin-bottom: ${(props) => props.marginbottom};
  margin-top: ${(props) => props.margintop};
  background: #e0e4e8;
`;

export default Line;
