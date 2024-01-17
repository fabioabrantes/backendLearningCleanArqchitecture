export interface IController<I,O>{
  handle(input:I):Promise<O>
}
