import React from "react";
import "../Widget.css";
import "./Calender.css";


const CalendarWidget = () => {
  return (
    <div className="widget calendar-widget">
      <div className="cheading">
      <h2>
        <i className="widget-icon">&#x1F4C5;</i> Calendar
      </h2>
      </div>
      <iframe src="https://calendar.google.com/calendar/embed?src=ishidhim17%40gmail.com&ctz=Asia%2FKolkata" 
      style={{border: 0, marginTop: 40}} width="248" height="200" frameborder="0" scrolling="no" title="calendar"></iframe>
    </div>
  );
};

export default CalendarWidget;
