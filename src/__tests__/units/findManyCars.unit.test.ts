import { prisma } from "../../database/prisma";
import { CarsServices } from "../../services/CarsServices";
import { createListCarMock } from "../__mocks__/cars.mocks";
import { carDefaultExpect } from "../utils/carsDefaultExpect";

describe("Unit tests: find many cars", () => {
  test("Find many car should works successfully", async () => {
    await prisma.cars.createMany({ data: createListCarMock });
    const carsServices = new CarsServices();

    const data = await carsServices.findMany();

    expect(data).toHaveLength(createListCarMock.length);
    carDefaultExpect(data[0], createListCarMock[0]);
    carDefaultExpect(data[1], createListCarMock[1]);
  });
});
