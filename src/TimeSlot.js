import React from "react";

function TimeSlot() {
  return (
    <div className="timeSlot">
      <div className="slotDiv1">
        <div className="time">9:00<br/>-<br/>9:45</div>
        <div className="time">9:45<br/>-<br/>10:30</div>
        <div className="time">10:30<br/>-<br/>11:15</div>
        <div className="time">11:15<br/>-<br/>12:00</div>
      </div>
      <div className="slotDiv2">
        <div className="time">12:00<br/>-<br/>12:45</div>
        <div className="time">12:45<br/>-<br/>13:30</div>
        <div className="time">13:30<br/>-<br/>14:15</div>
        <div className="time">14:15<br/>-<br/>15:00</div>
      </div>
      <div className="slotDiv3">
        <div className="time">15:00<br/>-<br/>15:45</div>
        <div className="time">15:45<br/>-<br/>16:30</div>
      </div>
    </div>
  );
}

export default TimeSlot;
