import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";

import { AppError } from "@shared/errors/AppError";

import { UsersRepository } from "@modules/accounts/infra/typeorm/repositories/UsersRepository";


interface IPayload {
  sub: string;
}

export async function ensureAuthenticated(request: Request, response: Response, next: NextFunction) {
  // Bearer token dawdad vem dentro do headers o token vem dentro do headers
  const authHeader = request.headers.authorization;

  if (!authHeader) { // se o ehader vem vazio
    throw new AppError("Token missing", 401);
  }

  // Bearer token adawdawfsefse o split divide pelo espaço, [bearer, token] pega posicao 2
  const [, token] = authHeader.split(" ");

  try {
    // sub é o id do user
    const { sub: user_id } = verify(token, "c82fdf0ebf03c6e8494030621c6d21b3") as IPayload;

    // verificar se o usuário existe
    const userRepository = new UsersRepository();
    
    const user = await userRepository.findById(user_id);

    if (!user) {
      throw new AppError("User does not exists!", 401);
    }

    request.user = {
      id: user_id
    }

    next();
  } catch(error) {
    throw new AppError("Invalid token!", 401);
  }
}