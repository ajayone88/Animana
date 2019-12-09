import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared.service';
import { Client } from '../models/client.model';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.scss']
})
export class ClientsComponent implements OnInit {

  object = Object;
  maxLength: number;
  previous:number = 0;
  next:number = 2;
  clients: Client[];
  limitedClient: Client[];
  constructor(private sharedService: SharedService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    //Calling closeError to close error section if any error is shown
    this.sharedService.closeError();

    //Generic service is called to get the client details
    this.sharedService.getClients().subscribe( (clients: Client[]) =>{
          this.clients = clients['clients'];
          this.maxLength = this.clients.length;
          this.creatPagination(this.clients, 0);
      }, error =>{
          let err = {
            heading:'Client Service',
            description:'Error in retrieval of the client data'
          };
          this.sharedService.openError(err);
      });
  }

  // This function filters out the clients based on the page no
  creatPagination(clients: Client[], start:number){
    this.previous = start;
    if(this.maxLength < this.next){
      this.next = this.maxLength - 1;
    }
    this.limitedClient = clients.filter( (value, index)=>{
      return index >= start && index <= this.next
    });
  }

  //This function is used to filter out the client based on the search value.
  setFilter(event){
    let value = event.target.value;
    this.limitedClient = this.clients.filter( val =>{
        return val.firstName.toUpperCase().match(value.toUpperCase());
    });
    this.next = 2;
    this.maxLength = this.limitedClient.length;
    this.creatPagination(this.limitedClient, 0);
  }

  //This function is used to move back to the previous page
  setPrevious(){
    this.previous -=3;
    if(this.next + 1 !== this.maxLength){
      this.next -=3;
    }else{
      this.next -= 1;
    }
    this.creatPagination(this.clients, this.previous);
  }

  //This function is used to move on the next page
  setNext(){
    this.previous +=3;
    this.next +=3;
    this.creatPagination(this.clients, this.previous);
  }

  //This function is used to route to the client View.
  navigateToClient(id){
    this.router.navigate(['client', id],{relativeTo: this.route});
  }
}
