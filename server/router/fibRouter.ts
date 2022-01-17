import express from "express";
import FibonacciController from "../services/FibonacciController";
import { isPositiveWholeNum } from "../utils/common";

/**
 *
 * File that manages our routes to the fibonacci api, where we can sanitize the incoming data.
 */
const fibRouter = express.Router();

fibRouter.use(express.json());

fibRouter.get(
  "/fibonacci/:fibNumber",
  isPositiveWholeNum("fibNumber"),
  FibonacciController.FibonacciCalculator
);

export default fibRouter;
