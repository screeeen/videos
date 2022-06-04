const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const videoSchema = new Schema({
    id: Number,
  name: String,
  date: { type: Date },
  referenceURL: {
    type: String,
    // required: "URL can't be empty",
    // unique: true,
  }
});

const Video = mongoose.model("Video", videoSchema);

module.exports = Video;
