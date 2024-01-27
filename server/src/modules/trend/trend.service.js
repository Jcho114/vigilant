const Trend = require("./trend.model");

const getTrends = async query => {
    return await Trend.find(query).limit(50);
}

const addTrend = async body => {
    let trend = await Trend.findOne(body);

    if (trend) {
        throw new Error("trend already exists");
    }

    return await Trend.create(body);
}

const removeTrend = async query => {
    // let trend = await Trend.deleteOne(query);
}

module.exports = {
    getTrends,
    addTrend,
    removeTrend
}