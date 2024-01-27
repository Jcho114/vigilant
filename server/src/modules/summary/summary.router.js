const router = require("express").Router();
const summaryController = require("./summary.controller");

// attach controller callbacks to router endpoints
router.get("/", summaryController.getSummaries);
router.post("/add", summaryController.addSummary);
router.post("/remove", summaryController.removeSummary);
router.post("/update", summaryController.updateSummary);

module.exports = router;