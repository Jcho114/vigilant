const mongoose = require("mongoose");

// creating schema
const trendSchema = new mongoose.Schema({
    reports: [String],
    date: Date,
    startDate: Date,
    endDate: Date,
    startLat: Number,
    startLong: Number,
    endLat: Number,
    endLong: Number,
    predictionLat: Number,
    predictionLong: Number
});

// compiling model
const Trend = mongoose.model("Trend", trendSchema, "trends");

module.exports = Trend;