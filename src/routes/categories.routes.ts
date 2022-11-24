import { Router } from "express"; // Router para criar as rotas
import multer from "multer";

import { createCategoryController } from "../modules/cars/useCases/createCategory";
import { importCategoryController } from "../modules/cars/useCases/importCategory";
import { listcategoriesController } from "../modules/cars/useCases/listCategories";

const categoriesRoutes = Router(); // criar a Rota categories

// configuração do multer
const upload = multer({
  dest: "./tmp",
});

// rota de criar categorias
categoriesRoutes.post("/", (request, response) => {
  console.log("oladwadwd")
  return createCategoryController.handle(request, response);
});

// rota de listar categoria
categoriesRoutes.get("/", (request, response) => {
  return listcategoriesController.handle(request, response)
});

// rota de upload de arquivo
categoriesRoutes.post("/import", upload.single("file"), (request, response) => {
  return importCategoryController.handle(request, response);
});

export { categoriesRoutes }; // exporta o categoriesRoutes