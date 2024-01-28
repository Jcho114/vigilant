const User = require("./user.model");

const getUsers = async query => {
    return await User.find(query).limit(50);
}

const addUser = async body => {
    let user = await User.findOne({
        user_id: body.user_id
    });
    if (user) {
        throw new Error("user already exists");
    }
    return await User.create(body);
}

const updateUser = async body => {
    const { user_id, report_id } = body;
    const users = await User.find({"user_id": user_id});
    const user = users[0];
    if (user) {
        return await User.updateOne({user_id: user_id}, { reports: [report_id, ...user.reports] });
    }
    throw new Error("user doesn't exist");
}

module.exports = {
    getUsers,
    addUser,
    updateUser
}