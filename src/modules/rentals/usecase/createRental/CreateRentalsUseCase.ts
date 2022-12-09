import dayjs from "dayjs";

import { Rental } from "@modules/rentals/infra/typeorm/entities/Rental";
import { IRentalsRepository } from "@modules/rentals/repositories/IRentalsRepository";
import { AppError } from "@shared/errors/AppError";

interface IRequest {
  user_id: string;
  car_id: string;
  expected_return_date: Date;
}

class CreateRentalsUseCase {
  constructor(
    private rentalsRepository: IRentalsRepository
  ) {}
  async execute({ user_id, car_id, expected_return_date }: IRequest): Promise<Rental> {
    // - Não deve ser possível cadastrar um novo aluguel, caso já exista um aberto para o mesmo usuário.
    const carUnaAvailable = await this.rentalsRepository.findOpenRentalByCar(car_id);
    
    if (carUnaAvailable) {
      throw new AppError("Car in unavailable!");
    }
    
    // - Não deve ser possível cadastrar um novo aluguel, caso já exista um aberto para o mesmo carro.
    const rentalOpenToUser = await this.rentalsRepository.findOpenRentalByUser(user_id);
    
    if (rentalOpenToUser) {
      throw new AppError("There's a rental in progress for user!");
    }

    // - O aluguel deve ter duração mínima de 24 horas.
    const dateNow = new Date();
    const compare = dayjs(expected_return_date).diff(dateNow, "hours"); // converte a comparação em hora

    console.log("compare date", compare);

    const rental = await this.rentalsRepository.create({
      user_id, car_id, expected_return_date
    });

    return rental;
  }
}

export { CreateRentalsUseCase }