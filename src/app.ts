import "express-async-errors";
import express, { json } from "express";
import helmet from "helmet";
import { carsRouter } from "./routes/cars.routes";
import { handleErrors } from "./middlewares/handleErros.middlware";

export const app = express();

app.use(helmet());
app.use(json());

app.use("/cars", carsRouter);

app.use(handleErrors);
