import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AppComponent} from "./app.component";
import {EmployeeComponent} from "./employee/employee.component";
import {EmployeeUpdateComponent} from "./employee/employee-update/employee-update.component";
import {EmployeeDeleteComponent} from "./employee/employee-delete/employee-delete.component";



const routes: Routes = [
{path:"employee",component:EmployeeComponent},
{path:"employee/edit/:id",component:EmployeeUpdateComponent},
{path:"employee/add",component:EmployeeUpdateComponent},
{path:"employee/delete/:id",component:EmployeeDeleteComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
