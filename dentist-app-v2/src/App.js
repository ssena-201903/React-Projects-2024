import "./App.scss";
import { useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import PrimaryButton from "./components/Buttons/PrimaryButton";
import HeaderMenu from "./components/HeaderMenu/HeaderMenu";
import EventItem from "./components/EventsList/EventItem";
import PickADate from "./components/PickADate/PickADate";

import "font-awesome/css/font-awesome.min.css";
// import EventsList from "./components/EventsList/EventsList.js";
// import PatientDetails from "./components/PatientDetails/PatientDetails.js";

function App() {
  //selected menu header
  const [selectedMenuItem, setSelectedMenuItem] = useState("");
  const [chosenDate, setChosenDate] = useState("");
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
        <Navbar onMenuItemSelect={handleMenuItemSelect} />
      <div className="side-bar">
        <HeaderMenu
          text="Future Events"
          selectedMenuItem={selectedMenuItem}
          onClick={handleBack}
        />
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
              <PrimaryButton text="Pick a date" onClick={handleDatePicker} />
            </div>
            <div className="event-items">
              <EventItem
                selectedDate={
                  chosenDate
                    ? chosenDate.toLocaleDateString("tr-TR").replace(/\//g, ".")
                    : ""
                }
              />
            </div>
          </div>
          <div className="patient-details"></div>
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
