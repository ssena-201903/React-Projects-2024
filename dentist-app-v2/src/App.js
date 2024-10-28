import "./App.scss";
import { useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import PrimaryButton from "./components/Buttons/PrimaryButton";
import HeaderMenu from "./components/HeaderMenu/HeaderMenu";
import EventItem from "./components/EventsList/EventItem";
import PickADate from "./components/PickADate/PickADate";
import PatientCard from "./components/PatientDetails/PatientCard";

import Model from "./components/PatientDetails/Model";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Suspense } from "react";

import patientsData from "./patients_gendered.json";

import "font-awesome/css/font-awesome.min.css";
// import EventsList from "./components/EventsList/EventsList.js";
// import PatientDetails from "./components/PatientDetails/PatientDetails.js";

function App() {
  //selected menu header
  const [selectedMenuItem, setSelectedMenuItem] = useState("");
  const [chosenDate, setChosenDate] = useState("");

  //selected patient from the patients list
  const [selectedPatient, setSelectedPatient] = useState(null);

  const handlePatientSelect = (id) => {
    const patient = patientsData.find((patient) => patient.id === id); //find patient
    setSelectedPatient(patient); //add patient to state
  };

  // const dateInputRef = useRef(null);
  const [showDatePicker, setShowDatePicker] = useState(false);

  //the function to go back
  const handleBack = () => {
    window.history.back();
  };

  const handleDatePicker = () => {
    console.log("clicked pick a date");
    setShowDatePicker((prevState) => !prevState);
  };

  //to update for selected menu item on header
  const handleMenuItemSelect = (item) => {
    setSelectedMenuItem(item);
  };

  // the function of to change the date
  const handleDateChange = (date) => {
    console.log("Seçilen tarih:", date);
    setChosenDate(date);
    setShowDatePicker(false);
  };

  return (
    <div className="app">
      <div className="navbar">
        <Navbar onMenuItemSelect={handleMenuItemSelect} />
      </div>
      <div className="side-bar">
        <div className="menu-header">
          <HeaderMenu
            text="Future Events"
            selectedMenuItem={selectedMenuItem}
            onClick={handleBack}
          />
        </div>
        <div className="menu-bar">
          <div className="event-list">
            <div className="header-events">
              <h6>
                {chosenDate
                  ? chosenDate.toDateString() === new Date().toDateString()
                    ? "Today"
                    : chosenDate.toLocaleDateString()
                  : "Today"}
              </h6>
              <PrimaryButton
                text="Pick a date"
                onClick={handleDatePicker}
                fontSize="14px"
              />
            </div>
            <div className="event-items">
              <EventItem
                selectedDate={
                  chosenDate
                    ? chosenDate.toLocaleDateString("tr-TR").replace(/\//g, ".")
                    : ""
                }
                onPatientSelect={handlePatientSelect}
              />
            </div>
          </div>
          <div className="patient-details">
            <div className="btn-patient-details">
              <div className="btn-right">
                <PrimaryButton
                  text="More Information About Patient"
                  onClick={handleBack}
                  fontSize="14px"
                />
                <PrimaryButton
                  text="Operation History"
                  onClick={handleBack}
                  fontSize="14px"
                />
              </div>
              <PrimaryButton
                text="Enter the result"
                onClick={handleBack}
                fontSize="14px"
              />
            </div>
            {selectedPatient && (
              <PatientCard
                ppPath={selectedPatient.photo}
                Name={selectedPatient.name}
                Gender={selectedPatient.gender}
                BMI={selectedPatient.bmi}
                Age={selectedPatient.age}
              />
            )}
            <div style={{ width: "400px", height: "400px" }}>
              <Canvas>
                <ambientLight intensity={0.5} />
                <pointLight position={[10, 10, 10]} />
                <Model />
              </Canvas>
            </div>
          </div>
        </div>
      </div>
      {showDatePicker && (
        <PickADate
          onDateChange={handleDateChange}
          onClose={() => setShowDatePicker(false)}
        />
      )}
    </div>
  );
}

export default App;
