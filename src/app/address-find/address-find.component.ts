import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-address-find',
  templateUrl: './address-find.component.html',
  styleUrls: ['./address-find.component.css']
})
export class AddressFindComponent implements OnInit {

  checkoutForm = this.formBuilder.group({
    cepId: '',
  });

  constructor( 
    private router: Router, 
    private formBuilder: FormBuilder,
    ) {  }

  ngOnInit() {
  }

  onSubmit(): void {
    const cepId = this.checkoutForm.value["cepId"];
    this.router.navigate(['/cep', cepId]);
  }

}