import cors from '@fastify/cors';

import { app } from "./external/api/config";

import { makeFindUserById } from './external/factories/findUserByIdFactory';
import { DBUsePrisma } from './adapters/gateways/repositories/prisma/DBUserPrisma';
import { FindUserById } from './core/user/service/FindUserById';
import { FindUserByIdControllerU } from './adapters/controllers/user/find-user-byId-controller';
import { FindUserByIdController } from './adapters/controllers/user/FindUserByIdController';

/* import { DBUserMemory } from "./external/memory/DBUserMemory"; */

app.register(cors,{
  origin:true /* todas as URLS de frontend poderão acessar nosso back-end  ["http://local..."]*/
});

/* registrar rotas */
/* const dbUserMemory = new DBUserMemory();
const useCaseRegisterUser = new RegisterUser(dbUserMemory);
new RegisterUserController(app, useCaseRegisterUser); */
/* 
app.get('/users/:id', makeFindUserById().handle); */
const dbUserPrisma = new DBUsePrisma();
const useCaseFindUserById = new FindUserById(dbUserPrisma);
console.log(useCaseFindUserById.toString());
const  findUserByIdController = new FindUserByIdControllerU(useCaseFindUserById);
app.get('/users/:id', findUserByIdController.handle);

/* new FindUserByIdController(app,useCaseFindUserById); */

app.listen({
  port:3333,
}).then(() => {
  console.log("🚀 HTTP SERVER RUNNING ON HTTP://localhost:3333");
})

