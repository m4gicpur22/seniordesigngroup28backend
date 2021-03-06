const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const PlantSchema = new mongoose.Schema({
    plantName:{
        type: String,
        required: true
    },
    plantType:{
        type: String,
        required: true
    },
    lightLevel: {
        type: String,
        required: true
    },
    temperatureLevel: {
        type: String,
        required: true
    },
    humidityLevel: {
        type: String,
        required: true
    },
    soilmoistureLevel: {
        type: String,
        required: true
    },
    last_updated:{
        type: Date,
        required: true
    }
});

mongoose.model('Plants', PlantSchema);