const { ObjectID } = require("bson");
const mongoose = require("mongoose");

//raw_album schema
const raw_albumSchema = new mongoose.Schema({
  _id: ObjectID,

  album_id: Number,

  album_comments: Number,

  album_date_created: Date,

  album_date_released: Date,

  album_favorites: Number,

  album_handle: String,

  album_image_file: String,

  album_images: String,

  album_information: String,

  album_listens: Number,

  album_title: String,

  album_tracks: Number,

  album_type: String,

  album_url: String,

  artist_name: String,

  artist_url: String,

  tags: String,

  album_engineer: String,

  album_producer: String,
});

module.exports = mongoose.model("raw_albums", raw_albumSchema);
