const router = require("express").Router();
const reportController = require("./report.controller");

// attach controller callbacks to router endpoints
router.get("/", reportController.getReports);
router.post("/add", reportController.addReport);
router.post("/remove", reportController.removeReport);
router.post("/update", reportController.updateReport);

module.exports = router;