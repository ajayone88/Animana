//Clients Model
import { Address } from './address.model';
export class Client{
  public id: number;
  public firstName: string;
  public lastName: string;
  public title: string;
  public initials: string;
  public address: Address;
  public startDate: string;
  public active: boolean;
  public phone: string;
  public business: boolean;
  public iban: string;

  constructor(id:number,
              firstName:string,
              lastName:string,
              title:string, initials:string,
              address:Address,
              startDate:string,
              active:boolean,
              phone:string,
              business:boolean,
              iban:string){

    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.title = title;
    this.initials = initials;
    this.address = address;
    this.startDate = startDate;
    this.active = active;
    this.phone = phone;
    this.business = business;
    this.iban = iban;
  }
}
