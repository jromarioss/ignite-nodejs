import { CarsRepositoryInMemory } from "@modules/cars/repositories/in-memory/CarsRepositoryInMemory";
import { ListAvailableCarsUseCase } from "@modules/cars/useCases/listAvailableCars/ListAvailableCarsUseCase";

let listAvailableCarsUseCase: ListAvailableCarsUseCase;
let carsRepositoryInMemory: CarsRepositoryInMemory;

describe("List Cars", () => {

  beforeEach(() => {
    carsRepositoryInMemory = new CarsRepositoryInMemory();
    listAvailableCarsUseCase = new ListAvailableCarsUseCase(carsRepositoryInMemory);
  });

  it("should be able to list all available cars", async () => {
    // cria um carro.
    const car = await carsRepositoryInMemory.create({
      name: "Car1",
      description: "Car test",
      daily_rate: 110,
      license_plate: "ABC-2223",
      fine_amount: 100,
      brand: "Car_brand",
      category_id: "category_id"
    });

    const cars = await listAvailableCarsUseCase.execute({});

    expect(cars).toEqual([car]); // que retorna um [] de car
  });

  it("should be able to list all available cars by name by brand", async () => {
    // cria um carro.
    const car = await carsRepositoryInMemory.create({
      name: "Car2",
      description: "Car test",
      daily_rate: 110,
      license_plate: "ABC-2223",
      fine_amount: 100,
      brand: "Car_brand_test",
      category_id: "category_id"
    });

    const cars = await listAvailableCarsUseCase.execute({
      brand: "Car_brand_test",
    });

    expect(cars).toEqual([car]); // que retorna um [] de car
  });

  it("should be able to list all available cars by name by name", async () => {
    // cria um carro.
    const car = await carsRepositoryInMemory.create({
      name: "Car3",
      description: "Car test",
      daily_rate: 110,
      license_plate: "ABC-1234",
      fine_amount: 100,
      brand: "Car_brand_test",
      category_id: "category_id"
    });

    const cars = await listAvailableCarsUseCase.execute({
      name: "Car3",
    });

    expect(cars).toEqual([car]); // que retorna um [] de car
  });

  it("should be able to list all available cars by name by category", async () => {
    // cria um carro.
    const car = await carsRepositoryInMemory.create({
      name: "Car4",
      description: "Car test",
      daily_rate: 110,
      license_plate: "AdC-1234",
      fine_amount: 100,
      brand: "Car_brand_test",
      category_id: "12345"
    });

    const cars = await listAvailableCarsUseCase.execute({
      category_id: "12345",
    });

    expect(cars).toEqual([car]); // que retorna um [] de car
  });
});