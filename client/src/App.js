import React, { useState, useEffect } from "react";
import ShiftList from "./components/ShiftList";
import ShiftForm from "./components/ShiftForm";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [shifts, setShifts] = useState([]);

  async function fetchShifts() {
    try {
      const res = await axios.get("http://localhost:8000/api/shifts");
      const data = res.data;
      if (data.error) {
        toast.error("Error fetching shifts!");
        return;
      }
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
    try {
      const res = await axios.post(
        "http://localhost:8000/api/shifts",
        newShift
      );
      const data = res.data;
      if (data.error) {
        toast.error("Error adding shift!");
        return;
      }
      setShifts([...shifts, data]);
      toast.success("Shift added successfully!");
    } catch (error) {
      toast.error("Something went wrong!");
    }
  };

  const deleteShift = async (id) => {
    try {
      const res = await axios.delete(`http://localhost:8000/api/shifts/${id}`);
      const data = res.data;
      if (data.error) {
        toast.error("Error deleting shift!");
        return;
      }
      const updatedShifts = shifts.filter((shift) => shift.id !== id);
      setShifts(updatedShifts);
      toast.success("Shift deleted successfully!");
    } catch (error) {
      toast.error("Something went wrong!");
    }
  };

  return (
    <div className="bg-blue-50 h-screen">
      <h1 className="text-4xl font-bold text-center py-6 border-b-4 border-black">
        Simple Shift Scheduling App📝
      </h1>
      <div className="flex px-8 flex-col max-w-xl mx-auto">
        <ShiftForm onAdd={addShift} />
        <ShiftList shifts={shifts} onDelete={deleteShift} />
        <ToastContainer />
      </div>
    </div>
  );
}

export default App;
