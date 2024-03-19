import { prisma } from "../../database/prisma";
import { createCarMock } from "../__mocks__/cars.mocks";
import { request } from "../utils/request";

describe("Inatragration tests: delete car", () => {
  test("Should be able to delete a car successfully", async () => {
    const car = await prisma.cars.create({ data: createCarMock });

    await request.delete(`/cars/${car.id}`).expect(204);
  });

  test("Should throw a error when id is invalid", async () => {
    const data = await request
      .delete("/cars/63bfd935-5966-48fe-aad9-1616dd9f66de")
      .expect(404)
      .then((response) => response.body);

    expect(data.message).toBe("Car not found.");
  });
});
