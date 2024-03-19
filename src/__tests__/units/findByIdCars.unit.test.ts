import { prisma } from "../../database/prisma";
import { CarsServices } from "../../services/CarsServices";
import { createCarMock } from "../__mocks__/cars.mocks";

describe("Unit tests: update car", () => {
  test("Update car should works successfully", async () => {
    const car = await prisma.cars.create({ data: createCarMock });

    const carsServices = new CarsServices();

    const data = await carsServices.findById(car.id);

    expect(data?.id).toBeDefined();
    expect(data?.name).toBe(createCarMock.name);
    expect(data?.description).toBe(createCarMock.description);
    expect(data?.brand).toBe(createCarMock.brand);
    expect(data?.year).toBe(createCarMock.year);
    expect(data?.km).toBe(createCarMock.km);
  });
});
