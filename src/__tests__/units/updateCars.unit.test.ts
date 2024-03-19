import { prisma } from "../../database/prisma";
import { CarsServices } from "../../services/CarsServices";
import { createCarMock, updateCarMock } from "../__mocks__/cars.mocks";

describe("Unit tests: update car", () => {
  test("Update car should works successfully", async () => {
    const car = await prisma.cars.create({ data: createCarMock });

    const carsServices = new CarsServices();

    const data = await carsServices.update(car.id, updateCarMock);

    const newCar = { ...car, ...updateCarMock };

    expect(data).toStrictEqual(newCar);
  });
});
