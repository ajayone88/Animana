import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared.service';
import { Patient } from '../models/patient.model';
import { Router, ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-patients',
  templateUrl: './patients.component.html',
  styleUrls: ['./patients.component.scss']
})
export class PatientsComponent implements OnInit {

  maxLength: number;
  previous:number = 0;
  next:number = 2;
  patients: Patient[];
  limitedPatients: Patient[];

  constructor(private sharedService: SharedService, private router:Router, private route: ActivatedRoute) { }

  ngOnInit() {
    // It is used for closing the error section
    this.sharedService.closeError();
    // It is used to detect the add or delete of patients
    this.sharedService.onValueChange.subscribe( ()=>{
      //It is used to get the patients for the client
      this.sharedService.getPatientsForClient().subscribe( (patients: Patient[]) =>{
        this.patients = patients['patients'];
        this.maxLength = this.patients.length;
        this.creatPagination(this.patients, 0);
      }, err =>{
        let error ={
          heading:'Error',
          description:'Patient service failed'
        }
        this.sharedService.openError(error);
      });
    });
  }

  //It is used to filter out the patients details for specific page.
  creatPagination(patients: Patient[], start:number){
    this.previous = start;
    if(this.maxLength < this.next){
      this.next = this.maxLength - 1;
    }
    this.limitedPatients = patients.filter( (value, index)=>{
      return index >= start && index <= this.next
    });
  }

  // It is used for filter of the value given in the search box.
  setFilter(event){
    let value = event.target.value;
    this.limitedPatients = this.patients.filter( val =>{
      return val.class.toUpperCase().match(value.toUpperCase());
    });
    this.next = 2;
    this.maxLength = this.limitedPatients.length;
    this.creatPagination(this.limitedPatients, 0);
  }

  //It is used to set the previous page.
  setPrevious(){
    this.previous -=3;
    if(this.next + 1 !== this.maxLength){
      this.next -=3;
    }else{
      this.next -= 1;
    }
    this.creatPagination(this.patients, this.previous);
  }

  //It is used to set the next page
  setNext(){
    this.previous +=3;
    this.next +=3;
    this.creatPagination(this.patients, this.previous);
  }

  //It is used to move to the patient view with the Id.
  navigateToPatient(id){
    this.router.navigate(['patient', id], {relativeTo: this.route});
  }
}
