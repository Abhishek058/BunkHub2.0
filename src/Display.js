import React from "react";

function Display() {
  const rooms = [21, 33, 42, 57, 54];
  return (
    <div className="display">
      <div className="title"> Available Rooms</div>
      <div className="romsdel">
        {rooms.map((data) => (
          <h4>{data}</h4>
        ))}
      </div>
    </div>
  );
}

export default Display;
