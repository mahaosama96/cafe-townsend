import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeEditComponent } from './employees/employee-edit/employee-edit.component';
import { EmployeesInfoComponent } from './employees/employees-info/employees-info.component';
import { EmployeesListComponent } from './employees/employees-list/employees-list.component';
import { EmployeesComponent } from './employees/employees.component';
import { LoginComponent } from './login/login.component';


const routes: Routes = [
    {path: 'employees', component: EmployeesComponent, children:[
      {path: ':id', component: EmployeesInfoComponent},
      {path: 'new', component: EmployeeEditComponent},
      {path: ':id/edit', component: EmployeeEditComponent}
    ]},
  {path: '', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
