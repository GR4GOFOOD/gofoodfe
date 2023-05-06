import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ListComponent } from './list/list.component';
import { CartComponent } from './cart/cart.component';
// import { CartService } from './cart.service';

import { DetailComponent } from './detail/detail.component';
const routes: Routes = [
  {path: "about", component: AboutComponent},
  {path:"list",component:ListComponent},
  {path:"cart",component:CartComponent},
 {path:"detail/:id", component:DetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
export const RoutingComponent=[
  AboutComponent
]
