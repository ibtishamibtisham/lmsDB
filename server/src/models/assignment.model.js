const mongoose = require("mongoose");
const assignmentSchema = mongoose.Schema({
  name: { type: String, require: true },
  topic: { type: String, require: true },
  date: { type: Date, default: new Date() },
  video: { type: String },
});
module.exports = mongoose.model("assignment", assignmentSchema);
