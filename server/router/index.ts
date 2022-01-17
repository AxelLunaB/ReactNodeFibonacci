import { Router } from "express";
import fibRouter from "./fibRouter";
/**
 *
 * File that is in charge of compiling all the routes we would have in the application.
 */
const routes = Router();

routes.use("/api", fibRouter);

export default routes;
