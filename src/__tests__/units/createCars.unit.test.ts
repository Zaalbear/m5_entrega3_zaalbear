import { CarsServices } from "../../services/CarsServices";
import { mockCreateCar } from "../__mocks__/cars.mocks";
import { carDefaultExpect } from "../utils/carsDefaultExpect";

describe("Unit tests: create car", () => {
  test("Create car should works successfully", async () => {
    const carsServices = new CarsServices();

    const data = await carsServices.create(mockCreateCar);

    expect(data.id).toBeDefined;
    carDefaultExpect(data, mockCreateCar)
  });
});
