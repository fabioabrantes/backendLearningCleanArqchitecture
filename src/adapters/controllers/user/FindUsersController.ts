import {FastifyInstance} from "fastify";
import { FindUsers } from "../../core/user/service/FindUsers"; 

export class FindUsersController{
  constructor( 
      readonly app:FastifyInstance, 
      readonly useCaseFindUsers: FindUsers){

        this.app.get('/users',async(request,response)=>{
          const users = await useCaseFindUsers.execute();
          return users;
        })
      }

}