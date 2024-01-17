import { User } from "../../../../core/user/model/User";
import { RepositoryUser } from "../../../../core/ports/repositories/RepositoryUser"; 

export class DBUserMemory implements RepositoryUser{
  private readonly users:User[] = [];

  async createUser(user: User): Promise<User> {
    const newUser = { ... user, id:Math.random()}
    this.users.push(newUser);
    return newUser;
  }

  async findByEmail(email: string): Promise<User | null> {
    return this.users.find(user=>user.email === email) ?? null;
  }

  async findAll(): Promise<User[]> {
    return this.users;
  }

  async findById(id: number): Promise<User | null> {
    return this.users.find(user=>user.id === id) ?? null;
  }
}