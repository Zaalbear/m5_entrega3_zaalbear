import { NextFunction, Request, Response } from "express";
import { AnyZodObject } from "zod";
import { prisma } from "../database/prisma";

class ValidateCar {
  public body =
    (schema: AnyZodObject) =>
    (req: Request, __: Response, next: NextFunction) => {
      req.body = schema.parse(req.body);

      return next();
    };

  public id = async (req: Request, res: Response, next: NextFunction) => {
    const { id } = req.params;
    const foundTask = await prisma.cars.findFirst({
      where: { id: String(id) },
    });

    if (!foundTask) {
      return res.status(404).json({ message: "Car not found." });
    }

    return next();
  };
}

export const validate = new ValidateCar();
