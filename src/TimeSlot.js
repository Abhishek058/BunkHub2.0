import React from "react";

const appi = './time.json'

const getTime=async()=>{
  const response = await fetch(appi);
  console.log(response);
}

function TimeSlot() {
  const rooms = [21, 33, 42, 57, 54];
  const time1 = () => {
    getTime();
  };
  return (
    <div className="timeSlot">
      <div className="slotDiv1">
        <div className="time" onClick={time1}>
          9:00
          <br />-<br />
          9:45
        </div>
        <div className="time" onClick={time1}>
          9:45
          <br />-<br />
          10:30
        </div>
        <div className="time" onClick={time1}>
          10:30
          <br />-<br />
          11:15
        </div>
        <div className="time" onClick={time1}>
          11:15
          <br />-<br />
          12:00
        </div>
      </div>
      <div className="slotDiv2">
        <div className="time" onClick={time1}>
          12:00
          <br />-<br />
          12:45
        </div>
        <div className="time" onClick={time1}>
          12:45
          <br />-<br />
          13:30
        </div>
        <div className="time" onClick={time1}>
          13:30
          <br />-<br />
          14:15
        </div>
        <div className="time" onClick={time1}>
          14:15
          <br />-<br />
          15:00
        </div>
      </div>
      <div className="slotDiv3">
        <div className="time" onClick={time1}>
          15:00
          <br />-<br />
          15:45
        </div>
        <div className="time" onClick={time1}>
          15:45
          <br />-<br />
          16:30
        </div>
      </div>
      <div className="title"> Available Rooms</div>
      <div className="romsdel">
        {rooms.map((data) => (
          <h4>{data}</h4>
        ))}
      </div>
    </div>
  );
}

export default TimeSlot;
