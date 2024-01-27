const mongoose = require("mongoose");

// creating schema
const trendSchema = new mongoose.Schema({
    reports: [mongoose.Schema.Types.UUID]
});

// compiling model
const Trend = mongoose.model("Trend", trendSchema, "trends");

module.exports = Trend;