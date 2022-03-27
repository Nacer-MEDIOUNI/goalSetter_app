const mongoose = require("mongoose");

const contactSchema = mongoose.Schema({
  username: String,
  email: { type: String, required: true, unique: true },
  age: Number,
});

module.exports = mongoose.model("ContactModel", contactSchema);
