import { Component, OnInit } from '@angular/core';
import { Address } from '../address';
import { ViacepService } from '../viacep.service';

import {ActivatedRoute} from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-address-detail',
  templateUrl: './address-detail.component.html',
  styleUrls: ['./address-detail.component.css']
})
export class AddressDetailComponent implements OnInit {
  address? : Address;
  error?: HttpErrorResponse;
  cepId? : string;

  constructor(
    private route: ActivatedRoute, 
    private viacepService : ViacepService,
    ) { 
}

  ngOnInit() {
    this.cepId = this.route.snapshot.params.cepId;
    console.log(this.cepId);
    this.viacepService.getAddress(<string>this.cepId).subscribe(
      address => {this.address = address; console.log(address)},
      error => {this.error = error; console.log(error)});
  }

}