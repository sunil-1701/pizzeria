import { Component } from '@angular/core';
import { DataService } from '../data.service';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-custom',
  templateUrl: './custom.component.html',
  styleUrls: ['./custom.component.css']
})
export class CustomComponent {
  ingredients:any;
  total=0;
  custom:any[]=[];
  constructor(private ps:DataService, private cs:CartService){}
  ngOnInit(){
    this.ps.getAllIngredients().subscribe((res:Response)=>this.ingredients=res);
  }
  addIngredient(event:any, price:any,tname:any){
    if (event.target.checked) {

    this.total += price;
    this.custom.push(tname);
    

  } else {
    this.total-= price;
    this.custom= this.custom.filter(name => name !== tname);
  }
  }
  addToCart(){
    this.cs.addCustomCartFunctionality("custom pizza",this.custom,this.total);
    this.ps.getAllIngredients().subscribe((res:Response)=>this.ingredients=res);
    this.total=0;

  }
}
