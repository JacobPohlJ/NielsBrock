const { ObjectID } = require("bson");
const { Decimal128 } = require("mongodb");
const mongoose = require("mongoose");

// raw_artist Schema
const raw_artistSchema = new mongoose.Schema({
  _id: ObjectID,

  artist_id: Number,

  artist_active_year_begin: String,

  artist_bio: String,

  artist_comments: Number,

  artist_contact: String,

  artist_date_created: String,

  artist_favorites: Number,

  artist_handle: String,

  artist_image_file: String,

  artist_images: String,

  artist_latitude: Decimal128,

  artist_location: String,

  artist_longitude: Decimal128,

  artist_members: String,

  artist_name: String,

  artist_related_projects: String,

  artist_url: String,

  artist_website: String,

  tags: String,

  artist_associated_labels: String,

  artist_donation_url: String,

  artist_active_year_end: String,

  artist_paypal_name: String,

  artist_wikipedia_page: String,
});

module.exports = mongoose.model("raw_artists", raw_artistSchema);
