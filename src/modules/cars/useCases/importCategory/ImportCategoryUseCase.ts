import fs from "fs";
import { parse } from "csv-parse";

import { ICategoriesRepository } from "../../repositories/ICategoriesRepository";

interface IImportCategory {
  name: string;
  description: string;
}

class ImportCategoryUseCase {
  constructor(private categoriesRepository: ICategoriesRepository) {}

  
  loadCategories(file: Express.Multer.File): Promise<IImportCategory[]> {
    return new Promise((resolve, reject) => {
      const stream = fs.createReadStream(file.path); // faz leitura em parte
      const categories: IImportCategory[] = [];
  
      const parseFile = parse();
  
      // pipe pega oque foi lido e joga pra onde nos quer
      stream.pipe(parseFile);
  
      parseFile.on("data", async (line) => {
        const [name, description] = line;
        categories.push({ name, description });
      })
      .on("end", () => {
        fs.promises.unlink(file.path); // para remover os arquivos do tmp
        resolve(categories);
      })
      .on("error", (err) => {
        reject(err);
      });
    });
  }

  async execute(file: Express.Multer.File): Promise<void> {
    const categories = await this.loadCategories(file);

    categories.map(async (category) => {
      const { name, description } = category;

      const existCategory = this.categoriesRepository.findByName(name); // existe um categoria

      if (!existCategory) { // se ñ tem cria
        this.categoriesRepository.create({
          name,
          description,
        });
      }
    });
  }
}

export { ImportCategoryUseCase };