import { prisma } from "../../database/prisma";
import { CarsServices } from "../../services/CarsServices";
import { mockCreateCar, mockUpdateCar } from "../__mocks__/cars.mocks";

describe("Unit tests: update car", () => {
  test("Update car should works successfully", async () => {
    const car = await prisma.cars.create({ data: mockCreateCar });

    const carsServices = new CarsServices();

    const data = await carsServices.update(car.id, mockUpdateCar);

    const newCar = { ...car, ...mockUpdateCar }

    expect(data).toStrictEqual(newCar)
  });
});
