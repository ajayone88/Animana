// Product Model
export class Product{
  public id:number;
  public name:string;
  public quantity:number;
  public packaging:string;
  public dosage:string;
  public date: string;
  public remarks:string;
  public patientId: number;

  constructor(id:number,
              name:string,
              quantity:number,
              packaging:string,
              dosage:string,
              date:string,
              remarks:string,
              patientId:number){

      this.id = id;
      this.name = name;
      this.quantity = quantity;
      this.packaging = packaging;
      this.dosage = dosage;
      this.date = date;
      this.remarks = remarks;
      this.patientId = patientId;
  }
}
