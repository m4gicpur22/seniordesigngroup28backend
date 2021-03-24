const express = require('express');
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const User = mongoose.model('User');
const Plant = mongoose.model('Plants');
const Sensor = mongoose.model('Sensor')
const fs = require('fs');
const router = express.Router();

var __dirName = 'C:/Users/AffyThoughts/Documents/SeniorDesignGroup28Project/'

var sensorDict = [];
var SensorTypes = [];
//make an array for average values of data

//this is the route for getting sensor data back
router.get('/getSensorInfo', async(req, res) => {

    // try {
    //     const fileOut = fs.readFileSync(__dirName + 'seniordesigngroup28backend/src/routes/SensorData.txt', 'utf8');
    //     const lines = fileOut.split(/\r?\n/);
        
    //     lines.forEach( (word) => {
    //         wordlines = word.split(" ");

    //         SensorTypes.push(wordlines[0]);

    //         sensorDict.push({
    //             key: wordlines[0],
    //             value: wordlines[1]
    //         });

    //     });
    // }
    // catch(err){
    //     console.log("Issue opening file with error: " + err);
    // }

    // const TempValue = sensorDict[0].value;
    // const LuxValue = sensorDict[1].value;
    // const HumidityValue = sensorDict[2].value;
    // const SoilMoistureValue = sensorDict[3].value;

    // var currentDateTime = new Date().toLocaleString();
    // console.log(currentDateTime);

    try{
        // const sensor = new Sensor({
        //     "lightLevel": LuxValue, 
        //     "temperatureLevel": TempValue, 
        //     "humidityLevel": HumidityValue,
        //     // "soilmoistureLevel": SoilMoistureValue
        //     "DateTime": currentDateTime
        // });

        // //save sensor info into database
        // await sensor.save();
        //gets the most recent value in the database
        const sensor = await Sensor.find({}).sort({$natural: -1}).limit(1);

        res.send({sensor});
    }
    catch(err){
        console.log("Error getting back sensor value: " + err);
        return console.error(err);
    }
});

module.exports = router;