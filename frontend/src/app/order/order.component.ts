import { Component, EventEmitter, Output } from '@angular/core';
import { DataService } from '../data.service';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent {
  pizzas:any;
  cart:any;
  constructor(private ps:DataService, private cs:CartService){}
  ngOnInit(){
    this.ps.getAllPizza().subscribe((res:Response)=>this.pizzas=res);
    this.cart=this.cs.getCart();
  }
  addToCart(name:any){
    this.cs.addCartFunctionality(name);

    
  }
  deleteFromCart(name:any){
    this.cs.removeCartFunctionality(name);
    
  }
  isInCart(name:any):Boolean{
    return this.cs.isInCart(name);
  }
}
