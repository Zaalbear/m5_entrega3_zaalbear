import { prisma } from "../../database/prisma";
import { createCarMock } from "../__mocks__/cars.mocks";
import { carDefaultExpect } from "../utils/carsDefaultExpect";
import { request } from "../utils/request";

describe("Inatragration tests: find many car", () => {
  test("Should be able to get one car successfully", async () => {
    const car = await prisma.cars.create({ data: createCarMock });

    const data = await request
      .get(`/cars/${car.id}`)
      .expect(200)
      .then((response) => response.body);

    expect(data.id).toBeDefined();
    carDefaultExpect(data, createCarMock);
  });

  test("Should throw a error when id is invalid", async () => {
    const data = await request
      .patch("/cars/63bfd935-5966-48fe-aad9-1616dd9f66de")
      .expect(404)
      .then((response) => response.body);

    expect(data.message).toBe("Car not found.");
  });
});
