const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const corsOptions = {
  origin: "*",
  credentials: true, //access-control-allow-credentials:true
  optionSuccessStatus: 200,
};

app.use(cors(corsOptions));
// Initialize app

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const userRoute = require("./routes/users");
app.use("/users", userRoute);

// Start server with port 3000
app.listen(3001, function () {
  console.log("Server started on localhost:3000");
});
module.exports = app;
