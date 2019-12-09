import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import {NgForm, NgModel} from "@angular/forms";
import { Client } from "../../models/client.model";
import { SharedService } from "../../shared.service";

@Component({
  selector: 'app-add-patient',
  templateUrl: './add-patient.component.html',
  styleUrls: ['./add-patient.component.scss']
})
export class AddPatientComponent implements OnInit {
  constructor(private sharedService: SharedService, private router:Router, private route:ActivatedRoute) { }

  clients: Client[];

  ngOnInit() {
    //This is used for Closing the error section.
    this.sharedService.closeError();
    //This is used to get the client details.
    this.sharedService.getClients().subscribe( (clients: Client[]) =>{
        this.sharedService.onModified();
        this.clients = clients['clients'];
    }, err =>{
      let error ={
        heading:'Error',
        description:'Client service failed'
      };
      this.sharedService.openError(error);
    });
  }

  //Custom Date validation is done to check if date is greater than current date.
  validateDateOfBirth(formDate:NgModel){
    let  currentDate = new Date();
    let  selectedDate = new Date(formDate.viewModel);
    const result = currentDate.getDate() >= selectedDate.getDate();
    if(!result){
      console.log(result);
      formDate.control.reset();
    }
  }

  //On submit a payload is created and send to the function making http call.
  onSubmit(form: NgForm){
    if(form.valid){
      let payload = {
        clientId:form.value.clientId,
        name:form.value.name,
        class:form.value.class,
        species:form.value.species,
        warning:form.value.warning,
        remark:form.value.remark,
        color:form.value.color,
        dateOfBirth:form.value.dateOfBirth,
        active:form.value.active == true
      };
      this.sharedService.addPatient(payload).subscribe( val =>{
          this.sharedService.onModified();
          this.router.navigate(['patients']);
      });
    }
  }

  // Navigate back to the patients
  navigateBack(){
      this.router.navigate(['patients']);
  }
}
