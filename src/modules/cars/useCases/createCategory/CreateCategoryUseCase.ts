import { inject, injectable } from "tsyringe";

import { ICategoriesRepository } from "../../repositories/ICategoriesRepository";

interface IRequest {
  name: string;
  description: string;
}

@injectable()
class CreateCategoryUseCase {
  // precisa do private para acessar
  constructor(
    @inject("CategoriesRepository")
    private categoriesRepository: ICategoriesRepository) {}

  async execute({ name, description }: IRequest): Promise<void> {
    // pega o categoriesRepository e procura pelo name
    const categoryAlreadyExists = await this.categoriesRepository.findByName(name);

    if (categoryAlreadyExists) { // se já existir da um error
      throw new Error("Categoy already exists!"); // sempre q tiver error dentro do service
    }

    this.categoriesRepository.create({ name, description }); // aqui chama o categoriesRepository
  }
}

export { CreateCategoryUseCase };