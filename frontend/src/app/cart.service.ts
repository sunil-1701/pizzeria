import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DataService } from './data.service';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cart: any;
  customCart:any[]=[];
  allPizzas:any;

  constructor(private http:HttpClient, private ps:DataService) { 
    this.ps.getAllPizza().subscribe((res:Response)=>this.allPizzas=res);
  }

  addCartFunctionality(name:String){
    if(!this.cart){
      this.cart = [];
      const selectedPizza = this.allPizzas.find((p: { name: String }) => p.name === name);
      this.cart.push({...selectedPizza,quantity:1})

    }
    else{
      const selectedPizza = this.allPizzas.find((p: { name: String }) => p.name === name);
      this.cart.push({...selectedPizza,quantity:1})
    }


  }
  changeQuantity(type:String,name:String){
    if(type==='-'){
      const found=this.cart.find((p:{name:String})=>p.name===name);
      if(found.quantity===1){
        this.removeCartFunctionality(name);
      }
      else{
        found.quantity-=1;
      }
    }
    else{
      const found=this.cart.find((p:{name:String})=>p.name===name);
      if(found){
        found.quantity+=1;
      }
    }
  }
  removeCartFunctionality(name:any){
    if(!this.cart){
      return
      
    } else{
      this.cart = this.cart.filter((p:{name:String}) => p.name !== name);
    }
    

  }
  addCustomCartFunctionality(name:String,ingredients:any,price:number){
    this.customCart.push({name,ingredients,price});

  }
  isInCart(name:any):Boolean{
    if(this.cart){
      const findPizza=this.cart.find((p: { name: String }) => p.name === name)
      if(findPizza){
      return true;
    } else{
      return false;
    }
    }
    else{
      return false;
    }
    
  }
  getCart(){
    return this.cart;
  }
  getCartLength(){
      if(this.cart){
        return this.cart.length;
      }
      return 0;
      

    
  }
  clearCart(){
    this.cart=[];
    this.customCart=[];
  }
  getIngredients(){
    return this.customCart;
  }
}
