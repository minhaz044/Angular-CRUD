import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import {Employee} from  './employee.model';
@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor( private httpClient:HttpClient) { }
  private employeeBaseUrl="http://localhost:8080/employee";
  private employee;


	loadAllEmployee(){
	  	return this.httpClient.get<Employee[]>(this.employeeBaseUrl);
	}

	getEmployeeById(id) {
		let url=this.employeeBaseUrl+'/'+id;
		return this.httpClient.get<Employee>(url);
	}  



	updateEmployee(employee:Employee){
		let url=this.employeeBaseUrl;
		const httpOptions = {
			  headers: new HttpHeaders({
			    'Content-Type':'application/json'/*,
			    'Authorization': 'jwt-token'*/
			  })
			};
			return this.httpClient.post<boolean>(url,JSON.stringify(employee),httpOptions);
	}
	deleteEmployee(employeeId:number){
		let url=this.employeeBaseUrl+'/delete/'+employeeId;
		return this.httpClient.get<boolean>(url);
	}
}
