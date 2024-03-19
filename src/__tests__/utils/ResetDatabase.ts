import { prisma } from "../../database/prisma";

beforeEach(async () => {
  await prisma.cars.deleteMany();
});
