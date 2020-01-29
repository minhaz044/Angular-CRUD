import { Component, OnInit } from '@angular/core';
import {Employee} from '../employee.model';
import { ActivatedRoute } from '@angular/router';
import { EmployeeService } from '../employee.service';
import {Router} from "@angular/router";

@Component({
  selector: 'app-employee-update',
  templateUrl: './employee-update.component.html',
  styleUrls: ['./employee-update.component.css']
})
export class EmployeeUpdateComponent implements OnInit {
	public employee:Employee;
	public text="Test-1111";
  constructor(private route:ActivatedRoute,private employeeService :EmployeeService,private router:Router) { }

  ngOnInit() {
  	 let data:number= +this.route.snapshot.paramMap.get('id');
  	if(data!=null && data > 0){
  		this.employeeService.getEmployeeById(data).subscribe(result =>
  		{
  			if(result!=null && result[0] !=null){
  				this.employee=result[0];
  			}else{
  				alert("No data Found");
  				this.router.navigate(['/employee']);
  			}
  		 	
  		});
  	}else{
  		this.employee=new Employee(null,'');
  	}
  }

ngOnDestroy() {
	this.employee=null;
}

updateSubmit(){
	this.employeeService.updateEmployee(this.employee).subscribe(param=>{
		if(param==true){
			alert("Operation Successful");
			this.router.navigate(['/employee']);
		}else{
			alert("Operation Failed.");
		}
	});

}
}
