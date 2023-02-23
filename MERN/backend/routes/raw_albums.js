const express = require('express')
const raw_album = require('../models/raw_album')
const router = express.Router()

module.exports = router

// Getting all 

router.get('/', async (req,res) => {
    try{
        const raw_albums = await raw_album.find()
        res.json(raw_albums)
    }catch (err){
        res.status(500).json({message: err.message})
    }
})
