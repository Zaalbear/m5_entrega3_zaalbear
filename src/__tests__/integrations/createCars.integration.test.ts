import { mockCreateCar, mockCreateInvalidCar } from "../__mocks__/cars.mocks";
import { carDefaultExpect } from "../utils/carsDefaultExpect";
import { request } from "../utils/request";

describe("Inatragration tests: create car", () => {
  test("Should be able to create a car successfully", async () => {
    const data = await request
      .post("/cars")
      .send(mockCreateCar)
      .expect(201)
      .then((response) => response.body);

    expect(data.id).toBeDefined();
    carDefaultExpect(data, mockCreateCar);
  });

  test("Should throw a error when body is invalid", async () => {
    const data = await request
      .post(`/cars`)
      .send(mockCreateInvalidCar)
      .expect(400)
      .then((response) => response.body);
      
    expect(data.message[0].message).toBe("Expected string, received number")
    expect(data.message[1].message).toBe("Expected string, received boolean")
    expect(data.message[2].message).toBe("Required")
    expect(data.message[3].message).toBe("Expected number, received string")
    expect(data.message[4].message).toBe("Expected number, received string")
  })
});
