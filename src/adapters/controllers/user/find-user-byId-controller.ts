import { HttpRequest, HttpResponse } from "../ports/http";
import { IController } from "../shared/IController";
import { FindUserById } from "../../../core/user/service/FindUserById";
import { badRequest, serverError, success } from "../helpers/http-helper";

type Params ={
  id:string;
}

export class FindUserByIdControllerU implements IController<HttpRequest, HttpResponse>{
 
  constructor( readonly useCaseFindUserById: FindUserById){
  };

  async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      console.log(this.useCaseFindUserById);
      const {id} = httpRequest.params as Params;
      const user = await this.useCaseFindUserById.execute(Number(id));
      if(!user){
        return badRequest(new Error("User not exists"))
      }
      return success(user);
    } catch (error: any) {
      console.log(error);
      return serverError();
    }
  }
}