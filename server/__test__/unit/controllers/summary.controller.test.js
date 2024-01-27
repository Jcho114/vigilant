const {
    getSummaries,
    addSummary,
    removeSummary,
    updateSummary,
} = require("../../../src/modules/summary/summary.controller");

// mocking summarys model in database
const summary = require("../../../src/modules/summary/summary.model");
jest.mock("../../../src/modules/summary/summary.model");

// stubbing: creating mock data
const request = {
    body: {
        summaryname: "fake_summaryname",
        password: "fake_password"
    },
    query: {
        summaryname: "fake_summaryname"
    }
}
// accounting for chained functions
const response = {
    json: jest.fn().mockReturnThis(),
    status: jest.fn().mockReturnThis()
};

describe("[GET] /api/v1/summary", () => {
    it("should send a status code of 200", async () => {
        // accounting for chained functions
        summary.find = jest.fn().mockReturnValueOnce({ limit: jest.fn().mockReturnValueOnce({}) });
        await getsummarys(request, response);
        expect(response.status).toHaveBeenCalledWith(200);
        expect(response.json).toHaveBeenCalledTimes(1);
    });
});

describe("[POST] /api/v1/summary/add", () => {
    it("should send a status code of 201 when summary does not already exist", async () => {
        summary.findOne = jest.fn().mockReturnValueOnce(undefined);
        summary.create = jest.fn().mockImplementation(body => body);
        await addsummary(request, response);
        expect(response.status).toHaveBeenCalledWith(201);
        expect(response.json).toHaveBeenCalledTimes(1);
    });
});

describe("[POST] /api/v1/summary/add", () => {
    it("should send a status code of 400 when summary already exists", async () => {
        summary.findOne = jest.fn().mockReturnValueOnce({ summaryname: "already_here", password: "already_here" });
        await addsummary(request, response);
        expect(response.status).toHaveBeenCalledWith(400);
        expect(response.json).toHaveBeenCalledTimes(1);
    });
});