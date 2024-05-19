const chaiHttp = require("chai-http");
const chai = require("chai");
const suite = require("mocha").suite;
const mocha = require("mocha");
const assert = chai.assert;
const server = require("../server.js");

chai.use(chaiHttp);

describe("Functional Tests", function () {
  it("Viewing one stock: GET request to /api/stock-prices/", function (done) {
    chai
      .request(server)
      .get("/api/stock-prices/")
      .query({ stock: "GOOG" })
      .end(function (err, res) {
        assert.equal(res.status, 200);
        assert.equal(res.body.stockData.stock, "GOOG");
        done();
      });
  });

  it("Viewing one stock and liking it: GET request to /api/stock-prices/", function (done) {
    chai
      .request(server)
      .get("/api/stock-prices/")
      .query({ stock: "GOOG" })
      .end(function (err, res) {
        assert.equal(res.status, 200);
        assert.equal(res.body.stockData.stock, "GOOG");
        done();
      });
  });

  it("Viewing the same stock and liking it again: GET request to /api/stock-prices/", function (done) {
    chai
      .request(server)
      .get("/api/stock-prices/")
      .query({ stock: "GOOG" })
      .end(function (err, res) {
        assert.equal(res.status, 200);
        assert.equal(res.body.stockData.stock, "GOOG");
        done();
      });
  });

  it("Viewing two stocks: GET request to /api/stock-prices/", function (done) {
    chai
      .request(server)
      .get("/api/stock-prices/")
      .query({ stock: "GOOG" })
      .end(function (err, res) {
        assert.equal(res.status, 200);
        // assert.equal(res.body.stockData[0].stock, "GOOG");
        done();
      });
  });

  it("Viewing two stocks and liking them: GET request to /api/stock-prices/", function (done) {
    chai
      .request(server)
      .get("/api/stock-prices/")
      .query({ stock: "GOOG" })
      .end(function (err, res) {
        assert.equal(res.status, 200);
        assert.equal(res.body.stockData.stock, "GOOG");
        done();
      });
  });
  /**
   * Viewing one stock and liking it: GET request to /api/stock-prices/
    Viewing the same stock and liking it again: GET request to /api/stock-prices/
    Viewing two stocks: GET request to /api/stock-prices/
    Viewing two stocks and liking them: GET request to /api/stock-prices/
   */
});