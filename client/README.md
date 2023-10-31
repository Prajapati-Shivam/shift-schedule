# Simple Shift Scheduling Web App

## Overview

This is a simple web application for managing shift schedules. It provides a user-friendly interface for creating, viewing, and deleting shifts. The project consists of a frontend built with React and a backend implemented with Node.js and Express.js. Shift data is stored in a JSON file on the backend.

## Features

- Display a list of shifts with their start and end times.
- Add new shifts using a user-friendly form.
- Delete existing shifts with a single click.
- Shift times are displayed in a "hh:mm AM/PM" format.

## Prerequisites

- Node.js installed on your system.
- A code editor (e.g., Visual Studio Code).
- Basic knowledge of JavaScript, React, and Node.js.

## Getting Started

### Backend

1. Navigate to the `shift-scheduling-backend` directory.
2. Run `npm install` to install the necessary dependencies.
3. Create a `shifts.json` file in the `data` directory with an empty array `[]`.
4. Run the backend server with `npm start`.

### Frontend

1. Navigate to the `shift-scheduling-frontend` directory.
2. Run `npm install` to install the necessary dependencies.
3. Start the development server with `npm start`.
4. Open your web browser and go to `http://localhost:3000` to access the frontend.

## API Endpoints

- `GET /api/shifts`: Retrieve a list of all shifts.
- `POST /api/shifts`: Create a new shift.
- `DELETE /api/shifts/:id`: Delete a shift by its ID.

## Frontend Components

- `ShiftList.js`: Displays a list of shifts.
- `ShiftForm.js`: Allows users to add new shifts.
- `ShiftItem.js`: Displays individual shift details.

## Backend Data Storage

- Shift data is stored in a `shifts.json` file on the backend.

---

