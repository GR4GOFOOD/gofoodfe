export class Payment{
  constructor(
    public _id:any=null,
    public Ho_va_ten:string="",
    public Diachi:string="",
    public Sdt:string="",
  ) {}
}

export class PaymentATM{
  constructor(
    public _id:any=null,
    public Sothe:string="",
    public Hieuluc_Ngay:string="",
    public Hieuluc_Thang:string="",
    public Tenchuthe:string="",
    public CVV_Code:string="",

  ) {}
}

