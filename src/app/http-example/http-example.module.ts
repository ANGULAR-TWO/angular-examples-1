import { NgModule, ErrorHandler } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeComponent } from './employee/employee.component';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { EmployeeService } from './service/employee.service';
import { GlobalErrorHandler } from './errors/global-error-handler';

@NgModule({
  imports: [
    CommonModule,HttpModule,FormsModule
  ],
  exports : [
    CommonModule,
    EmployeeComponent
  ],
  declarations: [EmployeeComponent],
  providers:[EmployeeService,{provide:ErrorHandler,useClass:GlobalErrorHandler}]
})
export class HttpExampleModule { }
