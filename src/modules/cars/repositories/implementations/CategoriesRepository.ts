import { Category } from "../../model/Category";
import { ICategoriesRepository, ICreateCategoryDTO } from "../ICategoriesRepository";

// singleton instância de um classe uma instância global

// Responsável por cuidar das funcionalidade ao banco de dados etc
class CategoriesRepository implements ICategoriesRepository {

  private categories: Category[]; // do tipo array de Category, só o categories tem acesso

  private static INSTANCE: CategoriesRepository; // para listar os produtos

  private constructor() {
    this.categories = []; // aqui que cria o categories
  }

  public static getInstance(): CategoriesRepository {
    if (!CategoriesRepository.INSTANCE) {
      CategoriesRepository.INSTANCE = new CategoriesRepository();
    }

    return CategoriesRepository.INSTANCE;
  }

  create({ name, description}: ICreateCategoryDTO): void { // função sem retorno
    // new Category chama o constructor no category
    const category = new Category();
    
    // Object assing manda item a item pro category
    Object.assign(category, {
      name,
      description,
      created_at: new Date(),
    });

    // manda pro categories name, descrição, uuid
    this.categories.push(category);
  }

  list(): Category[] { // função q retorna a lista de Category
    return this.categories;
  }

  findByName(name: string): Category { // função de verificação de duplicação do name
    // find percorre o array procurando pelo name e retorna
    const category = this.categories.find(category => category.name === name);
    return category;
  }
}

export { CategoriesRepository };