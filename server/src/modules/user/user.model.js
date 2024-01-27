const mongoose = require("mongoose");

// creating schema
const userSchema = new mongoose.Schema({
    user_id: String,
    privilege: Number,
    name: String,
    location: String,
    phone: String,
    date_registered: Date,
    reports: [mongoose.Schema.Types.UUID],
    validated_reports: Number
});

// compiling model
const User = mongoose.model("User", userSchema, "users");

module.exports = User;