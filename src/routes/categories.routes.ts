import { Router } from "express"; // Router para criar as rotas
import multer from "multer";

import { CreateCategoryController } from "../modules/cars/useCases/createCategory/CreateCategoryController";
import { ImportCategoryController } from "../modules/cars/useCases/importCategory/ImportCategoryController";
import { ListCategoriesController } from "../modules/cars/useCases/listCategories/ListCategoriesController";

const categoriesRoutes = Router(); // criar a Rota categories

// configuração do multer
const upload = multer({
  dest: "./tmp",
});

const createCategoryController = new CreateCategoryController();
const importCategoryController = new ImportCategoryController();
const listcategoriesController = new ListCategoriesController();

// rota de criar categorias
categoriesRoutes.post("/", createCategoryController.handle);

// rota de listar categoria
categoriesRoutes.get("/", listcategoriesController.handle);

// rota de upload de arquivo
categoriesRoutes.post("/import", upload.single("file"), importCategoryController.handle);

export { categoriesRoutes }; // exporta o categoriesRoutes