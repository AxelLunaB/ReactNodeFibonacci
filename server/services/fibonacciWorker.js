const { parentPort, workerData } = require("worker_threads");

/**
 *
 * Script that does the fibonacci calculations in a iterative approach which is faster
 * than the recursive solution.
 *
 * file is in js because workers does not support ts directly yet.
 * I would need to use solutions like ts-node to compile it, but I wanted to limit
 * myself to node and express.
 */
parentPort.postMessage(getFibonacciNumber(workerData.fibNumber));

function getFibonacciNumber(fibNumber) {
  let a = BigInt(0);
  let b = BigInt(1);
  let c = BigInt(1);
  for (let j = 2; j <= fibNumber; j++) {
    c = a + b;
    a = b;
    b = c;
  }
  return b.toString();
}
