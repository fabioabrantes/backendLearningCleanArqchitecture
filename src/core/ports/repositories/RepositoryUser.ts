import { User } from "../../user/model/User";

export interface RepositoryUser{
  findByEmail(email:string):Promise<User | null>;
  createUser(user:User):Promise<User>;
  findAll():Promise<User[]>;
  findById(id:number):Promise<User | null>;
}