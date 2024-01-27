const mongoose = require("mongoose");

// creating schema
const reportSchema = new mongoose.Schema({
    report_id: String,
    validation: Boolean,
    latitude: Number,
    longitude: Number,
    type: String,
    amount: Number,
    date: Date,
    description: String,
    image: String,
});

// compiling model
const report = mongoose.model( "report", reportSchema, "reports");

module.exports = report;