const User = require("./user.model");

const getUsers = async query => {
    return await User.find(query).limit(50);
}

const addUser = async body => {
    let user = await User.findOne({
        user_id: body.user_id
    });
    console.log(user);
    if (user) {
        throw new Error("user already exists");
    }
    return await User.create(body);
}

module.exports = {
    getUsers,
    addUser
}