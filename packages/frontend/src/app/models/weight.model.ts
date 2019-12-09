//Weight Model
export class Weight{
  public id:number;
  public weight:number;
  public unit: string;
  public date: string;
  public patientId:number;

  constructor(id:number, weight:number, unit:string, date:string, patientId:number){
    this.id = id;
    this.weight = weight;
    this.unit = unit;
    this.date = date;
    this.patientId = patientId;
  }
}
