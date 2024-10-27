import React, { useState, useEffect } from "react";
import "./EventItem.scss";
import patientsData from "../../patients_gendered.json";

const EventItem = ({ selectedDate }) => {
  const [patients, setPatients] = useState([]);

  useEffect(() => {
    const today = new Date();
    const selectedDateObj = new Date(
      selectedDate.split(".").reverse().join("-")
    ); 

    if (selectedDateObj < today) {
      setPatients([]);
    } else {
      const filteredPatients = patientsData.filter(
        (patient) => patient.date === selectedDate
      );
      setPatients(filteredPatients);
    }
  }, [selectedDate]);

  return (
    <div className="patient-list">
      {patients.length > 0 ? (
        patients.map((patient) => (
          <div className="patient-item" key={patient.id}>
            <div className="patient-name">
              <img src={patient.photo} alt="patient_photo" />
              <p>{patient.name}</p>
            </div>
            <p>{patient.appointment_time}</p>
          </div>
        ))
      ) : (
        <h5>You currently have no patients...</h5> 
      )}
    </div>
  );
};

export default EventItem;
