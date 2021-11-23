import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Address } from './address';

 
@Injectable({
  providedIn: 'root'
})
export class ViacepService {
  private url = 'https://viacep.com.br/ws/';
  private urlHeroku = 'https://mighty-ravine-58415.herokuapp.com/api/addresses/';

  constructor(private http : HttpClient) { 
    
  }

  //getAddress(cep: string) {
  //  return this.http.get<Address>(`${this.url}${cep}/json/`);
 //}
  //getAddress(cep: string) {
  //  return this.http.get<Address>(`${this.urlHeroku}${cep}/`);
  //}
  getAddress(cep: string) {
    return this.http.get<Address>('../assets/cep-901101170.json');
 }  
}