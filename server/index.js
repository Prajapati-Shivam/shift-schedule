const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.PORT || 8000;
const shiftsRouter = require("./api/shifts");

app.use(express.json());
app.use(cors());

app.use("/api/shifts", shiftsRouter);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
