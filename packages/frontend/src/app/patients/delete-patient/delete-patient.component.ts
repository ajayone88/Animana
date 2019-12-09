import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import {SharedService} from "../../shared.service";

@Component({
  selector: 'app-delete-patient',
  templateUrl: './delete-patient.component.html',
  styleUrls: ['./delete-patient.component.scss']
})
export class DeletePatientComponent implements OnInit {

  patientId: number;
  constructor(private sharedService: SharedService, private router:Router, private route:ActivatedRoute) { }


  ngOnInit() {
    //It extracts the id form the params passed by the caller.
    this.route.params.subscribe( params =>{
      this.patientId = +params['id'];
    });
  }

  // It is used to call the function with patientId to make httpClient request for deletion.
  deletePatient(){
    this.sharedService.closeError();
    this.sharedService.deletePatient(this.patientId).subscribe( val =>{
      this.sharedService.onModified();
      this.router.navigate(['patients']);
    }, err =>{
      let error ={
        heading:'Error',
        description:'Deletion service failed'
      };
      this.sharedService.openError(error);
    });
  }

  //Navigate back to patients page.
  navigateBack(){
    this.router.navigate(['patients']);
  }
}
