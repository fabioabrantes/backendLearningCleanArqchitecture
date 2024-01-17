import { FindUserByIdController } from "../../adapters/controllers/user/find-user-byId-controller";

import { DBUsePrisma } from '../../adapters/gateways/repositories/prisma/DBUserPrisma';

import { FindUserById } from "../../core/user/service/FindUserById";

export function makeFindUserById():FindUserByIdController{
  const dbUserPrisma = new DBUsePrisma();
  const useCaseFindUserById = new FindUserById(dbUserPrisma);
  const  findUserByIdController = new FindUserByIdController(useCaseFindUserById);
  
  return findUserByIdController;
}

