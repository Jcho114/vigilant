const Summary = require("./summary.model");

const getSummaries = async query => {
    return await Summary.find(query).limit(50);
}

const addSummary = async body => {
    let summary = await Summary.findOne(body);
    if (summary) {
        throw new Error("summary already exists");
    }
    return await Summary.create(body);
}

const removeSummary = async body => {
    let summary = await Summary.findOne(body);
    if (summary) {
        return await Summary.deleteOne(body);
    }
    throw new Error("summary doesn't exist");
}
    

const updateSummary = async body => {
    let summary = await Summary.findOne(body);
    if (summary) {
        return await Summary.updateOne(body);
    }
    throw new Error("summary doesn't exist");
}

module.exports = {
    getSummaries,
    addSummary,
    removeSummary,
    updateSummary,
}