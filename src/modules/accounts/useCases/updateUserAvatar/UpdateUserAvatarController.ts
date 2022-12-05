import { Request, Response } from "express";
import { container } from "tsyringe";

import { UpdateUserAvatarUseCase } from "@modules/accounts/useCases/updateUserAvatar/UpdateUserAvatarUseCase";


class UpdateUserAvatarController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.user;
    // receber arquivo
    const avatar_file = request.file.filename;

    const updateUserAvatarUseCase = container.resolve(UpdateUserAvatarUseCase);

    await updateUserAvatarUseCase.execute({ user_id: id, avatar_file });

    return response.status(200).send();
  }
}

export { UpdateUserAvatarController }