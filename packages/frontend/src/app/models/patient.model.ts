// Patient Model
export class Patient{
  public id: number;
  public clientId: string;
  public name: string;
  public class: string;
  public species: string;
  public dateOfBirth: string;
  public active: boolean;

  constructor(id:number, clientId:string, name:string, className:string, species:string, dateOfBirth:string, active:boolean){
    this.id = id;
    this.clientId = clientId;
    this.name = name;
    this.class = className;
    this.species = species;
    this.dateOfBirth = dateOfBirth;
    this.active = active;
  }
}
