const router = require("express").Router();
const trendController = require("./trend.controller");

// attach controller callbacks to router endpoints
router.get("/", trendController.getTrends);
router.post("/add", trendController.addTrend);
router.delete("/remove", trendController.removeTrend)

module.exports = router;