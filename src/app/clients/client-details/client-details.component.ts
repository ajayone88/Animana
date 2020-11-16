import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { client } from 'src/app/shared/modals/client.modal';
import { clientSerivce } from 'src/app/shared/services/client.service';

@Component({
  selector: 'app-client-details',
  templateUrl: './client-details.component.html',
  styleUrls: ['./client-details.component.css']
})
export class ClientDetailsComponent implements OnInit {

  id: number;
  client: client;
  constructor(private route: ActivatedRoute,
              private clientService: clientSerivce) {}

  ngOnInit() {
    this.route.params
      .subscribe((params: Params) =>{
        this.id = params.id;
        this.client = this.clientService.getClient(this.id);
      });
  }
}
