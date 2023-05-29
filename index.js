const bodyParser = require("body-parser");
const express = require("express");
const mongoose = require("mongoose");
const exampleRoute = require("./routes/example");
const app = express();
app.use(express.json());
// Body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// app.use(cors());
const PORT = process.PORT || 4000;

app.listen(PORT, () => {
  console.log(`Server Started at ${PORT}`);
});
app.use("/api/example", exampleRoute);
