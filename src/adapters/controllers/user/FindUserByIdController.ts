import {FastifyInstance} from "fastify";
import { FindUserById } from "../../../core/user/service/FindUserById";

type Params ={
  id:string;
}
export class FindUserByIdController{
  constructor( 
      readonly app:FastifyInstance, 
      readonly useCaseFindUserById: FindUserById){

        this.app.get('/users/:id',async(request)=>{
          const {id} = request.params as Params;
          return await useCaseFindUserById.execute(Number(id));
        })
      }

}