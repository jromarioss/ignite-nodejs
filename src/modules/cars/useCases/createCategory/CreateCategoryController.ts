import { Request, Response } from "express";

import { CreateCategoryUseCase } from "./CreateCategoryUseCase";

class CreateCategoryController {
  constructor(private createCategoryUseCase: CreateCategoryUseCase) {}

  handle(request: Request, response: Response): Response {
    const { name, description } = request.body; // pega o nome, descrição do body

    this.createCategoryUseCase.execute({ name, description });

    // status 201 algo criado com sucesso, se não manda json manda send
    return response.status(201).send();
  }
}

export { CreateCategoryController };