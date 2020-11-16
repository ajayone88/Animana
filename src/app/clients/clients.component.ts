import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { client } from '../shared/modals/client.modal';
import { clientSerivce } from '../shared/services/client.service';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css'],
  providers:[clientSerivce]
})
export class ClientsComponent implements OnInit {

  clients: client[];
  constructor(private clientService: clientSerivce, 
              private router: Router, 
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.clients = this.clientService.getClients();
  }

  onSelect(id: number){
    this.router.navigate([id], {relativeTo:this.route});
  }
}