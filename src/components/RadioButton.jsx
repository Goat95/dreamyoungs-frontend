import styled from "styled-components";

import RadioDefault from "../assets/icons/radio_default.svg";
import RadioChecked from "../assets/icons/radio_checked.svg";
import RadioHover from "../assets/icons/radio_hover.svg";
import theme from "../styles/theme";

/* eslint-disable react/prop-types */
const RadioButton = ({
  label,
  id,
  name,
  value,
  text,
  onChange,
  radioValue,
}) => {
  return (
    <>
      <Label htmlFor={id}>
        <RadioButtonStyled
          type="radio"
          id={id}
          name={name}
          value={value}
          onChange={onChange}
        />
        {label}
      </Label>
      {radioValue === "선택3" && <RadioText>{text}</RadioText>}
    </>
  );
};

const Label = styled.label`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 54px;
  gap: 8px;
  font-weight: 400;
  color: ${theme.colors.textGrayActiveColor};
`;

const RadioButtonStyled = styled.input`
  appearance: none;
  width: 16px;
  height: 16px;
  background-image: url(${RadioDefault});
  background-size: cover;
  background-position: center;

  &:hover {
    background-image: url(${RadioHover});
    background-size: cover;
    background-position: center;
  }

  &:checked {
    background-image: url(${RadioChecked});
    background-size: cover;
    background-position: center;
  }
`;

const RadioText = styled.p`
  color: #f03738;
  font-size: 12px;
  position: absolute;
  top: 46px;
`;

export default RadioButton;
