import React, { useState } from "react";
import { toast } from "react-toastify";
import { PlusCircle } from "lucide-react";
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
      toast.info("Please enter a start and end time!");
      return;
    }
    if (start_time > end_time) {
      toast.info("End time must be after start time!");
      return;
    }
    const formattedStartTime = formatTime(start_time);
    const formattedEndTime = formatTime(end_time);
    onAdd({ start_time: formattedStartTime, end_time: formattedEndTime });
    setStartTime("");
    setEndTime("");
  };

  return (
    <div className="flex flex-col gap-3 py-6">
      <h2 className="text-2xl font-semibold">Add New Shift</h2>
      <form onSubmit={handleSubmit}>
        <div className="flex gap-4 mb-4 text-md font-medium w-full items-center justify-between">
          <label>
            Start Time:
            <input
              type="time"
              value={start_time}
              onChange={(e) => setStartTime(e.target.value)}
              className="border-none outline-none ml-2"
            />
          </label>
          <label>
            End Time:
            <input
              type="time"
              value={end_time}
              onChange={(e) => setEndTime(e.target.value)}
              className="border-none outline-none ml-2"
            />
          </label>
        </div>
        <button
          type="submit"
          className="px-3 py-2 bg-blue-200 hover:bg-blue-300 rounded-md hover:rounded-lg transition-all duration-300 font-semibold flex gap-2 items-center"
        >
          Add Shift <PlusCircle />
        </button>
      </form>
    </div>
  );
};

export default ShiftForm;
