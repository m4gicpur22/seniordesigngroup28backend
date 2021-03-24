const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const SensorSchema = new mongoose.Schema({
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
    }
    // soilmoistureLevel: {
    //     type: String,
    //     required: true
    // }
    ,DateTime: { 
        type: Date,
        required: true
    }
});

mongoose.model('Sensor', SensorSchema);