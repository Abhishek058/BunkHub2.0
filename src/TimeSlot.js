import React, { useState } from "react";
import data from "./time.json";

const btnDiv1 = ["9:00-9:45", "9:45-10:30", "10:30-11:15", "11:15-12:00"];
const btnDiv2 = ["12:00-9:45", "12:45-13:30", "13:30-14:15", "14:15-15:00"];
const btnDiv3 = ["15:00-15:45", "15:45-16:30"];

function TimeSlot() {
  const [students, setStudents] = useState("");
  const getTime = async (n) => {
    const roomData = data.data[n].avlRooms;
    setStudents(roomData);
    console.log(roomData);
  };
  return (
    <div className="timeSlot">
      <div className="slotDiv1">
        {btnDiv1.map((buttonText, index) => (
          <div className="time" onClick={() => getTime(index)} key={index}>
            {buttonText}
          </div>
        ))}
      </div>
      <div className="slotDiv2">
        {btnDiv2.map((buttonText, index) => (
          <div className="time" onClick={() => getTime(index + 4)} key={index}>
            {buttonText}
          </div>
        ))}
      </div>
      <div className="slotDiv3">
        {btnDiv3.map((buttonText, index) => (
          <div className="time" onClick={() => getTime(index + 8)} key={index}>
            {buttonText}
          </div>
        ))}
      </div>
      <br></br>
      <br></br>
      <div className="title"> Available Rooms</div>
      <div className="romsdel">
        <h3>{students}</h3>
      </div>
    </div>
  );
}

export default TimeSlot;
