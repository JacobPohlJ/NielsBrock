const { ObjectID } = require("bson");
const { Decimal128 } = require("mongodb");
const mongoose = require("mongoose");

// raw_track Schema
const raw_trackSchema = new mongoose.Schema({
  _id: ObjectID,

  track_id: Number,

  album_id: Number,

  album_title: String,

  album_url: String,

  artist_id: Number,

  artist_name: String,

  artist_url: String,

  artist_website: String,

  license_image_file: String,

  license_image_file_large: String,

  license_parent_id: String,

  license_title: String,

  license_url: String,

  tags: String,

  track_bit_rate: Number,

  track_comments: Number,

  track_date_created: Date,

  track_date_recorded: Date,

  track_disc_number: Number,

  track_duration: String,

  track_explicit: String,

  track_favorites: Number,

  track_file: String,

  track_genres: String,

  track_image_file: String,

  track_instrumental: Number,

  track_interest: Number,

  track_language_code: String,

  track_listens: Number,

  track_number: Number,

  track_title: String,

  track_url: String,
});

module.exports = mongoose.model("raw_tracks", raw_trackSchema);
