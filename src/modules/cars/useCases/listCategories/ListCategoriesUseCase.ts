import { Category } from '../../model/Category';
import { ICategoriesRepository } from '../../repositories/ICategoriesRepository';

class ListCategoriesUseCase {
  // precisa do private para acessar
  constructor(private categoriesRepository: ICategoriesRepository) {}

  execute(): Category[] { // retorna lista de categoria
    const categories = this.categoriesRepository.list();

    return categories;
  }
}

export { ListCategoriesUseCase };