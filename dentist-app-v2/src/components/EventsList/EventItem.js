import React, { useState, useEffect } from "react";
import "./EventItem.scss";
import patientsData from "./src/patients_gendered_person";

const EventItem = ({ selectedDate }) => {
  const [patients, setPatients] = useState([]);

  useEffect(() => {
    const filteredPatients = patientsData.filter(
      (patient) => patient.date === selectedDate
    );
    setPatients(filteredPatients);
  }, [selectedDate]);

  return (
    <div className="patient-list">
      {patients.map((patient) => (
        <div className="patient-item" key={patient.id}>
          <div className="patient-name">
            <img src={patient.photo} alt="patient_photo"></img>
            <p>{patient.name}</p>
          </div>
          <p>{patient.appointment_time}</p>
        </div>
      ))}
    </div>
  );
};

export default EventItem;
