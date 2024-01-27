const warfrontService = require("./warfront.service");

const getWarfronts = async (req, res) => {
    // 200 = OK
    res.status(200).json(await warfrontService.getWarfronts(req.query));
}

const addWarfront = async (req, res) => {
    let warfront;
    try {
        warfront = await warfrontService.addWarfront(req.body);
        // 201 = CREATED
        res.status(201).json({
            "message": "successfully added warfront",
            "new_warfront": warfront
        });
    } catch (error) {
        res.status(400).json({
            "message": "warfront already exists"
        });
    }
}

const removeWarfront = async (req, res) => {
    
}

module.exports = {
    getWarfronts,
    addWarfront,
    removeWarfront,
}