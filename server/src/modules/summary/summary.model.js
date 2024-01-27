const mongoose = require("mongoose");

// creating schema
const summarySchema = new mongoose.Schema({
    summary_id: String,
    reports: [String],
    latitude: Number,
    longitude: Number,
    amount: Number,
    date: Date

});

// compiling model
const Summary = mongoose.model("Summary", summarySchema, "summaries");

module.exports = Summary;