import { Injectable } from '@angular/core';
import { HttpClient} from "@angular/common/http";
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class SharedService {

  //Detect the changes for add and delete.
  onValueChange: BehaviorSubject<null> = new BehaviorSubject(null);

  //Used to show changes for Error section.
  error: BehaviorSubject<any> = new BehaviorSubject({
      showError:false,
      heading:'',
      description:''
  });

  constructor(private httpClient: HttpClient) {}

  //Gets the clients details.
  getClients(){
    return this.httpClient.get('http://localhost:4000/clients');
  }

  //Gets the patients details for client.
  getPatientsForClient(){
    return this.httpClient.get('http://localhost:4000/patientsForClient');
  }

  //Gets the Invoices details for clients.
  getInvoicesForClient(){
    return this.httpClient.get('http://localhost:4000/invoicesForClient');
  }

  //Gets the weights details. for patient
  getWeightsForPatient(){
    return this.httpClient.get('http://localhost:4000/weightsForPatient');
  }

  //Gets the calls details for patient.
  getCallsForPatient(){
    return this.httpClient.get('http://localhost:4000/callsForPatient');
  }

  //Gets the product details for patient.
  getProductsForPatient(){
    return this.httpClient.get('http://localhost:4000/productsForPatient');
  }

  //Adds the payload to the patients with post call.
  addPatient(payload){
    return this.httpClient.post('http://localhost:4000/addPatient', payload );
  }

  //Deletes the patient
  deletePatient(id){
    let url = `http://localhost:4000/deletePatient/${id}`;
    return this.httpClient.delete(url);
  }

  //Triggers the next call for error.
  openError(err){
    let error = {
        showError:true,
        heading:err.heading,
        description:err.description
    };
    this.error.next(error);
  }
  //Triggers the next call for error with close parameters.
  closeError(){
    let error ={
      showError:false,
      heading:'',
      description:''
    };
    this.error.next(error)
  }

  //Triggers the onModified call
  onModified(){
    this.onValueChange.next(null);
  }
}
