const express = require('express');
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const User = mongoose.model('User');
const Plant = mongoose.model('Plants');

const router = express.Router();

module.exports = router;