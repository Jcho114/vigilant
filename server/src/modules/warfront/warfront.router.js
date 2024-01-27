const router = require("express").Router();
const warfrontController = require("./warfront.controller");

// attach controller callbacks to router endpoints
router.get("/", warfrontController.getWarfronts);
router.post("/add", warfrontController.addWarfront);
router.delete("/remove", warfrontController.removeWarfront)

module.exports = router;