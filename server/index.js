const express = require("express");
const mongoose = require("mongoose");
const lecturecontroller = require("./src/controllers/admin.controller");
const app = express();
app.use(express.json());
require("dotenv").config();
app.use("/", lecturecontroller);

async function connect() {
  await mongoose
    .connect(
      "mongodb+srv://Ibtisham:iloveallah1@cluster0.isdl4.mongodb.net/?retryWrites=true&w=majority"
    )
    .then(() => {
      console.log("coonected");
    })
    .catch((err) => {
      console.log("not");
    });
}
const port = process.env.PORT || 3000;
app.listen(port, () => {
  connect();
  console.log("hello 3000");
});
