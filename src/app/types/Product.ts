export class Product{
  constructor(
    public _id:any=null,
    public productId: string,
    public productName: string="",
    public description: string="",
    public price: number,
    public category: string="",
    public productQty: number,
    public productImage: string=""
  ) {}
}

