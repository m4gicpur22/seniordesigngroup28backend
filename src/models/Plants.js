const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const PlantSchema = new mongoose.Schema({
});

mongoose.model('Plants', PlantSchema);