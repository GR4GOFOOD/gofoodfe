export interface IUsers{

  _id:any,
  username:string,
  email:string,
  password:string,

}
export class Users {
  constructor (
    public _id: any = null,
    public username: string = "",
    public email: string = "",
    public password: string = "",
  ) {}
}
