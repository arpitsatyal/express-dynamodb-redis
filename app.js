import express from "express";

const app = express();
const morgan = require("morgan");

const PORT = process.env.PORT || 4200;
import routes from "./routes.js";

/* middlewares */
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/", routes);

/* error handling middleware */
app.use((err, req, res, next) => {
  let statusCode;
  console.log("err is>>", err);
  err.code ? (statusCode = err.code) : (statusCode = 400);
  res.status(statusCode).json({ err });
});

app.listen(PORT, () => console.log(`Server is listening at port ${PORT}`));
