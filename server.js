const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const app = express();
const studentsroutes = require('./routers/studentrouter')
app.use(express.json());
app.use(cors());
mongoose.connect("mongodb://localhost:27017/students").then(() => console.log("MongoDB Connected"))
    .catch(err => console.log(err));
app.use("/api", studentsroutes);

const PORT = 8000;
app.listen(PORT, () => console.log(`server is running in port ${PORT}`));

