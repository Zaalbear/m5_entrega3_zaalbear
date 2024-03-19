import { prisma } from "../../database/prisma";
import { CarsServices } from "../../services/CarsServices";
import { createCarMock } from "../__mocks__/cars.mocks";

describe("Unit tests: delete car", () => {
  test("Delete car should works successfully", async () => {
    const car = await prisma.cars.create({ data: createCarMock });

    const carsServices = new CarsServices();

    await carsServices.delete(car.id);
  });
});
