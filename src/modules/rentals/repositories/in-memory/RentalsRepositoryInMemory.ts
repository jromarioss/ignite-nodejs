import { ICreateRentalsDTO } from "@modules/rentals/dtos/IcreateRentalsDTO";
import { Rental } from "@modules/rentals/infra/typeorm/entities/Rental";
import { IRentalsRepository } from "@modules/rentals/repositories/IRentalsRepository";

class RentalsRepositoryInMemory implements IRentalsRepository {

  rentals: Rental[] = [];

  async findOpenRentalByCar(car_id: string): Promise<Rental> {
    // se n tem nada ao end_date então n foi devolvido
    return this.rentals.find(rental => rental.car_id === car_id && !rental.end_date);
  }

  async findOpenRentalByUser(user_id: string): Promise<Rental> {
    return this.rentals.find(rental => rental.user_id === user_id && !rental.end_date);
  }

  async create({ user_id, car_id, expected_return_date }: ICreateRentalsDTO): Promise<Rental> {
    const rental = new Rental();

    Object.assign(rental, {
      user_id, car_id, expected_return_date, start_date: new Date(),
    });

    this.rentals.push(rental);

    return rental;
  }
}

export { RentalsRepositoryInMemory }