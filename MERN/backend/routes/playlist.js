const router = require("express").Router();
const { exists } = require("../models/genre");
const playlist = require("../models/playlist");

router.post("/createplaylist", async (req, res) => {
  const data = new playlist({
    nameofuser: req.body.nameofuser,
    name: req.body.name,
    track_id: req.body.track_id,
  });
  try {
    const allPlaylist = await playlist.find();
    for (let i = 0; i < allPlaylist.length; i++) {
      if (data.name == allPlaylist[i].name) {
        throw new Error("Playlist name is already taken ");
      }
    }
    const dataToSave = await data.save();
    res.status(200).json(dataToSave);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

router.get("/getlisttrackid/:nameofuser", async (req, res) => {
  try {
    const playlistname = await playlist.find({
      nameofuser: { $in: [req.params.nameofuser] },
    });
    res.send(
      playlistname.map((playlist) => ({
        track_title: playlist.name,
        artist_name: playlist.track_id,
      }))
    );
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.delete("/deleteplaylist/:name", async (req, res) => {
  try {
    const name = req.params.id;
    const data = await playlist.findOneAndRemove(name);
    console.log(data);
    if (data != null) {
      res.send(`Playlist has been deleted..`);
    }
    res.send(`Playlist doesn't exist..`);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

module.exports = router;
