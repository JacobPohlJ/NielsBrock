const { ObjectID } = require("bson");
const { Int32 } = require("mongodb");
const mongoose = require("mongoose");

//genre schema
const genresschema = new mongoose.Schema({
  _id: ObjectID,

  genre_id: Number,

  tracks: Number,

  parent: Number,

  title: String,

  top_level: Number,
});

module.exports = mongoose.model("genres", genresschema);
