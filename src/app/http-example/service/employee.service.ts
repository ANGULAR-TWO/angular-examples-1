import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import { Iemployee } from '../model/iemployee';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import  'rxjs/add/observable/throw';
import { AppError } from '../errors/app.error';
import { NotFoundError } from '../errors/notfound.error';
import { BadRequestError } from '../errors/bad-request-error';

@Injectable()
export class EmployeeService {

  constructor(private http: Http) { }



  headers = new Headers({ 'Content-Type': 'application/json' });
  private options = new RequestOptions({ headers: this.headers });
  private url: string = 'http://localhost:8080/employees';

  createEmployee(input: HTMLInputElement) {
    let employee: Iemployee = { lastName: input.value };
    return this.http.post(this.url, JSON.stringify(employee), this.options);
  }

  updateEmployee(inputEmp: Iemployee) {
    inputEmp['firstName'] = 'dharmesh';
    return this.http.patch(this.url, JSON.stringify(inputEmp), this.options);
  }

  deleteEmployee(inputEmp: Iemployee) {
    return this.http.delete(this.url + '/' + inputEmp['lastName'], this.options);

  }

  getAllList() {
    return this.http.get(this.url)
      .map((response: Response) => <Iemployee[]>response.json()).
      catch(this.getError);
  }

  getError(errorResponse: Response) {
    console.log(errorResponse.json());
    
    let statusCode=errorResponse.status;
    if(statusCode===404)
       return Observable.throw(new NotFoundError());
    else if(statusCode===400)
       return Observable.throw(new BadRequestError());
    return Observable.throw(new AppError(errorResponse));
  }
}
