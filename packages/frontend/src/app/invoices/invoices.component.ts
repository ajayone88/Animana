import { Component, OnInit } from '@angular/core';
import { SharedService } from "../shared.service";
import { Invoice } from "../models/invoice.model";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: 'app-invoices',
  templateUrl: './invoices.component.html',
  styleUrls: ['./invoices.component.scss']
})
export class InvoicesComponent implements OnInit {

  maxLength: number;
  previous:number = 0;
  next:number = 2;
  invoices : Invoice[];
  limitedInvoices: Invoice[];

  constructor(private sharedService: SharedService, private router:Router, private route:ActivatedRoute) { }

  ngOnInit() {
    // It is called to close the Error section
    this.sharedService.closeError();
    //It is used to get the Invoices for the client
    this.sharedService.getInvoicesForClient().subscribe( (invoices: Invoice[]) =>{
      this.invoices = invoices['invoices'];
      this.maxLength = this.invoices.length;
      this.creatPagination(this.invoices, 0);
    }, err =>{
      let error ={
        heading:'Error',
        description:'Invoice service failed'
      };
      this.sharedService.openError(error);
    });
  }

  //It is used to filter out the Invoices for pagination
  creatPagination(invoices: Invoice[], start:number){
    this.previous = start;
    if(this.maxLength < this.next){
      this.next = this.maxLength - 1;
    }
    this.limitedInvoices = invoices.filter( (value, index)=>{
      return index >= start && index <= this.next
    });
  }

  // It is used to filter out the invoices based on the search value entered.
  setFilter(event){
    let value = event.target.value;
    this.limitedInvoices = this.invoices.filter( val =>{
      return val.number.toUpperCase().match(value.toUpperCase());
    });
    this.next = 2;
    this.maxLength = this.limitedInvoices.length;
    this.creatPagination(this.limitedInvoices, 0);
  }

  //It is used to set the previous page.
  setPrevious(){
    this.previous -=3;
    if(this.next + 1 !== this.maxLength){
      this.next -=3;
    }else{
      this.next -= 1;
    }
    this.creatPagination(this.invoices, this.previous);
  }
  //It is used to set the next page.
  setNext(){
    this.previous +=3;
    this.next +=3;
    this.creatPagination(this.invoices, this.previous);
  }

  //It is used to navigate Invoice view with id.
  navigateToPatient(id){
    this.router.navigate(['invoice', id], {relativeTo: this.route});
  }
}
