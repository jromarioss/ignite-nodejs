import { ICategoriesRepository } from "../../repositories/ICategoriesRepository";

interface IRequest {
  name: string;
  description: string;
}

class CreateCategoryUseCase {
  // precisa do private para acessar
  constructor(private categoriesRepository: ICategoriesRepository) {}

  execute({ name, description }: IRequest): void {
    // pega o categoriesRepository e procura pelo name
    const categoryAlreadyExists = this.categoriesRepository.findByName(name);

    if (categoryAlreadyExists) { // se já existir da um error
      throw new Error("Categoy already exists!"); // sempre q tiver error dentro do service
    }

    this.categoriesRepository.create({ name, description }); // aqui chama o categoriesRepository
  }
}

export { CreateCategoryUseCase };