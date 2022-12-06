import { container } from "tsyringe";
import { Request, Response } from "express";

import { ListCategoriesUseCase } from "@modules/cars/useCases/listCategories/ListCategoriesUseCase";

class ListCategoriesController {

  async handle(request: Request, response: Response): Promise<Response> {

    const listCategoriesUseCase = container.resolve(ListCategoriesUseCase);

    const all = await listCategoriesUseCase.execute(); // chama a lista

    return response.json(all);
  }
}

export { ListCategoriesController };