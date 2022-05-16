import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistrationComponent } from './authentication/registration/registration/registration.component';
import { LoginComponent } from './authentication/login/login/login.component';
import { AdditionComponent } from './dashboard/addition/addition/addition.component';
import { SubstractionComponent } from './dashboard/substraction/substraction/substraction.component';
import { MultiplicationComponent } from './dashboard/multiplication/multiplication/multiplication.component';
import { DivisionComponent } from './dashboard/division/division/division.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    LoginComponent,
    AdditionComponent,
    SubstractionComponent,
    MultiplicationComponent,
    DivisionComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
 ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
