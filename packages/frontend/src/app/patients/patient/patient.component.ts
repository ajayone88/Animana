import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import { SharedService } from "../../shared.service";
import { Patient } from "../../models/patient.model";
import { Weight } from "../../models/weight.model";
import { Call } from "../../models/call.model";
import { Product } from "../../models/product.model";

@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.scss']
})
export class PatientComponent implements OnInit {

  weights: Weight[];
  calls: Call[];
  products:Product[];
  patientId:number;
  patient: Patient;

  constructor(private sharedService: SharedService, private router:Router, private route:ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe( params =>{
      this.patientId = +params['id'];
      this.fetchDetails();
    })
  }

  fetchDetails(){

    this.sharedService.getPatientsForClient().subscribe( (patients: Patient[]) =>{
      this.patient = patients['patients'].find( val =>{
        return +val.id === this.patientId;
      });
      console.log(this.patient);
    });

    this.sharedService.getWeightsForPatient().subscribe( (weights: Weight[]) =>{
      this.weights = weights['weights'].filter( val =>{
         return +val.patientId === this.patientId;
      })
    });

    this.sharedService.getCallsForPatient().subscribe( (calls: Call[]) =>{
      this.calls = calls['calls'].filter( val =>{
        return +val.patientId === this.patientId;
      })
    });

    this.sharedService.getProductsForPatient().subscribe( (products: Product[]) =>{
      this.products = products['products'].filter( val =>{
        return +val.patientId === this.patientId;
      })
    });
  }

  navigateBack(){
    this.router.navigate(['patients']);
  }
}
