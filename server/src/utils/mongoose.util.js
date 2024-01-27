const mongoose = require("mongoose");

require("dotenv").config();
const {
    MONGO_URI
} = process.env;

async function connect() {
    return await mongoose.connect(MONGO_URI);
}

async function disconnect() {
    await mongoose.disconnect();
}

// performs given actions sequentially
async function perform(...actions) {
    await connect();
    for (let action in actions) {
        action();
    }
    await disconnect();
}

module.exports = {
    connect,
    disconnect,
    perform
};