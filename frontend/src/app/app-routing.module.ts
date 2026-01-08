import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { OrderComponent } from './order/order.component';
import { CustomComponent } from './custom/custom.component';
import { CartComponent } from './cart/cart.component';

const routes: Routes = [{path:'home',component:HomeComponent},
  {path:'order',component:OrderComponent},
  {path:'custom',component:CustomComponent},
  {path:'cart',component:CartComponent},
  {path:'',redirectTo:'/home', pathMatch:'full'},
  {path:'**',component:HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
