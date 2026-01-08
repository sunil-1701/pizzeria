import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class DataService {
  
  constructor(private http:HttpClient) {}
  getAllPizza(){
    return this.http.get<any>('http://localhost:6017/api/pizzas');
  }
  getAllIngredients(){
    return this.http.get<any>('http://localhost:6017/api/ingredients');
  }
}
