//Call model
export class Call{
  public id: number;
  public date: string;
  public subject: string;
  public patientId: number ;

  constructor(id:number, date:string, subject:string, patientId:number){
    this.id = id;
    this.date = date;
    this.subject = subject;
    this.patientId = patientId;
  }
}
