const express = require('express');
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const fs = require('fs');
const router = express.Router();

const cameraConnect = require('pi-camera-connect');

const imageCapture = new cameraConnect.StillCamera();
const videoCapture = new cameraConnect.StreamCamera();
//const videoFormat = new cameraConnect.Codec();


const runApp = async () => {
    const image = await imageCapture.takeImage();

    fs.writeFileSync("still-image.jpg", image);
};



//route to store camera video in database
router.post('', async(req, res) =>{


});


//route to retrive camera video from database
router.get('', async(req, res) => {


});

//route to store camera photos in database
router.post('', async(req, res) =>{


});

//route to retrieve camera photos in database
router.get('', async(req, res) => {


});

module.exports = router;