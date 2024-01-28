const reportService = require("./report.service");

const getReports = async (req, res) => {
    // 200 = OK
    res.status(200).json(await reportService.getReports(req.query));
}

const addReport = async (req, res) => {
    try {
        const report = await reportService.addReport(req.body);
        // 201 = CREATED
        res.status(201).json({
            "message": "successfully added report",
            "new_report": report
        });
    } catch (error) {
        res.status(400).json({
            "message": "report already exists"
        });
    }
}

const removeReport = async (req, res) => {
    try {
        await reportService.removeReport(req.body);
        // 200 = OK
        res.status(200).json({
            "message": "successfully removed report"
        });
    } catch (error) {
        res.status(400).json({
            "message": "report doesn't exist"
        });
    }
}

const updateReport = async (req, res) => {
    try {
        await reportService.updateReport(req.body);
        // 200 = OK
        res.status(200).json({
            "message": "successfully updated report"
        });
    } catch (error) {
        res.status(400).json({
            "message": "report doesn't exist"
        });
    }
}

module.exports = {
    getReports,
    addReport,
    removeReport,
    updateReport,
}