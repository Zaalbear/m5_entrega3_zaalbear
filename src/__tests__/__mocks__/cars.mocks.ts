export const mockCars = {
  id: "5957624e-c921-45a8-b472-241b8a522d62",
  name: "test",
  description: "Testing",
  brand: "Testing",
  year: 2024,
  km: 13000,
};

export const mockCreateCar = {
  name: "test",
  description: "Testing",
  brand: "Testing",
  year: 2024,
  km: 13000,
};

export const mockCreateInvalidCar = {
  name: 123,
  description: false,
  year: "2024",
  km: "13000",
};

export const mockUpdateCar = {
  name: "updated test",
  description: "updated Testing",
  brand: "updated Testing",
  year: 2024,
  km: 13000,
};

export const mockInvalidUpdateCar = {
  name: 123,
  description: 321,
  brand: false,
  year: "2024",
  km: "13000",
};

export const mockCarsList = [
  {
    id: "5957624e-c921-45a8-b472-241b8a522d62",
    name: "test",
    description: "Testing",
    brand: "Testing",
    year: 2024,
    km: 13000,
  },
  {
    id: "63bfd935-5966-48fe-aad9-1616dd9f66de",
    name: "test2",
    description: "Testing2",
    brand: "Testing2",
    year: 2023,
    km: 31000,
  },
];

export const mockCreateCarsList = [
  {
    name: "test",
    description: "Testing",
    brand: "Testing",
    year: 2024,
    km: 13000,
  },
  {
    name: "test2",
    description: "Testing2",
    brand: "Testing2",
    year: 2023,
    km: 31000,
  },
];
