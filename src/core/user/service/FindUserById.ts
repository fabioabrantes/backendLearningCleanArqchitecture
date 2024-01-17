import { User } from "../model/User";
import { UseCase } from "../../shared/UseCase";
import { RepositoryUser } from "../../ports/repositories/RepositoryUser"; 

export class FindUserById implements UseCase<number,User | null>{

  constructor(private readonly repository:RepositoryUser){}
  
  async execute(id:number): Promise<User | null> {
    console.log(id)
   return await this.repository.findById(id);
  }
}