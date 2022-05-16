import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from '../login/login/login.component';
import { RegistrationComponent } from '../registration/registration/registration.component';
import { AuthenticationModule } from './authentication.module';

const routes: Routes = [
{path: 'login', component: LoginComponent},
{path: 'registration',component: RegistrationComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthenticationRoutingModule { }
