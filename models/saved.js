const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const savedSchema = new Schema({
  title: { type: String, required: true },
  img: { type: String, required: true },
  p: { type: String, required: true }
});

const Saved = mongoose.model("Saved", savedSchema)

module.exports = Saved;