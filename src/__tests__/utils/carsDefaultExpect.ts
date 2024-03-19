import { carBody, carsCreateBody } from "../../interfaces/cars.interfaces";

export const carDefaultExpect = (data: carBody, expectData: carsCreateBody) => {
  expect(data.name).toBe(expectData.name);
  expect(data.description).toBe(expectData.description);
  expect(data.brand).toBe(expectData.brand);
  expect(data.year).toBe(expectData.year);
  expect(data.km).toBe(expectData.km);
};
