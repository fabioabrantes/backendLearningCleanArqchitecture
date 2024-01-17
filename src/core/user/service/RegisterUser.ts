import { UseCase } from "../../shared/UseCase";
import { RepositoryUser } from "../../ports/repositories/RepositoryUser";

type Input = {
  name:string;
  email:string;
  password:string;
}
export class RegisterUser implements UseCase<Input,void>{

  constructor(private readonly repository:RepositoryUser){}
  
  async execute(dataUser: Input): Promise<void> {
    const {name, email, password} = dataUser;

    const userExist = await this.repository.findByEmail(email);
    if(userExist) {
      throw new Error('Usuário já existe');
    }

    await this.repository.createUser({name, email, password});

  }
}