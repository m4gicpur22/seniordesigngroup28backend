const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const SensorSchema = new mongoose.Schema({
    Celsius: {
        type: Number
    },
    Fahrenheit: {
        type: Number
    },
    humidityLevel: {
        type: Number
    },
    lightLevel: {
        type: Number,
    },
    Soilmoisture_1: { 
        type: Number
    },
    Soilmoisture_2: { 
        type: Number
    },
    DateTime : {
        type: Date
    },
    DateTimeString : {
        type: String
    },
    CPUTemperature: {
        type: Number
    },
    CoolingSystemState: {
        type: Number
    },
    IrrigationMSP : {
        type: Number
    }
});

mongoose.model('Officialdata', SensorSchema, 'newsensorsdata');