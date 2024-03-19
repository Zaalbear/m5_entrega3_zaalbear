import { z } from "zod";

export const carsSchema = z.object({
  id: z.string(),
  name: z.string().min(3).max(255),
  description: z.string().min(3).max(255).nullish(),
  brand: z.string().min(3).max(255),
  year: z.number().positive(),
  km: z.number().positive(),
});

export const carsCreateSchema = carsSchema.omit({ id: true });
export const carsUpdateSchema = carsCreateSchema.partial();
