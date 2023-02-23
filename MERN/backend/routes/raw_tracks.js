const express = require("express");
const raw_track = require("../models/raw_track");
const router = express.Router();

module.exports = router;

//Get by specific ID Method
router.get("/getTrackinfo/:id", async (req, res) => {
  try {
    if (isNaN(req.params.id)) {
      throw new Error("Input wasn't a Number");
    }
    const trackidarray = [];
    const trackid = await raw_track.find({ track_id: req.params.id });
    trackidarray.push(trackid[0].artist_name, trackid[0].track_title),
      res.send(trackidarray);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

//Get by track ids by track_title
router.get("/gettrackid/:title", async (req, res) => {
  try {
    if (req.params.id != undefined) {
      throw new Error("Input is wrong");
    }
    const trackidarray = [];
    let partialToMatch = new RegExp(req.params.title, "i");
    const tracktitle = await raw_track.find({ track_title: partialToMatch });
    if (tracktitle.length > 10) {
      for (let i = 0; i < 10; i++)
        trackidarray.push({
          track_title: tracktitle[i].artist_name,
          artist_name: tracktitle[i].track_title,
        });
    } else if (tracktitle.length < 10 && tracktitle.length > 0) {
      for (let i = 0; i < tracktitle.length; i++) {
        trackidarray.push({
          track_title: tracktitle[i].artist_name,
          artist_name: tracktitle[i].track_title,
        });
      }
    }
    res.send(trackidarray);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});
