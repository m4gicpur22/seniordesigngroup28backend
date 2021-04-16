const express = require('express');
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const Sensor = mongoose.model('Officialdata');
const fs = require('fs');
const router = express.Router();

//this is the route for getting sensor data back
router.get('/getSensorInfo', async(req, res) => {
    try{
        const sensor = await Sensor.find({}).sort({$natural: -1}).limit(1);
        res.send({sensor});
    }
    catch(err){
        console.log("Error getting back sensor value: " + err);
        return console.error(err);
    }
});

// router.get('/getallSensorInfo', async(req, res) => {
//     try{
//         const sensor = await Sensor.find({});
//         res.send({sensor});
//     }
//     catch(err){
//         console.log("Error getting back sensor values: " + err);
//         return console.error(err);
//     }
// });

module.exports = router;