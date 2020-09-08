const express = require('express');
const mongoose = require('mongoose');

const Router = express.Router();
const testMiddleware = require('../middleware/test')
const Comment = require('../models/comments');
const SeenMovies =require('../models/seenMovies');

Router.get('/',(req, res) =>{
 res.status(200).send('GET tst2')
 Comment.find()
        .lean()
        .exec()
        .then(tws => {
            res.status(200).json(tws);
        })
        .catch(err => {
            error = err;
            console.error(error);
        });
})




//this is the route to create a tw
Router.post('/addscenemovie', (req, res) => {
    console.log(req.body)
    if (Object.keys(req.body).length !== 0) {
        const seenmovie = new SeenMovie({
            id: new mongoose.Types.ObjectId(),
            userid: req.body.userid,
            movieid: req.body.movieid
        })
        seenmovie.save()
        .then(seenmovie => {
            res.status(200).send(seenmovie);
        })
        .catch(err => {
            res.status(500).json({error: err});    
        })
    } else {
        res.status(500).json({error: "Send body data also"});    
    }
})

Router.post('/addscenemovie', (req, res) => {
    console.log(req.body)
    if (Object.keys(req.body).length !== 0) {
        const seenmovie = new SeenMovie({
            id: new mongoose.Types.ObjectId(),
            userid: req.body.userid,
            movieid: req.body.movieid
        })
        seenmovie.save()
        .then(seenmovie => {
            res.status(200).send(seenmovie);
        })
        .catch(err => {
            res.status(500).json({error: err});    
        })
    } else {
        res.status(500).json({error: "Send body data also"});    
    }
})

Router.get('/:movieId',(req, res) =>{
    movieId = req.params.movieId;
    res.status(200).send('Get movies'+ movieId)
   }) 

Router.post('/movies',(req, res) =>{
    res.status(200).send('Post movies')
   })

   Router.post('/:movieId',(req, res) =>{
    console.log(req.body.message);
    res.status(200).send('Posr movies')
   }) 
module.exports =Router;