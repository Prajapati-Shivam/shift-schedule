import React, { useState } from "react";

const ShiftForm = ({ onAdd }) => {
  const [start_time, setStartTime] = useState("");
  const [end_time, setEndTime] = useState("");

  const formatTime = (time) => {
    const date = new Date(`2000-01-01T${time}`);

    // Format the time as "hh:mm AM/PM"
    const formattedTime = date.toLocaleString("en-US", {
      hour: "numeric",
      minute: "numeric",
      hour12: true,
    });

    return formattedTime;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!start_time || !end_time) {
      alert("Please enter both start and end time.");
      return;
    }
    const formattedStartTime = formatTime(start_time);
    const formattedEndTime = formatTime(end_time);
    onAdd({ start_time: formattedStartTime, end_time: formattedEndTime });
    setStartTime("");
    setEndTime("");
  };

  return (
    <div>
      <h2>Add New Shift</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Start Time:
          <input
            type="time"
            value={start_time}
            onChange={(e) => setStartTime(e.target.value)}
          />
        </label>
        <br />
        <label>
          End Time:
          <input
            type="time"
            value={end_time}
            onChange={(e) => setEndTime(e.target.value)}
          />
        </label>
        <br />
        <button type="submit">Add Shift</button>
      </form>
    </div>
  );
};

export default ShiftForm;
