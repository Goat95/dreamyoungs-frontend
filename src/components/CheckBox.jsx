import styled from "styled-components";

import CheckedImage from "../assets/icons/check_checked.svg";
import theme from "../styles/theme";

/* eslint-disable react/prop-types */
const CheckBox = ({ label, value, onChange }) => {
  return (
    <Label>
      <CheckBoxStyled type="checkbox" value={value} onChange={onChange} />
      {label}
    </Label>
  );
};

const Label = styled.label`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  font-weight: 400;
  color: ${theme.colors.textGrayActiveColor};
`;

const CheckBoxStyled = styled.input`
  appearance: none;
  width: 16px;
  height: 16px;
  border-radius: 3px;
  border: 1px solid #dedede;

  &:hover {
    border: 1px solid #bebebe;
    background-color: #f6f7f8;
  }

  &:checked {
    background-color: ${theme.colors.primary};
    background-image: url(${CheckedImage});
    background-position: center;
  }
`;

export default CheckBox;
