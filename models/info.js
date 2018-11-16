const mongoose = require("mongoose");
const { Schema } = mongoose;

var newSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  age: {
    type: Number,
    required: true
  },
  location: {
    type: String,
    required: true
  }
});

var Info = mongoose.model("info", newSchema);

module.exports = {
  Info
};
