require('dotenv').config()

const express = require("express")
const mongoose = require("mongoose")
const Router = require('./routes/routes')
const app = express()

mongoose.connect(process.env.DB_URI,
{
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
)

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function () {
  console.log("Connected successfully");
});

app.use(Router);

app.listen(4000, () => {
  console.log("Server is running at port 4000");
});