const mongoose = require("mongoose");

const playlistSchema = new mongoose.Schema({
  nameofuser: { type: String, required: true },
  name: { type: String, required: true },
  track_id: { type: Array },
  
});

module.exports = mongoose.model("playlist", playlistSchema);