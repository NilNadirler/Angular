
import { UpdateEmployeeComponent } from './update-employee/update-employee.component';
import { CreateEmployeeComponent } from './create-employee/create-employee.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule,Routes} from '@angular/router';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';

const routes: Routes=[

    {path: '', redirectTo: 'employees', pathMatch: 'full'},
    {path:"employees", component:EmployeeListComponent},
    {path:"create-employee", component: CreateEmployeeComponent},
    {path: 'update-employee/:id', component:UpdateEmployeeComponent},
    {path : 'employee-details/:id', component:EmployeeDetailsComponent}
    

];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }