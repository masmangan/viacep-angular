import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { HttpClientModule } from '@angular/common/http';
import { AddressDetailComponent } from './address-detail/address-detail.component';
import { AddressFindComponent } from './address-find/address-find.component';


@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: '', component: AddressFindComponent },
      { path: 'cep/:cepId', component: AddressDetailComponent },
    ])
  ],
  declarations: [
    AppComponent,
    TopBarComponent,
    AddressDetailComponent,
    AddressFindComponent,
    ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/