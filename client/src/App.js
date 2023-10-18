import React, { useState, useEffect } from "react";
import ShiftList from "./components/ShiftList";
import ShiftForm from "./components/ShiftForm";
import axios from "axios";
function App() {
  const [shifts, setShifts] = useState([]);

  async function fetchShifts() {
    try {
      const res = await axios.get("http://localhost:8000/api/shifts");
      const data = res.data;
      if (data.error) throw new Error(data.error);
      console.log("data", data);
      setShifts(data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchShifts();
  }, []);

  const addShift = async (newShift) => {
    const res = await axios.post("http://localhost:8000/api/shifts", newShift);
    const data = res.data;
    if (data.error) throw new Error(data.error);
    setShifts([...shifts, data]);
  };

  const deleteShift = async (id) => {
    const res = await axios.delete(`http://localhost:8000/api/shifts/${id}`);
    const data = res.data;
    if (data.error) throw new Error(data.error);
    const updatedShifts = shifts.filter((shift) => shift.id !== id);
    setShifts(updatedShifts);
  };

  return (
    <div>
      <h1>Simple Shift Scheduling App</h1>
      <ShiftForm onAdd={addShift} />
      <ShiftList shifts={shifts} onDelete={deleteShift} />
    </div>
  );
}

export default App;
