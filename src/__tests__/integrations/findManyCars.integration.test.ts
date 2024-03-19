import { prisma } from "../../database/prisma";
import { createListCarMock } from "../__mocks__/cars.mocks";
import { carDefaultExpect } from "../utils/carsDefaultExpect";
import { request } from "../utils/request";

describe("Inatragration tests: find many car", () => {
  test("Should be able to get all cars successfully", async () => {
    await prisma.cars.createMany({ data: createListCarMock });

    const data = await request
      .get("/cars")
      .expect(200)
      .then((response) => response.body);

    expect(data).toHaveLength(2);

    expect(data[0].id).toBeDefined;
    carDefaultExpect(data[0], createListCarMock[0]);

    expect(data[1].id).toBeDefined;
    carDefaultExpect(data[1], createListCarMock[1]);
  });
});
