const Report = require("./report.model");

const getReports = async query => {
    return await Report.find(query).limit(50);
}

const addReport = async body => {
    let report = await Report.findOne(body);
    if (report) {
        throw new Error("report already exists");
    }
    return await Report.create(body);
}

const removeReport = async body => {
    let report = await Report.findOne(body);
    if (report) {
        return await Report.deleteOne(body);
    }
    throw new Error("report doesn't exist");
}
    

const updateReport = async body => {
    let report = await Report.findOne(body);
    if (report) {
        return await Report.updateOne(body);
    }
    throw new Error("report doesn't exist");
}

module.exports = {
    getReports,
    addReport,
    removeReport,
    updateReport,
}