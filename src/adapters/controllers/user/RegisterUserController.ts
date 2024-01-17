import {FastifyInstance} from "fastify";
import { RegisterUser } from "../../../core/user/service/RegisterUser"; 
import {z} from 'zod';

const bodySchema = z.object({
  name:z.string(),
  email:z.string(),
  password:z.string(),
 });

export class RegisterUserController{
  constructor( 
      readonly app:FastifyInstance, 
      readonly useCaseRegisterUser: RegisterUser){

        this.app.post('/users',async(request,response)=>{
          const {name, password, email} = bodySchema.parse(request.body);

          await useCaseRegisterUser.execute({name, password, email});
        })
      }

}