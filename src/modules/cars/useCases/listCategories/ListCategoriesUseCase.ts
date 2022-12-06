import { inject, injectable } from "tsyringe";

import { Category } from "@modules/cars/infra/typeorm/entities/Category";
import { ICategoriesRepository } from "@modules/cars/repositories/ICategoriesRepository";

@injectable()
class ListCategoriesUseCase {
  // precisa do private para acessar
  constructor(
    @inject("CategoriesRepository")
    private categoriesRepository: ICategoriesRepository) {}

  async execute(): Promise<Category[]> { // retorna lista de categoria
    const categories = await this.categoriesRepository.list();

    return categories;
  }
}

export { ListCategoriesUseCase };