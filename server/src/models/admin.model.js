const mongoose = require("mongoose");
const LectureSchema = mongoose.Schema({
  name: { type: String, require: true },
  subject: { type: String, require: true },
  date: { type: Date, default: new Date() },
});
module.exports = mongoose.model("lectures", LectureSchema);
