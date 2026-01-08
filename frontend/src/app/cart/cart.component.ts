import { Component, EventEmitter, Output } from '@angular/core';
import { CartService } from '../cart.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  cart:any;
  ingredients:any;
  cartTotalAmount=0;
  ingredientsTotalAmount=0;

  constructor(private cs:CartService, private router:Router){

  }
  ngOnInit(){
    this.cart=this.cs.getCart();
    this.ingredients=this.cs.getIngredients();
    this.cartTotal();
    this.ingredientsTotal();
  }
  cartTotal(){
    
    if(this.cart){
      for(let i=0;i<this.cart.length;i++){
      const item=this.cart[i]
      this.cartTotalAmount+=(item.price*item.quantity);

    }
    }

  }
  ingredientsTotal(){
    this.ingredients=this.cs.getIngredients();
    if(this.ingredients){
      for(let i=0;i<this.ingredients.length;i++){
      const item=this.ingredients[i]
      this.ingredientsTotalAmount+=(item.price);

    }
    }
  }
  changeQty(type:string,name:string){
    this.cs.changeQuantity(type,name);
    this.cartTotalAmount=0;
    this.cartTotal();
  }
  deleteItem(name:any){
    this.cs.removeCartFunctionality(name);
    this.cart=this.cs.getCart();
    this.cartTotalAmount=0;
    this.cartTotal();
    if(this.cart.length ===0){
      this.router.navigate(['/order']);
    }
  }

  pay(){
    this.cart=[];
    this.cartTotalAmount=0;
    this.ingredientsTotalAmount=0;
    alert("Pizza will be delivered within 45 minutes");
    this.cs.clearCart();
    this.router.navigate(['/order']);
  }
  clear(){
    this.cart=[];
    this.cartTotalAmount=0;
    this.ingredientsTotalAmount=0;
    this.router.navigate(['/order']);
    this.cs.clearCart();
  }

}
