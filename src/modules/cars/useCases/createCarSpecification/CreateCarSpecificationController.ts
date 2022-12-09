import { Request, Response } from "express";
import { container } from "tsyringe";

import { CreateCarSpeficationUseCase } from "./CreateCarSpecificationUseCase";

class CreateCarSpecificationController { 
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const { specifications_id } = request.body;
    const createCarSpecificationUseCase = container.resolve(CreateCarSpeficationUseCase);

    const cars = await createCarSpecificationUseCase.execute({ car_id: id, specifications_id });

    return response.json(cars);
  }
}

export { CreateCarSpecificationController }