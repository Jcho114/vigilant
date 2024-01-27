const mongoose = require("mongoose");

// creating schema
const warfrontSchema = new mongoose.Schema({
    summaries: [String],
    date: Date,
    latitudes: [Number]
});

// compiling model
const Warfront = mongoose.model("Warfront", warfrontSchema, "warfronts");

module.exports = Warfront;