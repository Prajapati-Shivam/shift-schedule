const express = require("express");
const app = express();
const cors = require("cors");
const fs = require("fs");
const port = process.env.PORT || 8000;
const { v4: uuidv4 } = require("uuid");

const shiftsFilePath = "./data/shifts.json";

app.use(express.json());
app.use(cors());
// GET /api/shifts - returns all shifts
app.get("/api/shifts", (req, res) => {
  fs.readFile(shiftsFilePath, "utf8", (err, data) => {
    if (err) {
      res.status(500).json({ error: "Internal server error" });
    } else {
      const shifts = JSON.parse(data);
      res.json(shifts);
    }
  });
});

// POST /api/shifts - creates a new shift
app.post("/api/shifts", (req, res) => {
  let newShift = req.body;
  if (!newShift.start_time || !newShift.end_time) {
    res.status(400).json({ error: "Please enter both start and end time" });
    return;
  }

  fs.readFile(shiftsFilePath, "utf8", (err, data) => {
    if (err) {
      res.status(500).json({ error: "Internal server error" });
      return;
    }
    const shifts = JSON.parse(data);
    newShift.id = uuidv4();
    shifts.push(newShift);

    fs.writeFile(shiftsFilePath, JSON.stringify(shifts, null, 2), (err) => {
      if (err) {
        res.status(500).json({ error: "Internal server error" });
      } else {
        res.status(201).json(newShift);
      }
    });
  });
});

// DELETE /api/shifts/:id - deletes a shift
app.delete("/api/shifts/:id", (req, res) => {
  const shiftId = req.params.id;
  console.log(shiftId);
  fs.readFile(shiftsFilePath, "utf8", (err, data) => {
    if (err) {
      res.status(500).json({ error: "Internal Server Error" });
      return;
    }

    let shifts = JSON.parse(data);

    // Find the index of the shift with the specified ID
    const shiftIndex = shifts.findIndex((shift) => shift.id === shiftId);

    if (shiftIndex === -1) {
      res.status(404).json({ error: "Shift not found" });
      return;
    }

    // Remove the shift from the array
    shifts.splice(shiftIndex, 1);

    // Write the updated shifts array back to the JSON file
    fs.writeFile(shiftsFilePath, JSON.stringify(shifts, null, 2), (err) => {
      if (err) {
        res.status(500).json({ error: "Internal Server Error" });
      } else {
        res.status(204).send();
      }
    });
  });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
