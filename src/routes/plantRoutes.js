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

//edit try catch to reopen it every couple of minutes
try {
    const fileOut = fs.readFileSync(__dirName + 'seniordesigngroup28backend/src/routes/SensorData.txt', 'utf8');
    const lines = fileOut.split(/\r?\n/);

    lines.forEach( (word) => {

        wordlines = word.split(" ");

        SensorTypes.push(wordlines[0]);

        sensorDict.push({
            key: wordlines[0],
            value: wordlines[1]
        });

    });
}
catch(err){
    console.log("Issue opening file with error: " + err);
}

//this is the route for getting sensor data back
router.get('/getSensorInfo', async(req, res) => {
    try{
        const HumidityValue = sensorDict[0].value;
        const LuxValue = sensorDict[1].value;
        const TempValue = sensorDict[2].value;
        const SoilMoistureValue = sensorDict[3].value;

        const sensor = new Sensor({LuxValue, TempValue, HumidityValue, SoilMoistureValue});

        //save sensor info into database
        await sensor.save();

        res.send({sensor});
    }
    catch(err){
        console.log("Error saving details with code: " + err);
        return console.error(err);
        }
});


module.exports = router;