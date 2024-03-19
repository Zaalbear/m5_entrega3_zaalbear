import { CarsServices } from "../../services/CarsServices";
import { createCarMock } from "../__mocks__/cars.mocks";
import { carDefaultExpect } from "../utils/carsDefaultExpect";

describe("Unit tests: create car", () => {
  test("Create car should works successfully", async () => {
    const carsServices = new CarsServices();

    const data = await carsServices.create(createCarMock);

    expect(data.id).toBeDefined;
    carDefaultExpect(data, createCarMock);
  });
});
