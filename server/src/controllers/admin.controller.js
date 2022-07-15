const mymodel = require("../models/admin.model");
const lecturemodel = require("../models/assignment.model");
const mongoose = require("mongoose");
const express = require("express");
const router = express.Router();
router.post("/lectures", async (req, res) => {
  let Data = await mymodel.create(req.body);
  await Data.save();
  return res.status(201).send(Data);
});
router.get("/lectures", async (req, res) => {
  let data = await mymodel.find().lean().exec();
  return res.status(201).send(data);
});
router.post("/assignments", async (req, res) => {
  let Data = await lecturemodel.create(req.body);
  await Data.save();
  return res.status(201).send(Data);
});
router.get("/assignments", async (req, res) => {
  let data = await lecturemodel.find().lean().exec();
  return res.status(201).send(data);
});
module.exports = router;
