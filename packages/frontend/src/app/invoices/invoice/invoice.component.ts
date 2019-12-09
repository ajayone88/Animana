import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { SharedService } from "../../shared.service";
import { Invoice } from "../../models/invoice.model";

@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.scss']
})
export class InvoiceComponent implements OnInit {

  invoiceNumber: string;
  invoice: Invoice;
  constructor(private sharedService:SharedService, private router:Router, private route: ActivatedRoute) { }

  ngOnInit() {
    //It is extracting the value form the params
    this.route.params.subscribe( params =>{
        this.invoiceNumber = params['id'];
    });
    this.getInvoiceDetails();
  }

  // It is used to make the get Invoice call
  getInvoiceDetails(){
      this.sharedService.getInvoicesForClient().subscribe( (invoices: Invoice[])=>{
          this.invoice = invoices['invoices'].find( val =>{
            return val.number = this.invoiceNumber;
          });
          console.log(this.invoice);
      });
  }

  //It is used to navigate back to invoices.
  navigateBack(){
    this.router.navigate(['invoices']);
  }
}
