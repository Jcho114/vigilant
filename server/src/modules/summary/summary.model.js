const mongoose = require("mongoose");

// creating schema
const summarySchema = new mongoose.Schema({
    summary_id: mongoose.Schema.Types.UUID,
    reports: [mongoose.Schema.Types.UUID],
    latitude: Number,
    longitude: Number,
    amount: Number,
    date: Date

});

// compiling model
const Summary = mongoose.model("Summary", summarySchema, "summaries");

module.exports = Summary;