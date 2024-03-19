import { prisma } from "../database/prisma";
import {
  carBody,
  carsCreateBody,
  carsUpdateBody,
} from "../interfaces/cars.interfaces";

export class CarsServices {
  public create = async (data: carsCreateBody) => {
    return await prisma.cars.create({ data });
  };

  public findMany = async () => {
    return await prisma.cars.findMany();
  };

  public findById = async (id: string) => {
    return await prisma.cars.findFirst({ where: { id } });
  };

  public update = async (id: string, data: carsUpdateBody) => {
    return await prisma.cars.update({ where: { id }, data });
  };

  public delete = async (id: string) => {
    return await prisma.cars.delete({ where: { id } });
  };
}
