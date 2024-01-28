const userService = require("./user.service");

const getUsers = async (req, res) => {
    // 200 = OK
    res.status(200).json(await userService.getUsers(req.query));
}

const addUser = async (req, res) => {
    let user;
    try {
        user = await userService.addUser(req.body);
        // 201 = CREATED
        res.status(201).json({
            "message": "successfully added user",
            "new_user": user
        });
    } catch (error) {
        res.status(400).json({
            "message": "user already exists"
        });
        console.error(error);
    }
}

// req should have user_id and report_id fields
const addUserReport = async (req, res) => {
    try {
        await userService.updateUser(req.body);
        // 200 = OK
        res.status(200).json({
            "message": "successfully updated report"
        });
    } catch (error) {
        res.status(400).json({
            "message": error.message
        });
    }
}

module.exports = {
    getUsers,
    addUser,
    addUserReport
}