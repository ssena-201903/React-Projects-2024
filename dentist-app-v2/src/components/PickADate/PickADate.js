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
  z-index: 999;
  background-color: rgba(17, 17, 17, 0.2);

  .react-datepicker {
    background-color: rgba(17, 17, 17, 0.4);
    backdrop-filter: blur(2px);
    border: none;
    border-radius: 6px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    width: 90%;
    max-width: 400px; 
    height: auto; 
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px; 
  }

  .react-datepicker__month-container {
    width: 100%;
    margin: 5px 0;
  }

  .react-datepicker__week {
    display: flex;
    justify-content: space-between; /* Günler arasında boşluk bırak */
    width: 100%;
  }

  .react-datepicker__header {
    background-color: rgba(17, 17, 17, 0.4);
    border-bottom: none;
    margin-top: 0; /* Üst boşluğu kaldırıyoruz */
    padding: 10px 0;
    display: flex;
    flex-direction: column; /* Hem gün adlarını hem ay ismini dikey sıraya diz */
    justify-content: center;
    align-items: center; /* Ortala */
  }

  .react-datepicker__current-month {
    color: white;
    font-weight: bold;
    font-size: 1.5em; /* Yazı boyutunu biraz büyütelim */
    margin-bottom: 10px; /* Ay ve günler arasında boşluk */
  }
  .react-datepicker__day-names {
    display: flex;
    justify-content: space-between;
    width: 100%;
    padding: 0 5px;
    margin-bottom: 10px; /* Ay ismiyle gün adları arasında boşluk ekleyelim */
  }

  .react-datepicker__day-name {
    color: white;
  }

  .react-datepicker__day {
    width: calc(100% / 7); /* Haftada 7 gün olduğu için orantılı genişlik */
    height: 40px; /* Sabit yükseklik */
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 5px 0; /* Hücreler arasında boşluk */
    color: white;
    font-size: 1em;
    transition: color 0.3s;
    &:hover {
      color: #64d2ff; /* Hover'da renk değişikliği */
    }
  }

  .react-datepicker__day--selected {
    background-color: #64d2ff;
    color: white;
    border-radius: 50%;
  }

  .react-datepicker__day--keyboard-selected {
    background-color: #64d2ff;
    color: white;
    border-radius: 50%;
  }

  .react-datepicker__day--today {
    background-color: #64d2ff;
    border-radius: 50%;
    color: white;
  }

  .react-datepicker__time-container {
    background-color: rgba(255, 255, 255, 0.9);
    border-left: 1px solid rgba(0, 0, 0, 0.1);
  }
`;

const PickADate = ({ onDateChange, onClose }) => {
  console.log("onclose prop:", onclose);
  const [selectedDate, setSelectedDate] = useState(null);
  const today = new Date();

  const handleDateChange = (date) => {
    if (date < today) {
      alert("Geçmiş bir tarih girdiniz");
    } else {
      setSelectedDate(date);
      onDateChange(date);
      onclose();
    }
  };

  const handleOutsideClick = (event) => {
    if (event.target === event.currentTarget) {
      onClose();
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
