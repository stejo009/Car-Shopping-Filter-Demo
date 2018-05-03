import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CarsComponent } from './cars/cars.component';
import { LoginComponent } from './login/login.component';
import { FooterComponent } from './footer/footer.component';
import { AddcarsComponent } from './addcars/addcars.component';

const routes: Routes = [
  { path: 'cars', component:CarsComponent },
  { path: 'login', component: LoginComponent},
  { path: 'footer', component: FooterComponent},
  { path: 'addcars', component: AddcarsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
