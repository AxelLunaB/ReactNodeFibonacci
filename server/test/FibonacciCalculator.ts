import chai from "chai";
import chaiHttp from "chai-http";
import app from "./../index";
const should = chai.should();

chai.use(chaiHttp);

describe("Fibonacci Test", () => {
  /*
   * Test the /GET fibonacci route route
   */
  describe("/GET fibonacci", () => {
    it("it should return a 200 status code and a fibonacci calculation", (done) => {
      chai
        .request(app)
        .get("/api/fibonacci/10")
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.have.property("fibonacciResult");
          done();
        });
    });

    it("it fails as expected it should return a 400 status code and error", (done) => {
      chai
        .request(app)
        .get("/api/fibonacci/A")
        .end((err, res) => {
          res.should.have.status(400);
          res.should.have.property("text", "query params malformed");
          done();
        });
    });
  });
});
