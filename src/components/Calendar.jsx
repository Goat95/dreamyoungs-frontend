import DatePicker from "react-datepicker";
import { ko } from "date-fns/esm/locale";
import { getMonth, getYear } from "date-fns";
import { styled } from "styled-components";

import "react-datepicker/dist/react-datepicker.css";
import "../styles/datepicker.css";

/* eslint-disable react/prop-types */
const Calendar = ({ selectDate, onChange }) => {
  // 현재부터 2020년도 까지 선택 가능
  const YEARS = Array.from(
    { length: getYear(new Date()) + 1 - 2020 },
    (_, i) => getYear(new Date()) - i
  );
  const MONTHS = [
    "1월",
    "2월",
    "3월",
    "4월",
    "5월",
    "6월",
    "7월",
    "8월",
    "9월",
    "10월",
    "11월",
    "12월",
  ];

  return (
    <StyledDatePicker
      locale={ko}
      placeholderText="yyyy.mm.dd"
      value={selectDate}
      selected={selectDate}
      onChange={onChange}
      dateFormat="yyyy.MM.dd"
      closeOnScroll={true}
      renderCustomHeader={({
        date,
        changeYear,
        changeMonth,
        decreaseMonth,
        increaseMonth,
        prevMonthButtonDisabled,
        nextMonthButtonDisabled,
      }) => (
        <div className="custom-react-datepicker__select-wrapper">
          {/* 이전 월로 이동하는 버튼 */}
          <button
            className="calender-back-btn"
            onClick={decreaseMonth}
            disabled={prevMonthButtonDisabled}
          ></button>
          <div className="custom-react-datepicker__select-item">
            {/* 연도 선택 select box */}
            <select
              value={getYear(date)}
              onChange={({ target: { value } }) => changeYear(Number(value))}
            >
              {YEARS.map((option) => (
                <option key={option} value={option}>
                  {option}
                  <span>년</span>
                </option>
              ))}
            </select>
          </div>
          <div className="custom-react-datepicker__select-item-month">
            {/* 월 선택 select box */}
            <select
              value={MONTHS[getMonth(date)]}
              onChange={({ target: { value } }) =>
                changeMonth(MONTHS.indexOf(value))
              }
            >
              {MONTHS.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>
          {/* 다음 월로 이동하는 버튼 */}
          <button
            className="calender-next-btn"
            onClick={increaseMonth}
            disabled={nextMonthButtonDisabled}
          ></button>
        </div>
      )}
    />
  );
};

const StyledDatePicker = styled(DatePicker)``;

export default Calendar;
