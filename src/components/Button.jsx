import styled from "styled-components";

import theme from "../styles/theme";

/* eslint-disable react/prop-types */
const Button = ({ children }) => {
  return <StyledButton>{children}</StyledButton>;
};

const StyledButton = styled.button`
  color: #fff;
  width: 74px;
  height: 40px;
  border-radius: 5px;
  background: ${theme.colors.primary};
  border: none;

  &:hover {
    background: ${theme.colors.primaryDark};
  }
`;

export default Button;
