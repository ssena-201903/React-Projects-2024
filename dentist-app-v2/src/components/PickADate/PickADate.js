import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import styled from "styled-components";

// style for date picker
const CustomDatePicker = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  // background-color: rgba(0, 0, 0, 0.25);
  z-index: 999;

  .react-datepicker {
    background-color: rgba(17, 17, 17, 0.4);
    border: none;
    border-radius: 6px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    width: 400px;
    height: 400px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .react-datepicker__month-container {
    width: 400px;
    margin: 5px 0;
  }

  .react-datepicker__week {
    width: 400px;
  }

  .react-datepicker__header,
  .react-datepicker__day {
    font-size: 1.5em;
  }

  .react-datepicker__day {
    padding: 20px;
    margin: 0; 
  }

  .react-datepicker__header {
    background-color: rgba(17, 17, 17, 0.4);
    border-bottom: none;
    margin-top: 20px;
  }

  .react-datepicker__current-month {
    color: white;
    font-weight: bold;
  }

  .react-datepicker__day-names {
    display: flex;
    justify-content: center;
  }

  .react-datepicker__day-name {
    color: white;
    margin-left: 10px;
  }

  .react-datepicker__day--selected {
    background-color: #64d2ff;
    color: white;
    border-radius: 50%;
  }

  .react-datepicker__day--keyboard-selected {
    background-color: #64d2ff;
    border-radius: 50%;
    width: 50px;
    height: 50px;
  }

  .react-datepicker__time-container {
    background-color: rgba(255, 255, 255, 0.9);
    border-left: 1px solid rgba(0, 0, 0, 0.1);
  }

  .react-datepicker__day {
    color: white;
  }
`;

const PickADate = ({ onDateChange, onClose }) => {
  console.log("onclose prop:", onClose);
  const [selectedDate, setSelectedDate] = useState(null);

  const handleDateChange = (date) => {
    setSelectedDate(date);
    onDateChange(date);
    onClose();
  };

  const handleOutsideClick = (event) => {
    if (event.target === event.currentTarget) {
      onclose();
    }
  };

  return (
    <CustomDatePicker onClick={handleOutsideClick}>
      <DatePicker
        selected={selectedDate}
        onChange={handleDateChange}
        dateFormat="dd/MM/yyyy"
        // showTimeSelect
        // timeFormat="HH:mm"
        // timeIntervals={15}
        inline
      />
    </CustomDatePicker>
  );
};

export default PickADate;
