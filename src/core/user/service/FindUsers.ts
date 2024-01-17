import { User } from "../model/User";
import { UseCase } from "../../shared/UseCase";
import { RepositoryUser } from "../../ports/repositories/RepositoryUser"; 

export class FindUsers implements UseCase<void,User[]>{

  constructor(private readonly repository:RepositoryUser){}
  
  async execute(): Promise<User[]> {
   return await this.repository.findAll();
  }
}