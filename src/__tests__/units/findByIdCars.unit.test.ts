import { prisma } from "../../database/prisma";
import { CarsServices } from "../../services/CarsServices";
import { mockCars, mockCreateCar } from "../__mocks__/cars.mocks";

describe("Unit tests: update car", () => {
  test("Update car should works successfully", async () => {
    const car = await prisma.cars.create({ data: mockCreateCar });

    const carsServices = new CarsServices();

    const data = await carsServices.findById(car.id);

    expect(data?.id).toBeDefined();
    expect(data?.name).toBe(mockCars.name);
    expect(data?.description).toBe(mockCars.description);
    expect(data?.brand).toBe(mockCars.brand);
    expect(data?.year).toBe(mockCars.year);
    expect(data?.km).toBe(mockCars.km);
  });
});
