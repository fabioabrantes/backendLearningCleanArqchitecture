import { PrismaClient } from "@prisma/client";

import { User } from "../../../../core/user/model/User";
import { RepositoryUser } from "../../../../core/ports/repositories/RepositoryUser";

export class DBUsePrisma implements RepositoryUser{
  private prisma: PrismaClient;

  constructor(){
    this.prisma = new PrismaClient();
  }
  async createUser(user: User): Promise<User> {
    return this.prisma.user.create({
      data:user
    })
  }

  async findByEmail(email: string): Promise<User | null> {
      return this.prisma.user.findUnique({
        where:{
          email
        }
      })
  }

  async findAll(): Promise<User[]> {
    return this.prisma.user.findMany({
      orderBy:{
        createdAt:'asc'
      }
    });
  }

  async findById(id: number): Promise<User | null> {
    
    return await this.prisma.user.findFirstOrThrow({
      where:{
        id
      }
    })
  }
}