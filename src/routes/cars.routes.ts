import { Router } from "express";
import { CarsController } from "../controllers/CarsController";
import { validate } from "../middlewares/validateTask.middleware";
import { carsCreateSchema, carsUpdateSchema } from "../schemas/cars.schemas";

export const carsRouter = Router();
const carsControler = new CarsController();

carsRouter.post("", validate.body(carsCreateSchema), carsControler.create);
carsRouter.get("", carsControler.getMany);
carsRouter.get("/:id", validate.id, carsControler.getById);
carsRouter.patch(
  "/:id",
  validate.id,
  validate.body(carsUpdateSchema),
  carsControler.update
);
carsRouter.delete("/:id", validate.id, carsControler.delete);
