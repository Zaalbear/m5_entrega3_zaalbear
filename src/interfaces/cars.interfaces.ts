import { z } from "zod";
import { carsCreateSchema, carsSchema, carsUpdateSchema } from "../schemas/cars.schemas";

export type carBody = z.infer<typeof carsSchema>;
export type carsCreateBody = z.infer<typeof carsCreateSchema>;
export type carsUpdateBody = z.infer<typeof carsUpdateSchema>;
