//Address Model
export class Address{
  public street: string;
  public city: string;
  public zip: string;

  constructor(street:string, city:string, zip:string){
    this.street = street;
    this.city = city;
    this.zip = zip;
  }
}
