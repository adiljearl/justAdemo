const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const PostSchema = new Schema({
  title: {
    type: String,
    required: true
  },

  body: {
    type: String,
    required: true
  },
  file: {
    type: String
  },
  label: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now()
  },
  trending: {
    type: Boolean,
    default: false
  }
});

module.exports = mongoose.model("posts", PostSchema);
