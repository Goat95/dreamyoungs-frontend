import axios from "axios";
import { useState } from "react";
import { styled } from "styled-components";

import Input from "../components/Input";
import CheckBox from "../components/CheckBox";
import Button from "../components/Button";
import Line from "../components/Line";
import Calendar from "./Calendar";
import RadioButton from "./RadioButton";

const Form = () => {
  // input 값들을 저장하기 위한 state
  const [inputValue, setInputValue] = useState("");
  const [inputValue2, setInputValue2] = useState("");
  const [selectDate, setSelectDate] = useState(null);
  const [radioValue, setRadioValue] = useState("");
  const [checkBoxValue, setCheckBoxValue] = useState([]);

  // input 값을 가져오기 위한 함수
  const handleChange = (e) => {
    setInputValue(e.target.value);
  };
  const handleChange2 = (e) => {
    setInputValue2(e.target.value);
  };
  const handleChangeDate = (date) => {
    setSelectDate(date);
  };
  const handleChangeRadioButton = (e) => {
    setRadioValue(e.target.value);
  };
  const handleChangeCheckBox = (e) => {
    // checkbox가 체크 일 때 value 값을 배열에 추가.
    if (e.target.checked) {
      setCheckBoxValue((prev) => [...prev, e.target.value]);
    }
    // checkbox가 체크 해제 일 때 value 값을 배열에서 제거.
    if (!e.target.checked && checkBoxValue.includes(e.target.value)) {
      setCheckBoxValue(checkBoxValue.filter((item) => item !== e.target.value));
    }
  };

  // 저장 버튼을 눌렀을 때 post로 보낼 data
  const data = JSON.stringify({
    info2: inputValue,
    info4: inputValue2,
    date: selectDate,
    info5: radioValue,
    info6: checkBoxValue,
  });

  const config = {
    method: "post",
    url: "https://api-jobtest.json2bot.chat/test",
    headers: {
      "Content-Type": "application/json",
    },
    data: data,
  };

  const onSubmit = (e) => {
    e.preventDefault();
    axios(config)
      .then((res) => {
        alert("저장 성공");
        console.log(res);
      })
      .catch((error) => {
        if (error.response.status === 400) {
          alert(`400에러: ${error}`);
        }
        if (error.response.status === 500) {
          alert(`500에러: ${error}`);
        }
      });
  };
  return (
    <form onSubmit={onSubmit}>
      <Line width="943px" height="1px" marginbottom="16px" />
      <InputContent>
        <InputContentTitle>정보1</InputContentTitle>
        <span>정보 내용1</span>
      </InputContent>
      <InputContent>
        <InputContentTitle>정보2</InputContentTitle>
        <Input inputValue={inputValue} onChange={handleChange} />
      </InputContent>
      <InputContent>
        <InputContentTitle>정보3</InputContentTitle>
        <span>정보 내용3</span>
      </InputContent>
      <InputContent>
        <InputContentTitle>정보4</InputContentTitle>
        <Input inputValue={inputValue2} onChange={handleChange2} />
      </InputContent>
      <InputContent>
        <InputContentTitle>날짜</InputContentTitle>
        <Calendar selectDate={selectDate} onChange={handleChangeDate} />
      </InputContent>
      <InputContent>
        <InputContentTitle>정보5</InputContentTitle>
        <CheckBoxWrapper>
          <RadioButton
            label="선택1"
            id="select1"
            name="select"
            value="선택1"
            text=""
            onChange={handleChangeRadioButton}
            radioValue={radioValue}
          />
          <RadioButton
            label="선택2"
            id="select2"
            name="select"
            value="선택2"
            text=""
            onChange={handleChangeRadioButton}
            radioValue={radioValue}
          />
          <RadioButton
            label="선택3"
            id="select3"
            name="select"
            value="선택3"
            text="*선택시 텍스트가 표시됩니다."
            onChange={handleChangeRadioButton}
            radioValue={radioValue}
          />
        </CheckBoxWrapper>
      </InputContent>
      <InputContent>
        <InputContentTitle>정보6</InputContentTitle>
        <CheckBoxWrapper>
          <CheckBox
            label="선택1"
            value="선택1"
            onChange={handleChangeCheckBox}
          />
          <CheckBox
            label="선택2"
            value="선택2"
            onChange={handleChangeCheckBox}
          />
          <CheckBox
            label="선택3"
            value="선택3"
            onChange={handleChangeCheckBox}
          />
        </CheckBoxWrapper>
      </InputContent>
      <Line width="943px" height="1px" margintop="16px" marginbottom="16px" />
      <ButtonWrapper>
        <Button>저장</Button>
      </ButtonWrapper>
    </form>
  );
};

const InputContent = styled.div`
  width: 943px;
  display: flex;
  align-items: center;
  gap: 64px;
  padding-top: 17px;
  padding-bottom: 17px;
`;

const InputContentTitle = styled.span`
  width: 140px;
`;

const CheckBoxWrapper = styled.div`
  display: flex;
  gap: 32px;
  position: relative;
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export default Form;
