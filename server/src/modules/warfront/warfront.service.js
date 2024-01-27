const Warfront = require("./warfront.model");

const getWarfronts = async query => {
    return await Warfront.find(query).limit(50);
}

const addWarfront = async body => {
    let warfront = await Warfront.findOne(body);

    if (warfront) {
        throw new Error("warfront already exists");
    }

    return await Warfront.create(body);
}

const removeWarfront = async query => {
    // let Warfront = await Warfront.deleteOne(query);
}

module.exports = {
    getWarfronts,
    addWarfront,
    removeWarfront
}