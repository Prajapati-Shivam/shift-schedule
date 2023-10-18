import React from "react";

const ShiftList = ({ shifts, onDelete }) => {
  return (
    <div>
      <h2>Shift List</h2>
      <ul>
        {shifts.map((shift) => (
          <li key={shift.id}>
            <div>
              {shift.start_time} - {shift.end_time}
            </div>
            <button onClick={() => onDelete(shift.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ShiftList;
