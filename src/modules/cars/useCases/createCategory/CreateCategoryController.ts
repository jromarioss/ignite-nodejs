import { Request, Response } from "express";
import { container } from "tsyringe";

import { CreateCategoryUseCase } from "./CreateCategoryUseCase";

class CreateCategoryController {
  

  async handle(request: Request, response: Response): Promise<Response> {
    const { name, description } = request.body; // pega o nome, descrição do body

    const createCategoryUseCase = container.resolve(CreateCategoryUseCase);

    await createCategoryUseCase.execute({ name, description });

    // status 201 algo criado com sucesso, se não manda json manda send
    return response.status(201).send();
  }
}

export { CreateCategoryController };