export class IContact {
  constructor(
    public _id: any = null,
    public name: string = '',
    public phone: string = '',
    public email: string = '',
    public title: string = '',
    public content: string = ''
  ) {}
}
