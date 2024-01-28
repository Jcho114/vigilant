const trendService = require("./trend.service");

const getTrends = async (req, res) => {
    // 200 = OK
    res.status(200).json(await trendService.getTrends(req.query));
}

const addTrend = async (req, res) => {
    let trend;
    try {
        trend = await trendService.addTrend(req.body);
        // 201 = CREATED
        res.status(201).json({
            "message": "successfully added trend",
            "new_trend": trend
        });
    } catch (error) {
        console.error(error.message);
        res.status(400).json({
            "message": "trend already exists"
        });
    }
}

const removeTrend = async (req, res) => {
}

module.exports = {
    getTrends,
    addTrend,
    removeTrend,
}