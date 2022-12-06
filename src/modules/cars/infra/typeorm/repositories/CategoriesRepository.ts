import { Repository, getRepository } from "typeorm";


import { ICategoriesRepository, ICreateCategoryDTO } from "@modules/cars/repositories/ICategoriesRepository";
import { Category } from "@modules/cars/infra/typeorm/entities/Category";

// singleton instância de um classe uma instância global

// Responsável por cuidar das funcionalidade ao banco de dados etc
class CategoriesRepository implements ICategoriesRepository {

  private repository: Repository<Category>; // acesso só internamente

  //private static INSTANCE: CategoriesRepository; // para listar os produtos

  constructor() {
    this.repository = getRepository(Category);
  }

  // public static getInstance(): CategoriesRepository {
  //   if (!CategoriesRepository.INSTANCE) {
  //     CategoriesRepository.INSTANCE = new CategoriesRepository();
  //   }
  //   return CategoriesRepository.INSTANCE;
  // }

  async create({ name, description}: ICreateCategoryDTO): Promise<void> { // função sem retorno
    const category = this.repository.create({
      description,
      name,
    }); // cria a entidade para poder salvar

    // manda pro categories name, descrição, uuid
    await this.repository.save(category)
  }

  async list(): Promise<Category[]> { // função q retorna a lista de Category
    const categories = await this.repository.find(); // retorna uma lista
    return categories;
  }

  async findByName(name: string): Promise<Category> { // função de verificação de duplicação do name
    // SELECT * FROM categories WHERE name = "name" LIMIT 1
    const category = await this.repository.findOne({ name })
    return category;
  }
}

export { CategoriesRepository };