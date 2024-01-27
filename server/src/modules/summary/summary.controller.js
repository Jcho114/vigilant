const summaryService = require("./summary.service");

const getSummaries = async (req, res) => {
    // 200 = OK
    res.status(200).json(await summaryService.getsummarys(req.query));
}

const addSummary = async (req, res) => {
    let summary;
    try {
        summary = await summaryService.addSummary(req.body);
        // 201 = CREATED
        res.status(201).json({
            "message": "successfully added summary",
            "new_summary": summary
        });
    } catch (error) {
        res.status(400).json({
            "message": "summary already exists"
        });
    }
}

const removeSummary = async (req, res) => {
    try {
        await summaryService.removeSummary(req.body);
        // 200 = OK
        res.status(200).json({
            "message": "successfully removed summary"
        });
    } catch (error) {
        res.status(400).json({
            "message": "summary doesn't exist"
        });
    }
}

const updateSummary = async (req, res) => {
    try {
        await summaryService.updateSummary(req.body);
        // 200 = OK
        res.status(200).json({
            "message": "successfully updated summary"
        });
    } catch (error) {
        res.status(400).json({
            "message": "summary doesn't exist"
        });
    }
}

module.exports = {
    getSummaries,
    addSummary,
    removeSummary,
    updateSummary,
}