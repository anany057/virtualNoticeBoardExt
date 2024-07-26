import React from "react";
import GoogleSlides from "./components/GoogleSlides/GoogleSlides";
import PomodoroTimer from "./components/PomodoroTimer/PomodoroTimer";
import GoogleForm from "./components/GoogleForm/GoogleForm";
import GrowthChecklist from "./components/GrowthChecklist/GrowthChecklist";
import Announcements from "./components/Announcements/Announcements";
import TodayILearned from "./components/TodayILearned/TodayILearned";
import CalendarWidget from "./components/Calender/CalenderWidget";
import Navbar from "./components/navbar";
import ChatBox from "./ChatBox/ChatBox";
// import MetaWidget from "./components/MetaWidget";
import "./App.css";
import "./components/Widget.css";
import Footer from "./components/footer/footer";

const App = () => {
  return (
    <div className="app-container">
      <div className="widget-group">
        <div className="widget-row">
          <Navbar />
          <ChatBox />
          <GoogleSlides />
          <Announcements />
          <div className="widget-col">
            <PomodoroTimer />
            <CalendarWidget />
          </div>
        </div>
        <div className="widget-row">
          <GrowthChecklist />
          <TodayILearned />
          <GoogleForm />
        </div>
        {/* <MetaWidget /> */}
        <Footer />
        {/* Ensure ChatBox is only rendered once */}
        
      </div>
     
    </div>
  );
};

export default App;
