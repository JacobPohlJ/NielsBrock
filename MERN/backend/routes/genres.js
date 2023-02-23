const express = require('express')
const genre = require('../models/genre')
const router = express.Router()
const genredata = genre
const genredata1 = genre

module.exports = router

// Getting all 

router.get('/', async (req,res) => {
    try{
        const allGenre = await genre.find()
        res.json(allGenre)
    }catch (err){
        res.status(500).json({message: err.message})
    }
})

//Get by ID Method
router.get('/getID/:id', async (req, res) => {

    try{
        const SingleID = await genredata.findById(req.params.id)
        res.json(SingleID._id)
    }
    catch(error){
        res.status(500).json({message: error.message})
    }
})

//find by title
router.get('/getTitle/:title', async (req,res) => {
    try{
        const allGenre = await genre.find({title: req.params.title})        
        res.send(allGenre[0].title)
    }catch (err){
        res.status(500).json({message: err.message})
    }
})