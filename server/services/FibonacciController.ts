import { Worker } from "worker_threads";

/**
 * Class in charge of managing the fibonacci api calculations through worker threads
 * so we dont block the application when doing the cpu intensive calculations.
 *
 */
class FibonacciController {
  FibonacciCalculator = async (req, res) => {
    try {
      const fibonacciRequest = parseInt(req.params.fibNumber);
      const worker = new Worker("./server/services/fibonacciWorker.js", {
        workerData: { fibNumber: fibonacciRequest },
      });

      worker.once("message", (result) => {
        console.log(`${fibonacciRequest}th Fibonacci`);
        res.send({ fibonacciResult: result });
      });

      worker.on("error", (err) => {
        console.error(err);
        res.status(500).send(err.message);
      });
    } catch (e) {
      console.error(e);
      res.status(500).send(e.message);
    }
  };
}

export default new FibonacciController();
