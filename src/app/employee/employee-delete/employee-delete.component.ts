import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import { ActivatedRoute } from '@angular/router';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-delete',
  templateUrl: './employee-delete.component.html',
  styleUrls: ['./employee-delete.component.css']
})
export class EmployeeDeleteComponent implements OnInit {

  constructor(private router:Router,private route :ActivatedRoute,private employeeService :EmployeeService) { }
  private deleteId:number=null;
  public files:File;
   ngOnInit() {
  	let data:number= +this.route.snapshot.paramMap.get('id');
	  if(data==null && !(data > 0)){
	  	this.router.navigate(['/employee']);
	  }
	  this.deleteId=data;
 	}


 	deleteEmployee(){
 		this.employeeService.deleteEmployee(this.deleteId).subscribe(param=>{
 			if(param==true){
 				alert("Operation Successful");
 				this.router.navigate(['/employee']);
 			}
 		});
 	}
	upload(){
		if(this.files){
					this.employeeService.uploadFile(this.files);
		}else{
			alert("No File Selected");
		}
	}
	changeFile(res){
		this.files=res[0];
		console.log(res[0]);
	}
	



}
