// import { useState } from "react";
import styled from "styled-components";

import theme from "../styles/theme";

/* eslint-disable react/prop-types */
const Input = ({ inputValue, onChange }) => {
  return <InputStyled type="text" onChange={onChange} value={inputValue} />;
};

const InputStyled = styled.input`
  display: flex;
  width: 160px;
  height: 34px;
  padding: 5px 12px;
  font-weight: 400;
  justify-content: center;
  align-items: flex-start;
  border: 1px solid #dedede;
  border-radius: 5px;
  gap: 10px;

  &:focus {
    outline: 3px solid ${theme.colors.primaryLight};
    border: 1px solid ${theme.colors.primary};
  }
`;

export default Input;
