import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CarsComponent } from './cars/cars.component';
import { AgularmaterialdemoComponent } from './agularmaterialdemo/agularmaterialdemo.component';
import { Material } from './material.module';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AddcarsComponent } from './addcars/addcars.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CarsComponent,
    AgularmaterialdemoComponent,
    HeaderComponent,
    FooterComponent,
    AddcarsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    Material
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
