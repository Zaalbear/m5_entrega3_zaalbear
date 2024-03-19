import { prisma } from "../../database/prisma";
import { mockCreateCar, mockInvalidUpdateCar, mockUpdateCar } from "../__mocks__/cars.mocks";
import { request } from "../utils/request";

describe("Inatragration tests: update car", () => {
  test("Should be able to update a car successfully", async () => {
    const car = await prisma.cars.create({ data: mockCreateCar });

    const data = await request
      .patch(`/cars/${car.id}`)
      .send(mockUpdateCar)
      .expect(200)
      .then((response) => response.body);

    const newCar = { ...car, ...mockUpdateCar };

    expect(data).toStrictEqual(newCar);
  });

  test("Should throw a error when id is invalid", async () => {
    const data = await request
      .patch("/cars/63bfd935-5966-48fe-aad9-1616dd9f66de")
      .expect(404)
      .then((response) => response.body);

    expect(data.message).toBe("Car not found.");
  });

  test("Should throw a error when body is invalid", async () => {
    const car = await prisma.cars.create({ data: mockCreateCar });

    const data = await request
      .patch(`/cars/${car.id}`)
      .send(mockInvalidUpdateCar)
      .expect(400)
      .then((response) => response.body);
      
    expect(data.message[0].message).toBe("Expected string, received number")
    expect(data.message[1].message).toBe("Expected string, received number")
    expect(data.message[2].message).toBe("Expected string, received boolean")
    expect(data.message[3].message).toBe("Expected number, received string")
    expect(data.message[4].message).toBe("Expected number, received string")
  })
});
