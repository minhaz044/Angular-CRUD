import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { EmployeeRoutingModule } from './employee/employee-routing.module';

import { AppComponent } from './app.component';
import { EmployeeComponent } from './employee/employee.component';
import { HttpClientModule } from '@angular/common/http';
import { EmployeeUpdateComponent } from './employee/employee-update/employee-update.component';
import {FormsModule} from '@angular/forms';
import { EmployeeDeleteComponent } from './employee/employee-delete/employee-delete.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    EmployeeUpdateComponent,
    EmployeeDeleteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    EmployeeRoutingModule,
    HttpClientModule,
    FormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
