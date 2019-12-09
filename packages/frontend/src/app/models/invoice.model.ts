//Invoice Model
export class Invoice{
  public id: number;
  public number: string;
  public amount: number;
  public vat: number;
  public clientId: number;
  public patientId: number;
  public date: string;

  constructor(id:number,
              number:string,
              amount:number,
              vat:number,
              clientId:number,
              patientId:number,
              date:string){
    this.id = id;
    this.number = number;
    this.amount = amount;
    this.vat = vat;
    this.clientId = clientId;
    this.patientId = patientId;
    this.date = date;
  }
}
