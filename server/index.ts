import express from "express";
import routes from "./router/index";
/**
 *
 * Our main entry point to the application.
 *
 */
const PORT = 3001;
const app = express();

app.use(routes);

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});

export default app;
