import { Component, OnInit } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http'
import { Iemployee } from '../model/iemployee';
import { EmployeeService } from '../service/employee.service';
import { AppError } from '../errors/app.error';
import { NotFoundError } from '../errors/notfound.error';
@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  constructor(private employeeService: EmployeeService) {

  }


  private employees: Iemployee[];

  ngOnInit() {
    this.employeeService.getAllList().subscribe(
      (response) => {
        this.employees = response;
      },

      (error: AppError) => {
        //console.log(error);
        if (error instanceof NotFoundError ) {
          console.log('resource deleted')
          //throw  error;
        }
        
      }
    )
  }


  createEmployee(input: HTMLInputElement) {
    this.employeeService.createEmployee(input).subscribe(
      (response: Response) => {
        console.log(response.json())
      });;
  }

  updateEmployee(inputEmp: Iemployee) {
    this.employeeService.updateEmployee(inputEmp).subscribe((response: Response) => {
      console.log(response.json())
    });
  }

  deleteEmployee(inputEmp: Iemployee) {
    this.employeeService.deleteEmployee(inputEmp).subscribe((response: Response) => {
      console.log(response);
    });
  }


}
