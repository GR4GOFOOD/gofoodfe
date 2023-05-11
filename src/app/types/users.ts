// export interface IUsers{

//   _id:any,
//   email:string,
//   password:string,

// }
export class Users {
  constructor (
    public _id: any = null,
    public email: string = "",
    public password: string = "",
  ) {}
}
