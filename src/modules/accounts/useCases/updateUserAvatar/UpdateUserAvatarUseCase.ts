import { inject, injectable } from "tsyringe";

import { deleteFile } from "@utils/file";
import { IUsersRepository } from "@modules/accounts/repositories/IUsersRepository";

// adicionar colunar avatar na tabela de users
// refatorar o usuario com coluna avatar
// configuração upload no multer
// criar a regra de negocio do upload
// criar controller

interface IRequest {
  user_id: string;
  avatar_file: string;
}

@injectable()
class UpdateUserAvatarUseCase {
  constructor(
    @inject("UsersRepository")
    private usersRepository: IUsersRepository
  ) {}

  async execute({ user_id, avatar_file }: IRequest): Promise<void> {
    const user = await this.usersRepository.findById(user_id);

    if (user.avatar) {
      await deleteFile(`./tmp/avatar/${user.avatar}`);
    }

    user.avatar = avatar_file;

    await this.usersRepository.create(user);
  }
}

export { UpdateUserAvatarUseCase }