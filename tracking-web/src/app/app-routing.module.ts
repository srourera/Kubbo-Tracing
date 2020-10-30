import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeRoute } from './routes/home/home.route';


const routes: Routes = [
  { path: "products/:productId", component: HomeRoute},
  { path: "**", pathMatch: "full", redirectTo: "products/" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
