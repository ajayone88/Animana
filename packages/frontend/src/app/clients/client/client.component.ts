import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {SharedService} from "../../shared.service";
import {Patient} from "../../models/patient.model";
import {Invoice} from "../../models/invoice.model";
import { Client } from "../../models/client.model";


@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.scss']
})
export class ClientComponent implements OnInit {

  object = Object;
  clientId: number;
  client: Client;
  patients: Patient[];
  invoices: Invoice[];
  constructor(private sharedService: SharedService, private router:Router, private route:ActivatedRoute) { }

  ngOnInit() {
    this.sharedService.closeError();
    this.route.params.subscribe( params =>{
      this.clientId = +params['id'];
    });
    this.fetchClients();
    this.fetchInvoice();
    this.fetchPatients();
  }

  fetchClients() {
    this.sharedService.closeError();
    this.sharedService.getClients().subscribe((clients: Client[]) => {
      this.client = clients['clients'].filter(val => {
        return +val.id === this.clientId;
      });
      this.client = this.client[0];
    }, error =>{
      let err = {
        heading:'Error',
        description:'Client service failed'
      };
      this.sharedService.openError(err);
    });
  }

  fetchPatients(){
      this.sharedService.closeError();
      this.sharedService.getPatientsForClient().subscribe((patients: Patient[]) => {
        this.patients = patients['patients'];
        this.patients = this.patients.filter(val => {
          return +val.clientId === this.clientId;
        });
      },error =>{
        let err = {
          heading:'Error',
          description:'Patient service failed'
        };
        this.sharedService.openError(err);
      });
  }

  fetchInvoice(){
    this.sharedService.closeError();
    this.sharedService.getInvoicesForClient().subscribe( (invoices: Invoice[]) =>{
      this.invoices = invoices['invoices'];
      this.invoices = this.invoices.filter( val =>{
        return +val.clientId === this.clientId;
      });
    },error =>{
      let err = {
        heading:'Error',
        description:'Invoice service failed'
      };
      this.sharedService.openError(err);
    });
  }

  openPatient(id){
    this.router.navigate(['patients/patient', id]);
  }

  openInvoice(id){
    this.router.navigate(['invoices/invoice', id]);
  }

  navigateBack(){
    this.router.navigate(['clients']);
  }
}
