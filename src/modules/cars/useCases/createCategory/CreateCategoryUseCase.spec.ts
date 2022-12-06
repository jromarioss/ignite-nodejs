import { AppError } from "@shared/errors/AppError";
import { CategoriesRepositoryInMemory } from "@modules/cars/repositories/in-memory/CategoriesRepositoryInMemory";
import { CreateCategoryUseCase } from "@modules/cars/useCases/createCategory/CreateCategoryUseCase";

let createCategoryUseCase: CreateCategoryUseCase;
let categoriesRepositoryInMemory: CategoriesRepositoryInMemory;

// agrupa os teste
describe("Create Category", () => {

  // faça antes do teste
  beforeEach(() => {
    categoriesRepositoryInMemory = new CategoriesRepositoryInMemory();
    createCategoryUseCase = new CreateCategoryUseCase(categoriesRepositoryInMemory);
  })

  it("should be able to create a new category", async () => {
    const category = {
      name: "Category Test",
      description: "Category description Test", 
    }

    await createCategoryUseCase.execute({
      name: category.name,
      description: category.description
    });

    const categoryCreated = await categoriesRepositoryInMemory.findByName(category.name);

    // se tiver a propriedade id foi criada
    expect(categoryCreated).toHaveProperty("id");
  });

  it("should not be able to create a new category with the same name", async () => {
    
    expect(async () => {
      const category = {
        name: "Category Test",
        description: "Category description Test", 
      }
  
      await createCategoryUseCase.execute({
        name: category.name,
        description: category.description
      });
  
      await createCategoryUseCase.execute({
        name: category.name,
        description: category.description
      });
    }).rejects.toBeInstanceOf(AppError)
  });
  
});