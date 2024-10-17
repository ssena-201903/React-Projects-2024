import "./App.scss";
import { useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import EventItem from ".components/EventsList/EventItem";
import PrimaryButton from "./components/Buttons/PrimaryButton";
import "font-awesome/css/font-awesome.min.css";
// import EventsList from "./components/EventsList/EventsList.js";
// import PatientDetails from "./components/PatientDetails/PatientDetails.js";

function App() {
  //selected menu header
  const [selectedMenuItem, setSelectedMenuItem] = useState("");

  const handleBack = () => {
    window.history.back();
  };

  //to update for selected menu item on header
  const handleMenuItemSelect = (item) => {
    setSelectedMenuItem(item);
  };

  return (
    <div className="app">
      <Navbar onMenuItemSelect={handleMenuItemSelect} />
      <div className="side-bar">
        <div className="header-menu" onClick={handleBack}>
          <span>
            <i class="fa-solid fa-arrow-left"></i>
          </span>
          <h5>{selectedMenuItem || "Future Events"}</h5>
          <PrimaryButton text="hello" onClick={handleBack} />
        </div>
        <div className="menu-bar">
          <EventItem />
          {/* <PatientDetails />  */}
        </div>
      </div>
    </div>
  );
}

export default App;
