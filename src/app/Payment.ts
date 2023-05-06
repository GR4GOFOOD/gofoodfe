export class Payment{
  constructor(
    public _id:any=null,
    public ho_va_ten:string="",
    public dia_chi:string="",
    public sdt:string="",
  ) {}
}

export class PaymentATM{
  constructor(
    public _id:any=null,
    public ten_ngan_hang:string="",
    public so_the:string="",
    public hieu_luc_ngay:string="",
    public hieu_luc_thang:string="",
    public ten_chu_the:string="",
    public CVV_Code:string="",
  ) {}
}

