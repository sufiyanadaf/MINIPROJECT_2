import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdditionComponent } from '../addition/addition/addition.component';
import { DivisionComponent } from '../division/division/division.component';
import { MultiplicationComponent } from '../multiplication/multiplication/multiplication.component';
import { SubstractionComponent } from '../substraction/substraction/substraction.component';

const routes: Routes = [
  {path: 'addition', component: AdditionComponent},
  {path: 'substraction',component: SubstractionComponent}, 
  {path: 'multiplication',component: MultiplicationComponent},
  {path: 'division',component: DivisionComponent}


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
