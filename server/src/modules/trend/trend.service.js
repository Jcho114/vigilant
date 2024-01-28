const { convertResultsToCorrectFormat } = require("../../utils/convert.util");

const Trend = require("./trend.model");
const Report = require("../report/report.model");

const getTrends = async query => {
    return await Trend.find(query).limit(50);
}

const addTrend = async body => {
    async function getReport(id) {
        return await Report.find({
            report_id: id
        });
    }
    const report_ids = body.data;
    const reports = [];
    for (let report_id of report_ids) {
        reports.push((await getReport(report_id))[0]);
    }
    
    const sortedReports = reports.sort((a, b) => a.date < b.date ? -1 : 1);
    const start = sortedReports[0];
    const end = sortedReports[reports.length - 1];

    // Using util function
    const [x_coords, y_coords, times] = convertResultsToCorrectFormat(reports);
    const timesArray = times.split(",").map(el => parseInt(Number(el)));
    // Fetching data
    const [predictions, ends,] = await fetch("http://10.150.237.167:3002/api/v1/linear", {
        method: "POST", 
        headers: {
          "x-coords": x_coords,
          "y-coords": y_coords,
          "times": times,
          "prediction-time": timesArray[timesArray.length - 1] + 5
        },
        mode: "cors",
    }).then(res => res.json()).then(json => json.message);

    console.log("prediction", predictions);
    console.log("ends", ends);

    return await Trend.create({
        reports: report_ids,
        date: new Date(),
        startDate: new Date(start.date),
        endDate: new Date(end.date),
        startLat: start.latitude,
        startLong: start.longitude,
        endLat: ends[0],
        endLong: ends[1],
        predictionLat: predictions[0],
        predicionLong: predictions[1],
    });
}

const removeTrend = async query => {
    // let trend = await Trend.deleteOne(query);
}

module.exports = {
    getTrends,
    addTrend,
    removeTrend
}