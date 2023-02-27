const { raw } = require("express");
const express = require("express");
const raw_artist = require("../models/raw_artist");
const router = express.Router();

module.exports = router;

//Get by ID Method
router.get("/getartistId/:id", async (req, res) => {
  try {
    if (isNaN(req.params.id)){
      throw new Error("Input wasn't a Number");
    }
    const artistidarray = []
    const artistid = await raw_artist.find({ artist_id: req.params.id });
    artistidarray.push(
        artistid[0].artist_id,
        artistid[0].artist_active_year_begin,
        artistid[0].artist_contact,
        artistid[0].artist_name,
        artistid[0].artist_members,
        artistid[0].artist_location
    )
    res.send(artistidarray)
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

//Get by track ids by track_title
router.get("/getname/:name", async (req, res) => {
  try {
    if (!isNaN(req.params.id)){
      throw new Error("Input wasn't a string");
    }
    const artistlastnamearray = [];
    let partialToMatch = new RegExp(req.params.name, "i");
    const artistlastname = await raw_artist.find({ artist_name: partialToMatch });
    for (let i = 0; i < artistlastname.length; i++) {
      artistlastnamearray.push(artistlastname[i].artist_id)
    }
    res.send(artistlastnamearray);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});