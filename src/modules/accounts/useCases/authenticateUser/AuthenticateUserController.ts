import { Request, Response } from "express";
import { container } from "tsyringe";

import { AuthenticateUserUseCase } from "@modules/accounts/useCases/authenticateUser/AuthenticateUserUseCase";


class AuthenticateUserController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { password, email } = request.body;

    const authenticateUserUsercase = container.resolve(AuthenticateUserUseCase);

    const token = await authenticateUserUsercase.execute({ email, password });

    return response.json(token);
  }
}

export { AuthenticateUserController }